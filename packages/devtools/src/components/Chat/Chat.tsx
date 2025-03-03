import { HTMLAttributes, forwardRef } from 'react';

export interface ChatProps extends HTMLAttributes<HTMLDivElement> {}

const Chat = forwardRef<HTMLDivElement, ChatProps>(({ ...props }, ref) => {
  const { className, children, ...rest } = props;

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
});

export default Chat;
