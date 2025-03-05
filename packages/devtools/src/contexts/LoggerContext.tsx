import { ConsoleLogger, LogLevel } from '@microsoft/spark.common/logging';
import { createContext, FC, PropsWithChildren, useContext } from 'react';

const logger = new ConsoleLogger('@spark/devtools');
export const LoggerContext = createContext<ConsoleLogger>(logger);

export const LoggerProvider: FC<PropsWithChildren<{ level?: LogLevel }>> = ({
  children,
  level,
}) => {
  const contextLogger = new ConsoleLogger('@spark/devtools', level ? { level } : undefined);
  return <LoggerContext.Provider value={contextLogger}>{children}</LoggerContext.Provider>;
};

export const useLogger = () => {
  const context = useContext(LoggerContext);
  if (!context) {
    logger.error('Logger context not found - useLogger must be used within LoggerProvider');
    throw new Error('useLogger must be used within a LoggerProvider');
  }
  return context;
};
