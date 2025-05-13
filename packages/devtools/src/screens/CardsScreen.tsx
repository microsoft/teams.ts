import { FC, memo } from 'react';
import {
  Button,
  Toast,
  ToastTitle,
  ToastBody,
  useToastController,
  makeStyles,
} from '@fluentui/react-components';
import { AttachRegular } from '@fluentui/react-icons';
import { AdaptiveCard } from '@microsoft/teams.cards';
import { useNavigate, useLocation } from 'react-router';

import CardDesigner from '../components/CardDesigner/CardDesigner';
import Logger from '../components/Logger/Logger';
import { useCardStore } from '../stores/CardStore';

import useScreensClasses from './Screens.styles';

const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '8px 16px',
  },
});

const childLog = Logger.child('CardsScreen');

const CardsScreen: FC = memo(() => {
  const screenClasses = useScreensClasses();
  const classes = useStyles();
  const { setCurrentCard } = useCardStore();
  const { dispatchToast } = useToastController();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAttachCard = (card: AdaptiveCard) => {
    const isEditing = location.state?.isEditing ?? false;
    childLog.debug('Attaching card in mode:', isEditing ? 'edit' : 'compose');
    childLog.info('Setting card in store:');

    setCurrentCard(card, isEditing ? 'edit' : 'compose');

    dispatchToast(
      <Toast>
        <ToastTitle>Card Attached</ToastTitle>
        <ToastBody>Card has been attached to the compose box.</ToastBody>
      </Toast>,
      { intent: 'success' }
    );

    // Navigate to ChatScreen after setting the card
    navigate('/chat', { state: { isEditing } });
  };

  return (
    <div className={screenClasses.screenContainer}>
      <div className={classes.buttonContainer}>
        <Button
          appearance="primary"
          icon={<AttachRegular />}
          onClick={() => {
            const designerElement = document.querySelector('[data-testid="card-designer"]');
            if (designerElement) {
              // Get the current card from the designer
              const cardDesigner = (designerElement as any).__CARD_DESIGNER__;
              if (cardDesigner && cardDesigner.card) {
                handleAttachCard(cardDesigner.card);
              }
            }
          }}
        >
          Attach card
        </Button>
      </div>
      <div className={screenClasses.scrollbarContainer}>
        <CardDesigner />
      </div>
    </div>
  );
});

CardsScreen.displayName = 'CardsScreen';
export default CardsScreen;
