import { FC, memo } from 'react';
import { mergeClasses } from '@fluentui/react-components';

import useJsonClasses from './Json.styles';

interface JsonKeyProps {
  readonly isArray: boolean;
  readonly keyName: string;
}

const JsonKey: FC<JsonKeyProps> = ({ isArray, keyName }) => {
  const classes = useJsonClasses();

  if (isArray) {
    return <span className={mergeClasses(classes.base, classes.arrayIndex)}>{keyName}</span>;
  }

  return <span className={mergeClasses(classes.base, classes.key)}>{keyName + ':'}</span>;
};

JsonKey.displayName = 'JsonKey';
export default memo(JsonKey);
