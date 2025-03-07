import npath from 'path';

import { App } from './app';
import { IFunctionContext } from './contexts';
import { ClientAuthRequest, withClientAuth } from './middleware';
import * as manifest from './manifest';

/**
 * add/update a function that can be called remotely
 * @param name The unique function name
 * @param cb The callback to handle the function
 */
export function func<TData>(
  this: App,
  name: string,
  cb: (context: IFunctionContext<TData>) => any | Promise<any>
) {
  const log = this.log.child('functions').child(name);
  this.http.post(
    `/api/functions/${name}`,
    withClientAuth({
      logger: log,
      ...this.credentials,
    }),
    async (req: ClientAuthRequest, res) => {
      if (!req.context) {
        throw new Error('expected client context');
      }

      const data = await cb({
        ...req.context,
        log,
        api: this.api,
        data: req.body,
      });

      res.send(data);
    }
  );

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
export function tab(
  this: App,
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

  this.http.static(`/tabs/${name}`, path);
  this.http.use(`/tabs/${name}*`, async (_, res) => {
    res.sendFile(npath.join(path, 'index.html'));
  });

  return this;
}

/**
 * add a configurable tab
 * @remark scopes defaults to `team`
 * @param url The url to use when configuring the tab.
 */
export function configTab(
  this: App,
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
