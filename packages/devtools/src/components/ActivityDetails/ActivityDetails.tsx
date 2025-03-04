import { FC } from 'react';
import {
  Button,
  InfoLabel,
  Switch,
  Toast,
  ToastTitle,
  Tooltip,
  useToastController,
} from '@fluentui/react-components';
import { CopyRegular } from '@fluentui/react-icons/lib/fonts';

import Json from '../Json/Json';
import { ActivityEvent } from '../../types/Event';
import useActivityDetailsClasses from './ActivityDetails.styles';
import { useLogger } from '../../contexts/LoggerContext';
interface ActivityDetailsProps {
  selected: ActivityEvent;
  view: 'preview' | 'json';
  setView: (view: 'preview' | 'json') => void;
}

const ActivityDetails: FC<ActivityDetailsProps> = ({ selected, view, setView }) => {
  const classes = useActivityDetailsClasses();
  const { dispatchToast } = useToastController();
  const log = useLogger();
  const childLog = log.child('ActivityDetails');

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
    <div className={classes.selectedContainer}>
      <div className={classes.selectedHeader}>
        <Tooltip content="Copy to clipboard" relationship="label">
          <Button aria-label="Copy to clipboard" icon={<CopyRegular />} onClick={handleCopy} />
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
          />
        </InfoLabel>
      </div>

      <div className={classes.jsonContainer}>
        <Json
          className={classes.json}
          value={selected.type === 'activity.error' ? selected.error : selected.body}
          stringify={view === 'json'}
        />
      </div>
    </div>
  );
};

export default ActivityDetails;
