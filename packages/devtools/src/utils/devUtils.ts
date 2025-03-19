import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { Attachment, Message } from '@microsoft/spark.api';

import Logger from '../components/Logger/Logger';

// Type definitions
type DevModeOnRouteHook = (pathname: string, callback: () => void) => void;
type DevModeSendMessageHook = (
  sendMessageFn: (message: Partial<Message>, attachments?: Attachment[]) => void
) => void;

// Create no-op versions of the functions for production
const noOp = () => {};
const noOpDevModeOnRoute: DevModeOnRouteHook = () => {};
const noOpDevModeSendMessage: DevModeSendMessageHook = () => {};

// Development-only implementations
export let AutoFillAndSendMessage = noOp;
export let useDevModeOnRoute = noOpDevModeOnRoute;
export let useDevModeSendMessage = noOpDevModeSendMessage;

// Conditional compilation
if (import.meta.env.DEV) {
  let hasDevMessageBeenSent = false;

  AutoFillAndSendMessage = () => {
    const devMessage = import.meta.env.VITE_DEV_MESSAGE || null;
    const childLog = Logger.child('AutoFillAndSendMessage');

    if (!devMessage) return;

    setTimeout(() => {
      try {
        const composeTextarea = document.querySelector(
          '#compose-box textarea'
        ) as HTMLTextAreaElement | null;
        if (!composeTextarea) {
          childLog.warn('Dev mode: Could not find compose textarea');
          return;
        }

        composeTextarea.focus();

        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLTextAreaElement.prototype,
          'value'
        )?.set;

        if (nativeInputValueSetter && devMessage) {
          nativeInputValueSetter.call(composeTextarea, devMessage);
          const inputEvent = new Event('input', { bubbles: true, cancelable: true });
          composeTextarea.dispatchEvent(inputEvent);
          childLog.info('Dev mode: Set compose box text to:', devMessage);

          setTimeout(() => {
            const sendButton = document.querySelector(
              '[data-tid="send-button"]'
            ) as HTMLButtonElement | null;
            if (sendButton) {
              sendButton.click();
              childLog.info('Dev mode: Clicked send button');
            } else {
              childLog.warn('Dev mode: Could not find send button');
            }
          }, 500);
        }
      } catch (error) {
        childLog.error('Dev mode: Error in autoFillAndSendMessage:', error);
      }
    }, 1000);
  };

  useDevModeOnRoute = (pathname: string, callback: () => void) => {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === pathname) {
        callback();
      }
    }, [location.pathname, pathname, callback]);
  };

  useDevModeSendMessage = (
    sendMessageFn: (message: Partial<Message>, attachments?: Attachment[]) => void
  ) => {
    const sendMessageRef = useRef(sendMessageFn);

    useEffect(() => {
      sendMessageRef.current = sendMessageFn;
    }, [sendMessageFn]);

    useEffect(() => {
      if (!hasDevMessageBeenSent) {
        const devMessage = import.meta.env.VITE_DEV_MESSAGE;

        if (devMessage) {
          const message: Partial<Message> = {
            body: {
              content: devMessage,
              contentType: 'text'
            }
          };
          const timer = setTimeout(() => {
            sendMessageRef.current(message);
            hasDevMessageBeenSent = true;
          }, 1500);
          return () => clearTimeout(timer);
        }
      }
    }, []);
  };
}

export const navigateToRootAndRefresh = (navigate: (path: string) => void) => {
  navigate('/');
  window.location.reload();
};
