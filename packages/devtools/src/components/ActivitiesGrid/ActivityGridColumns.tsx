import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  createTableColumn,
  TableColumnDefinition,
} from '@fluentui/react-components';
import {
  CheckmarkFilled,
  Filter20Regular,
  ArrowDownFilled,
  ArrowUpFilled,
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
const useActivityGridColumns = ({
  activityPaths,
  params,
  handleTypeFilter,
}: ActivityGridColumnsProps): TableColumnDefinition<ActivityEvent>[] => {
  const classes = useActivitiesGridClasses();

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
                  <Filter20Regular />
                </MenuButton>
              </MenuTrigger>
              <MenuPopover className={classes.menuPopover}>
                <MenuList>
                  {activityPaths.map((path) => (
                    <MenuItem
                      key={path}
                      onKeyDown={handleKeyDown}
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
