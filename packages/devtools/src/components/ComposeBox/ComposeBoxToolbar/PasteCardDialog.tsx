import { FC, memo, useRef, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  makeStyles,
  Textarea,
  Toast,
  ToastBody,
  ToastTitle,
  Tooltip,
  useArrowNavigationGroup,
  useModalAttributes,
  useToastController,
} from '@fluentui/react-components';
import { Attachment } from '@microsoft/spark.api';

import { useCardValidation } from '../../../hooks/useCardValidation';
import useOperatingSystem from '../../../hooks/useOperatingSystem';

/**
 * Props for the PasteCardDialog component
 * @interface PasteCardDialogProps
 * @property {boolean} isOpen - Controls the visibility of the dialog
 * @property {() => void} onClose - Callback function to handle dialog closure
 * @property {(attachment: Attachment) => void} onSave - Callback function when a valid card is saved
 * @property {boolean} [disabled] - Optional flag to disable input and buttons
 */
interface PasteCardDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (attachment: Attachment) => void;
  disabled?: boolean;
}

const useClasses = makeStyles({
  dialog: {
    gridTemplateColumns: '1fr',
  },
  textarea: {
    width: '100%',
  },
});

/**
 * A modal dialog component that allows users to paste and validate card JSON.
 * Supports various card types including Adaptive Cards, with built-in validation
 * and error handling. Provides keyboard shortcuts (Cmd/Ctrl + Enter) for saving.
 */
const PasteCardDialog: FC<PasteCardDialogProps> = memo(
  ({ isOpen, onClose, onSave, disabled = false }) => {
    const { isMac } = useOperatingSystem();
    const [jsonInput, setJsonInput] = useState('');
    const { dispatchToast } = useToastController();
    const saveButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);
    const navigationAttributes = useArrowNavigationGroup({ circular: true });
    const { modalAttributes } = useModalAttributes();
    const { validateCardInput } = useCardValidation();

    const classes = useClasses();

    const handleSave = () => {
      const { isValid, attachment, error, isUnsupportedType } = validateCardInput(jsonInput);

      if (!isValid || !attachment) {
        dispatchToast(
          <Toast>
            <ToastTitle>{isUnsupportedType ? 'Unsupported Card Type' : 'Error'}</ToastTitle>
            {isUnsupportedType && <ToastBody>This card type will not work in Teams.</ToastBody>}
            <ToastBody>{error}</ToastBody>
          </Toast>,
          { intent: isUnsupportedType ? 'warning' : 'error' }
        );
        return;
      }

      onSave(attachment);
      setJsonInput('');
      onClose();
    };

    return (
      <Dialog open={isOpen} {...modalAttributes}>
        <DialogSurface aria-describedby="dialog-description">
          <DialogBody className={classes.dialog}>
            <DialogTitle>Paste Card JSON</DialogTitle>
            <DialogContent id="dialog-description">
              <Textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Paste your card JSON here..."
                disabled={disabled}
                className={classes.textarea}
                rows={10}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                    e.preventDefault();
                    handleSave();
                  }
                }}
              />
            </DialogContent>
            <DialogActions {...navigationAttributes}>
              <Button ref={cancelButtonRef} onClick={onClose}>
                Cancel
              </Button>
              <Tooltip content={`Attach card (${isMac ? '⌘' : 'Ctrl'} Enter)`} relationship="label">
                <Button
                  ref={saveButtonRef}
                  appearance="primary"
                  onClick={handleSave}
                  disabled={disabled}
                >
                  Attach card
                </Button>
              </Tooltip>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    );
  }
);

PasteCardDialog.displayName = 'PasteCardDialog';
export default PasteCardDialog;
