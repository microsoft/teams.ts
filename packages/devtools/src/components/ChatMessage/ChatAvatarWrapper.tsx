import { FC } from 'react';
import { Avatar, makeStyles, mergeClasses, tokens } from '@fluentui/react-components';

interface ChatAvatarProps {
  id: string;
  isConnected: boolean;
}

const useClasses = makeStyles({
  avatarSpacer: {
    marginTop: tokens.spacingVerticalXXL,
  },
  avatar: {
    alignSelf: 'flex-start',
  },
});

const ChatAvatarWrapper: FC<ChatAvatarProps> = ({ id, isConnected }) => {
  const classes = useClasses();

  return (
    <div id={id} className={mergeClasses(classes.avatar, classes.avatarSpacer)}>
      <Avatar name="User" badge={{ status: isConnected ? 'available' : 'offline' }} size={40} />
    </div>
  );
};

ChatAvatarWrapper.displayName = 'ChatAvatarWrapper';
export default ChatAvatarWrapper;
