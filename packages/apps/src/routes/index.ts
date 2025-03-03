import { MentionMiddlewareContext, MiddlewareContext } from '../middleware-context';
import { RouteHandler } from '../types';

import { ActivityRoutes } from './activity';
import { InvokeActivityRoutes } from './invoke';
import { InstallActivityRoutes } from './install';
import { ConversationUpdateActivityRoutes } from './conversation-update';
import { MessageUpdateActivityRoutes } from './message-update';
import { MessageDeleteActivityRoutes } from './message-delete';
import { EventActivityRoutes } from './event';

export interface Routes
  extends ActivityRoutes,
    InvokeActivityRoutes,
    InstallActivityRoutes,
    ConversationUpdateActivityRoutes,
    MessageUpdateActivityRoutes,
    MessageDeleteActivityRoutes,
    EventActivityRoutes {
  mention?: RouteHandler<MentionMiddlewareContext>;
  activity?: RouteHandler<MiddlewareContext>;
}

export * from './activity';
export * from './install';
export * from './invoke';
export * from './conversation-update';
export * from './message-update';
export * from './message-delete';
export * from './event';
