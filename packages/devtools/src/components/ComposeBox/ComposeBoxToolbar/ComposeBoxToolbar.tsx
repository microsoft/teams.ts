import { FC, useState, useRef, useCallback, memo } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Textarea,
  Toast,
  ToastTitle,
  useToastController,
  Toolbar,
  ToolbarButton,
  ToolbarProps,
  ToolbarDivider,
  useId,
  Tooltip,
} from '@fluentui/react-components';
import {
  AttachRegular,
  bundleIcon,
  FluentIcon,
  SendFilled,
  SendRegular,
} from '@fluentui/react-icons/lib/fonts';
import { Card } from '@microsoft/spark.cards';
import { useNavigate } from 'react-router';

import { useCardStore } from '../../../stores/CardStore';
import Logger from '../../Logger/Logger';

import { useCBToolbarClasses } from './ComposeBoxToolbar.styles';

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
  const classes = useCBToolbarClasses();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [jsonInput, setJsonInput] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogTitleId = useId('dialog-title');
  const textareaId = useId('json-input');
  const jsonInputRef = useRef<HTMLTextAreaElement>(null);
  const { currentCard } = useCardStore();
  const { dispatchToast } = useToastController();
  const childLog = Logger.child('ComposeBoxToolbar');

  const handleNavigateToCards = () => {
    navigate('/cards');
    setMenuOpen(false);
  };

  const handleSaveJson = useCallback(() => {
    try {
      const card = JSON.parse(jsonInput) as Card;

      if (onAttachment) {
        onAttachment({
          type: 'card',
          content: card,
          contentType: 'application/vnd.microsoft.card.adaptive',
        });
      } else if (onSend) {
        onSend([
          {
            type: 'card',
            content: card,
            contentType: 'application/vnd.microsoft.card.adaptive',
          },
        ]);
      }

      setIsDialogOpen(false);
      setJsonInput('');
    } catch (error) {
      childLog.debug('Failed to parse JSON:', error);
      dispatchToast(
        <Toast>
          <ToastTitle>Failed to parse JSON. Please check your input and try again.</ToastTitle>
        </Toast>,
        { intent: 'error' }
      );
    }
  }, [childLog, jsonInput, onAttachment, onSend, dispatchToast]);

  const handleSend = useCallback(() => {
    if (onSend) {
      if (currentCard) {
        onSend([
          {
            contentType: 'application/vnd.microsoft.card.adaptive',
            content: currentCard,
          },
        ]);
      } else if (hasContent) {
        onSend();
      }
    }
  }, [onSend, hasContent, currentCard]);

  return (
    <Toolbar aria-label="New message actions" {...props} className={classes.toolbar}>
      <Menu open={menuOpen} onOpenChange={(_e, data) => setMenuOpen(data.open)}>
        <MenuTrigger disableButtonEnhancement>
          <Tooltip content="Attach file" relationship="label">
            <ToolbarButton
              aria-label="Attach file"
              icon={<AttachRegular />}
              className={classes.toolbarButton}
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
                Attach card
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
      <ToolbarDivider />
      <Tooltip content="Send message" relationship="label">
        <ToolbarButton
          data-tid="send-button"
          aria-label="Send message"
          className={classes.toolbarButton}
          onClick={handleSend}
          icon={<Send tabIndex={-1} />}
          disabled={!hasContent}
        />
      </Tooltip>
    </Toolbar>
  );
};

export default memo(ComposeBoxToolbar);
