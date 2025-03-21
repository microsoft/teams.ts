import { FC, HTMLProps, memo } from 'react';
import { Link } from '@fluentui/react-components';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownLink: FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => (
  <Link {...props} target="_blank" rel="noopener noreferrer" />
);

const MarkdownCode: FC<HTMLProps<HTMLElement>> = ({ children, className, ...props }) => {
  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

interface ChatMessageMarkdownProps {
  content: string;
}

export const MarkdownContent: FC<ChatMessageMarkdownProps> = memo(({ content }) => {
  return (
    <Markdown
      children={content}
      remarkPlugins={[remarkGfm]}
      components={{
        a: MarkdownLink,
        code: MarkdownCode,
      }}
    />
  );
});
