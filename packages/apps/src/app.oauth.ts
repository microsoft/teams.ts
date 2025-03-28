import {
  IActivity,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  TokenExchangeInvokeResponse,
} from '@microsoft/spark.api';
import * as graph from '@microsoft/spark.graph';
import { AxiosError } from 'axios';

import { IStorage } from '@microsoft/spark.common';
import { App } from './app';
import * as contexts from './contexts';

function buildOauthFlowKey(conversationId: string, userId: string): string {
  return `auth/${conversationId}/${userId}`;
}

export async function saveOauthFlowState(
  storage: IStorage,
  activity: IActivity,
  connectionName: string
) {
  const key = buildOauthFlowKey(activity.conversation.id, activity.from.id);
  await storage.set(key, connectionName);
}

export async function getOauthFlowState(
  storage: IStorage,
  activity: IActivity
): Promise<string | undefined> {
  const key = buildOauthFlowKey(activity.conversation.id, activity.from.id);
  return await storage.get(key);
}

export async function deleteOauthFlowState(storage: IStorage, activity: IActivity): Promise<void> {
  const key = buildOauthFlowKey(activity.conversation.id, activity.from.id);
  await storage.delete(key);
}

export async function onTokenExchange(
  this: App,
  ctx: contexts.IActivityContext<ISignInTokenExchangeInvokeActivity>
) {
  const { api, activity, storage } = ctx;

  try {
    await saveOauthFlowState(storage, activity, activity.value.connectionName);
    const token = await api.users.token.exchange({
      channelId: activity.channelId,
      userId: activity.from.id,
      connectionName: activity.value.connectionName,
      exchangeRequest: {
        token: activity.value.token,
      },
    });

    ctx.api.user = new graph.Client(
      this.client.clone({
        token: token.token,
      })
    );

    this.events.emit('signin', { ...ctx, token });
    return { status: 200 };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.status !== 404 && error.status !== 400 && error.status !== 412) {
        this.events.emit('error', { error, activity });
        return { status: error.status || 500 };
      }
    }

    return {
      status: 412,
      body: {
        id: activity.value.id,
        connectionName: activity.value.connectionName,
        failureDetail: 'unable to exchange token...',
      } as TokenExchangeInvokeResponse,
    };
  }
}

export async function onVerifyState(
  this: App,
  ctx: contexts.IActivityContext<ISignInVerifyStateInvokeActivity>
) {
  const { log, api, activity, storage } = ctx;

  try {
    const connectionName: string | undefined = await getOauthFlowState(storage, activity);

    if (!connectionName || !activity.value.state) {
      log.warn(
        `auth state not found for conversation "${activity.conversation.id}" and user "${activity.from.id}"`
      );
      return { status: 404 };
    }

    const token = await api.users.token.get({
      channelId: activity.channelId,
      userId: activity.from.id,
      connectionName,
      code: activity.value.state,
    });

    ctx.api.user = new graph.Client(
      this.client.clone({
        token: token.token,
      })
    );

    await deleteOauthFlowState(storage, activity);
    this.events.emit('signin', { ...ctx, token });
    return { status: 200 };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.status !== 404 && error.status !== 400 && error.status !== 412) {
        this.events.emit('error', { error, activity });
        return { status: error.status || 500 };
      }
    }

    return { status: 412 };
  }
}
