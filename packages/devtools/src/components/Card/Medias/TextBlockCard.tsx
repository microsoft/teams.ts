import { FC, useMemo } from 'react';
import { ITextBlock } from '@microsoft/spark.cards';

import { MarkdownContent } from '../../MarkdownContent';

export interface TextBlockCardProps {
  readonly value: ITextBlock;
}

const TextBlockCard: FC<TextBlockCardProps> = ({ value }) => {
  const html = useMemo(() => {
    return value.text;
  }, [value.text]);

  if (!value.text) {
    return <></>;
  }

  return <MarkdownContent content={html} />;
};

export default TextBlockCard;
