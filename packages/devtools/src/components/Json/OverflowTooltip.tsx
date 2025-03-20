import { FC, memo } from 'react';
import { Tooltip } from '@fluentui/react-components';
import { useIsOverflowing } from '../../hooks/useIsOverflowing';

interface OverflowTooltipProps {
  readonly content: string;
  readonly children: JSX.Element;
}

const OverflowTooltip: FC<OverflowTooltipProps> = ({ content, children }) => {
  const { ref, isOverflowing } = useIsOverflowing();
  const child = { ...children, ref };

  if (!isOverflowing) {
    return child;
  }

  return (
    <Tooltip content={content} relationship="label">
      {child}
    </Tooltip>
  );
};

OverflowTooltip.displayName = 'OverflowTooltip';
export default memo(OverflowTooltip);
