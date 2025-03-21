import { FC, memo, useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';

import ActivitiesGrid from '../../components/ActivitiesGrid/ActivitiesGrid';
import ActivityDetails from '../../components/ActivityDetails/ActivityDetails';
import { useActivityStore } from '../../stores/ActivityStore';
import { ActivityEvent } from '../../types/Event';

import useActivitiesScreenClasses from './ActivitiesScreen.styles';

const ActivitiesScreen: FC = () => {
  const classes = useActivitiesScreenClasses();
  const { list } = useActivityStore();
  const [selected, setSelected] = useState<ActivityEvent>();
  const [view, setView] = useState<'preview' | 'json'>('preview');
  const [params, setParams] = useSearchParams();

  const activitiesList = useMemo(() => list.slice().reverse(), [list]);

  const handleTypeFilter = (path: string) => {
    const newParams = new URLSearchParams(params);
    if (path === '') {
      // Clear all filters
      newParams.delete('path');
      newParams.delete('body.id');
    } else {
      // Clear ID filter and toggle path filter
      newParams.delete('body.id');
      if (params.get('path') === path) {
        newParams.delete('path');
      } else {
        newParams.set('path', path);
      }
    }
    setParams(newParams);
  };
  const handleRowSelect = useCallback((activity: ActivityEvent) => {
    setSelected(activity);
  }, []);

  return (
    <div className={classes.flexContainer}>
      <div className={classes.activitiesContainer}>
        <ActivitiesGrid
          activities={activitiesList}
          selected={selected}
          handleRowSelect={handleRowSelect}
          params={params}
          handleTypeFilter={handleTypeFilter}
        />
      </div>
      <div className={classes.activityDetailsContainer}>
        {<ActivityDetails selected={selected} view={view} setView={setView} />}
      </div>
    </div>
  );
};

ActivitiesScreen.displayName = 'ActivitiesScreen';
export default memo(ActivitiesScreen);
