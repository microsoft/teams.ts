import { useContext, useState } from 'react';
import { useSearchParams } from 'react-router';

import ActivitiesGrid from '../../components/ActivitiesGrid/ActivitiesGrid';
import ActivityDetails from '../../components/ActivityDetails/ActivityDetails';
import { ActivityContext } from '../../stores/ActivityStore';
import { ActivityEvent } from '../../types/Event';
import useActivitiesScreenClasses from './ActivitiesScreen.styles';

export default function ActivitiesScreen() {
  const classes = useActivitiesScreenClasses();
  const { list } = useContext(ActivityContext);
  const [selected, setSelected] = useState<ActivityEvent>();
  const [view, setView] = useState<'preview' | 'json'>('preview');
  const [params, setParams] = useSearchParams();

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

  return (
    <div className={classes.flexContainer}>
      <div className={classes.activitiesContainer}>
        <ActivitiesGrid
          activities={list}
          selected={selected}
          handleRowSelect={setSelected}
          params={params}
          handleTypeFilter={handleTypeFilter}
        />
      </div>
      <div className={classes.activityDetailsContainer}>
        {<ActivityDetails selected={selected} view={view} setView={setView} />}
      </div>
    </div>
  );
}
