import { makeStyles, tokens } from "@fluentui/react-components";

const useCardsScreenClasses = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100%",
    width: "100%",
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: tokens.spacingHorizontalS,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  iframe: {
    border: "0px solid transparent",
  },
});

export default useCardsScreenClasses;
