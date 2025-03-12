import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  createTableColumn,
  TableColumnDefinition,
  Tooltip,
} from '@fluentui/react-components';
import {
  CheckmarkFilled,
  Filter20Regular,
  Filter20Filled,
  ArrowDownFilled,
  ArrowUpFilled,
  FluentIcon,
  bundleIcon,
} from '@fluentui/react-icons/lib/fonts';

import { ActivityEvent } from '../../types/Event';
import { getActivityPath } from './getActivityPath';
import useActivitiesGridClasses from './ActivitiesGrid.styles';

const COLUMNS = [
  { id: 'type', label: 'Type' },
  { id: 'chat', label: 'Chat' },
  { id: 'from', label: 'From' },
  { id: 'timestamp', label: 'Timestamp' },
] as const;

interface ActivityGridColumnsProps {
  activityPaths: string[];
  params: URLSearchParams;
  handleTypeFilter: (path: string) => void;
}

import { KeyboardEvent as ReactKeyboardEvent } from 'react';

const handleKeyDown = (e: ReactKeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    target.click();
  }
};

const FilterIcon = bundleIcon(Filter20Filled as FluentIcon, Filter20Regular as FluentIcon);

const useActivityGridColumns = ({
  activityPaths,
  params,
  handleTypeFilter,
}: ActivityGridColumnsProps): TableColumnDefinition<ActivityEvent>[] => {
  const classes = useActivitiesGridClasses();
  const hasFilters = params.size > 0;

  return COLUMNS.map((column) =>
    createTableColumn<ActivityEvent>({
      columnId: column.id,
      renderHeaderCell: () => {
        if (column.id === 'type') {
          return (
            <Menu>
              <MenuTrigger>
                <MenuButton appearance="transparent">
                  Type
                  <FilterIcon className={hasFilters ? classes.filterOn : undefined} />
                </MenuButton>
              </MenuTrigger>
              <MenuPopover className={classes.menuPopover}>
                <MenuList>
                  {params.has('body.id') && (
                    <Tooltip content={`ID: ${params.get('body.id')}`} relationship="label">
                      <MenuItem
                        key="id-filter"
                        onKeyDown={handleKeyDown}
                        onClick={() => handleTypeFilter('')}
                        icon={<CheckmarkFilled />}
                        className={classes.menuItem}
                      >
                        ID: {params.get('body.id')}
                      </MenuItem>
                    </Tooltip>
                  )}
                  {activityPaths.map((path) => (
                    <Tooltip key={path} content={path} relationship="label">
                      <MenuItem
                        key={path}
                        onKeyDown={handleKeyDown}
                        onClick={() => handleTypeFilter(path)}
                        icon={params.has('path', path) ? <CheckmarkFilled /> : <></>}
                        className={classes.menuItem}
                      >
                        {path}
                      </MenuItem>
                    </Tooltip>
                  ))}
                </MenuList>
              </MenuPopover>
            </Menu>
          );
        }
        return column.label;
      },
      renderCell: (item) => {
        const path = getActivityPath(item.body);
        switch (column.id) {
          case 'type':
            return (
              <div>
                {item.type === 'activity.received' ? (
                  <ArrowDownFilled className={classes.directionIcon} role="presentation" />
                ) : (
                  <ArrowUpFilled className={classes.directionIcon} role="presentation" />
                )}
                <span>{path}</span>
              </div>
            );
          case 'chat':
            return <span>{item.body.conversation?.conversationType || '??'}</span>;
          case 'from':
            return item.body.from ? <span>{item.body.from.name}</span> : null;
          case 'timestamp':
            return <div>{new Date(item.sentAt).toLocaleString()}</div>;
          default:
            return null;
        }
      },
    })
  );
};

export default useActivityGridColumns;
