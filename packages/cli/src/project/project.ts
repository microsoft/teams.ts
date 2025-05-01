import fs from 'node:fs';
import path from 'node:path';

import { IProjectAttribute } from './project-attribute';
import { ProjectBuilder } from './project-builder';

export type ProjectLanguage = 'typescript' | 'csharp';

export interface IProject {
  readonly path: string;
  readonly name: string;
  readonly language: ProjectLanguage;
}

export class Project implements IProject {
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

  constructor(
    path: string,
    name: string,
    language: ProjectLanguage,
    attributes: Array<IProjectAttribute> = []
  ) {
    this._path = path;
    this._name = name;
    this._language = language;
    this._attributes = attributes;
  }

  static builder() {
    return new ProjectBuilder();
  }

  static load() {
    const language = fs.existsSync(path.join(process.cwd(), 'package.json'))
      ? 'typescript'
      : undefined;

    if (!language) {
      throw new Error('invalid project');
    }

    return new ProjectBuilder()
      .withPath(process.cwd())
      .withName(path.basename(process.cwd()))
      .withLanguage(language);
  }

  async up() {
    for (const attribute of this._attributes) {
      const op = await attribute[this._language](this._path);
      await op.up({
        path: this.path,
        name: this.name,
        language: this.language,
      });
    }
  }

  async down() {
    for (const attribute of this._attributes.toReversed()) {
      const op = await attribute[this._language](this._path);
      await op.down({
        path: this.path,
        name: this.name,
        language: this.language,
      });
    }
  }
}
