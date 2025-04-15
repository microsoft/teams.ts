import { FC, memo } from 'react';
import { Button, mergeClasses, Tooltip } from '@fluentui/react-components';
import { MessageReaction } from '@microsoft/teams.api';

import { messageReactions } from '../../types/MessageReactionsEmoji';

import useChatMessageStyles from './ChatMessage.styles';

export interface MessageReactionButtonProps {
  reaction: MessageReaction;
  isFromUser: boolean;
  onReactionClick: () => void;
}

const MessageReactionButton: FC<MessageReactionButtonProps> = memo(
  ({ reaction, isFromUser, onReactionClick }) => {
    const classes = useChatMessageStyles();
    const reactionEmoji = messageReactions.find((r) => r.reaction === reaction.type)?.label;

    return (
      <Tooltip
        content={<span className={classes.tooltipText}>{reaction.type}</span>}
        relationship="label"
        positioning={{ align: 'center', position: 'below' }}
      >
        <Button
          className={mergeClasses(
            classes.reactionButton,
            isFromUser && classes.reactionFromUser
          ).trim()}
          onClick={onReactionClick}
          shape="circular"
          size="small"
        >
          {reactionEmoji}
        </Button>
      </Tooltip>
    );
  }
);

MessageReactionButton.displayName = 'MessageReactionButton';

export default MessageReactionButton;
