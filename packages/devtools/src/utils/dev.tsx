import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { Attachment } from '@microsoft/spark.api';

// Type definitions
type DevModeOnRouteHook = (pathname: string, callback: () => void) => void;
type DevModeSendMessageHook = (
  sendMessageFn: (message: string, attachments?: Attachment[]) => void
) => void;
type DevOnlyComponent = React.FC<{ children: React.ReactNode }>;

// Create no-op versions of the functions for production
const noOp = () => {};
const noOpDevModeOnRoute: DevModeOnRouteHook = () => {};
const noOpDevModeSendMessage: DevModeSendMessageHook = () => {};
const NoOpDevOnly: DevOnlyComponent = () => null;

// Development-only implementations
let autoFillAndSendMessage = noOp;
let useDevModeOnRoute = noOpDevModeOnRoute;
let useDevModeSendMessage = noOpDevModeSendMessage;
let DevOnly = NoOpDevOnly;

// Conditional compilation - this code will be completely removed in production builds
if (import.meta.env.DEV) {
  // Module-level flag to track if message has been sent
  let hasDevMessageBeenSent = false;

  /**
   * Fills the compose box with a message and sends it
   * Only works in development mode
   */
  autoFillAndSendMessage = () => {
    // Get the dev message from environment variable or use a default
    const devMessage = import.meta.env.VITE_DEV_MESSAGE || 'This is a development test message';

    // Wait for DOM to be fully loaded
    setTimeout(() => {
      try {
        // Find the compose box textarea
        const composeTextarea = document.querySelector(
          '#compose-box textarea'
        ) as HTMLTextAreaElement | null;
        if (!composeTextarea) {
          console.warn('Dev mode: Could not find compose textarea');
          return;
        }

        // Focus on the textarea
        composeTextarea.focus();

        // Create a proper React change event
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLTextAreaElement.prototype,
          'value'
        )?.set;

        if (nativeInputValueSetter) {
          // Set the value directly using the native setter
          nativeInputValueSetter.call(composeTextarea, devMessage);

          // Create and dispatch an input event that React's onChange will detect
          const inputEvent = new Event('input', {
            bubbles: true,
            cancelable: true,
          });

          composeTextarea.dispatchEvent(inputEvent);

          console.log('Dev mode: Set compose box text to:', devMessage);

          // Wait a bit to ensure React state is updated
          setTimeout(() => {
            // Find and click the send button
            const sendButton = document.querySelector(
              '[data-tid="send-button"]'
            ) as HTMLButtonElement | null;
            if (sendButton) {
              // Directly click the button
              sendButton.click();
              console.log('Dev mode: Clicked send button');
            } else {
              console.warn('Dev mode: Could not find send button');
            }
          }, 500);
        }
      } catch (error) {
        console.error('Dev mode: Error in autoFillAndSendMessage:', error);
      }
    }, 1000);
  };

  /**
   * Hook that executes a callback when in development mode and on a specific route
   * @param pathname The route pathname to check
   * @param callback The function to execute
   */
  useDevModeOnRoute = (pathname: string, callback: () => void) => {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === pathname) {
        callback();
      }
    }, [location.pathname, pathname, callback]);
  };

  /**
   * Hook for programmatically sending a message in development mode
   * This should be used in the ChatScreen component
   * @param sendMessageFn The function that sends a message
   */
  useDevModeSendMessage = (
    sendMessageFn: (message: string, attachments?: Attachment[]) => void
  ) => {
    const sendMessageRef = useRef(sendMessageFn);

    useEffect(() => {
      sendMessageRef.current = sendMessageFn;
    }, [sendMessageFn]);

    useEffect(() => {
      if (!hasDevMessageBeenSent) {
        const devMessage = import.meta.env.VITE_DEV_MESSAGE;

        if (devMessage) {
          const timer = setTimeout(() => {
            sendMessageRef.current(devMessage);
            hasDevMessageBeenSent = true;
          }, 1500);

          return () => clearTimeout(timer);
        }
      }
    }, []);
  };

  /**
   * Conditional rendering helper for development mode only
   * @param children The content to render in development mode
   * @returns The children in development mode, null otherwise
   */
  DevOnly = ({ children }) => <>{children}</>;
}

/**
 * Navigates to the root route and refreshes the page
 * @param navigate The navigate function from useNavigate
 */
export const navigateToRootAndRefresh = (navigate: (path: string) => void) => {
  navigate('/');
  window.location.reload();
};

// Export the functions - they will be either the real implementations or no-ops
export { autoFillAndSendMessage, useDevModeOnRoute, useDevModeSendMessage, DevOnly };
