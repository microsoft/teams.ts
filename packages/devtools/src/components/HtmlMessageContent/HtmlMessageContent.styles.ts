import { makeStyles, tokens } from "@fluentui/react-components";

export const useClasses = makeStyles({
  contentContainer: {
    "& div, & p, & pre, & blockquote": {
      margin: 0,
      marginBottom: tokens.spacingVerticalS,
    },
    "& img": {
      // this to align inline emojis with the text
      verticalAlign: "text-bottom",
    },
    "& > blockquote": {
      // this is used for quoted messages
      margin: `${tokens.spacingVerticalXS} 0`,
      padding: `${tokens.spacingVerticalS} ${tokens.spacingVerticalS} ${tokens.spacingVerticalS} ${tokens.spacingVerticalM}`,
      border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
      borderLeft: `${tokens.strokeWidthThicker} solid ${tokens.colorNeutralForeground4}`,
      background: tokens.colorNeutralBackground2,
      fontWeight: tokens.fontWeightRegular,
      marginBlock: "unset",

      // these are used for author name and timestamp
      "& > *:not(p)": {
        fontWeight: tokens.fontWeightRegular,
        fontSize: tokens.fontSizeBase200,
        lineHeight: tokens.lineHeightBase200,
        color: tokens.colorNeutralForeground1,
      },
      // add margin between adjacent elements - e.g between quote author name & timestamp
      "& > *:not(:last-child)": {
        marginRight: tokens.spacingHorizontalXS,
      },
    },
    "& > pre": {
      // this is used for the code blocks
      border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
      background: tokens.colorNeutralBackground2,

      "& > code": {
        fontFamily: tokens.fontFamilyMonospace,
        fontWeight: tokens.fontWeightRegular,
        fontSize: tokens.fontSizeBase200,
        lineHeight: tokens.lineHeightBase200,
      },
    },
  },
});
