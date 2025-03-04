import { memo } from 'react';
import { Badge, Tooltip } from '@fluentui/react-components';

interface StatusBadgeProps {
  connected: boolean;
  classes: Record<string, string>;
}

const StatusBadge = memo(({ connected, classes }: StatusBadgeProps) => (
  <Tooltip content={connected ? 'Connected' : 'Disconnected'} relationship="description">
    <Badge
      data-tid="status badge"
      role="status"
      aria-label={connected ? 'Connected' : 'Disconnected'}
      color={connected ? 'success' : 'danger'}
      size="extra-small"
      className={classes.badge}
    >
      <div className={connected ? classes.pingAnimation : ''} />
    </Badge>
  </Tooltip>
));
export default StatusBadge;
StatusBadge.displayName = 'StatusBadge';
