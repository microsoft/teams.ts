import { FC, memo } from 'react';
import { mergeClasses, Tooltip } from '@fluentui/react-components';
import { IBadge } from '@microsoft/teams.cards';

import { useBadgeCardStyles } from './Medias.styles';
import IconCard from './IconCard';

export interface BadgeCardProps {
  readonly value: IBadge;
}

const BadgeCardContent: FC<BadgeCardProps> = memo(({ value }) => {
  const classes = useBadgeCardStyles();

  // Determine shape class
  const shapeClass = value.shape === 'Circular' ? classes.circular : classes.rounded;

  // Determine size class
  let sizeClass = classes.sizeMedium;
  if (value.size === 'Large') {
    sizeClass = classes.sizeLarge;
  } else if (value.size === 'ExtraLarge') {
    sizeClass = classes.sizeExtraLarge;
  }

  // Determine style class
  let styleClass = classes.styleDefault;
  switch (value.style) {
    case 'Subtle':
      styleClass = classes.styleSubtle;
      break;
    case 'Informative':
      styleClass = classes.styleInformative;
      break;
    case 'Accent':
      styleClass = classes.styleAccent;
      break;
    case 'Good':
      styleClass = classes.styleGood;
      break;
    case 'Attention':
      styleClass = classes.styleAttention;
      break;
    case 'Warning':
      styleClass = classes.styleWarning;
      break;
    default:
      styleClass = classes.styleDefault;
  }

  // Determine icon position
  const iconPositionClass = value.iconPosition === 'After' ? classes.iconAfter : classes.iconBefore;

  // Determine appearance class
  const appearanceClass = value.appearance === 'Tint' ? classes.appearanceTint : '';

  return (
    <div
      className={mergeClasses(
        classes.badgeContainer,
        iconPositionClass,
        shapeClass,
        sizeClass,
        styleClass,
        appearanceClass
      )}
    >
      {value.icon && (
        <IconCard
          className={classes.icon}
          value={{
            type: 'Icon',
            name: value.icon,
          }}
        />
      )}
      <span className={classes.text}>{value.text}</span>
    </div>
  );
});

const BadgeCard: FC<BadgeCardProps> = memo(({ value }) => {
  if (value.tooltip) {
    return (
      <Tooltip content={value.tooltip} relationship="label">
        <BadgeCardContent value={value} />
      </Tooltip>
    );
  }

  return <BadgeCardContent value={value} />;
});

BadgeCardContent.displayName = 'BadgeCardContent';
BadgeCard.displayName = 'BadgeCard';

export default BadgeCard;
