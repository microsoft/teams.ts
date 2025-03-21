import { FC } from 'react';
import { Element } from '@microsoft/spark.cards';

import ActionSetCard from './Containers/ActionSetCard';
import ColumnSetCard from './Containers/ColumnSetCard';
import ContainerCard from './Containers/ContainerCard';
import FactSetCard from './Containers/FactSetCard';
import ImageSetCard from './Containers/ImageSetCard';
import BadgeCard from './Medias/BadgeCard';
import CodeBlockCard from './Medias/CodeBlockCard';
import IconCard from './Medias/IconCard';
import ImageCard from './Medias/ImageCard';
import TextBlockCard from './Medias/TextBlockCard';

export interface CardProps {
  readonly value: Element;
}

const Card: FC<CardProps> = ({ value }) => {
  switch (value.type) {
    case 'ActionSet':
      return <ActionSetCard value={value} />;
    case 'Container':
      return <ContainerCard value={value} />;
    case 'ColumnSet':
      return <ColumnSetCard value={value} />;
    case 'FactSet':
      return <FactSetCard value={value} />;
    case 'ImageSet':
      return <ImageSetCard value={value} />;
    case 'Badge':
      return <BadgeCard value={value} />;
    case 'CodeBlock':
      return <CodeBlockCard value={value} />;
    case 'Icon':
      return <IconCard value={value} />;
    case 'Image':
      return <ImageCard value={value} />;
    case 'TextBlock':
      return <TextBlockCard value={value} />;
  }

  return <>not found</>;
};

export default Card;
