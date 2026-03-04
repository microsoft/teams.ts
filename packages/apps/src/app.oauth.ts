import { AxiosError } from 'axios';

import {
  ISignInFailureInvokeActivity,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  TokenExchangeInvokeResponse,
} from '@microsoft/teams.api';
import * as graph from '@microsoft/teams.graph';

import { App } from './app';
import * as contexts from './contexts';
import { IPlugin } from './types';
import { PluginAdditionalContext } from './types/app-routing';

export async function onTokenExchange<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  ctx: contexts.IActivityContext<ISignInTokenExchangeInvokeActivity, PluginAdditionalContext<TPlugin>>
) {
  const { api, activity, log, next } = ctx;

  if (this.oauth.defaultConnectionName !== activity.value.connectionName) {
    log.warn(
      `default connection name "${this.oauth.defaultConnectionName}" does not match activity connection name "${activity.value.connectionName}"`
    );
  }

  try {
    const token = await api.users.token.exchange({
      channelId: activity.channelId,
      userId: activity.from.id,
      connectionName: activity.value.connectionName,
      exchangeRequest: {
        token: activity.value.token,
      },
    });

    ctx.userGraph = new graph.Client(
      this.client.clone({
        token: token.token,
      })
    );

    this.events.emit('signin', { ...ctx, token, isSignedIn: true });
    next(ctx);
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

export async function onVerifyState<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  ctx: contexts.IActivityContext<ISignInVerifyStateInvokeActivity, PluginAdditionalContext<TPlugin>>
) {
  const { log, api, activity, next } = ctx;

  try {
    if (!activity.value.state) {
      log.warn(
        `auth state not found for conversation "${activity.conversation.id}" and user "${activity.from.id}"`
      );
      return { status: 404 };
    }

    const token = await api.users.token.get({
      channelId: activity.channelId,
      userId: activity.from.id,
      connectionName: this.oauth.defaultConnectionName,
      code: activity.value.state,
    });

    ctx.userGraph = new graph.Client(
      this.client.clone({
        token: token.token,
      })
    );

    this.events.emit('signin', { ...ctx, token, isSignedIn: true });
    next(ctx);
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

/**
 * Default handler for signin/failure invoke activities.
 *
 * Teams sends a signin/failure invoke when SSO token exchange fails
 * (e.g., due to a misconfigured Entra app registration). This handler
 * logs the failure details and emits an error event so developers are
 * notified rather than having the failure silently swallowed.
 *
 * Known failure codes (sent by the Teams client):
 * - `installappfailed`: Failed to install the app in the user's personal scope (non-silent).
 * - `authrequestfailed`: The SSO auth request failed after app installation (non-silent).
 * - `installedappnotfound`: The bot app is not installed for the user or group chat.
 * - `invokeerror`: A generic error occurred during the SSO invoke flow.
 * - `resourcematchfailed`: The token exchange resource URI on the OAuthCard does not
 *   match the Application ID URI in the Entra app registration's "Expose an API" section.
 * - `oauthcardnotvalid`: The bot's OAuthCard could not be parsed.
 * - `tokenmissing`: AAD token acquisition failed.
 * - `userconsentrequired`: The user needs to consent (handled via OAuth card fallback,
 *   does not typically reach the bot).
 * - `interactionrequired`: User interaction is required (handled via OAuth card fallback,
 *   does not typically reach the bot).
 */
export async function onSignInFailure<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  ctx: contexts.IActivityContext<ISignInFailureInvokeActivity, PluginAdditionalContext<TPlugin>>
) {
  const { log, activity, next } = ctx;
  const { code, message } = activity.value;

  log.warn(
    `sign-in failed for user "${activity.from.id}" in conversation "${activity.conversation.id}": ${code} — ${message}. ` +
    'If the code is \'resourcematchfailed\', verify that your Entra app registration has \'Expose an API\' configured ' +
    'with the correct Application ID URI matching your OAuth connection\'s Token Exchange URL.'
  );

  this.events.emit('error', {
    error: new Error(`Sign-in failure: ${code} — ${message}`),
    activity,
  });

  next(ctx);
  return { status: 200 };
}
