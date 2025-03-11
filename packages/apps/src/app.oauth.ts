import { AxiosError } from 'axios';
import {
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  TokenExchangeInvokeResponse,
} from '@microsoft/spark.api';
import * as graph from '@microsoft/spark.graph';

import { App } from './app';
import * as contexts from './contexts';

export async function onTokenExchange(
  this: App,
  ctx: contexts.IActivityContext<ISignInTokenExchangeInvokeActivity>
) {
  const { api, activity, storage } = ctx;
  const key = `auth/${activity.conversation.id}/${activity.from.id}`;

  try {
    await storage.set(key, activity.value.connectionName);
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
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.status !== 404 && err.status !== 400 && err.status !== 412) {
        this.onActivityError({ ...ctx, err });
        return { status: err.status || 500 };
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
  const { plugin, log, api, activity, storage } = ctx;
  const key = `auth/${activity.conversation.id}/${activity.from.id}`;

  try {
    const connectionName: string | undefined = await storage.get(key);

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

    await storage.delete(key);
    this.events.emit('signin', { ...ctx, token });
    return { status: 200 };
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.status !== 404 && err.status !== 400 && err.status !== 412) {
        this.onActivityError({ ...ctx, err, plugin });
        return { status: err.status || 500 };
      }
    }

    return { status: 412 };
  }
}
