import path from 'node:path';
import fs from 'node:fs';

import { IProjectAttribute } from './project-attribute';
import { ProjectLanguage } from './project-language';
import * as attributes from './attributes';

export class Project {
  get path() {
    return this._path;
  }
  private _path: string;

  get name() {
    return this._name;
  }
  private _name: string;

  get language() {
    return this._language;
  }
  private _language: ProjectLanguage;

  private readonly _attributes: Array<IProjectAttribute> = [];

  constructor(path: string, name: string, language: ProjectLanguage) {
    this._path = path;
    this._name = name;
    this._language = language;
  }

  addEnv(key: string, value: string, filename = '.env') {
    this._attributes.push(new attributes.EnvAttribute(filename, key, value));
    return this;
  }

  addTemplate(name: string) {
    if (this._attributes.some((attr) => attr.id === `template[${name}]`)) {
      return this;
    }

    this._attributes.push(new attributes.TemplateAttribute(name));
    return this;
  }

  addTeamsToolkit(name: string) {
    this._attributes.push(new attributes.TeamsToolkitAttribute(name));
    return this;
  }

  async up() {
    for (const attribute of this._attributes) {
      const op = await attribute[this._language](this._path);
      await op.up();
    }
  }

  async down() {
    for (const attribute of this._attributes.toReversed()) {
      const op = await attribute[this._language](this._path);
      await op.down();
    }
  }

  static load(): Project {
    const language = fs.existsSync(path.join(process.cwd(), 'package.json'))
      ? 'typescript'
      : undefined;

    if (!language) {
      throw new Error('invalid project');
    }

    const name = path.basename(process.cwd());
    return new Project(process.cwd(), name, language);
  }
}
