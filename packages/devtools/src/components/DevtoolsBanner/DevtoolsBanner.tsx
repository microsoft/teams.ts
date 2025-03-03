import { FC } from 'react';
import { Badge, Text, Tooltip } from '@fluentui/react-components';
import useClasses from './DevtoolsBanner.styles';
import { useNavigate } from 'react-router';
import { navigateToRootAndRefresh, DevOnly } from '../../utils/dev';

interface DevtoolsBannerProps {
  connected: boolean;
}

const DevtoolsBanner: FC<DevtoolsBannerProps> = ({ connected }) => {
  const classes = useClasses();
  const navigate = useNavigate();

  return (
    <div data-tid="devtools-" className={classes.devtoolsLandmark}>
      <div className={classes.imageContainer}>
        <img src="/devtools/teams.png" className={classes.teamsImg} role="presentation" />
        <DevOnly>
          <button
            className={classes.devButton}
            onClick={() => navigateToRootAndRefresh(navigate)}
            aria-hidden="true"
            tabIndex={-1}
          />
        </DevOnly>
      </div>
      <Text as="h1" size={500} weight="semibold">
        DevTools
      </Text>
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
      <Badge aria-label="Beta" appearance="tint" className={classes.betaBadge}>
        Beta
      </Badge>
    </div>
  );
};

export default DevtoolsBanner;
