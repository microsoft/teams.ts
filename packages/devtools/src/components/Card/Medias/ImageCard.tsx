import { Image } from '@microsoft/spark.cards';
import { useImageCardClasses } from './Medias.styles';

export interface ImageCardProps {
  readonly value: Image;
}

export default function ImageCard({ value }: ImageCardProps) {
  const classes = useImageCardClasses();
  return (
    <img
      alt={value.altText || 'card image'}
      src={value.url}
      draggable={false}
      className={
        value.size && value.size === 'stretch'
          ? classes.stretch
          : value.size && value.size !== 'auto'
            ? classes[`width${value.size}`]
            : 'auto'
      }
    />
  );
}
