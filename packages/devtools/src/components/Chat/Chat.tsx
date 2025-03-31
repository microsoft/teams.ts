import { ComponentProps, HTMLAttributes, forwardRef } from 'react';
import { makeStyles, tokens } from '@fluentui/react-components';

const useChatClasses = makeStyles({
  root: {
    gap: tokens.spacingVerticalS,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
  },
});

type ChatProps = HTMLAttributes<HTMLDivElement> & ComponentProps<'div'>;

const Chat = forwardRef<HTMLDivElement, ChatProps>((props, ref) => {
  const { children, ...rest } = props;
  const classes = useChatClasses();

  return (
    <div ref={ref} className={classes.root} {...rest}>
      {children}
    </div>
  );
});

Chat.displayName = 'Chat';

export default Chat;
