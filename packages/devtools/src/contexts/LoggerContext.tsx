import { ConsoleLogger, LogLevel } from '@microsoft/spark.common/logging';
import { FC, PropsWithChildren } from 'react';
import { LoggerContext } from './LoggerContextCore';

export const LoggerProvider: FC<PropsWithChildren<{ level?: LogLevel }>> = ({
  children,
  level,
}) => {
  const contextLogger = new ConsoleLogger('@spark/devtools', level ? { level } : undefined);
  return <LoggerContext.Provider value={contextLogger}>{children}</LoggerContext.Provider>;
};

export { LoggerContext } from './LoggerContextCore';
