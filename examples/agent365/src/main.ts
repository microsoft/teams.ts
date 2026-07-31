/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 * REACTIVE flow: an echo agent that responds with an AgenticIdentity.
 *
 * Incoming messages are handled normally; the inbound service URL and
 * AgenticIdentity scope is carried by the context/API layer automatically.
 */

import { InvokeAgentScope } from '@microsoft/opentelemetry';
import { getAgenticIdentity } from '@microsoft/teams.api';
import type { AgentLifecycleEventActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger, type ILogger } from '@microsoft/teams.common';

import { useAgent365Exporter } from './observability';

const app = new App({
  logger: new ConsoleLogger('@examples/agentic-blueprint'),
  telemetry: {
    agent365: {
      // Identifiers are populated by default; names and email addresses are
      // opt-in per field.
      include: ['senderName', 'senderEmail', 'agentName', 'agentEmail', 'agentDescription'],
      operationSource: 'Microsoft.Teams.Apps',
    },
  },
});

// Let the Agent365 exporter mint its access tokens through this app.
useAgent365Exporter(app.tokenProvider);

function logLifecycleEnvelope(
  activity: AgentLifecycleEventActivity,
  handlerName: string,
  log: ILogger
) {
  log.info(`[AgenticUser lifecycle:${handlerName}] envelope`, {
    name: activity.name,
    valueType: activity.valueType,
    eventType: activity.value.eventType,
    channelId: activity.channelId,
    from: activity.from.id,
    recipientIdentity: {
      agenticUserId: activity.recipient.agenticUserId,
      agenticAppId: activity.recipient.agenticAppId,
      agenticAppBlueprintId: activity.recipient.agenticAppBlueprintId,
      tenantId: activity.recipient.tenantId,
    },
  });

  log.info(`[AgenticUser lifecycle:${handlerName}] value`, {
    tenantId: activity.value.tenantId,
    agenticUserId: activity.value.agenticUserId,
    agenticAppInstanceId: activity.value.agenticAppInstanceId,
    agentIdentityBlueprintId: activity.value.agentIdentityBlueprintId,
    version: activity.value.version,
  });
}

app.on('agentLifecycle', async (ctx) => {
  logLifecycleEnvelope(ctx.activity, 'all', ctx.log);
  await ctx.next();
});

app.on('agenticUserIdentityCreated', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'identity_created', log);
  log.info('[AgenticUser lifecycle:identity_created] details', {
    expirationDateTime: activity.value.expirationDateTime,
    manager: activity.value.manager,
  });
});

app.on('agenticUserIdentityUpdated', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'identity_updated', log);
  log.info('[AgenticUser lifecycle:identity_updated] details', {
    updatedProperty: activity.value.updatedProperty,
  });
});

app.on('agenticUserManagerUpdated', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'manager_updated', log);
  log.info('[AgenticUser lifecycle:manager_updated] details', {
    manager: activity.value.manager,
  });
});

app.on('agenticUserEnabled', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'enabled', log);
});

app.on('agenticUserDisabled', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'disabled', log);
});

app.on('agenticUserDeleted', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'deleted', log);
  log.info('[AgenticUser lifecycle:deleted] details', {
    deletionReason: activity.value.deletionReason,
  });
});

app.on('agenticUserUndeleted', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'undeleted', log);
});

app.on('agenticUserWorkloadOnboardingUpdated', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'workload_onboarding_updated', log);
  log.info('[AgenticUser lifecycle:workload_onboarding_updated] details', {
    workloadName: activity.value.workloadName,
    workloadOnboardingState: activity.value.workloadOnboardingState,
  });
});

app.on('message', async ({ send, reply, activity, api, log }) => {
  log.info('[reactive] message received', {
    activityId: activity.id,
    conversationId: activity.conversation.id,
    from: activity.from?.id,
    recipient: activity.recipient?.id,
  });

  // The scope supplies only what baggage cannot carry: message content, span
  // shape, and server address. The SDK put the identity ids into baggage for
  // this turn, and the distro's processor copies them onto the span.
  const identity = getAgenticIdentity(activity.recipient);
  const agenticAppId = identity?.agenticAppId;
  const tenantId = identity?.tenantId ?? activity.conversation.tenantId;

  const serverAddress = (() => {
    try {
      return activity.serviceUrl ? new URL(activity.serviceUrl).host : undefined;
    } catch {
      return undefined;
    }
  })();

  const scope =
    agenticAppId && tenantId
      ? InvokeAgentScope.start(
        { content: activity.text ?? '' },
        serverAddress ? { endpoint: { host: serverAddress } } : {},
        {
          // `agentId` is typed required but sourced from baggage at runtime;
          // `tenantId` is typed optional but the constructor throws without it.
          agentId: agenticAppId,
          tenantId,
        }
      )
      : undefined;

  const handle = async (): Promise<void> => {
    await reply({ type: 'typing' });

    const text = activity.text?.toLowerCase() ?? '';
    let responseText: string;

    if (text.includes('react')) {
      await api.conversations.addReaction(activity.conversation.id, activity.id, 'like');
      responseText = 'Added a like reaction to your message.';
      await reply(responseText);
    } else if (text.includes('reply')) {
      responseText = 'Hello! How can I assist you today?';
      await reply(responseText);
    } else {
      responseText = `You said "${activity.text}"`;
      await send(responseText);
    }

    scope?.recordOutputMessages(responseText);
  };

  if (scope) {
    try {
      await scope.withActiveSpanAsync(handle);
    } finally {
      scope.dispose();
    }
  } else {
    log.warn('[reactive] no agentic identity on the activity; skipping Agent365 scope');
    await handle();
  }
});

app.start().catch(console.error);
