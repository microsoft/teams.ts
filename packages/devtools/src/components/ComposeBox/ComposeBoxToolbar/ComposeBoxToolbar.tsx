import { FC, memo, useCallback, useState } from 'react';
import {
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Toolbar,
  ToolbarButton,
  ToolbarProps,
  ToolbarDivider,
  Tooltip,
} from '@fluentui/react-components';
import {
  AttachRegular,
  DismissFilled,
  DismissRegular,
  bundleIcon,
  FluentIcon,
  SendFilled,
  SendRegular,
  CheckmarkFilled,
  CheckmarkRegular,
} from '@fluentui/react-icons/lib/fonts';
import { Attachment } from '@microsoft/spark.api';
import { useNavigate } from 'react-router';

import { useCardStore } from '../../../stores/CardStore';
import { isMacOS } from '../../../utils/get-os';

import { useCBToolbarClasses } from './ComposeBoxToolbar.styles';
import CancelEditDialog from './CancelEditDialog';
import PasteCardDialog from './PasteCardDialog';

interface ComposeBoxToolbarProps extends ToolbarProps {
  onSendMessage?: (attachments?: Attachment[]) => void;
  onAttachment: (attachment: Attachment) => void;
  hasContent?: boolean;
  editMode?: boolean;
  onEditCancel?: () => void;
  onEditComplete?: () => void;
  disabled?: boolean;
  draftMessage?: string;
  editingMessageId?: string;
}

const Dismiss = bundleIcon(DismissFilled as FluentIcon, DismissRegular as FluentIcon);
const Checkmark = bundleIcon(CheckmarkFilled as FluentIcon, CheckmarkRegular as FluentIcon);
const Send = bundleIcon(SendFilled as FluentIcon, SendRegular as FluentIcon);

const ComposeBoxToolbar: FC<ComposeBoxToolbarProps> = memo(
  ({
    onSendMessage,
    onAttachment,
    hasContent = false,
    editMode = false,
    onEditCancel,
    onEditComplete,
    draftMessage,
    disabled = false,
    editingMessageId = undefined,
    ...props
  }) => {
    const classes = useCBToolbarClasses();
    const navigate = useNavigate();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isConfirmCancelOpen, setIsConfirmCancelOpen] = useState(false);
    const { setDraftMessage, setEditingMessageId } = useCardStore();
    const isMac = isMacOS();

    const handleCancelDialogOpen = useCallback(() => {
      setIsConfirmCancelOpen(true);
    }, []);

    const handleCancelDialogClose = useCallback(() => {
      setIsConfirmCancelOpen(false);
    }, []);

    const handleConfirmCancel = useCallback(() => {
      if (onEditCancel) {
        onEditCancel();
      }
      handleCancelDialogClose();
    }, [onEditCancel, handleCancelDialogClose]);

    const handleNavigateToCards = useCallback(() => {
      setDraftMessage(draftMessage);
      if (editingMessageId) {
        setEditingMessageId(editingMessageId);
      }
      navigate('/cards', {
        state: {
          isEditing: editMode,
        },
      });
      setMenuOpen(false);
    }, [draftMessage, editMode, navigate, setDraftMessage, setEditingMessageId, editingMessageId]);

    const handleSend = useCallback(() => {
      if (onSendMessage && hasContent) {
        onSendMessage();
      }
    }, [onSendMessage, hasContent]);

    return (
      <Toolbar aria-label="Message actions" {...props} className={classes.toolbar}>
        <Menu open={menuOpen} onOpenChange={(_e, data) => setMenuOpen(data.open)}>
          <MenuTrigger disableButtonEnhancement>
            <Tooltip content="Attach file" relationship="label">
              <ToolbarButton
                aria-label="Attach file"
                icon={<AttachRegular />}
                className={classes.toolbarButton}
                disabled={disabled}
              />
            </Tooltip>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setIsDialogOpen(true);
                  setMenuOpen(false);
                }}
                disabled={disabled}
              >
                Paste custom JSON
              </MenuItem>
              <MenuItem onClick={handleNavigateToCards} disabled={disabled}>
                Open card designer
              </MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <PasteCardDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onSave={onAttachment}
          disabled={disabled}
        />
        <ToolbarDivider />
        {editMode ? (
          <>
            <Tooltip content="Cancel" relationship="label">
              <ToolbarButton
                data-tid="cancel-button"
                aria-label="Cancel"
                className={classes.toolbarButton}
                onClick={handleCancelDialogOpen}
                icon={<Dismiss tabIndex={-1} />}
                disabled={disabled}
              />
            </Tooltip>
            <Tooltip content={`Done (${isMac ? '⌘' : 'Ctrl'} Enter)`} relationship="label">
              <ToolbarButton
                data-tid="done-button"
                className={classes.toolbarButton}
                onClick={onEditComplete}
                icon={<Checkmark tabIndex={-1} />}
                disabled={disabled || !hasContent}
              />
            </Tooltip>
          </>
        ) : (
          <Tooltip content="Send message" relationship="label">
            <ToolbarButton
              data-tid="send-button"
              aria-label="Send message"
              className={classes.toolbarButton}
              onClick={handleSend}
              icon={<Send tabIndex={-1} />}
              disabled={disabled || !hasContent}
            />
          </Tooltip>
        )}
        <CancelEditDialog
          isOpen={isConfirmCancelOpen}
          onCancel={handleCancelDialogClose}
          onDiscard={handleConfirmCancel}
        />
      </Toolbar>
    );
  }
);

ComposeBoxToolbar.displayName = 'ComposeToolbar';
export default ComposeBoxToolbar;
