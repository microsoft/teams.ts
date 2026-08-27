import {
  ISignInFailureInvokeActivity,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  SignInFailure,
  TokenResponse,
} from '@microsoft/teams.api';
import { Client as HttpClient, EventEmitter } from '@microsoft/teams.common';
import { Client as GraphClient } from '@microsoft/teams.graph';

import * as contexts from '../contexts';
import {
  APP_OAUTH_OPERATION,
  APP_OAUTH_RESULT,
  APP_SPAN_NAMES,
} from '../diagnostics/constants';
import { AppEvents, IPlugin } from '../types';
import { PluginAdditionalContext } from '../types/app-routing';

import { traceOAuthOperation } from './telemetry';

import { OAuthFlow } from '.';

/**
 * Default handlers for the SSO sign-in invoke activities
 * (`signin/tokenExchange`, `signin/verifyState`, `signin/failure`).
 *
 * Previously a set of `this: App`-bound free functions; now a collaborator the
 * {@link App} constructs and registers as system routes. The handlers are arrow
 * class fields so they can be passed directly as route callbacks.
 */
export class OauthHandlers<TPlugin extends IPlugin = IPlugin> {
  constructor(
    private readonly getFlows: () => readonly OAuthFlow<TPlugin>[],
    private readonly client: HttpClient,
    private readonly events: EventEmitter<AppEvents<TPlugin>>,
    private readonly graphBaseUrl?: string
  ) { }

  onTokenExchange = async (
    ctx: contexts.IActivityContext<ISignInTokenExchangeInvokeActivity, PluginAdditionalContext<TPlugin>>
  ) => {
    const { activity } = ctx;
    const value = activity.value;
    const flow = this.findFlow(value?.connectionName);

    if (!value || !flow) {
      return { status: 400 };
    }

    const response = await flow.exchangeToken(
      ctx,
      value,
      token => this.completeSignIn(flow, ctx, token),
      error => this.events.emit('error', { error, activity })
    );

    return response;
  };

  onVerifyState = async (
    ctx: contexts.IActivityContext<ISignInVerifyStateInvokeActivity, PluginAdditionalContext<TPlugin>>
  ) => {
    const { activity } = ctx;
    const flows = this.getOrderedFlows(ctx, false);

    for (const flow of flows) {
      const response = await flow.verifyState(
        ctx,
        activity.value?.state,
        token => this.completeSignIn(flow, ctx, token),
        error => this.events.emit('error', { error, activity })
      );

      if (response) {
        return response;
      }
    }

    return { status: 404 };
  };

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
  onSignInFailure = async (
    ctx: contexts.IActivityContext<ISignInFailureInvokeActivity, PluginAdditionalContext<TPlugin>>
  ) => {
    const { log, activity, next } = ctx;
    const failure: SignInFailure = activity.value ?? {};
    const { code, message } = failure;
    const pendingFlows = this.getOrderedFlows(ctx, true).filter(
      flow => flow.getPending(ctx, true) !== undefined
    );
    const flows = pendingFlows.length > 0 ? [pendingFlows[0]] : this.getFlows();
    const connectionName = flows[0]?.connectionName ?? '';

    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      connectionName,
      APP_OAUTH_OPERATION.signinFailure,
      async (_span, telemetry) => {
        telemetry.failureCode = code;

        log.warn(
          `sign-in failed for user "${activity.from.id}" in conversation "${activity.conversation.id}": ${code ?? 'unknown'} — ${message ?? 'unknown'}. ` +
          'If the code is \'resourcematchfailed\', verify that your Entra app registration has \'Expose an API\' configured ' +
          'with the correct Application ID URI matching your OAuth connection\'s Token Exchange URL.'
        );

        for (const flow of flows) {
          flow.clearPending(ctx);
          await flow.fail(ctx, failure);
        }

        this.events.emit('error', {
          error: new Error(`Sign-in failure: ${code ?? 'unknown'} — ${message ?? 'unknown'}`),
          activity,
        });

        await next(ctx);
        telemetry.result = APP_OAUTH_RESULT.notified;
        telemetry.responseStatus = 200;
        return { status: 200 };
      }
    );
  };

  private findFlow(connectionName?: string): OAuthFlow<TPlugin> | undefined {
    if (!connectionName) {
      return undefined;
    }

    const normalized = connectionName.toLowerCase();
    return this.getFlows().find(flow => flow.connectionName.toLowerCase() === normalized);
  }

  private applyUserToken(ctx: contexts.IActivityContext, token: TokenResponse): void {
    ctx.userToken = token.token;
    ctx.isSignedIn = true;
    ctx.userGraph = new GraphClient(
      this.client.clone({
        token: token.token,
      }),
      { baseUrlRoot: this.graphBaseUrl }
    );
  }

  private async completeSignIn(
    flow: OAuthFlow<TPlugin>,
    ctx: contexts.IActivityContext<
      ISignInTokenExchangeInvokeActivity | ISignInVerifyStateInvokeActivity,
      PluginAdditionalContext<TPlugin>
    >,
    token: TokenResponse
  ): Promise<void> {
    this.applyUserToken(ctx, token);
    await flow.complete(ctx, token);
    this.events.emit('signin', {
      ...ctx,
      connectionName: flow.connectionName,
      token,
      isSignedIn: true,
    });
    await ctx.next(ctx);
  }

  private getOrderedFlows(
    ctx: contexts.IActivityContext,
    ssoOnly: boolean
  ): OAuthFlow<TPlugin>[] {
    return [...this.getFlows()].sort((left, right) =>
      (right.getPending(ctx, ssoOnly) ?? 0) -
      (left.getPending(ctx, ssoOnly) ?? 0)
    );
  }

}
