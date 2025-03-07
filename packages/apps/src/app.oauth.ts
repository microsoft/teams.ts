import { AxiosError } from 'axios';
import {
  cardAttachment,
  ConversationAccount,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  TokenExchangeInvokeResponse,
  TokenExchangeState,
} from '@microsoft/spark.api';
import * as graph from '@microsoft/spark.graph';

import { App } from './app';
import { ISenderPlugin } from './types';
import * as contexts from './contexts';

export function onSignIn(this: App, ctx: contexts.IActivityContext, sender: ISenderPlugin) {
  const { appId, api, ref, activity } = ctx;

  return async (name = 'graph', text = 'Please Sign In...') => {
    const convo = { ...ref };

    try {
      const res = await api.users.token.get({
        channelId: activity.channelId,
        userId: activity.from.id,
        connectionName: name,
      });

      return res.token;
    } catch (err) {
      // noop
    }

    // create new 1:1 conversation with user to do SSO
    // because groupchats don't support it.
    if (activity.conversation.isGroup) {
      const res = await api.conversations.create({
        tenantId: activity.conversation.tenantId,
        isGroup: false,
        bot: { id: activity.recipient.id },
        members: [activity.from],
      });

      await sender.onSend(
        {
          type: 'message',
          text,
        },
        ref
      );

      convo.conversation = { id: res.id } as ConversationAccount;
    }

    const tokenExchangeState: TokenExchangeState = {
      connectionName: name,
      conversation: convo,
      relatesTo: activity.relatesTo,
      msAppId: appId,
    };

    const state = Buffer.from(JSON.stringify(tokenExchangeState)).toString('base64');
    const resource = await api.bots.signIn.getResource({ state });

    await sender.onSend(
      {
        type: 'message',
        inputHint: 'acceptingInput',
        recipient: activity.from,
        attachments: [
          cardAttachment('oauth', {
            text,
            connectionName: name,
            tokenExchangeResource: resource.tokenExchangeResource,
            tokenPostResource: resource.tokenPostResource,
            buttons: [
              {
                type: 'signin',
                title: 'Sign In',
                value: resource.signInLink,
              },
            ],
          }),
        ],
      },
      ref
    );
  };
}

export function onSignOut(this: App, { activity, api }: contexts.IActivityContext) {
  return async (name = 'graph') => {
    await api.users.token.signOut({
      channelId: activity.channelId,
      userId: activity.from.id,
      connectionName: name,
    });
  };
}

export async function onTokenExchange(
  this: App,
  ctx: contexts.IMiddlewareContext<ISignInTokenExchangeInvokeActivity>
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
      if (err.status !== 404 && err.status !== 400) {
        this.onActivityError({ ...ctx, err });
      }

      if (err.status === 404) {
        return { status: 404 };
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
  ctx: contexts.IMiddlewareContext<ISignInVerifyStateInvokeActivity>
) {
  const { plugin, api, activity, storage } = ctx;
  const key = `auth/${activity.conversation.id}/${activity.from.id}`;

  try {
    const connectionName: string | undefined = await storage.get(key);

    if (!connectionName || !activity.value.state) {
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
      if (err.status !== 404 && err.status !== 400) {
        this.onActivityError({ ...ctx, err, plugin });
      }
    }

    return { status: 412 };
  }
}
