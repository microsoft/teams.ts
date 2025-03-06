import { ITextBlock } from '@microsoft/spark.cards';
import { useMemo } from 'react';
import { MarkdownContent } from '../../MarkdownContent';

export interface TextBlockCardProps {
  readonly value: ITextBlock;
}

export default function TextBlockCard({ value }: TextBlockCardProps) {
  const html = useMemo(() => {
    return value.text;
  }, [value.text]);

  if (!value.text) {
    return <></>;
  }

  return <MarkdownContent content={html} />;
}
