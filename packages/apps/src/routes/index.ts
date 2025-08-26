import { Activity } from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

import { ActivityRoutes } from './activity';
import { ConversationUpdateActivityRoutes } from './conversation-update';
import { EventActivityRoutes } from './event';
import { InstallActivityRoutes } from './install';
import { InvokeActivityRoutes } from './invoke';
import { MessageDeleteActivityRoutes } from './message-delete';
import { MessageUpdateActivityRoutes } from './message-update';

export interface IRoutes<TExtraCtx extends Record<string, any> = Record<string, any>>
  extends ActivityRoutes<TExtraCtx>,
  InvokeActivityRoutes<TExtraCtx>,
  InstallActivityRoutes<TExtraCtx>,
  ConversationUpdateActivityRoutes<TExtraCtx>,
  MessageUpdateActivityRoutes<TExtraCtx>,
  MessageDeleteActivityRoutes<TExtraCtx>,
  EventActivityRoutes<TExtraCtx> {
  mention?: RouteHandler<IActivityContext<Activity, TExtraCtx>>;
  activity?: RouteHandler<IActivityContext<Activity, TExtraCtx>>;
}

export * from './activity';
export * from './conversation-update';
export * from './event';
export * from './install';
export * from './invoke';
export * from './message-delete';
export * from './message-update';

