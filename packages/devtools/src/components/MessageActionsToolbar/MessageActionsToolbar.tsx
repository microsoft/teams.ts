import { FC, KeyboardEvent } from 'react';
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
  SearchRegular,
  SearchFilled,
  TextQuote16Filled,
  TextQuote16Regular,
} from '@fluentui/react-icons/lib/fonts';
import { Message, MessageReaction, MessageUser } from '@microsoft/spark.api';
import { MessageReactionType } from '@microsoft/spark.api';
import { useNavigate } from 'react-router';

import { useClasses } from './MessageActionsToolbar.styles';

interface MessageActionsProps extends ToolbarProps {
  // Whether the message is sent or received
  sent: boolean;
  value: Message;
  handleMessageReaction: (id: string, reaction: MessageReaction) => Promise<void>;
  reactionSender: MessageUser | undefined;
}

export const MessageReactionsEmoji: Array<{
  readonly label: string;
  readonly reaction: MessageReactionType;
}> = [
  { label: '👍', reaction: 'like' },
  { label: '❤️', reaction: 'heart' },
  { label: '😆', reaction: 'laugh' },
  { label: '😮', reaction: 'surprised' },
];

const MoreHorizontalIcon = bundleIcon(
  MoreHorizontal16Filled as FluentIcon,
  MoreHorizontal16Regular as FluentIcon
);
const EditIcon = bundleIcon(Edit16Filled as FluentIcon, Edit16Regular as FluentIcon);
const TextQuoteIcon = bundleIcon(TextQuote16Filled as FluentIcon, TextQuote16Regular as FluentIcon);
const SearchIcon = bundleIcon(SearchFilled as FluentIcon, SearchRegular as FluentIcon);

const MessageActionsToolbar: FC<MessageActionsProps> = ({
  sent,
  value,
  handleMessageReaction,
  reactionSender,
  ...props
}) => {
  const classes = useClasses();
  const navigate = useNavigate();
  const createReactionActivity = (
    type: MessageReactionType,
    user: MessageUser | undefined
  ): MessageReaction => {
    return {
      type,
      user,
      createdDateTime: new Date().toUTCString(),
    };
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    id: string,
    type: MessageReactionType
  ) => {
    if (event.key === 'Enter') {
      const reactionActivity = createReactionActivity(type, reactionSender);
      handleMessageReaction(id, reactionActivity);
    }
  };

  return (
    <Toolbar aria-label="Message actions" {...props}>
      <ToolbarGroup>
        {MessageReactionsEmoji.map(({ label, reaction }) => (
          <Tooltip
            content={<span className={classes.tooltipText}>{reaction}</span>}
            relationship="label"
            key={reaction}
          >
            <ToolbarToggleButton
              as="button"
              appearance="subtle"
              aria-label={reaction}
              className={classes.toolbarButton}
              size="small"
              name={reaction}
              value={reaction}
              onClick={(_e) => {
                const reactionActivity = createReactionActivity(reaction, reactionSender);
                handleMessageReaction(value.id, reactionActivity);
              }}
              onKeyDown={(event) => handleKeyDown(event, value.id, reaction)}
              tabIndex={0}
            >
              {label}
            </ToolbarToggleButton>
          </Tooltip>
        ))}
      </ToolbarGroup>
      <ToolbarDivider />
      <Tooltip content="Examine activity" relationship="label">
        <ToolbarButton
          appearance="subtle"
          className={classes.toolbarButton}
          icon={<SearchIcon />}
          key="examine-activity"
          onClick={() => {
            navigate({
              pathname: '/activities',
              search: `body.id=${value.id}`,
            });
          }}
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
    </Toolbar>
  );
};

export default MessageActionsToolbar;
