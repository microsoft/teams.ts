import { FC, ReactNode, memo } from 'react';

type DevOnlyComponent = FC<{ children: ReactNode }>;
const NoOpDevOnly: DevOnlyComponent = () => null;

let DevOnly = NoOpDevOnly;

if (import.meta.env.DEV) {
  DevOnly = memo(({ children }) => <>{children}</>);
}

export default DevOnly;
DevOnly.displayName = 'DevOnly';
