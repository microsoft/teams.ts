import { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  Textarea,
  Text,
} from '@fluentui/react-components';
import {
  bundleIcon,
  FluentIcon,
  ThumbDislikeFilled,
  ThumbDislikeRegular,
  ThumbLikeFilled,
  ThumbLikeRegular,
  ArrowRepeatAll24Filled,
} from '@fluentui/react-icons/lib/fonts';

import useMessageClasses from './FeedbackUI.styles';

interface FeedbackUIProps {
  displayName: string;
  onDialogOpenChange: (isOpen: boolean) => void;
  isFeedbackDialogOpen: boolean;
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
}) => {
  const classes = useMessageClasses();
  const [isLike, setIsLike] = useState(false);

  const handleFeedbackClick = (like: boolean) => {
    setIsLike(like);
    onDialogOpenChange(true);
  };

  const handleDialogClose = () => {
    onDialogOpenChange(false);
  };

  return (
    <>
      <div className={classes.feedbackContainer}>
        <Button
          aria-label="Like"
          appearance="transparent"
          className={classes.feedbackButton}
          icon={<ThumbLikeIcon className={classes.feedbackIcon} />}
          onClick={() => handleFeedbackClick(true)}
        />

        <Button
          aria-label="Dislike"
          appearance="transparent"
          className={classes.feedbackButton}
          icon={<ThumbDislikeIcon className={classes.feedbackIcon} />}
          onClick={() => handleFeedbackClick(false)}
        />
      </div>

      <Dialog inertTrapFocus open={isFeedbackDialogOpen} onOpenChange={() => handleDialogClose()}>
        <DialogSurface aria-describedby="dialog-content" className={classes.dialogSurface}>
          <DialogBody>
            <DialogTitle className={classes.dialogTitle}>
              <ArrowRepeatAll24Filled className={classes.headerIcon} tabIndex={-1} />
              {`Submit feedback to ${displayName}`}
            </DialogTitle>
            <DialogContent id="dialog-content" className={classes.dialogContent}>
              <Text>{isLike ? 'What did you like?' : 'What could be improved?'}</Text>
              <Textarea
                placeholder="Give as much detail as you can, but don't include any private or sensitive information."
                resize="none"
                rows={4}
              />
              <Text>
                We'll also share the content you're providing feedback on to help improve future
                responses.
              </Text>
              <div className={classes.submitContainer}>
                <Button appearance="primary" onClick={handleDialogClose}>
                  Submit
                </Button>
              </div>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </>
  );
};

export default FeedbackUI;

FeedbackUI.displayName = 'FeedbackUI';
