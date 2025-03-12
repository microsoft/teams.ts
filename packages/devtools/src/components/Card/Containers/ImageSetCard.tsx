import { IImageSet } from '@microsoft/spark.cards';
import ImageCard from '../Medias/ImageCard';
import { mergeClasses } from '@fluentui/react-components';

import useContainerClasses from './Containers.styles';

export interface ImageSetCardProps {
  readonly value: IImageSet;
}

export default function ImageSetCard({ value }: ImageSetCardProps) {
  const classes = useContainerClasses();
  return (
    <div className={mergeClasses(value.spacing ? classes[value.spacing] : classes.default)}>
      {value.images.map((image, index) => {
        return <ImageCard key={`image-${index}`} value={image} />;
      })}
    </div>
  );
}
