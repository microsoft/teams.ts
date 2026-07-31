/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 *
 * Reactive echo agent demonstrating AgenticIdentity messaging.
 *
 * Incoming messages are handled normally; the inbound service URL and
 * AgenticIdentity scope is carried by the context/API layer automatically.
 */

import type { AgentLifecycleEventActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger, type ILogger } from '@microsoft/teams.common';

const app = new App({
  logger: new ConsoleLogger('@examples/agentic-blueprint',),
});

function logLifecycleEnvelope(
  activity: AgentLifecycleEventActivity,
  handlerName: string,
  log: ILogger
) {
  log.info(`[AgenticIdentity lifecycle:${handlerName}] envelope`, {
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

  log.info(`[AgenticIdentity lifecycle:${handlerName}] value`, {
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
  log.info('[AgenticIdentity lifecycle:identity_created] details', {
    expirationDateTime: activity.value.expirationDateTime,
    manager: activity.value.manager,
  });
});

app.on('agenticUserIdentityUpdated', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'identity_updated', log);
  log.info('[AgenticIdentity lifecycle:identity_updated] details', {
    updatedProperty: activity.value.updatedProperty,
  });
});

app.on('agenticUserManagerUpdated', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'manager_updated', log);
  log.info('[AgenticIdentity lifecycle:manager_updated] details', {
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
  log.info('[AgenticIdentity lifecycle:deleted] details', {
    deletionReason: activity.value.deletionReason,
  });
});

app.on('agenticUserUndeleted', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'undeleted', log);
});

app.on('agenticUserWorkloadOnboardingUpdated', ({ activity, log }) => {
  logLifecycleEnvelope(activity, 'workload_onboarding_updated', log);
  log.info('[AgenticIdentity lifecycle:workload_onboarding_updated] details', {
    workloadName: activity.value.workloadName,
    workloadOnboardingState: activity.value.workloadOnboardingState,
  });
});

app.on('message', async ({ send, reply, activity, api, log }) => {
  log.info(`[AgenticIdentity reactive] Message received: ${activity.text}`);
  log.info(`[AgenticIdentity reactive] From: ${activity.from?.id}`);
  log.info(`[AgenticIdentity reactive] Recipient: ${activity.recipient?.id}`);

  await reply({ type: 'typing' });

  const text = activity.text?.toLowerCase() ?? '';

  if (text.includes('react')) {
    await api.conversations.addReaction(
      activity.conversation.id,
      activity.id,
      'like'
    );
    await reply('Added a like reaction to your message.');
    return;
  }

  if (text.includes('reply')) {
    await reply('Hello! How can I assist you today?');
  } else {
    await send(`You said "${activity.text}"`);
  }
});

app.start().catch(console.error);
