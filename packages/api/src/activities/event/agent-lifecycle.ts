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
   * The tenant the Agent User belongs to.
   */
  tenantId?: string;

  /**
   * The Agent User object ID.
   *
   * This is an activity value wire field and intentionally keeps the
   * service-owned JSON key.
   */
  agenticUserId?: string;

  /**
   * The concrete AgentAppInstance ID.
   *
   * This is an activity value wire field and intentionally keeps the
   * service-owned JSON key.
   */
  agenticAppInstanceId?: string;

  /**
   * The AgentIdentityBlueprint ID.
   */
  agentIdentityBlueprintId?: string;

  /**
   * Monotonic version of the Agent User state, when provided by the service.
   */
  version?: number;
};

export type AgentUserIdentityCreatedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserIdentityCreated';
  manager?: AgentLifecycleManager;
  expirationDateTime?: Date;
};

export type AgentUserIdentityUpdatedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserIdentityUpdated';
  updatedProperty: AgentLifecycleUpdatedProperty;
};

export type AgentUserManagerUpdatedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserManagerUpdated';
  manager?: AgentLifecycleManagerRef;
};

export type AgentUserEnabledValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserEnabled';
};

export type AgentUserDisabledValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserDisabled';
};

export type AgentUserDeletedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserDeleted';
  deletionReason?: string;
};

export type AgentUserUndeletedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserUndeleted';
};

export type AgentUserWorkloadOnboardingUpdatedValue = AgentLifecycleValueBase & {
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
   * Agent User lifecycle activities arrive as event activities named "agentLifecycle".
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

export type IAgentUserIdentityCreatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserIdentityCreated',
    AgentUserIdentityCreatedValue
  >;

export type IAgentUserIdentityUpdatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserIdentityUpdated',
    AgentUserIdentityUpdatedValue
  >;

export type IAgentUserManagerUpdatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserManagerUpdated',
    AgentUserManagerUpdatedValue
  >;

export type IAgentUserEnabledEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserEnabled', AgentUserEnabledValue>;

export type IAgentUserDisabledEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserDisabled', AgentUserDisabledValue>;

export type IAgentUserDeletedEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserDeleted', AgentUserDeletedValue>;

export type IAgentUserUndeletedEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserUndeleted', AgentUserUndeletedValue>;

export type IAgentUserWorkloadOnboardingUpdatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserWorkloadOnboardingUpdated',
    AgentUserWorkloadOnboardingUpdatedValue
  >;

export type IUnknownAgentLifecycleEventActivity =
  IAgentLifecycleEventActivityBase<string & {}, UnknownAgentLifecycleValue>;

export type AgentLifecycleEventActivity =
  | IAgentUserIdentityCreatedEventActivity
  | IAgentUserIdentityUpdatedEventActivity
  | IAgentUserManagerUpdatedEventActivity
  | IAgentUserEnabledEventActivity
  | IAgentUserDisabledEventActivity
  | IAgentUserDeletedEventActivity
  | IAgentUserUndeletedEventActivity
  | IAgentUserWorkloadOnboardingUpdatedEventActivity
  | IUnknownAgentLifecycleEventActivity;
