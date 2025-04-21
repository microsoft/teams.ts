import { ComponentProps, FC, Suspense, lazy, memo } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { FluentIcon } from '@fluentui/react-icons/lib/fonts';
import { IIcon } from '@microsoft/teams.cards';

import { useIconCardStyles } from './Medias.styles';

const loadIcon = (name: string) => {
  return lazy(() =>
    import('@fluentui/react-icons/fonts').then((module) => ({
      default: (module as any as Record<string, FluentIcon>)[name as string],
    }))
  );
};

export interface IconCardProps extends ComponentProps<'div'> {
  readonly value: IIcon;
}

const IconCard: FC<IconCardProps> = memo((props) => {
  const { value, className } = props;
  const name = `${value.name}${value.style || 'Regular'}`;
  const Icon = loadIcon(name);
  const classes = useIconCardStyles();

  // Get the appropriate size class based on the icon size
  const sizeClass = value.size ? classes[value.size] : classes.Medium;

  return (
    <Suspense>
      <Icon className={mergeClasses(classes.root, className, sizeClass)} />
    </Suspense>
  );
});

IconCard.displayName = 'IconCard';

export default IconCard;
