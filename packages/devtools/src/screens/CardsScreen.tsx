import {
  Button,
  Toast,
  ToastBody,
  ToastTitle,
  useToastController,
} from '@fluentui/react-components';
import { AttachRegular } from '@fluentui/react-icons';
import CardDesigner from '../components/CardDesigner/CardDesigner';
import { useScreensClasses } from './Screens.styles';
import { useCardStore } from '../stores/CardStore';
import { Card } from '@microsoft/spark.cards';
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '8px 16px',
  },
});

export default function CardsScreen() {
  const screenClasses = useScreensClasses();
  const classes = useStyles();
  const { setCurrentCard } = useCardStore();
  const { dispatchToast } = useToastController();

  const handleAttachCard = (card: Card) => {
    setCurrentCard(card);

    dispatchToast(
      <Toast>
        <ToastTitle>Card Attached</ToastTitle>
        <ToastBody>Card has been attached to the compose box.</ToastBody>
      </Toast>,
      { intent: 'success' }
    );
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
}
