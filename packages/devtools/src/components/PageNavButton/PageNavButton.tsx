import { FC } from 'react';
import { NavLink } from 'react-router';
import { mergeClasses } from '@fluentui/react-components';
import {
  Chat20Regular,
  Chat20Filled,
  CardUi20Regular,
  CardUi20Filled,
  Search20Regular,
  Search20Filled,
  DocumentBulletList20Regular,
  DocumentBulletList20Filled,
} from '@fluentui/react-icons/lib/fonts';

import { useClasses } from './PageNavButton.styles';

type IconType = 'chat' | 'cards' | 'activities' | 'logs';

const iconMap: Record<IconType, { default: JSX.Element; active: JSX.Element }> = {
  chat: { default: <Chat20Regular />, active: <Chat20Filled /> },
  cards: { default: <CardUi20Regular />, active: <CardUi20Filled /> },
  activities: {
    default: <Search20Regular />,
    active: <Search20Filled />,
  },
  logs: {
    default: <DocumentBulletList20Regular />,
    active: <DocumentBulletList20Filled />,
  },
};

interface PageNavButtonProps {
  to: string;
  iconType?: IconType;
  label: string;
}

const PageNavButton: FC<PageNavButtonProps> = ({ to, iconType, label }) => {
  const classes = useClasses();
  const icons = iconType ? iconMap[iconType] : undefined;

  return (
    <NavLink to={to} className={classes.pageNavButton}>
      {({ isActive }) => (
        <div
          role="presentation"
          className={mergeClasses(isActive ? classes.activeRoute : '', classes.linkWithIcon)}
        >
          {icons && (isActive ? icons.active : icons.default)}
          {label}
        </div>
      )}
    </NavLink>
  );
};

export default PageNavButton;
