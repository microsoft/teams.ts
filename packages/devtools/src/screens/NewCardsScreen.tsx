import { FC, memo, useEffect, useRef } from 'react';
import { Button } from '@fluentui/react-components';

import Logger from '../components/Logger/Logger';

import useNewCardsScreenClasses from './NewCardsScreen.styles';

const designerUrl = 'https://adaptivecards.microsoft.com/designer';
const allowedOrigins = ['https://adaptivecards.microsoft.com'];

const testPayload = {
  type: 'AdaptiveCard',
  version: '1.5',
  body: [
    {
      type: 'TextBlock',
      text: 'test',
      wrap: true,
    },
  ],
};

interface ICardPayloadEvent {
  type: 'cardPayload';
  payload: string;
}

function isCardPayloadEventData(data: any): data is ICardPayloadEvent {
  return (
    typeof data === 'object' &&
    (data as ICardPayloadEvent).type === 'cardPayload' &&
    typeof (data as ICardPayloadEvent).payload === 'string'
  );
}

const childLog = Logger.child('CardsScreen');

const NewCardsScreen: FC = memo(() => {
  const cardsClasses = useNewCardsScreenClasses();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!allowedOrigins.includes(event.origin)) {
        childLog.warn('Invalid origin:', event.origin);
        return;
      }
      if (event.data === 'designerReady' && iframeRef.current) {
        // Send a message to the iframe
        iframeRef.current.contentWindow?.postMessage(
          {
            type: 'cardPayload',
            payload: JSON.stringify(testPayload),
          },
          designerUrl
        );
      }

      if (isCardPayloadEventData(event.data)) {
        // Handle the card payload updated event
        childLog.info('Current card payload:', event.data.payload);
      }

      childLog.info('Event received:', event.data);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  });

  const onGetCurrentCardPayloadClick = () => {
    if (iframeRef.current) {
      // Send a message to the iframe to get the current card payload
      iframeRef.current.contentWindow?.postMessage({
        type: 'getCurrentCardPayload',
      });
    }
  };

  return (
    <div className={cardsClasses.root}>
      <Button onClick={onGetCurrentCardPayloadClick}>Get current card payload</Button>
      <iframe
        id="card-designer"
        ref={iframeRef}
        className={cardsClasses.iframe}
        // src="https://adaptivecards.microsoft.com/designer"
        src={designerUrl}
        title="Adaptive Cards Designer"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
});

NewCardsScreen.displayName = 'NewCardsScreen';
export default NewCardsScreen;
