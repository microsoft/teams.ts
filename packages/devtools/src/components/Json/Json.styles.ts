import { makeStyles, tokens } from '@fluentui/react-components';

const useJsonClasses = makeStyles({
  pre: {
    fontSize: tokens.fontSizeBase200,
  },
});

const useJsonBoolClasses = makeStyles({
  bool: {
    color: tokens.colorPaletteRedForeground3,
  },
});

const useJsonNumberClasses = makeStyles({
  number: {
    color: tokens.colorPaletteGoldForeground2,
  },
});

const useJsonObjectClasses = makeStyles({
  object: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minHeight: '1.5rem',
    position: 'relative',
  },
  expandButton: {
    display: 'flex',
    padding: 0,
    minWidth: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.25rem',
  },
  keyContainer: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '1.5rem',
    justifyContent: 'flex-start',
  },
  key: {
    color: tokens.colorPaletteNavyForeground2,
    paddingRight: tokens.spacingHorizontalS,
    fontWeight: tokens.fontWeightSemibold,
    minWidth: '1.25rem',
  },
  iconPlaceholder: {
    width: '1rem',
    height: '1rem',
    marginLeft: '2px',
  },
  value: {
    fontSize: tokens.fontSizeBase200,
    opacity: 0.8,
    fontStyle: 'italic',
    wordBreak: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '500px',
  },
  expandedValue: {
    width: 'calc(100% - 1.5rem)',
    paddingLeft: tokens.spacingHorizontalS,
    borderLeft: `1px solid ${tokens.colorNeutralStroke2}`,
    margin: `${tokens.spacingVerticalXXS} 0`,
    marginLeft: tokens.spacingHorizontalS,
  },
  nestedLevel: {
    paddingLeft: tokens.spacingHorizontalS,
    width: '100%',
  },
  emptyObject: {
    fontSize: tokens.fontSizeBase200,
    opacity: 0.8,
    fontStyle: 'italic',
  },
  circularRef: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorPaletteRedForeground2,
    fontStyle: 'italic',
  },
  arrayContainer: {
    position: 'relative',
    paddingLeft: tokens.spacingHorizontalM,
  },
  arrayIndex: {
    color: tokens.colorPaletteDarkOrangeForeground2,
    fontSize: tokens.fontSizeBase200,
    opacity: 0.7,
    minWidth: '1.25rem',
    display: 'inline-block',
  },
});

const useJsonStringClasses = makeStyles({
  string: {
    color: tokens.colorPaletteLightTealForeground2,
  },
});

export {
  useJsonClasses,
  useJsonBoolClasses,
  useJsonNumberClasses,
  useJsonObjectClasses,
  useJsonStringClasses,
};
