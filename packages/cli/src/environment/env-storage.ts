import fs from 'fs';
import os from 'os';
import path from 'path';

import { Settings } from '../settings';

import { Env, IEnv } from './env';

export class EnvStorage {
  get active() {
    return this._active;
  }
  protected _active: IEnv;
  protected _store: Map<string, IEnv> = new Map();
  protected _settings: Settings;

  constructor(settings: Settings) {
    const dev = Env.load(settings.env);
    this._store.set('dev', dev);
    this._active = dev;
    this._settings = settings;
  }

  static load(settings: Settings) {
    const storage = new EnvStorage(settings);
    const base = path.join(os.homedir(), 'teams.sdk', 'environments');

    if (!fs.existsSync(base)) {
      return storage;
    }

    for (const name of fs.readdirSync(base, { recursive: true })) {
      const env = Env.load(path.basename(name.toString(), '.env'));
      storage.add(env);
    }

    return storage;
  }

  getByName(name: string) {
    return this._store.get(name);
  }

  select(name: string) {
    let env = this._store.get(name);

    if (!env) {
      env = new Env(name);
      env.activate();
      env.save();
      this.add(env);
    }

    this._active.deactivate();
    this._active = env;
    this._settings.env = env.name;
    this._settings.save();
    return env;
  }

  add(env: IEnv) {
    this._store.set(env.name, env);
  }

  remove(name: string) {
    this._store.get(name)?.delete();
    this._store.delete(name);
  }

  get(key: string) {
    return this._active.get(key);
  }

  set(key: string, value: string) {
    this._active.set(key, value);
    this._active.save();
  }

  del(key: string) {
    this._active.del(key);
    this._active.save();
  }

  list(where?: (item: IEnv, i: number) => boolean) {
    return Array.from(this._store.values()).filter((item, i) => (where ? where(item, i) : true));
  }
}
