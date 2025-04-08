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
import { CardAttachmentType, Attachment, cardAttachment } from '@microsoft/spark.api';

import useOperatingSystem from '../../../hooks/useOperatingSystem';
import { VALID_CARD_TYPES } from '../../../types/ValidCardTypes';

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

const PasteCardDialog: FC<PasteCardDialogProps> = memo(
  ({ isOpen, onClose, onSave, disabled = false }) => {
    const { isMac } = useOperatingSystem();
    const [jsonInput, setJsonInput] = useState('');
    const { dispatchToast } = useToastController();
    const saveButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);
    const navigationAttributes = useArrowNavigationGroup({ circular: true });
    const { modalAttributes } = useModalAttributes();

    const classes = useClasses();

    const handleSave = () => {
      if (!jsonInput.trim()) {
        dispatchToast(
          <Toast>
            <ToastTitle>Please enter JSON content.</ToastTitle>
          </Toast>,
          { intent: 'error' }
        );
        return;
      }

      try {
        const trimmedInput = jsonInput.trim();
        const parsedJson = JSON.parse(trimmedInput);

        // Silently convert AdaptiveCard to adaptive
        const type = (
          parsedJson?.type === 'AdaptiveCard' ? 'adaptive' : parsedJson?.type
        ) as CardAttachmentType;

        if (!type || !VALID_CARD_TYPES.includes(type)) {
          dispatchToast(
            <Toast>
              <ToastTitle>
                Invalid card type. Expected one of: {VALID_CARD_TYPES.join(', ')}
              </ToastTitle>
            </Toast>,
            { intent: 'error' }
          );
          return;
        }

        const attachment = cardAttachment(type, parsedJson);
        onSave(attachment);
        setJsonInput('');
        onClose();
      } catch (error) {
        dispatchToast(
          <Toast>
            <ToastTitle>
              {error instanceof SyntaxError
                ? `Invalid JSON format: ${error.message}`
                : 'Invalid card structure. Please verify the card format.'}
            </ToastTitle>
          </Toast>,
          { intent: 'error' }
        );
      }
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
