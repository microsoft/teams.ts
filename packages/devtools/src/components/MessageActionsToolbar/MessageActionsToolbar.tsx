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

import { Message, MessageReactionType, MessageUser } from '@microsoft/spark.api';
import { useNavigate } from 'react-router';

import useConversationScope from '../../hooks/useConversationScope';
import { MessageActionUIPayload } from '../../types/MessageActionUI';
import { messageReactions } from '../../types/MessageReactionsEmoji';
import { EditIcon, SearchIcon } from './icons';
import useMessageActionsToolbarClasses from './MessageActionsToolbar.styles';
import MessageActionsMoreMenu from './MessageActionsMoreMenu';

interface MessageActionsProps extends ToolbarProps {
  // Whether the message is sent or received
  userSentMessage: boolean;
  value: Message;
  onMessageAction: (action: MessageActionUIPayload) => Promise<void>;
  reactionSender: MessageUser | undefined;
}

const MessageActionsToolbar: FC<MessageActionsProps> = memo(
  ({ userSentMessage, value, onMessageAction, reactionSender, ...props }) => {
    const classes = useMessageActionsToolbarClasses();
    const navigate = useNavigate();
    const conversationType = useConversationScope(value.id);

    const handleExamineClick = useCallback(() => {
      navigate({
        pathname: '/activities',
        search: `body.id=${value.id}`,
      });
    }, [navigate, value.id]);

    const handleReactionClick = useCallback(
      (reactionType: MessageReactionType) => {
        onMessageAction({
          id: value.id,
          type: 'messageReaction',
          reactionType,
          user: reactionSender,
        });
      },
      [onMessageAction, value.id, reactionSender]
    );

    const handleEdit = useCallback(() => {
      onMessageAction({
        id: value.id,
        type: 'messageUpdate',
      });
    }, [onMessageAction, value.id]);

    const reactionButtons = useMemo(
      () => (
        <ToolbarGroup>
          {messageReactions.map(({ label, reaction }) => (
            <Tooltip
              content={<span className={classes.tooltipText}>{reaction}</span>}
              relationship="label"
              key={`toolbar-${reaction}`}
            >
              <ToolbarToggleButton
                as="button"
                appearance="subtle"
                aria-label={`React with ${reaction}`}
                className={classes.toolbarButton}
                size="small"
                name={reaction}
                value={reaction}
                onClick={() => handleReactionClick(reaction)}
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
          {/* Not implemented yet */}
          {/* {userSentMessage && (
            <Tooltip content="Reply with quote" relationship="label">
              <ToolbarButton
                appearance="subtle"
                className={classes.toolbarButton}
                key="reply-with-quote"
                icon={<TextQuoteIcon />}
                disabled={true}
              />
            </Tooltip>
          )} */}
          {userSentMessage && conversationType === 'personal' && (
            <Tooltip content="Edit" relationship="label">
              <ToolbarButton
                aria-label="Edit"
                key="Edit"
                icon={<EditIcon />}
                className={classes.toolbarButton}
                disabled
                onClick={handleEdit}
              />
            </Tooltip>
          )}
          <MessageActionsMoreMenu
            conversationType={conversationType}
            userSentMessage={userSentMessage}
            onMessageAction={onMessageAction}
            value={value}
          />
        </>
      ),
      [
        classes.toolbarButton,
        conversationType,
        handleEdit,
        handleExamineClick,
        onMessageAction,
        userSentMessage,
        value,
      ]
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
