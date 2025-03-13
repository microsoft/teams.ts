import { FC, memo } from 'react';
import { Button, mergeClasses, Tooltip } from '@fluentui/react-components';
import { TriangleDownFilled, TriangleRightFilled } from '@fluentui/react-icons/lib/fonts';

import useJsonClasses from './Json.styles';

interface JsonExpandButtonProps {
  readonly isEmpty: boolean;
  readonly onClick: () => void;
  readonly isExpanded?: boolean;
  readonly isPrimitive?: boolean;
}

const JsonExpandButton: FC<JsonExpandButtonProps> = ({
  isEmpty,
  onClick,
  isExpanded,
  isPrimitive,
}) => {
  const classes = useJsonClasses();

  if (isPrimitive) {
    return <span className={classes.expandButton} />;
  }

  if (isEmpty) {
    return (
      <Tooltip content="Empty non-primitive value" relationship="label" positioning="before">
        <span className={mergeClasses(classes.expandButton, classes.expandButtonDisabled)}>
          <TriangleRightFilled />
        </span>
      </Tooltip>
    );
  }

  return (
    <Tooltip content={isExpanded ? 'Collapse' : 'Expand'} relationship="label" positioning="before">
      <Button
        appearance="transparent"
        className={classes.expandButton}
        onClick={onClick}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Collapse' : 'Expand'}
      >
        {isExpanded ? <TriangleDownFilled /> : <TriangleRightFilled />}
      </Button>
    </Tooltip>
  );
};

JsonExpandButton.displayName = 'JsonExpandButton';
export default memo(JsonExpandButton);
