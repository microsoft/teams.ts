import fs from 'fs';
import os from 'os';
import path from 'path';

import { z } from 'zod';

const Schema = z.object({
  env: z.string(),
});

export type ISettings = z.infer<typeof Schema>;
export class Settings implements ISettings {
  env: string;

  constructor(value?: ISettings) {
    this.env = value?.env || 'dev';
  }

  static load() {
    const base = path.join(os.homedir(), 'teams.sdk');
    const file = path.join(base, 'settings.json');

    if (!fs.existsSync(file)) {
      return new Settings();
    }

    const value: ISettings = JSON.parse(fs.readFileSync(file, 'utf8'));
    return new Settings(value);
  }

  save() {
    const base = path.join(os.homedir(), 'teams.sdk');
    const file = path.join(base, 'settings.json');

    if (!fs.existsSync(base)) {
      fs.mkdirSync(base, { recursive: true });
      return;
    }

    fs.writeFileSync(file, JSON.stringify(this), 'utf8');
  }
}
