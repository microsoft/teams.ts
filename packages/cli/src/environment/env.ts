import fs from 'fs';
import os from 'os';
import path from 'path';

export type KeyValue = {
  readonly key: string;
  readonly value: string;
};

export interface IEnv {
  readonly name: string;

  get(key: string): string | undefined;
  set(key: string, value: string): void;
  del(key: string): void;
  list(where?: (item: KeyValue, i: number) => boolean): Array<KeyValue>;

  activate(): void;
  deactivate(): void;

  save(): void;
  delete(): void;
}

export class Env implements IEnv {
  readonly name: string;

  protected items: Map<string, string> = new Map();

  constructor(name: string) {
    this.name = name;
  }

  static load(name: string) {
    const env = new Env(name);
    const base = path.join(os.homedir(), 'teams.sdk', 'environments');
    const file = path.join(base, `${name}.env`);

    if (!fs.existsSync(file)) {
      return env;
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');

    for (const [key, value] of lines.map((line) =>
      line
        .trim()
        .split('=', 2)
        .map((v) => v.trim())
    )) {
      if (!key) continue;
      env.set(key, value);
    }

    return env;
  }

  get(key: string) {
    return this.items.get(key);
  }

  set(key: string, value: string) {
    this.items.set(key, value);
  }

  del(key: string) {
    this.items.delete(key);
  }

  list(where?: (item: KeyValue, i: number) => boolean) {
    return Array.from(this.items.entries())
      .map(([key, value]) => ({ key, value }))
      .filter((item, i) => (where ? where(item, i) : true));
  }

  activate() {
    for (const { key, value } of this.list()) {
      process.env[key] = value;
    }
  }

  deactivate() {
    for (const { key } of this.list()) {
      delete process.env[key];
    }
  }

  save() {
    const base = path.join(os.homedir(), 'teams.sdk', 'environments');

    if (!fs.existsSync(base)) {
      fs.mkdirSync(base, { recursive: true });
    }

    const file = path.join(base, `${this.name}.env`);
    fs.writeFileSync(file, this.toString(), 'utf8');
  }

  delete() {
    const base = path.join(os.homedir(), 'teams.sdk', 'environments');
    const file = path.join(base, `${this.name}.env`);

    if (!fs.existsSync(file)) {
      return;
    }

    fs.rmSync(file);
  }
}
