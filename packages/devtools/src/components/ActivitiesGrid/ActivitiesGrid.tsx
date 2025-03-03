import { FC } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
} from '@fluentui/react-components';
import { CheckmarkFilled, Filter20Regular } from '@fluentui/react-icons/lib/fonts';

import { ActivityEvent } from '../../types/Event';
import { getPath } from '../../utils/get-path';

import useActivitiesGridClasses, { GRID_COLUMNS, ColumnId } from './ActivitiesGrid.styles';
import ActivityRow from './ActivityRow';
import { getActivityPath } from './utils';

const columnClassMap: Record<ColumnId, `column${Capitalize<ColumnId>}`> = {
  type: 'columnType',
  chat: 'columnChat',
  from: 'columnFrom',
  timestamp: 'columnTimestamp',
};

function filterActivities(event: ActivityEvent, params: URLSearchParams): boolean {
  for (const [key, filter] of params.entries()) {
    const value = getPath(
      {
        ...event,
        path: getActivityPath(event.body),
      },
      key
    );

    if (value != filter) {
      return false;
    }
  }
  return true;
}

function getColumnClassName(columnId: ColumnId): `column${Capitalize<ColumnId>}` {
  return columnClassMap[columnId];
}

interface ActivitiesGridProps {
  list: ActivityEvent[];
  selected: ActivityEvent | undefined;
  setSelected: (event: ActivityEvent | undefined) => void;
  params: URLSearchParams;
  setParams: (params: URLSearchParams) => void;
}

const ActivitiesGrid: FC<ActivitiesGridProps> = ({
  list,
  selected,
  setSelected,
  params,
  setParams,
}) => {
  const classes = useActivitiesGridClasses();
  const activityPaths = [...new Set(list.map((event) => getActivityPath(event.body)))].sort();

  const handleRowSelect = (event: ActivityEvent) => {
    if (selected && selected.id === event.id) {
      setSelected(undefined);
    } else {
      setSelected(event);
    }
  };

  const handleTypeFilter = (path: string) => {
    if (params.get('path') === path) {
      params.delete('path');
    } else {
      params.set('path', path);
    }
    setParams(params);
  };

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <thead className={classes.tableHeader}>
          <tr>
            <th scope="col" className={mergeClasses(classes.headerCell, classes.columnType)}>
              <Menu hasIcons>
                <MenuTrigger disableButtonEnhancement>
                  <MenuButton className={classes.menuButton}>
                    <span className={classes.typeLabel}>Type</span>
                    {activityPaths.length > 0 && <Filter20Regular />}
                  </MenuButton>
                </MenuTrigger>
                <MenuPopover className={classes.menuPopover}>
                  <MenuList>
                    {activityPaths.map((path) => (
                      <MenuItem
                        key={path}
                        onClick={() => handleTypeFilter(path)}
                        icon={params.has('path', path) ? <CheckmarkFilled /> : <></>}
                      >
                        {path}
                      </MenuItem>
                    ))}
                  </MenuList>
                </MenuPopover>
              </Menu>
            </th>
            {GRID_COLUMNS.slice(1).map((column) => (
              <th
                key={column.id}
                scope="col"
                className={mergeClasses(classes.headerCell, classes[getColumnClassName(column.id)])}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.length ? (
            list
              .slice()
              .reverse()
              .filter((event) => filterActivities(event, params))
              .map((event, index) => (
                <ActivityRow
                  key={event.id}
                  event={event}
                  index={index}
                  isSelected={selected?.id === event.id}
                  onSelect={handleRowSelect}
                />
              ))
          ) : (
            <tr>
              <td colSpan={4} className={mergeClasses(classes.cell, classes.emptyTable)}>
                No activities
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ActivitiesGrid;
