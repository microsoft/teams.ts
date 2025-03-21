import { FC, memo, useCallback } from 'react';
import { Badge, Text } from '@fluentui/react-components';
import { useNavigate } from 'react-router';

import DevOnly from '../../utils/dev';
import { navigateToRootAndRefresh } from '../../utils/devUtils';

import useDevtoolsBannerClasses from './DevtoolsBanner.styles';
import StatusBadge from './StatusBadge';

interface DevtoolsBannerProps {
  connected: boolean;
}

const DevtoolsBanner: FC<DevtoolsBannerProps> = memo(({ connected }) => {
  const classes = useDevtoolsBannerClasses();
  const navigate = useNavigate();

  const handleRefresh = useCallback(() => {
    navigateToRootAndRefresh(navigate);
  }, [navigate]);

  return (
    <header id="banner" data-tid="devtools" className={classes.devtoolsLandmark}>
      <div className={classes.imageContainer}>
        <img
          src="/devtools/teams.png"
          className={classes.teamsImg}
          role="presentation"
          loading="eager"
          // Workaround for React v.s. TypeScript inconsistency
          {...{ fetchpriority: 'high' }}
        />
        <DevOnly>
          <button
            className={classes.devButton}
            onClick={handleRefresh}
            aria-hidden="true"
            tabIndex={-1}
          />
        </DevOnly>
      </div>
      <Text as="h1" size={500} weight="semibold">
        DevTools
      </Text>
      <StatusBadge connected={connected} classes={classes} />
      <Badge aria-label="Beta" appearance="tint" className={classes.betaBadge}>
        Beta
      </Badge>
    </header>
  );
});

DevtoolsBanner.displayName = 'DevtoolsBanner';
export default DevtoolsBanner;
