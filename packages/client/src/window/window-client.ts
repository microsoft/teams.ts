import * as uuid from 'uuid';
import { ConsoleLogger, EventEmitter, ILogger } from '@microsoft/spark.common';

import { ErrorMessageResponse, MessageRequest, MessageResponse } from './message';

/**
 * the window client used to execute
 * functions and receive events from the
 * parent window
 */
export class WindowClient {
  /**
   * requests that are waiting
   * for a response
   */
  get pending() {
    return Object.values(this.inFlight);
  }

  protected id: number;
  protected log: ILogger;
  protected inFlight: Record<string, MessageRequest> = {};
  protected requests: EventEmitter<Record<string, MessageRequest>>;
  protected responses: EventEmitter<Record<string, MessageResponse | ErrorMessageResponse>>;

  constructor(logger?: ILogger) {
    this.id = 0;
    this.log = logger?.child('window') || new ConsoleLogger('@microsoft/spark.client/window');
    this.requests = new EventEmitter();
    this.responses = new EventEmitter();
    window.addEventListener('message', this.onMessage.bind(this));
  }

  async on(name: string, handler: (...args: any[]) => any) {
    this.send('registerHandler', name);
    return this.requests.on(name, handler);
  }

  off(id: number) {
    this.requests.off(id);
  }

  send<T extends Array<any> = Array<any>>(name: string, ...args: any[]) {
    return new Promise<T>((resolve, reject) => {
      const id = uuid.v4();
      const request: MessageRequest = {
        id: this.id++,
        uuidAsString: id,
        func: name,
        args,
        timestamp: Date.now(),
        monotonicTimestamp: Date.now(),
        apiVersionTag: `v2_${name}`,
      };

      this.inFlight[id] = request;
      this.log.debug(request);
      window.parent.postMessage(request, '*');

      const timer = setTimeout(() => {
        this.responses.off(subId);
        reject({ errorCode: 408, message: 'response timeout' });
      }, 10000);

      const subId = this.responses.once(`message.${id}`, (res) => {
        clearTimeout(timer);
        resolve(res.args as T);
      });
    });
  }

  protected onMessage(e: MessageEvent) {
    const res: MessageRequest | MessageResponse | ErrorMessageResponse = e.data;
    this.log.debug(res);

    // response message
    if (this.inFlight[res.uuidAsString]) {
      delete this.inFlight[res.uuidAsString];
      this.responses.emit(`message.${res.uuidAsString}`, e.data);
      return;
    }

    this.requests.emit('message', e.data);
  }
}
