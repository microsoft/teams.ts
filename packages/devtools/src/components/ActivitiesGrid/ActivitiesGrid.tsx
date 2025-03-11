import { FC, useMemo } from 'react';
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  mergeClasses,
  TableRowId,
} from '@fluentui/react-components';

import { ActivityEvent } from '../../types/Event';
import { getPath } from '../../utils/get-path';
import { getActivityPath } from './getActivityPath';
import useActivityGridColumns from './ActivityGridColumns';
import useActivitiesGridClasses from './ActivitiesGrid.styles';
import CustomDataGridHeaderCell from './CustomDataGridHeaderCell';

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

interface ActivitiesGridProps {
  activities: ActivityEvent[];
  selected?: ActivityEvent;
  handleRowSelect: (activity: ActivityEvent) => void;
  params: URLSearchParams;
  handleTypeFilter: (path: string) => void;
}

const ActivitiesGrid: FC<ActivitiesGridProps> = ({
  activities,
  selected,
  handleRowSelect,
  params,
  handleTypeFilter,
}) => {
  const classes = useActivitiesGridClasses();

  const activityPaths = useMemo(() => {
    const paths = new Set<string>();
    activities.forEach((activity) => {
      const path = getActivityPath(activity.body);
      if (path) {
        paths.add(path);
      }
    });
    return Array.from(paths).sort();
  }, [activities]);

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => filterActivities(activity, params));
  }, [activities, params]);

  const columns = useActivityGridColumns({
    activityPaths,
    params,
    handleTypeFilter,
  });

  return (
    <div className={classes.gridContainer}>
      <DataGrid
        items={filteredActivities}
        columns={columns}
        className={classes.grid}
        selectionMode="single"
        getRowId={(item) => item.id as TableRowId}
        focusMode="composite"
        selectedItems={selected ? [selected.id] : []}
        onSelectionChange={(_e, data) => {
          const selectedId = Array.from(data.selectedItems)[0] as string;
          const selectedItem = filteredActivities.find((item) => item.id === selectedId);
          if (selectedItem) {
            handleRowSelect(selectedItem);
          }
        }}
        aria-label="Activities list"
      >
        <DataGridHeader className={classes.header}>
          <DataGridRow
            selectionCell={{
              'aria-hidden': true,
              tabIndex: -1,
              className: classes.hideSelection,
            }}
          >
            {({ renderHeaderCell, columnId }) => {
              return columnId === 'type' ? (
                <CustomDataGridHeaderCell className={classes.cell} focusMode="group">
                  {renderHeaderCell()}
                </CustomDataGridHeaderCell>
              ) : (
                <DataGridHeaderCell
                  className={
                    columnId !== 'timestamp'
                      ? classes.cell
                      : mergeClasses(classes.cell, classes.timestamp)
                  }
                >
                  {renderHeaderCell()}
                </DataGridHeaderCell>
              );
            }}
          </DataGridRow>
        </DataGridHeader>
        {filteredActivities.length > 0 ? (
          <DataGridBody<ActivityEvent>>
            {({ item }) => (
              <DataGridRow
                className={mergeClasses(
                  classes.row,
                  filteredActivities.indexOf(item) % 2 === 0 ? classes.evenRow : classes.oddRow,
                  selected?.id === item.id && classes.selectedRow,
                  item.type === 'activity.error' && classes.errorRow
                )}
                aria-selected={selected?.id === item.id}
                selectionCell={{ radioIndicator: { 'aria-label': 'Select row' } }}
              >
                {({ renderCell, columnId }) => (
                  <DataGridCell
                    className={
                      columnId !== 'timestamp'
                        ? classes.cell
                        : mergeClasses(classes.cell, classes.timestamp)
                    }
                  >
                    {renderCell(item)}
                  </DataGridCell>
                )}
              </DataGridRow>
            )}
          </DataGridBody>
        ) : (
          <div className={classes.empty}>No activities to display.</div>
        )}
      </DataGrid>
    </div>
  );
};

export default ActivitiesGrid;
ActivitiesGrid.displayName = 'ActivitiesGrid';
