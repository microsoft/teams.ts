import readline from 'readline';
import express from 'express';

import { ConsoleLogger, ILogger, EventEmitter } from '@microsoft/spark.common';
import {
  IPluginEvents,
  IPluginInitEvent,
  IPluginStartEvent,
  ISender,
  Plugin,
} from '@microsoft/spark.apps';
import {
  ActivityParams,
  ConversationReference,
  MessageActivity,
  IToken,
} from '@microsoft/spark.api';

import pkg from '../../package.json';

/**
 * Console Receiver Options
 */
export type ConsoleOptions = {
  /**
   * input stream
   * defaults to `process.stdin`
   */
  readonly stream?: NodeJS.ReadableStream;
};

/**
 * Can receive activities via the console
 */
@Plugin({
  name: 'console',
  version: pkg.version,
})
export class ConsolePlugin implements ISender {
  readonly events: EventEmitter<IPluginEvents>;

  protected log: ILogger;
  protected reader: readline.Interface;
  protected express: express.Application;

  constructor(protected options: ConsoleOptions = {}) {
    this.log = new ConsoleLogger('@spark/app/console');
    this.express = express();
    this.reader = readline.createInterface({
      input: this.options.stream || process.stdin,
      terminal: false,
    });

    this.express.get('/auth/redirect', this.onAuthRedirect.bind(this));
    this.events = new EventEmitter();
  }

  onInit({ logger }: IPluginInitEvent) {
    this.log = logger.child('console');
  }

  onStart({ port }: IPluginStartEvent) {
    this.express.listen(port + 1, () => {
      this.reader.on('line', async (text) => {
        const activity = new MessageActivity(text)
          .withChannelId('msteams')
          .withConversation({
            id: '1',
            conversationType: 'oneOnOne',
            isGroup: false,
            name: '',
          })
          .withFrom({
            id: '1',
            name: 'user',
            role: 'user',
          })
          .withRecipient({
            id: '2',
            name: 'bot',
            role: 'bot',
          });

        const token: IToken = {
          appId: '1',
          from: 'azure',
          fromId: 'azure',
          serviceUrl: '',
        };

        this.events.emit('activity', {
          sender: this,
          token,
          activity,
        });
      });
    });
  }

  async send(activity: ActivityParams, _ref: ConversationReference) {
    if (typeof activity === 'string') {
      activity = {
        type: 'message',
        text: activity,
      };
    }

    if (activity.type === 'message' && activity.text) {
      this.log.info(activity.text);
    }

    return { id: '1', ...activity };
  }

  createStream(_: ConversationReference) {
    return {
      events: new EventEmitter(),
      emit: () => {},
      close: () => {},
    };
  }

  protected onAuthRedirect(
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) {
    console.log(req.url);
    console.log(req.query);
    res.status(200).send();
  }
}
