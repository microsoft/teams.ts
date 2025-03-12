import { IBadge } from '@microsoft/spark.cards';
import { mergeClasses, Tooltip } from '@fluentui/react-components';

import IconCard from './IconCard';
import { useBadgeCardStyles } from './Medias.styles';

export interface BadgeCardProps {
  readonly value: IBadge;
}

export default function BadgeCard({ value }: BadgeCardProps) {
  if (value.tooltip) {
    return (
      <Tooltip content={value.tooltip} relationship="label">
        <BadgeCardContent value={value} />
      </Tooltip>
    );
  }

  return <BadgeCardContent value={value} />;
}

function BadgeCardContent({ value }: BadgeCardProps) {
  const classes = useBadgeCardStyles();

  // Determine shape class
  const shapeClass = value.shape === 'circular' ? classes.circular : classes.rounded;

  // Determine size class
  let sizeClass = classes.sizeMedium;
  if (value.size === 'large') {
    sizeClass = classes.sizeLarge;
  } else if (value.size === 'extraLarge') {
    sizeClass = classes.sizeExtraLarge;
  }

  // Determine style class
  let styleClass = classes.styleDefault;
  switch (value.style) {
    case 'subtle':
      styleClass = classes.styleSubtle;
      break;
    case 'informative':
      styleClass = classes.styleInformative;
      break;
    case 'accent':
      styleClass = classes.styleAccent;
      break;
    case 'good':
      styleClass = classes.styleGood;
      break;
    case 'attention':
      styleClass = classes.styleAttention;
      break;
    case 'warning':
      styleClass = classes.styleWarning;
      break;
    default:
      styleClass = classes.styleDefault;
  }

  // Determine icon position
  const iconPositionClass = value.iconPosition === 'after' ? classes.iconAfter : classes.iconBefore;

  // Determine appearance class
  const appearanceClass = value.appearance === 'tint' ? classes.appearanceTint : '';

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
}
