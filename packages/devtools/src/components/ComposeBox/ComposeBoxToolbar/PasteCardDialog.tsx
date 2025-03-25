import { FC, memo, useRef, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  Textarea,
  Toast,
  ToastTitle,
  useArrowNavigationGroup,
  useModalAttributes,
  useToastController,
} from '@fluentui/react-components';
import { CardAttachmentType, Attachment, cardAttachment } from '@microsoft/spark.api';

interface PasteCardDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (attachment: Attachment) => void;
  disabled?: boolean;
}

const VALID_CARD_TYPES = [
  'adaptive',
  'animation',
  'audio',
  'hero',
  'oauth',
  'signin',
  'thumbnail',
  'video',
] as const satisfies readonly CardAttachmentType[];

const PasteCardDialog: FC<PasteCardDialogProps> = memo(
  ({ isOpen, onClose, onSave, disabled = false }) => {
    const [jsonInput, setJsonInput] = useState('');
    const { dispatchToast } = useToastController();
    const saveButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);
    const navigationAttributes = useArrowNavigationGroup({ circular: true });
    const { modalAttributes } = useModalAttributes();

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
        const parsedJson = JSON.parse(jsonInput);

        if (!parsedJson?.type || !VALID_CARD_TYPES.includes(parsedJson.type)) {
          throw new Error('Invalid card type');
        }

        const type = parsedJson.type as CardAttachmentType;
        const attachment = cardAttachment(type, parsedJson);
        onSave(attachment);
        setJsonInput('');
        onClose();
      } catch (error) {
        dispatchToast(
          <Toast>
            <ToastTitle>
              {error instanceof SyntaxError
                ? 'Invalid JSON format. Please check your input.'
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
          <DialogBody>
            <DialogTitle>Paste Card JSON</DialogTitle>
            <DialogContent id="dialog-description">
              <Textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Paste your card JSON here..."
                disabled={disabled}
              />
            </DialogContent>
            <DialogActions {...navigationAttributes}>
              <Button ref={cancelButtonRef} appearance="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button
                ref={saveButtonRef}
                appearance="primary"
                onClick={handleSave}
                disabled={disabled}
              >
                Attach card
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    );
  }
);

PasteCardDialog.displayName = 'PasteCardDialog';
export default PasteCardDialog;
