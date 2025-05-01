import fs from 'node:fs';

import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

import { DirectoryCopy } from './directory-copy';
import { FileCopy } from './file-copy';

export class Copy implements IProjectAttributeOperation {
  readonly name = 'copy';

  private _from: string;
  private _to: string;

  constructor(from: string, to: string) {
    this._from = from;
    this._to = to;
  }

  up(project: IProject) {
    if (!fs.existsSync(this._from)) {
      throw new Error(`"${this._from}" does not exist`);
    }

    const stat = fs.statSync(this._from);

    if (stat.isDirectory()) {
      return new DirectoryCopy(this._from, this._to).up(project);
    }

    return new FileCopy(this._from, this._to).up(project);
  }

  down(project: IProject) {
    if (!fs.existsSync(this._to)) {
      return;
    }

    const stat = fs.statSync(this._to);

    if (stat.isDirectory()) {
      return new DirectoryCopy(this._from, this._to).down(project);
    }

    return new FileCopy(this._from, this._to).down(project);
  }
}
