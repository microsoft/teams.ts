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
                <MenuButton id="button" appearance="transparent">
                  Type
                  <FilterIcon className={hasFilters ? classes.filterOn : ''} />
                </MenuButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  {params.has('body.id') && (
                    <Tooltip content={`ID: ${params.get('body.id')}`} relationship="label">
                      <MenuItem
                        onClick={() => handleTypeFilter('')}
                        icon={<CheckmarkFilled />}
                        key="id-filter"
                      >
                        Activity Id
                      </MenuItem>
                    </Tooltip>
                  )}
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
