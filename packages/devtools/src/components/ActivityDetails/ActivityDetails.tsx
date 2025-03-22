import { FC, memo } from 'react';
import {
  Button,
  InfoLabel,
  Switch,
  Title1,
  Toast,
  ToastTitle,
  Tooltip,
  useToastController,
} from '@fluentui/react-components';
import { CopyRegular } from '@fluentui/react-icons/lib/fonts';

import { ActivityEvent } from '../../types/Event';
import Json from '../Json/Json';
import Logger from '../Logger/Logger';

import useActivityDetailsClasses from './ActivityDetails.styles';

interface ActivityDetailsProps {
  selected?: ActivityEvent;
  view: 'preview' | 'json';
  setView: (view: 'preview' | 'json') => void;
}

const childLog = Logger.child('ActivityDetails');

const ActivityDetails: FC<ActivityDetailsProps> = memo(({ selected, view, setView }) => {
  const classes = useActivityDetailsClasses();
  const { dispatchToast } = useToastController();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(selected));

      // Show toast notification
      dispatchToast(
        <Toast>
          <ToastTitle role="status" aria-live="polite">
            Content copied to clipboard
          </ToastTitle>
        </Toast>,
        { position: 'bottom', timeout: 2000 }
      );
    } catch (err) {
      childLog.error('Failed to copy:', err);
      // Show error toast
      dispatchToast(
        <Toast>
          <ToastTitle role="alert" aria-live="assertive">
            Failed to copy content
          </ToastTitle>
        </Toast>,
        { position: 'bottom', timeout: 3000 }
      );
    }
  };

  return (
    <div className={classes.detailsContainer}>
      <Title1>Activity details</Title1>
      <div className={classes.tools}>
        <Tooltip content="Copy to clipboard" relationship="label">
          <Button
            aria-label="Copy to clipboard"
            icon={<CopyRegular />}
            onClick={handleCopy}
            disabled={!selected}
          />
        </Tooltip>

        <InfoLabel
          info={
            <>
              <p>
                Use this switch to toggle between Preview and JSON view of the activity payload.
              </p>
              <p>
                Preview shows a tree view of the activity, while JSON shows the raw JSON payload.
              </p>
            </>
          }
        >
          <Switch
            checked={view === 'json'}
            onChange={(event) => {
              setView(event.target.checked ? 'json' : 'preview');
            }}
            label={view === 'json' ? 'JSON' : 'Preview'}
            aria-label="Toggle between Preview and JSON"
            disabled={!selected}
          />
        </InfoLabel>
      </div>

      <div className={classes.jsonContainer}>
        {selected ? (
          <Json
            value={selected.type === 'activity.error' ? selected.error : selected.body}
            stringify={view === 'json'}
          />
        ) : (
          <div>Select an activity from the activities list to view payload details.</div>
        )}
      </div>
    </div>
  );
});

ActivityDetails.displayName = 'ActivityDetails';

export default ActivityDetails;
