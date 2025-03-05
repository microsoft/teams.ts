import { FC, ReactNode } from 'react';

type DevOnlyComponent = FC<{ children: ReactNode }>;
const NoOpDevOnly: DevOnlyComponent = () => null;

let DevOnly = NoOpDevOnly;

if (import.meta.env.DEV) {
  DevOnly = ({ children }) => <>{children}</>;
}

export { DevOnly };
export {
  AutoFillAndSendMessage as autoFillAndSendMessage,
  useDevModeOnRoute,
  useDevModeSendMessage,
  navigateToRootAndRefresh,
} from './devUtils';
