import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

import { ActivityRoutes } from './activity';
import { ConversationUpdateActivityRoutes } from './conversation-update';
import { EventActivityRoutes } from './event';
import { InstallActivityRoutes } from './install';
import { InvokeActivityRoutes } from './invoke';
import { MessageDeleteActivityRoutes } from './message-delete';
import { MessageUpdateActivityRoutes } from './message-update';

export interface IRoutes
  extends ActivityRoutes,
    InvokeActivityRoutes,
    InstallActivityRoutes,
    ConversationUpdateActivityRoutes,
    MessageUpdateActivityRoutes,
    MessageDeleteActivityRoutes,
    EventActivityRoutes {
  mention?: RouteHandler<IActivityContext>;
  activity?: RouteHandler<IActivityContext>;
}

export * from './activity';
export * from './install';
export * from './invoke';
export * from './conversation-update';
export * from './message-update';
export * from './message-delete';
export * from './event';
