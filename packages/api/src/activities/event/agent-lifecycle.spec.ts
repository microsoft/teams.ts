import {
  AgentLifecycleEventActivity,
  IAgenticUserIdentityCreatedEventActivity,
  IAgenticUserIdentityUpdatedEventActivity,
  IAgenticUserManagerUpdatedEventActivity,
  IUnknownAgentLifecycleEventActivity,
} from './agent-lifecycle';

const TENANT_ID = '00000000-0000-0000-0000-000000000001';
const AGENTIC_USER_ID = '00000000-0000-0000-0000-000000000002';
const APP_ID = '00000000-0000-0000-0000-000000000003';
const AGENTIC_APP_INSTANCE_ID = '00000000-0000-0000-0000-000000000004';
const BLUEPRINT_ID = '00000000-0000-0000-0000-000000000005';

const baseActivity = {
  type: 'event',
  id: 'activity-id',
  timestamp: '2026-06-29T00:00:00Z',
  serviceUrl: 'https://smba.trafficmanager.net/amer/tenant/',
  channelId: 'agents',
  from: { id: 'system', name: 'System', role: 'bot', tenantId: TENANT_ID },
  conversation: { id: 'conversation-id', conversationType: 'personal', tenantId: TENANT_ID },
  recipient: {
    id: APP_ID,
    role: 'agenticUser',
    agenticUserId: AGENTIC_USER_ID,
    agenticAppId: APP_ID,
    agenticAppBlueprintId: BLUEPRINT_ID,
    callbackUri: 'https://example.test/api/messages',
    tenantId: TENANT_ID,
  },
  channelData: { tenant: { id: TENANT_ID } },
  channel: undefined,
  team: undefined,
  meeting: undefined,
  notification: undefined,
  name: 'agentLifecycle',
  isStreaming: () => false,
} as const;

describe('AgentLifecycleEventActivity', () => {
  it('models identity creation payloads', () => {
    const activity: IAgenticUserIdentityCreatedEventActivity = {
      ...baseActivity,
      valueType: 'AgenticUserIdentityCreated',
      value: {
        tenantId: TENANT_ID,
        agenticUserId: AGENTIC_USER_ID,
        agenticAppInstanceId: AGENTIC_APP_INSTANCE_ID,
        agentIdentityBlueprintId: BLUEPRINT_ID,
        eventType: 'agenticUserIdentityCreated',
        expirationDateTime: new Date('2026-06-30T00:00:00Z'),
        manager: {
          displayName: 'Manager',
          userId: 'manager-id',
          email: 'manager@example.test',
        },
      },
    };

    const lifecycle: AgentLifecycleEventActivity = activity;

    expect(lifecycle.name).toEqual('agentLifecycle');
    expect(activity.valueType).toEqual('AgenticUserIdentityCreated');
    expect(activity.value.manager?.userId).toEqual('manager-id');
  });

  it('models identity update payloads', () => {
    const activity: IAgenticUserIdentityUpdatedEventActivity = {
      ...baseActivity,
      valueType: 'AgenticUserIdentityUpdated',
      value: {
        tenantId: TENANT_ID,
        agenticUserId: AGENTIC_USER_ID,
        agenticAppInstanceId: AGENTIC_APP_INSTANCE_ID,
        agentIdentityBlueprintId: BLUEPRINT_ID,
        eventType: 'agenticUserIdentityUpdated',
        updatedProperty: {
          propertyName: 'UserPrincipalName',
          propertyValue: 'agent@example.test',
        },
        version: 4,
      },
    };

    expect(activity.value.updatedProperty.propertyName).toEqual('UserPrincipalName');
    expect(activity.value.version).toEqual(4);
  });

  it('models manager update payloads', () => {
    const activity: IAgenticUserManagerUpdatedEventActivity = {
      ...baseActivity,
      valueType: 'AgenticUserManagerUpdated',
      value: {
        tenantId: TENANT_ID,
        agenticUserId: AGENTIC_USER_ID,
        agenticAppInstanceId: AGENTIC_APP_INSTANCE_ID,
        agentIdentityBlueprintId: BLUEPRINT_ID,
        eventType: 'agenticUserManagerUpdated',
        manager: { managerId: 'manager-id' },
        version: 6,
      },
    };

    expect(activity.value.manager?.managerId).toEqual('manager-id');
  });

  it('preserves unknown lifecycle payloads for the general handler', () => {
    const activity: IUnknownAgentLifecycleEventActivity = {
      ...baseActivity,
      valueType: 'FutureAgentLifecycleEvent',
      value: {
        eventType: 'futureAgentLifecycleEvent',
        agenticUserId: AGENTIC_USER_ID,
        extraField: 'extra-value',
      },
    };

    const lifecycle: AgentLifecycleEventActivity = activity;

    expect(lifecycle.valueType).toEqual('FutureAgentLifecycleEvent');
    expect(activity.value.extraField).toEqual('extra-value');
  });
});
