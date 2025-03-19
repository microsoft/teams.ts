import { FC, memo } from 'react';
import {
  Menu,
  MenuItem,
  ToolbarButton,
  Tooltip,
  MenuTrigger,
  MenuList,
  MenuPopover,
} from '@fluentui/react-components';
import { FluentIcon } from '@fluentui/react-icons';
import { Message } from '@microsoft/spark.api';

import { ConversationType } from '../../types/ConversationType';
import { MessageActionUIPayload } from '../../types/MessageActionUI';
import { DeleteIcon, MoreHorizontalIcon } from './icons';
import useMessageActionsToolbarClasses from './MessageActionsToolbar.styles';

interface MessageActionsMoreMenuProps {
  conversationType: ConversationType;
  onMessageAction: (action: MessageActionUIPayload) => Promise<void>;
  userSentMessage: boolean;
  value: Message;
}

type MenuItemContent = {
  label: string;
  icon: FluentIcon;
  handleAction: () => void;
};

const MessageActionsMoreMenu: FC<MessageActionsMoreMenuProps> = memo(
  ({ onMessageAction, userSentMessage: isUserMessage, value }) => {
    const classes = useMessageActionsToolbarClasses();
    const menuList: MenuItemContent[] = [];

    // TODO: Implement reply with quote
    // menuList.push({
    //   label: 'Reply with quote',
    //   icon: TextQuoteIcon,
    //   handleAction: () => onMessageAction(value.id, { type: 'replyWithQuote' }),
    // });

    if (isUserMessage) {
      menuList.push({
        label: 'Delete',
        icon: DeleteIcon,
        handleAction: () => {
          onMessageAction({ id: value.id, type: 'messageDelete' });
        },
      });
    }

    return (
      <Menu>
        <MenuTrigger>
          <Tooltip content="More options" relationship="label">
            <ToolbarButton
              aria-label="More options"
              key="more-options"
              icon={<MoreHorizontalIcon />}
              className={classes.toolbarButton}
            />
          </Tooltip>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            {menuList.map((menuItem) => (
              <MenuItem
                aria-label={menuItem.label}
                key={menuItem.label}
                icon={<menuItem.icon />}
                onClick={menuItem.handleAction}
                disabled={menuItem.label === 'Reply with quote'}
              >
                {menuItem.label}
              </MenuItem>
            ))}
          </MenuList>
        </MenuPopover>
      </Menu>
    );
  }
);

MessageActionsMoreMenu.displayName = 'MessageActionsMoreMenu';
export default MessageActionsMoreMenu;
