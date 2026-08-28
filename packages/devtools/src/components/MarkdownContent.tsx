import { FC, memo, useMemo } from 'react';
import { Link, makeStyles } from '@fluentui/react-components';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

const useStyles = makeStyles({
  preserveLineBreaks: {
    whiteSpace: 'pre-wrap',
    margin: 0,
  },
  root: {
    whiteSpace: 'pre-wrap',
  },
});

interface ChatMessageMarkdownProps {
  content: string;
}

export const MarkdownContent: FC<ChatMessageMarkdownProps> = memo(({ content }) => {
  const classes = useStyles();

  // Preprocess content to preserve all line breaks
  const processedContent = useMemo(() => {
    return (
      content
        // Add spaces and &nbsp; after each newline to force preservation
        .replace(/\n/g, '  \n&nbsp;')
        // Remove trailing &nbsp; if it exists
        .replace(/&nbsp;$/, '')
    );
  }, [content]);

  return (
    <div className={classes.root}>
      <Markdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          a: ({ children, className, href, title }) => (
            <Link
              as="a"
              className={className}
              href={href}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </Link>
          ),
          code: ({ children, className }) => <code className={className}>{children}</code>,
          p: ({ children }) => <p className={classes.preserveLineBreaks}>{children}</p>,
        }}
      >
        {processedContent}
      </Markdown>
    </div>
  );
});
