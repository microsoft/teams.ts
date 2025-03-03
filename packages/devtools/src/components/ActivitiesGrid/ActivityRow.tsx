import { FC } from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { ArrowDownFilled, ArrowUpFilled } from '@fluentui/react-icons/lib/fonts';

import { ActivityEvent } from '../../types/Event';
import useActivitiesGridClasses from './ActivitiesGrid.styles';
import { getActivityPath } from './utils';

interface ActivityRowProps {
  event: ActivityEvent;
  index: number;
  isSelected: boolean;
  onSelect: (event: ActivityEvent) => void;
}

const ActivityRow: FC<ActivityRowProps> = ({ event, index, isSelected, onSelect }) => {
  const classes = useActivitiesGridClasses();
  const path = getActivityPath(event.body);

  return (
    <tr
      className={mergeClasses(
        classes.tableRow,
        index % 2 === 0 ? classes.evenRow : classes.oddRow,
        isSelected ? classes.selectedRow : '',
        event.type === 'activity.error' ? classes.errorRow : ''
      )}
      onClick={() => onSelect(event)}
    >
      <td className={classes.cell}>
        <div className={classes.pathContainer}>
          {event.type === 'activity.received' ? (
            <ArrowDownFilled className={classes.icon} />
          ) : (
            <ArrowUpFilled className={classes.icon} />
          )}
          <span className={classes.pathText}>{path}</span>
        </div>
      </td>
      <td className={classes.cell}>
        <span className={classes.conversationType}>
          {event.body.conversation?.conversationType || '??'}
        </span>
      </td>
      <td className={classes.cell}>
        {!!event.body.from && <span className={classes.fromName}>{event.body.from.name}</span>}
      </td>
      <td className={classes.cell}>
        <div className={classes.timestampContainer}>
          {new Date(event.sentAt).toLocaleString()}
          {event.type === 'activity.sending' && <div className={classes.spinner} />}
        </div>
      </td>
    </tr>
  );
};

export default ActivityRow;
