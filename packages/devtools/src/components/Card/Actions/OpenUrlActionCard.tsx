import { FC } from 'react';
import { Button, Tooltip } from '@fluentui/react-components';
import { IOpenUrlAction } from '@microsoft/spark.cards';

import { useOpenUrlActionCardClasses } from './Actions.styles';

export interface OpenUrlActionCardProps {
  readonly value: IOpenUrlAction;
}

const OpenUrlActionCard: FC<OpenUrlActionCardProps> = ({ value }) => {
  if (value.tooltip) {
    return (
      <Tooltip content={value.tooltip} relationship="label">
        <OpenUrlActionCardContent value={value} />
      </Tooltip>
    );
  }

  return <OpenUrlActionCardContent value={value} />;
};

const OpenUrlActionCardContent: FC<OpenUrlActionCardProps> = ({ value }) => {
  const classes = useOpenUrlActionCardClasses();

  // Determine which style variant to use based on action style
  const styleVariant =
    value.style === 'positive'
      ? classes.positiveStyle
      : value.style === 'destructive'
        ? classes.destructiveStyle
        : '';

  return (
    <Button
      appearance="transparent"
      onClick={() => window.open(value.url, '_blank')}
      className={styleVariant}
    >
      {value.iconUrl && <img alt="" src={value.iconUrl} draggable={false} />}
      {value.title}
    </Button>
  );
};

export default OpenUrlActionCard;
