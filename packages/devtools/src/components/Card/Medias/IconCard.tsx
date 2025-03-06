import { ComponentProps, Suspense, lazy } from 'react';
import { IIcon } from '@microsoft/spark.cards';
import { FluentIcon } from '@fluentui/react-icons/lib/fonts';
import { mergeClasses } from '@fluentui/react-components';
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

export default function IconCard(props: IconCardProps) {
  const { value, className } = props;
  const name = `${value.name}${value.style || 'Regular'}`;
  const Icon = loadIcon(name);
  const styles = useIconCardStyles();

  // Get the appropriate size class based on the icon size
  const sizeClass = value.size ? styles[value.size] : styles.Medium;

  return (
    <Suspense>
      <Icon className={mergeClasses(className, sizeClass)} />
    </Suspense>
  );
}
