import { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  Link,
  Text,
  Textarea,
  Tooltip,
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
import type { Message } from '@microsoft/spark.api';

import useOperatingSystem from '../../hooks/useOperatingSystem';
import useSparkApi from '../../hooks/useSparkApi';
import { useActivityStore } from '../../stores/ActivityStore';
import { useChatStore } from '../../stores/ChatStore';
import { createFeedbackActivity } from '../../utils/createFeedbackActivity';
import Logger from '../Logger/Logger';

import useMessageClasses from './FeedbackUI.styles';

const childLog = Logger.child('FeedbackUI');

interface FeedbackUIProps {
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

const FeedbackUI: FC<FeedbackUIProps> = ({
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
  const sparkApi = useSparkApi();
  const { chat } = useChatStore();
  const { isMac } = useOperatingSystem();

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

      await sparkApi.conversations.activities(chat.id).create(activity);
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
          <div className={classes.feedbackText}>
            <Text italic>Feedback sent</Text>
            <Link as="button" onClick={() => setShowFeedbackSent(false)}>
              Clear
            </Link>
          </div>
        )}
      </div>

      <Dialog inertTrapFocus open={isFeedbackDialogOpen} onOpenChange={() => handleDialogClose()}>
        <DialogSurface aria-describedby="dialog-content" className={classes.dialogSurface}>
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
              {feedbackType === 'custom' ? (
                <>
                  <Text>Custom feedback form coming soon...</Text>
                  <div className={classes.submitContainer}>
                    <Button appearance="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Text>{isLike ? 'What did you like?' : 'What could be improved?'}</Text>
                  <Textarea
                    placeholder="Give as much detail as you can, but don't include any private or sensitive information."
                    resize="none"
                    rows={4}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                        handleSubmit();
                      }
                    }}
                  />
                  <Text>
                    We'll also share the content you're providing feedback on to help improve future
                    responses.
                  </Text>
                  <div className={classes.submitContainer}>
                    <Tooltip
                      content={`Submit (${isMac ? '⌘' : 'Ctrl'} Enter)`}
                      relationship="label"
                    >
                      <Button appearance="primary" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </Tooltip>
                  </div>
                </>
              )}
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </>
  );
};

export default FeedbackUI;

FeedbackUI.displayName = 'FeedbackUI';
