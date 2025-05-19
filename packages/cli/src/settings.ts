import fs from 'fs';
import os from 'os';
import path from 'path';

import { z } from 'zod';

import { ProjectLanguage } from './project/project';

const Schema = z.object({
  env: z.string(),
  language: z.enum(['typescript', 'csharp']).optional(),
});

export type ISettings = z.infer<typeof Schema>;
export class Settings implements ISettings {
  env: string;
  language?: ProjectLanguage;

  constructor(value?: ISettings) {
    this.env = value?.env || 'dev';
    this.language = value?.language;
  }

  static load() {
    const base = path.join(os.homedir(), 'teams.cli');
    const file = path.join(base, 'settings.json');

    if (!fs.existsSync(file)) {
      return new Settings();
    }

    const value: ISettings = JSON.parse(fs.readFileSync(file, 'utf8'));
    return new Settings(value);
  }

  save() {
    const base = path.join(os.homedir(), 'teams.cli');
    const file = path.join(base, 'settings.json');

    if (!fs.existsSync(base)) {
      fs.mkdirSync(base, { recursive: true });
    }

    fs.writeFileSync(file, JSON.stringify(this), 'utf8');
  }
}
