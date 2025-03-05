import { useContext, useState } from 'react';
import { useSearchParams } from 'react-router';

import ActivitiesGrid from '../../components/ActivitiesGrid/ActivitiesGrid';
import ActivityDetails from '../../components/ActivityDetails/ActivityDetails';
import { ActivityContext } from '../../stores/ActivityStore';
import { ActivityEvent } from '../../types/Event';
import useScreensClasses from '../Screens.styles';
import useActivitiesScreenClasses from './ActivitiesScreen.styles';

export default function ActivitiesScreen() {
  const classes = useActivitiesScreenClasses();
  const screenClasses = useScreensClasses();
  const { list } = useContext(ActivityContext);
  const [selected, setSelected] = useState<ActivityEvent>();
  const [view, setView] = useState<'preview' | 'json'>('preview');
  const [params, setParams] = useSearchParams();

  return (
    <div className={screenClasses.screenContainer}>
      <div className={screenClasses.scrollbarContainer}>
        <div className={classes.activitiesContainer}>
          <ActivitiesGrid
            list={list}
            selected={selected}
            setSelected={setSelected}
            params={params}
            setParams={setParams}
          />

          {selected && <ActivityDetails selected={selected} view={view} setView={setView} />}
        </div>
      </div>
    </div>
  );
}
