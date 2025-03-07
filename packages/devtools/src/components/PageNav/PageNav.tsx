import { FC, memo } from 'react';

import DevtoolsBanner from '../DevtoolsBanner/DevtoolsBanner';
import PageNavButton from '../PageNavButton/PageNavButton';
import usePageNavClasses from './PageNav.styles';

interface PageNavProps {
  connected: boolean;
}

const PageNav: FC<PageNavProps> = memo(({ connected }) => {
  const classes = usePageNavClasses();
  return (
    <nav id="top-nav" className={classes.pageNavContainer} aria-label="Page navigation">
      <DevtoolsBanner connected={connected} />
      <div className={classes.navButtonContainer}>
        <PageNavButton to="/" iconType="chat" label="Chat" />
        <PageNavButton to="/cards" iconType="cards" label="Cards" />
        <PageNavButton to="/activities" iconType="activities" label="Activities" />

        {/* TODO: Add logs page back once implemented */}
        {/* <PageNavButton
          to="/logs"
          iconType="logs"
          label="Logs"
        /> */}
      </div>
    </nav>
  );
});

export default PageNav;
PageNav.displayName = 'PageNav';
