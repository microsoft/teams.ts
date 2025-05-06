import { makeStyles, tokens } from '@fluentui/react-components';

export const useImageCardClasses = makeStyles({
  auto: {
    width: 'auto',
  },
  widthSmall: {
    width: '4rem',
  },
  widthMedium: {
    width: '8rem',
  },
  widthLarge: {
    width: '12rem',
  },
  stretch: {
    objectFit: 'cover',
  },
});

export const useIconCardStyles = makeStyles({
  root: {
    display: 'flex',
  },
  xxSmall: {
    fontSize: tokens.fontSizeBase200,
  },
  xSmall: {
    fontSize: tokens.fontSizeBase300,
  },
  Small: {
    fontSize: tokens.fontSizeBase400,
  },
  Standard: {
    fontSize: tokens.fontSizeBase600,
  },
  Medium: {
    fontSize: tokens.fontSizeBase600,
  },
  Large: {
    fontSize: tokens.fontSizeHero700,
  },
  xLarge: {
    fontSize: tokens.fontSizeHero800,
  },
  xxLarge: {
    fontSize: tokens.fontSizeHero900,
  },
});

export const useBadgeCardStyles = makeStyles({
  badgeContainer: {
    display: 'inline-flex',
    padding: `${tokens.spacingVerticalXXS}, ${tokens.spacingHorizontalS}`,
    gap: tokens.spacingHorizontalXXS,
    border: '1px solid transparent',
  },
  iconBefore: {
    flexDirection: 'row',
  },
  iconAfter: {
    flexDirection: 'row-reverse',
  },
  circular: {
    borderRadius: tokens.borderRadiusCircular,
  },
  rounded: {
    borderRadius: tokens.borderRadiusMedium,
  },
  sizeMedium: {
    fontSize: tokens.fontSizeBase600,
  },
  sizeLarge: {
    fontSize: tokens.fontSizeHero700,
  },
  sizeExtraLarge: {
    fontSize: tokens.fontSizeHero800,
  },
  styleDefault: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    color: tokens.colorNeutralForeground1,
  },
  styleSubtle: {
    backgroundColor: tokens.colorSubtleBackground,
    border: `1px solid ${tokens.colorSubtleBackground}`,
    color: tokens.colorNeutralForeground3,
  },
  styleInformative: {
    backgroundColor: tokens.colorPaletteBlueBackground2,
    border: `1px solid ${tokens.colorPaletteBlueBackground2}`,
    color: tokens.colorNeutralForeground1,
  },
  styleAccent: {
    backgroundColor: tokens.colorBrandBackground,
    border: `1px solid ${tokens.colorBrandStroke1}`,
    color: tokens.colorNeutralForeground1,
  },
  styleGood: {
    backgroundColor: tokens.colorPaletteGreenBackground1,
    border: `1px solid ${tokens.colorPaletteGreenBorder1}`,
    color: tokens.colorNeutralForeground1,
  },
  styleAttention: {
    backgroundColor: tokens.colorPaletteRedBackground1,
    border: `1px solid ${tokens.colorPaletteRedBorder1}`,
    color: tokens.colorNeutralForeground1,
  },
  styleWarning: {
    backgroundColor: tokens.colorPaletteYellowBackground1,
    border: `1px solid ${tokens.colorPaletteYellowBorder1}`,
    color: tokens.colorNeutralForeground1,
  },
  appearanceTint: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: tokens.colorNeutralForeground2,
  },
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  text: {
    marginLeft: tokens.spacingHorizontalXXS,
    marginRight: tokens.spacingHorizontalXXS,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export const useCodeBlockStyles = makeStyles({
  codeBlock: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    padding: '0.5rem',
    borderRadius: tokens.borderRadiusMedium,
    fontFamily: 'monospace',
    overflowX: 'auto',
  },
});
