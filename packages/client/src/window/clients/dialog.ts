import { WindowClient } from '../window-client';

import { DialogSize } from '../types/dialog';
import { dialog } from '../types';

/**
 * Shared Dialog Properties
 */
type BaseDialogParams = {
  /**
   * Title of the dialog module.
   */
  title?: string;

  /**
   * The requested size of the dialog
   */
  size: DialogSize;
};

/**
 * Data structure to describe dialog information needed to open an Adaptive Card-based dialog.
 */
export type AdaptiveCardDialogParams = BaseDialogParams & {
  /**
   * JSON defining an Adaptive Card.
   */
  card: string;
};

/**
 * Data structure to describe dialog information needed to open a bot-based Adaptive Card-based dialog.
 */
export type BotAdaptiveCardDialogParams = AdaptiveCardDialogParams & {
  /**
   * Specifies a bot ID to send the result of the user's interaction with the dialog module.
   * The bot will receive a task/complete invoke event with a JSON object
   * in the event payload.
   */
  completionBotId: string;
};

/**
 * Data structure to describe dialog information needed to open a url-based dialog.
 */
export type UrlDialogParams = BaseDialogParams & {
  /**
   * The url to be rendered in the webview/iframe.
   *
   * @remarks
   * The domain of the url must match at least one of the
   * valid domains specified in the [validDomains block](https://learn.microsoft.com/microsoftteams/platform/resources/schema/manifest-schema#validdomains) of the app manifest
   */
  url: string;

  /**
   * If client doesnt support the URL, the URL that needs to be opened in the browser.
   */
  fallbackUrl?: string;
};

/**
 * Data structure to describe dialog information needed to open a bot based dialog.
 */
export type BotUrlDialogParams = UrlDialogParams & {
  /**
   * Specifies a bot ID to send the result of the user's interaction with the task module.
   * The bot will receive a task/complete invoke event with a JSON object
   * in the event payload.
   */
  completionBotId: string;
};

export type DialogParams =
  | AdaptiveCardDialogParams
  | BotAdaptiveCardDialogParams
  | UrlDialogParams
  | BotUrlDialogParams;

export class DialogClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async open(params: DialogParams) {
    const [err, result] = await this.window.send<[string | undefined, string | object]>(
      'tasks.startTask',
      {
        title: params.title,
        height: params.size.height || 'small',
        width: params.size.width || 'small',
        url: 'url' in params ? params.url : undefined,
        fallbackUrl: 'fallbackUrl' in params ? params.fallbackUrl : undefined,
        card: 'card' in params ? params.card : undefined,
        completionBotId: 'completionBotId' in params ? params.completionBotId : undefined,
      } as dialog.DialogInfo
    );

    return { err, result };
  }

  async submit(result?: string | object, appIds?: string | string[]) {
    await this.window.send(
      'tasks.completeTask',
      result,
      appIds ? (Array.isArray(appIds) ? appIds : [appIds]) : []
    );
  }

  async update(size: dialog.DialogSize) {
    await this.window.send('tasks.updateTask', size);
  }
}
