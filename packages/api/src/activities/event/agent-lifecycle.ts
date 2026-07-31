import { IActivity } from '../activity';

export type AgentLifecycleValueType =
  | 'AgenticUserIdentityCreated'
  | 'AgenticUserIdentityUpdated'
  | 'AgenticUserManagerUpdated'
  | 'AgenticUserEnabled'
  | 'AgenticUserDisabled'
  | 'AgenticUserDeleted'
  | 'AgenticUserUndeleted'
  | 'AgenticUserWorkloadOnboardingUpdated';

export type AgentLifecycleEventType =
  | 'agenticUserIdentityCreated'
  | 'agenticUserIdentityUpdated'
  | 'agenticUserManagerUpdated'
  | 'agenticUserEnabled'
  | 'agenticUserDisabled'
  | 'agenticUserDeleted'
  | 'agenticUserUndeleted'
  | 'agenticUserWorkloadOnboardingUpdated';

export type AgentLifecycleManager = {
  /**
   * The Entra object ID of the manager.
   */
  userId?: string;

  /**
   * The manager's email address.
   */
  email?: string;

  /**
   * The manager's display name.
   */
  displayName?: string;
};

export type AgentLifecycleManagerRef = {
  /**
   * The Entra object ID of the manager.
   */
  managerId?: string;
};

export type AgentLifecycleUpdatedProperty = {
  /**
   * The name of the property that changed (for example, "Mail", "Alias", or "UserPrincipalName").
   */
  propertyName: string;

  /**
   * The new value of the property.
   */
  propertyValue?: string;
};

export type AgentLifecycleValueBase = {
  /**
   * The tenant the agentic identity belongs to.
   */
  tenantId?: string;

  /**
   * The user-backed agentic identity object ID.
   *
   * This and the fields below are activity wire fields, so they keep the
   * service-owned JSON keys.
   */
  agenticUserId?: string;

  /**
   * Service-owned agentic app instance ID.
   */
  agenticAppInstanceId?: string;

  /**
   * Service-owned Agentic App Blueprint ID.
   */
  agentIdentityBlueprintId?: string;

  /**
   * Monotonic version of the agentic identity state, when provided by the service.
   */
  version?: number;
};

export type AgenticIdentityCreatedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserIdentityCreated';
  manager?: AgentLifecycleManager;
  expirationDateTime?: Date;
};

export type AgenticIdentityUpdatedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserIdentityUpdated';
  updatedProperty: AgentLifecycleUpdatedProperty;
};

export type AgenticIdentityManagerUpdatedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserManagerUpdated';
  manager?: AgentLifecycleManagerRef;
};

export type AgenticIdentityEnabledValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserEnabled';
};

export type AgenticIdentityDisabledValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserDisabled';
};

export type AgenticIdentityDeletedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserDeleted';
  deletionReason?: string;
};

export type AgenticIdentityUndeletedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserUndeleted';
};

export type AgenticIdentityWorkloadOnboardingUpdatedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserWorkloadOnboardingUpdated';
  workloadName?: string;
  workloadOnboardingState?: string;
};

export type UnknownAgentLifecycleValue = AgentLifecycleValueBase & {
  eventType?: string;
  [key: string]: unknown;
};

export interface IAgentLifecycleEventActivityBase<
  TValueType extends string = string,
  TValue extends AgentLifecycleValueBase = AgentLifecycleValueBase
> extends IActivity<'event'> {
  /**
   * Agentic lifecycle activities arrive as event activities named "agentLifecycle".
   */
  name: 'agentLifecycle';

  /**
   * The concrete lifecycle variant carried by the activity.
   */
  valueType: TValueType;

  /**
   * The lifecycle payload.
   */
  value: TValue;
}

export type IAgenticIdentityCreatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserIdentityCreated',
    AgenticIdentityCreatedValue
  >;

export type IAgenticIdentityUpdatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserIdentityUpdated',
    AgenticIdentityUpdatedValue
  >;

export type IAgenticIdentityManagerUpdatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserManagerUpdated',
    AgenticIdentityManagerUpdatedValue
  >;

export type IAgenticIdentityEnabledEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserEnabled', AgenticIdentityEnabledValue>;

export type IAgenticIdentityDisabledEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserDisabled', AgenticIdentityDisabledValue>;

export type IAgenticIdentityDeletedEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserDeleted', AgenticIdentityDeletedValue>;

export type IAgenticIdentityUndeletedEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserUndeleted', AgenticIdentityUndeletedValue>;

export type IAgenticIdentityWorkloadOnboardingUpdatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserWorkloadOnboardingUpdated',
    AgenticIdentityWorkloadOnboardingUpdatedValue
  >;

export type IUnknownAgentLifecycleEventActivity =
  IAgentLifecycleEventActivityBase<string & {}, UnknownAgentLifecycleValue>;

export type AgentLifecycleEventActivity =
  | IAgenticIdentityCreatedEventActivity
  | IAgenticIdentityUpdatedEventActivity
  | IAgenticIdentityManagerUpdatedEventActivity
  | IAgenticIdentityEnabledEventActivity
  | IAgenticIdentityDisabledEventActivity
  | IAgenticIdentityDeletedEventActivity
  | IAgenticIdentityUndeletedEventActivity
  | IAgenticIdentityWorkloadOnboardingUpdatedEventActivity
  | IUnknownAgentLifecycleEventActivity;
