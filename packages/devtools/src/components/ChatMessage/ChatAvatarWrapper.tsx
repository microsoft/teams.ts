import { FC } from 'react';
import { Avatar, makeStyles, tokens } from '@fluentui/react-components';
interface ChatAvatarProps {
  isConnected: boolean;
}

const useClasses = makeStyles({
  avatarSpacer: {
    margin: tokens.spacingHorizontalXXL,
  },
  avatar: {
    alignSelf: 'flex-start',
  },
});

const ChatAvatarWrapper: FC<ChatAvatarProps> = ({ isConnected }) => {
  const classes = useClasses();

  return (
    <div id="avatar" className={classes.avatar}>
      <div className={classes.avatarSpacer} />
      <Avatar name="User" badge={{ status: isConnected ? 'available' : 'offline' }} size={40} />
    </div>
  );
};

export default ChatAvatarWrapper;
