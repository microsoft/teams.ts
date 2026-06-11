import { ActivityLike } from '@microsoft/teams.api';

import { App } from './app';
import { IFunctionContext } from './contexts';
import { RemoteFunctionValidator } from './middleware/auth/remote-function-validator';
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

  // Create the remote function validator once
  const validator = entraTokenValidator
    ? new RemoteFunctionValidator(entraTokenValidator, log)
    : null;

  this.server.registerRoute('POST', `/api/functions/${name}`, async ({ body, headers }) => {
    // Validate JWT token and extract context
    if (!validator) {
      log.debug('unauthorized - no token validator configured');
      return { status: 401, body: 'unauthorized' };
    }

    const context = await validator.check(headers);
    if (!context) {
      return { status: 401, body: 'unauthorized' };
    }

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
      data: body as TData,
      getCurrentConversationId,
      send,
    });

    return { status: 200, body: data };
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
  path: string
) {
  this.server.serveStatic(`/tabs/${name}`, path);

  return this;
}
