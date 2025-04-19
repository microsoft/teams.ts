import { FC, useRef, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  Link,
  Text,
  Textarea,
  Tooltip,
  useArrowNavigationGroup,
  useModalAttributes,
} from '@fluentui/react-components';
import {
  ArrowRepeatAll24Filled,
  bundleIcon,
  FluentIcon,
  ThumbDislikeFilled,
  ThumbLikeFilled,
  ThumbDislikeRegular,
  ThumbLikeRegular,
} from '@fluentui/react-icons/lib/fonts';
import type { Message } from '@microsoft/teams.api';

import useTeamsApi from '../../hooks/useTeamsApi';
import { useActivityStore } from '../../stores/ActivityStore';
import { useChatStore } from '../../stores/ChatStore';
import { createFeedbackActivity } from '../../utils/create-feedback';
import { isMacOS } from '../../utils/get-os';
import Logger from '../Logger/Logger';

import useMessageClasses from './Feedback.styles';

const childLog = Logger.child('Feedback');

interface FeedbackProps {
  displayName: string;
  onDialogOpenChange: (isOpen: boolean) => void;
  isFeedbackDialogOpen: boolean;
  value: Message;
  feedbackType?: 'default' | 'custom';
  streaming?: boolean;
}

const ThumbLikeIcon = bundleIcon(ThumbLikeFilled as FluentIcon, ThumbLikeRegular as FluentIcon);
const ThumbDislikeIcon = bundleIcon(
  ThumbDislikeFilled as FluentIcon,
  ThumbDislikeRegular as FluentIcon
);

const CustomFeedbackForm: FC<{
  cancelButtonRef: React.RefObject<HTMLButtonElement>;
  classes: ReturnType<typeof useMessageClasses>;
  handleDialogClose: () => void;
}> = ({ cancelButtonRef, classes, handleDialogClose }) => {
  return (
    <DialogBody>
      <DialogTitle>
        <Text>Custom feedback form coming to DevTools soon...</Text>
      </DialogTitle>
      <DialogContent id="dialog-content" className={classes.dialogContent}>
        <Text>For now, please use the default feedback form or test on Teams client.</Text>
      </DialogContent>
      <DialogActions>
        <Button appearance="secondary" onClick={handleDialogClose} ref={cancelButtonRef}>
          Cancel
        </Button>
      </DialogActions>
    </DialogBody>
  );
};

const Feedback: FC<FeedbackProps> = ({
  displayName,
  onDialogOpenChange,
  isFeedbackDialogOpen,
  value,
  feedbackType = 'default',
  streaming = false,
}) => {
  const classes = useMessageClasses();
  const [isLike, setIsLike] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [showFeedbackSent, setShowFeedbackSent] = useState(false);
  const { findByMessageId } = useActivityStore();
  const navigationAttributes = useArrowNavigationGroup({ circular: true });
  const { modalAttributes } = useModalAttributes();
  const teamsApi = useTeamsApi();
  const { chat } = useChatStore();
  const isMac = isMacOS();

  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  const handleFeedbackClick = (like: boolean) => {
    setIsLike(like);
    onDialogOpenChange(true);
  };

  const handleDialogClose = () => {
    onDialogOpenChange(false);
    setFeedbackText('');
  };

  const handleSubmit = async () => {
    try {
      if (!value?.id) {
        childLog.error('Missing message id');
        return;
      }
      const originalActivity = findByMessageId(value.id);
      if (!originalActivity?.body) {
        childLog.error('Missing activity data');
        return;
      }

      const activityBody = originalActivity.body;
      const activity = createFeedbackActivity({
        channelId: activityBody.channelId,
        // Flipping from and recipient since we are using the original message as the baseline for the data
        from: activityBody.recipient,
        recipient: activityBody.from,
        conversation: activityBody.conversation,
        locale: navigator.language,
        reaction: isLike ? 'like' : 'dislike',
        feedback: feedbackText,
        isStreaming: streaming,
      });

      await teamsApi.conversations.activities(chat.id).create(activity);
      setShowFeedbackSent(true);
      handleDialogClose();
    } catch (error) {
      childLog.error('devtools: Error submitting feedback:', error);
    }
  };

  return (
    <>
      <div className={classes.feedbackContainer}>
        <Button
          aria-label="Like"
          appearance="transparent"
          className={classes.feedbackButton}
          icon={<ThumbLikeIcon className={classes.feedbackIcon} aria-hidden="true" />}
          onClick={() => handleFeedbackClick(true)}
        />

        <Button
          aria-label="Dislike"
          appearance="transparent"
          className={classes.feedbackButton}
          icon={<ThumbDislikeIcon className={classes.feedbackIcon} aria-hidden="true" />}
          onClick={() => handleFeedbackClick(false)}
        />
        {showFeedbackSent && (
          <div className={classes.feedbackSentText}>
            <Text italic>Feedback sent</Text>
            <Link as="button" onClick={() => setShowFeedbackSent(false)}>
              Clear
            </Link>
          </div>
        )}
      </div>

      <Dialog open={isFeedbackDialogOpen} {...modalAttributes}>
        <DialogSurface aria-describedby="dialog-content">
          {feedbackType === 'custom' ? (
            <CustomFeedbackForm
              cancelButtonRef={cancelButtonRef}
              classes={classes}
              handleDialogClose={handleDialogClose}
            />
          ) : (
            <DialogBody>
              <DialogTitle className={classes.dialogTitle}>
                <ArrowRepeatAll24Filled
                  className={classes.headerIcon}
                  aria-hidden="true"
                  role="presentation"
                />
                {`Submit feedback to ${displayName}`}
              </DialogTitle>
              <DialogContent id="dialog-content" className={classes.dialogContent}>
                <Text>{isLike ? 'What did you like?' : 'What could be improved?'}</Text>
                <Textarea
                  value={feedbackText}
                  onChange={(e) => {
                    setFeedbackText(e.target.value);
                  }}
                  placeholder="Give as much detail as you can, but don't include any private or sensitive information."
                  rows={4}
                  className={classes.textarea}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (!isMac ? e.ctrlKey : e.metaKey)) {
                      e.preventDefault();
                      handleSubmit();
                    }
                    if (e.key === 'Escape') {
                      e.preventDefault();
                      handleDialogClose();
                    }
                  }}
                />
                <Text>
                  We'll also share the content you're providing feedback on to help improve future
                  responses.
                </Text>
              </DialogContent>
              <DialogActions {...navigationAttributes}>
                <Tooltip content={`Cancel (${isMac ? '⌘' : 'Ctrl'} Escape)`} relationship="label">
                  <Button appearance="secondary" onClick={handleDialogClose} ref={cancelButtonRef}>
                    Cancel
                  </Button>
                </Tooltip>
                <Tooltip content={`Submit (${isMac ? '⌘' : 'Ctrl'} Enter)`} relationship="label">
                  <Button appearance="primary" onClick={handleSubmit} ref={submitButtonRef}>
                    Submit
                  </Button>
                </Tooltip>
              </DialogActions>
            </DialogBody>
          )}
        </DialogSurface>
      </Dialog>
    </>
  );
};

Feedback.displayName = 'Feedback';
export default Feedback;
