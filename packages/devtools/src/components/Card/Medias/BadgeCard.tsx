import { Badge } from '@microsoft/spark.cards';
import { mergeClasses, Tooltip } from '@fluentui/react-components';
import IconCard from './IconCard';
import { useBadgeCardStyles } from './Medias.styles';

export interface BadgeCardProps {
  readonly value: Badge;
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
  const styles = useBadgeCardStyles();

  // Determine shape class
  const shapeClass = value.shape === 'circular' ? styles.circular : styles.rounded;

  // Determine size class
  let sizeClass = styles.sizeMedium;
  if (value.size === 'large') {
    sizeClass = styles.sizeLarge;
  } else if (value.size === 'extraLarge') {
    sizeClass = styles.sizeExtraLarge;
  }

  // Determine style class
  let styleClass = styles.styleDefault;
  switch (value.style) {
    case 'subtle':
      styleClass = styles.styleSubtle;
      break;
    case 'informative':
      styleClass = styles.styleInformative;
      break;
    case 'accent':
      styleClass = styles.styleAccent;
      break;
    case 'good':
      styleClass = styles.styleGood;
      break;
    case 'attention':
      styleClass = styles.styleAttention;
      break;
    case 'warning':
      styleClass = styles.styleWarning;
      break;
    default:
      styleClass = styles.styleDefault;
  }

  // Determine icon position
  const iconPositionClass = value.iconPosition === 'after' ? styles.iconAfter : styles.iconBefore;

  // Determine appearance class
  const appearanceClass = value.appearance === 'tint' ? styles.appearanceTint : '';

  return (
    <div
      className={mergeClasses(
        styles.badgeContainer,
        iconPositionClass,
        shapeClass,
        sizeClass,
        styleClass,
        appearanceClass
      )}
    >
      {value.icon && (
        <IconCard
          className={styles.icon}
          value={{
            type: 'Icon',
            name: value.icon,
          }}
        />
      )}
      <span className={styles.text}>{value.text}</span>
    </div>
  );
}
