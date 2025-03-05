import { useContext } from 'react';
import { LoggerContext, logger } from '../contexts/LoggerContextCore';

const useLogger = () => {
  const context = useContext(LoggerContext);
  if (!context) {
    logger.error('Logger context not found - useLogger must be used within LoggerProvider');
    throw new Error('useLogger must be used within a LoggerProvider');
  }
  return context;
};

export default useLogger;
