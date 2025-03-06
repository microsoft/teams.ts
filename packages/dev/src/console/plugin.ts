import readline from 'readline';
import express from 'express';

import { ConsoleLogger, Logger, EventEmitter, EventHandler } from '@microsoft/spark.common';
import { App, Plugin, PluginEvents } from '@microsoft/spark.apps';
import {
  ActivityParams,
  ConversationReference,
  IMessageActivity,
  IToken,
} from '@microsoft/spark.api';

/**
 * Console Receiver Options
 */
export interface ConsoleOptions {
  /**
   * input stream
   * defaults to `process.stdin`
   */
  readonly stream?: NodeJS.ReadableStream;
}

/**
 * Can receive activities via the console
 */
export class ConsolePlugin implements Plugin {
  readonly name = 'console';

  protected log: Logger;
  protected reader: readline.Interface;
  protected express: express.Application;
  protected events: EventEmitter<PluginEvents>;

  constructor(protected options: ConsoleOptions = {}) {
    this.log = new ConsoleLogger('@spark/app/http');
    this.express = express();
    this.reader = readline.createInterface({
      input: this.options.stream || process.stdin,
      terminal: false,
    });

    this.express.get('/auth/redirect', this.onAuthRedirect.bind(this));
    this.events = new EventEmitter();
  }

  on<Name extends keyof PluginEvents>(name: Name, callback: EventHandler<PluginEvents[Name]>) {
    this.events.on(name, callback);
  }

  onInit(app: App) {
    this.log = app.log.child('console');
  }

  async onStart(port = 3000) {
    this.express.listen(port + 1, () => {
      this.reader.on('line', async (text) => {
        const activity: IMessageActivity = {
          id: '1',
          type: 'message',
          text,
          channelId: 'msteams',
          conversation: {
            id: '1',
            conversationType: 'oneOnOne',
            isGroup: false,
            name: '',
          },
          from: {
            id: '1',
            name: 'user',
            role: 'user',
          },
          recipient: {
            id: '2',
            name: 'bot',
            role: 'bot',
          },
        };

        const token: IToken = {
          appId: '1',
          from: 'azure',
          fromId: 'azure',
          serviceUrl: '',
        };

        this.events.emit('activity.received', {
          token,
          activity,
        });
      });
    });
  }

  async onSend(activity: ActivityParams, ref: ConversationReference) {
    if (typeof activity === 'string') {
      activity = {
        type: 'message',
        text: activity,
      };
    }

    this.events.emit('activity.before.sent', {
      activity,
      ref,
    });

    if (activity.type === 'message' && activity.text) {
      this.log.info(activity.text);
    }

    this.events.emit('activity.sent', {
      activity: { id: '1', ...activity },
      ref,
    });

    return { id: '1', ...activity };
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
