import { FC, memo, useRef } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  useArrowNavigationGroup,
  useModalAttributes,
} from '@fluentui/react-components';

interface CancelEditProps {
  isOpen: boolean;
  onCancel: () => void;
  onDiscard: () => void;
}

const CancelEditDialog: FC<CancelEditProps> = memo(({ isOpen, onCancel, onDiscard }) => {
  const discardButtonRef = useRef<HTMLButtonElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const navigationAttributes = useArrowNavigationGroup({ circular: true });
  const { modalAttributes } = useModalAttributes();

  return (
    <Dialog open={isOpen} {...modalAttributes}>
      <DialogSurface aria-describedby="dialog-description">
        <DialogBody>
          <DialogTitle>Discard draft?</DialogTitle>
          <DialogContent id="dialog-description">Do you want to discard this draft?</DialogContent>
          <DialogActions {...navigationAttributes}>
            <Button ref={cancelButtonRef} onClick={onCancel} autoFocus>
              Keep editing
            </Button>
            <Button ref={discardButtonRef} appearance="primary" onClick={onDiscard}>
              Discard
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
});

CancelEditDialog.displayName = 'CancelEdit';
export default CancelEditDialog;
