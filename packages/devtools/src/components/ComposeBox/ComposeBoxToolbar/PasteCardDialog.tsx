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
  ToastTitle,
  Tooltip,
  useArrowNavigationGroup,
  useModalAttributes,
  useToastController,
} from '@fluentui/react-components';
import { Attachment } from '@microsoft/teams.api';

import { useCardValidation } from '../../../hooks/useCardValidation';
import { isMacOS } from '../../../utils/get-os';

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
    const isMac = isMacOS();
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
            <ToastTitle>{error}</ToastTitle>
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
                  if (e.key === 'Enter' && (!isMac ? e.ctrlKey : e.metaKey)) {
                    e.preventDefault();
                    handleSave();
                  }
                  if (e.key === 'Escape') {
                    onClose();
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
