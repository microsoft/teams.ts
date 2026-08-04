import {
  AgentLifecycleEventActivity,
  AgentLifecycleValueType,
  EventActivity,
} from '@microsoft/teams.api';

import { IActivityContext } from '../contexts';
import { RouteHandler } from '../types';

export type EventActivityRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> =
  EventNameActivityRoutes<TExtraCtx> &
  AgentLifecycleVariantActivityRoutes<TExtraCtx>;

type EventNameActivityRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  [K in EventActivity['name']as EventAliases[K]]?: RouteHandler<
    IActivityContext<Extract<EventActivity, { name: K }>, TExtraCtx>,
    void
  >;
};

type AgentLifecycleVariantActivityRoutes<
  TExtraCtx extends Record<string, any> = Record<string, any>
> = {
  [K in AgentLifecycleValueType as AgentLifecycleAliases[K]]?: RouteHandler<
    IActivityContext<Extract<AgentLifecycleEventActivity, { valueType: K }>, TExtraCtx>,
    void
  >;
};

type EventAliases = {
  'application/vnd.microsoft.readReceipt': 'readReceipt';
  'application/vnd.microsoft.meetingStart': 'meetingStart';
  'application/vnd.microsoft.meetingEnd': 'meetingEnd';
  'application/vnd.microsoft.meetingParticipantJoin': 'meetingParticipantJoin';
  'application/vnd.microsoft.meetingParticipantLeave': 'meetingParticipantLeave';
  'agentLifecycle': 'agentLifecycle';
};

type AgentLifecycleAliases = {
  'AgenticUserIdentityCreated': 'agenticUserIdentityCreated';
  'AgenticUserIdentityUpdated': 'agenticUserIdentityUpdated';
  'AgenticUserManagerUpdated': 'agenticUserManagerUpdated';
  'AgenticUserEnabled': 'agenticUserEnabled';
  'AgenticUserDisabled': 'agenticUserDisabled';
  'AgenticUserDeleted': 'agenticUserDeleted';
  'AgenticUserUndeleted': 'agenticUserUndeleted';
  'AgenticUserWorkloadOnboardingUpdated': 'agenticUserWorkloadOnboardingUpdated';
};

export const EVENT_ALIASES: EventAliases = {
  'application/vnd.microsoft.readReceipt': 'readReceipt',
  'application/vnd.microsoft.meetingStart': 'meetingStart',
  'application/vnd.microsoft.meetingEnd': 'meetingEnd',
  'application/vnd.microsoft.meetingParticipantJoin': 'meetingParticipantJoin',
  'application/vnd.microsoft.meetingParticipantLeave': 'meetingParticipantLeave',
  'agentLifecycle': 'agentLifecycle',
};

export const AGENT_LIFECYCLE_ALIASES: AgentLifecycleAliases = {
  'AgenticUserIdentityCreated': 'agenticUserIdentityCreated',
  'AgenticUserIdentityUpdated': 'agenticUserIdentityUpdated',
  'AgenticUserManagerUpdated': 'agenticUserManagerUpdated',
  'AgenticUserEnabled': 'agenticUserEnabled',
  'AgenticUserDisabled': 'agenticUserDisabled',
  'AgenticUserDeleted': 'agenticUserDeleted',
  'AgenticUserUndeleted': 'agenticUserUndeleted',
  'AgenticUserWorkloadOnboardingUpdated': 'agenticUserWorkloadOnboardingUpdated',
};
