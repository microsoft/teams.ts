import { FC } from 'react';
import { ITextBlock } from '@microsoft/teams.cards';

import { MarkdownContent } from '../../MarkdownContent';

export interface TextBlockCardProps {
  readonly value: ITextBlock;
}

const TextBlockCard: FC<TextBlockCardProps> = ({ value }) => {
  if (!value.text) {
    return <></>;
  }

  return <MarkdownContent content={value.text} />;
};

TextBlockCard.displayName = 'TextBlockCard';

export default TextBlockCard;
