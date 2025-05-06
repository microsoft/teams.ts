import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { IImageSet } from '@microsoft/teams.cards';

import ImageCard from '../Medias/ImageCard';

import useContainerClasses from './Containers.styles';

export interface ImageSetCardProps {
  readonly value: IImageSet;
}

const ImageSetCard: FC<ImageSetCardProps> = ({ value }) => {
  const classes = useContainerClasses();
  return (
    <div className={mergeClasses(classes[value.spacing ?? 'Default'])}>
      {value.images?.map((image, index) => {
        return <ImageCard key={`image-${index}`} value={image} />;
      })}
    </div>
  );
};

export default ImageSetCard;
