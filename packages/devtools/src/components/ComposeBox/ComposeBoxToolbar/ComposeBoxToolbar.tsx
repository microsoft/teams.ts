import { FC, useState, useRef, useCallback } from 'react';
import {
  AttachRegular,
  bundleIcon,
  FluentIcon,
  SendFilled,
  SendRegular,
} from '@fluentui/react-icons/lib/fonts';
import {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
  Textarea,
  useId,
  useToastController,
  Toast,
  ToastTitle,
  ToastBody,
} from '@fluentui/react-components';
import type { ToolbarProps } from '@fluentui/react-components';
import { useClasses } from './ComposeBoxToolbar.styles';
import { useNavigate } from 'react-router';

interface ComposeBoxToolbarProps extends ToolbarProps {
  onSend?: (attachments?: any[]) => void;
  onAttachment?: (attachment: any) => void;
  hasContent?: boolean;
}

const Send = bundleIcon(SendFilled as FluentIcon, SendRegular as FluentIcon);

const ComposeBoxToolbar: FC<ComposeBoxToolbarProps> = ({
  onSend,
  onAttachment,
  hasContent = false,
  ...props
}) => {
  const classes = useClasses();
  const navigate = useNavigate();
  const { dispatchToast } = useToastController();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [jsonInput, setJsonInput] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogTitleId = useId('dialog-title');
  const textareaId = useId('json-input');
  const jsonInputRef = useRef<HTMLTextAreaElement>(null);

  const handleNavigateToCards = () => {
    navigate('/cards');
    setMenuOpen(false);
  };

  const handleSaveJson = useCallback(() => {
    try {
      const card = JSON.parse(jsonInput);

      if (onAttachment) {
        onAttachment({
          type: 'card',
          content: card,
        });
      } else if (onSend) {
        onSend([
          {
            contentType: 'application/vnd.microsoft.card.adaptive',
            content: card,
          },
        ]);
      }

      setIsDialogOpen(false);
    } catch (error) {
      dispatchToast(
        <Toast>
          <ToastTitle>Error</ToastTitle>
          <ToastBody>
            Failed to parse JSON: {error instanceof Error ? error.message : String(error)}
          </ToastBody>
        </Toast>,
        { intent: 'error' }
      );
    }
  }, [jsonInput, onAttachment, onSend, dispatchToast, setIsDialogOpen]);

  const handleSend = useCallback(() => {
    if (onSend && hasContent) {
      onSend();
    }
  }, [onSend, hasContent]);

  return (
    <Toolbar aria-label="New message actions" {...props} className={classes.toolbar}>
      <Menu open={menuOpen} onOpenChange={(_e, data) => setMenuOpen(data.open)}>
        <MenuTrigger disableButtonEnhancement>
          <ToolbarButton
            aria-label="Attach file"
            icon={<AttachRegular />}
            className={classes.toolbarButton}
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem
              onClick={() => {
                setIsDialogOpen(true);
                setMenuOpen(false);
              }}
            >
              Paste custom JSON
            </MenuItem>
            <MenuItem onClick={handleNavigateToCards}>Open card designer</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
      <Dialog open={isDialogOpen} onOpenChange={(_e, data) => setIsDialogOpen(data.open)}>
        <DialogSurface>
          <DialogBody>
            <DialogTitle id={dialogTitleId}>Paste Card JSON</DialogTitle>
            <DialogContent>
              <Textarea
                id={textareaId}
                ref={jsonInputRef}
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Paste your card JSON here..."
                className={classes.jsonTextarea}
              />
            </DialogContent>
            <DialogActions>
              <Button appearance="secondary" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button appearance="primary" onClick={handleSaveJson}>
                Attach Card
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
      <ToolbarDivider />
      <ToolbarButton
        data-tid="send-button"
        aria-label="Send message"
        className={classes.toolbarButton}
        onClick={handleSend}
        icon={<Send tabIndex={-1} />}
        disabled={!hasContent}
      />
    </Toolbar>
  );
};

export default ComposeBoxToolbar;
