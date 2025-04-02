import { FC } from 'react';
import { Button, Tooltip } from '@fluentui/react-components';
import { IOpenUrlAction } from '@microsoft/spark.cards';

import useActionCardStyles from './Actions.styles';

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
  const classes = useActionCardStyles();

  // Determine which style variant to use based on action style
  const styleVariant =
    value.style === 'positive'
      ? classes.openUrlPositiveStyle
      : value.style === 'destructive'
        ? classes.openUrlDestructiveStyle
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

OpenUrlActionCard.displayName = 'OpenUrlActionCard';
OpenUrlActionCardContent.displayName = 'OpenUrlActionCardContent';

export default OpenUrlActionCard;
