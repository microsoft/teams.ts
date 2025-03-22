import { ComponentProps, HTMLAttributes, forwardRef } from 'react';
import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';

import useScreenClasses from '../../screens/Screens.styles';

const useChatClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
    padding: tokens.spacingVerticalM,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
});

export type ChatProps = HTMLAttributes<HTMLDivElement> & ComponentProps<'div'>;

const Chat = forwardRef<HTMLDivElement, ChatProps>((props, ref) => {
  const { children, ...rest } = props;
  const screenClasses = useScreenClasses();
  const classes = useChatClasses();

  return (
    <div
      ref={ref}
      className={mergeClasses(classes.root, screenClasses.scrollbarContainer)}
      {...rest}
    >
      {children}
    </div>
  );
});

Chat.displayName = 'Chat';

export default Chat;
