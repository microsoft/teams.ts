import { TextBlock } from '@microsoft/spark.cards';
import { useEffect, useState } from 'react';
import { MarkdownContent } from '../../MarkdownContent';

export interface TextBlockCardProps {
  readonly value: TextBlock;
}

export default function TextBlockCard({ value }: TextBlockCardProps) {
  const [html, setHtml] = useState<string>();

  useEffect(() => {
    setHtml(value.text);
  }, [value]);

  if (!html) {
    return <></>;
  }

  return <MarkdownContent content={html} />;
}
