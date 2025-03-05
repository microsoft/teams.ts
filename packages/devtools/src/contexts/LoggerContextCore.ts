import { ConsoleLogger } from '@microsoft/spark.common/logging';
import { createContext } from 'react';

export const logger = new ConsoleLogger('@spark/devtools');
export const LoggerContext = createContext<ConsoleLogger>(logger);
