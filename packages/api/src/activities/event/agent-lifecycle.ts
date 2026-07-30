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
   * The tenant the Agentic User belongs to.
   */
  tenantId?: string;

  /**
   * The Agentic User object ID.
   *
   * This and the fields below are activity wire fields, so they keep the
   * service-owned JSON keys.
   */
  agenticUserId?: string;

  /**
   * The concrete AgenticAppInstance ID.
   */
  agenticAppInstanceId?: string;

  /**
   * The AgenticBlueprint ID.
   */
  agentIdentityBlueprintId?: string;

  /**
   * Monotonic version of the Agentic User state, when provided by the service.
   */
  version?: number;
};

export type AgenticUserIdentityCreatedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserIdentityCreated';
  manager?: AgentLifecycleManager;
  expirationDateTime?: Date;
};

export type AgenticUserIdentityUpdatedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserIdentityUpdated';
  updatedProperty: AgentLifecycleUpdatedProperty;
};

export type AgenticUserManagerUpdatedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserManagerUpdated';
  manager?: AgentLifecycleManagerRef;
};

export type AgenticUserEnabledValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserEnabled';
};

export type AgenticUserDisabledValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserDisabled';
};

export type AgenticUserDeletedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserDeleted';
  deletionReason?: string;
};

export type AgenticUserUndeletedValue = AgentLifecycleValueBase & {
  eventType: 'agenticUserUndeleted';
};

export type AgenticUserWorkloadOnboardingUpdatedValue = AgentLifecycleValueBase & {
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
   * Agentic User lifecycle activities arrive as event activities named "agentLifecycle".
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

export type IAgenticUserIdentityCreatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserIdentityCreated',
    AgenticUserIdentityCreatedValue
  >;

export type IAgenticUserIdentityUpdatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserIdentityUpdated',
    AgenticUserIdentityUpdatedValue
  >;

export type IAgenticUserManagerUpdatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserManagerUpdated',
    AgenticUserManagerUpdatedValue
  >;

export type IAgenticUserEnabledEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserEnabled', AgenticUserEnabledValue>;

export type IAgenticUserDisabledEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserDisabled', AgenticUserDisabledValue>;

export type IAgenticUserDeletedEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserDeleted', AgenticUserDeletedValue>;

export type IAgenticUserUndeletedEventActivity =
  IAgentLifecycleEventActivityBase<'AgenticUserUndeleted', AgenticUserUndeletedValue>;

export type IAgenticUserWorkloadOnboardingUpdatedEventActivity =
  IAgentLifecycleEventActivityBase<
    'AgenticUserWorkloadOnboardingUpdated',
    AgenticUserWorkloadOnboardingUpdatedValue
  >;

export type IUnknownAgentLifecycleEventActivity =
  IAgentLifecycleEventActivityBase<string & {}, UnknownAgentLifecycleValue>;

export type AgentLifecycleEventActivity =
  | IAgenticUserIdentityCreatedEventActivity
  | IAgenticUserIdentityUpdatedEventActivity
  | IAgenticUserManagerUpdatedEventActivity
  | IAgenticUserEnabledEventActivity
  | IAgenticUserDisabledEventActivity
  | IAgenticUserDeletedEventActivity
  | IAgenticUserUndeletedEventActivity
  | IAgenticUserWorkloadOnboardingUpdatedEventActivity
  | IUnknownAgentLifecycleEventActivity;
