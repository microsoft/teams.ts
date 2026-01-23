import { ActivityLike } from '@microsoft/teams.api';

import { App } from './app';
import { IClientContext, IFunctionContext } from './contexts';
import * as manifest from './manifest';
import { IPlugin } from './types';
import { functionContext } from './utils';

/**
 * add/update a function that can be called remotely
 * @param name The unique function name
 * @param cb The callback to handle the function
 */
export function func<TPlugin extends IPlugin, TData>(
  this: App<TPlugin>,
  name: string,
  cb: (context: IFunctionContext<TData>) => any | Promise<any>
) {
  const log = this.log.child('functions').child(name);
  const entraTokenValidator = this.entraTokenValidator;

  this.server.registerRouteHandler({
    path: `/api/functions/${name}`,
    handler: async (helpers) => {
      const { body, headers } = helpers.extractRequestData();

      // Extract and validate JWT token
      const appSessionId = headers['x-teams-app-session-id'];
      const pageId = headers['x-teams-page-id'];
      const authorization = headers['authorization']?.split(' ');
      const authToken =
        authorization?.length === 2 && authorization[0].toLowerCase() === 'bearer'
          ? authorization[1]
          : '';

      const tokenPayload = !entraTokenValidator
        ? null
        : await entraTokenValidator.validateAccessToken(authToken);

      if (
        !pageId ||
        !appSessionId ||
        !authToken ||
        !entraTokenValidator ||
        !tokenPayload
      ) {
        log.debug('unauthorized');
        helpers.sendResponse({ status: 401, body: 'unauthorized' });
        return;
      }

      const context: IClientContext = {
        appId: tokenPayload?.['appId'],
        appSessionId,
        authToken,
        channelId: headers['x-teams-channel-id'],
        chatId: headers['x-teams-chat-id'],
        meetingId: headers['x-teams-meeting-id'],
        messageId: headers['x-teams-message-id'],
        pageId,
        subPageId: headers['x-teams-sub-page-id'],
        teamId: headers['x-teams-team-id'],
        tenantId: tokenPayload['tid'],
        userId: tokenPayload['oid'],
        userName: tokenPayload['name'],
      };

      const getCurrentConversationId =
        functionContext.getConversationIdResolver(
          this,
          log.child('getCurrentConversationId'),
          context
        );

      const send = async (activity: ActivityLike) => {
        const conversationId = await getCurrentConversationId();
        return !conversationId
          ? null
          : await this.send(conversationId, activity);
      };

      const data = await cb({
        ...context,
        log,
        api: this.api,
        appGraph: this.graph,
        data: body,
        getCurrentConversationId,
        send,
      });

      helpers.sendResponse({ status: 200, body: data });
    }
  });

  return this;
}

/**
 * add/update a static tab.
 * the tab will be hosted at
 * `http://localhost:{{PORT}}/tabs/{{name}}` or `https://{{BOT_DOMAIN}}/tabs/{{name}}`
 * @remark scopes default to `personal`
 * @param name A unique identifier for the entity which the tab displays.
 * @param path The path to the web `dist` folder.
 */
export function tab<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  name: string,
  path: string,
  options?: Partial<Omit<manifest.StaticTab, 'contentUrl' | 'entityId'>>
) {
  if (!this._manifest.staticTabs) {
    this._manifest.staticTabs = [];
  }

  const i = this._manifest.staticTabs.findIndex((t) => t.entityId === name);
  const tab: manifest.StaticTab = {
    entityId: name,
    contentUrl: `https://\${{BOT_DOMAIN}}/tabs/${name}`,
    scopes: ['personal'],
    ...options,
  };

  if (i > -1) {
    this._manifest.staticTabs[i] = tab;
  } else {
    this._manifest.staticTabs.push(tab);
  }

  this.server.serveStatic(`/tabs/${name}`, path);

  return this;
}

/**
 * add a configurable tab
 * @remark scopes defaults to `team`
 * @param url The url to use when configuring the tab.
 */
export function configTab<TPlugin extends IPlugin>(
  this: App<TPlugin>,
  url: string,
  options?: Partial<Omit<manifest.ConfigurableTab, 'configurationUrl'>>
) {
  if (!this._manifest.configurableTabs) {
    this._manifest.configurableTabs = [];
  }

  this._manifest.configurableTabs.push({
    configurationUrl: url,
    scopes: ['team'],
    ...options,
  });

  return this;
}
