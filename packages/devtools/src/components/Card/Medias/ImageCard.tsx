import { FC, memo } from 'react';
import { IImage } from '@microsoft/teams.cards';

import { useImageCardClasses } from './Medias.styles';

export interface ImageCardProps {
  readonly value: IImage;
}

const ImageCard: FC<ImageCardProps> = memo(({ value }) => {
  const classes = useImageCardClasses();
  return (
    <img
      alt={value.altText || 'card image'}
      src={value.url}
      draggable={false}
      className={
        value.size && value.size === 'Stretch'
          ? classes.stretch
          : value.size && value.size !== 'Auto'
            ? classes[`width${value.size}`]
            : 'auto'
      }
    />
  );
});

ImageCard.displayName = 'ImageCard';

export default ImageCard;
