import { FC, memo, useCallback, useMemo } from 'react';
import {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  ToolbarGroup,
  ToolbarToggleButton,
  ToolbarProps,
  Tooltip,
} from '@fluentui/react-components';
import {
  bundleIcon,
  Edit16Filled,
  Edit16Regular,
  FluentIcon,
  MoreHorizontal16Filled,
  MoreHorizontal16Regular,
  SearchFilled,
  SearchRegular,
  TextQuote16Filled,
  TextQuote16Regular,
} from '@fluentui/react-icons/lib/fonts';
import { Message, MessageReaction, MessageReactionType, MessageUser } from '@microsoft/spark.api';
import { useNavigate } from 'react-router';

import { MessageReactionsEmoji } from '../../types/MessageReactionsEmoji';
import { useClasses } from './MessageActionsToolbar.styles';

interface MessageActionsProps extends ToolbarProps {
  // Whether the message is sent or received
  sent: boolean;
  value: Message;
  handleMessageReaction: (id: string, reaction: MessageReaction) => Promise<void>;
  reactionSender: MessageUser | undefined;
}

const MoreHorizontalIcon = bundleIcon(
  MoreHorizontal16Filled as FluentIcon,
  MoreHorizontal16Regular as FluentIcon
);
const EditIcon = bundleIcon(Edit16Filled as FluentIcon, Edit16Regular as FluentIcon);
const TextQuoteIcon = bundleIcon(TextQuote16Filled as FluentIcon, TextQuote16Regular as FluentIcon);
const SearchIcon = bundleIcon(SearchFilled as FluentIcon, SearchRegular as FluentIcon);

const MessageActionsToolbar: FC<MessageActionsProps> = memo(
  ({ sent, value, handleMessageReaction, reactionSender, ...props }) => {
    const classes = useClasses();
    const navigate = useNavigate();

    const createReactionActivity = useCallback(
      (type: MessageReactionType, user: MessageUser | undefined): MessageReaction => ({
        type,
        user,
        createdDateTime: new Date().toUTCString(),
      }),
      []
    );

    const handleReactionClick = useCallback(
      (reaction: MessageReactionType) => {
        const reactionActivity = createReactionActivity(reaction, reactionSender);
        handleMessageReaction(value.id, reactionActivity);
      },
      [createReactionActivity, handleMessageReaction, reactionSender, value.id]
    );

    const handleExamineClick = useCallback(() => {
      navigate({
        pathname: '/activities',
        search: `body.id=${value.id}`,
      });
    }, [navigate, value.id]);

    const reactionButtons = useMemo(
      () => (
        <ToolbarGroup>
          {MessageReactionsEmoji.map(({ label, reaction }) => (
            <Tooltip
              content={<span className={classes.tooltipText}>{reaction}</span>}
              relationship="label"
              key={`toolbar-${reaction}`}
            >
              <ToolbarToggleButton
                as="button"
                appearance="subtle"
                aria-label={reaction}
                className={classes.toolbarButton}
                size="small"
                name={reaction}
                value={reaction}
                onClick={() => handleReactionClick(reaction as MessageReactionType)}
              >
                {label}
              </ToolbarToggleButton>
            </Tooltip>
          ))}
        </ToolbarGroup>
      ),
      [classes.toolbarButton, classes.tooltipText, handleReactionClick]
    );

    const actionButtons = useMemo(
      () => (
        <>
          <Tooltip content="Examine activity" relationship="label">
            <ToolbarButton
              appearance="subtle"
              className={classes.toolbarButton}
              icon={<SearchIcon />}
              key="examine-activity"
              onClick={handleExamineClick}
            />
          </Tooltip>
          {!sent && (
            <Tooltip content="Reply with quote" relationship="label">
              <ToolbarButton
                appearance="subtle"
                className={classes.toolbarButton}
                key="reply-with-quote"
                icon={<TextQuoteIcon />}
                disabled={true}
              />
            </Tooltip>
          )}
          {sent && (
            <Tooltip content="Edit" relationship="label">
              <ToolbarButton
                aria-label="Edit"
                key="Edit"
                icon={<EditIcon />}
                className={classes.toolbarButton}
                disabled={true}
              />
            </Tooltip>
          )}
          <Tooltip content="More options" relationship="label">
            <ToolbarButton
              aria-label="More options"
              key="more-options"
              icon={<MoreHorizontalIcon />}
              className={classes.toolbarButton}
              disabled={true}
            />
          </Tooltip>
        </>
      ),
      [classes.toolbarButton, handleExamineClick, sent]
    );

    return (
      <Toolbar aria-label="Message actions" {...props}>
        {reactionButtons}
        <ToolbarDivider />
        {actionButtons}
      </Toolbar>
    );
  }
);

MessageActionsToolbar.displayName = 'MessageActionsToolbar';

export default MessageActionsToolbar;
