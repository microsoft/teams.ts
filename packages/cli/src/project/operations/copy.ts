import fs from 'node:fs';

import { IProjectAttributeOperation } from '../project-attribute';
import { FileCopyOperation } from './file-copy';
import { DirectoryCopyOperation } from './directory-copy';

export class CopyOperation implements IProjectAttributeOperation {
  readonly name = 'copy';

  private _from: string;
  private _to: string;

  constructor(from: string, to: string) {
    this._from = from;
    this._to = to;
  }

  up() {
    if (!fs.existsSync(this._from)) {
      throw new Error(`"${this._from}" does not exist`);
    }

    const stat = fs.statSync(this._from);

    if (stat.isDirectory()) {
      return new DirectoryCopyOperation(this._from, this._to).up();
    }

    return new FileCopyOperation(this._from, this._to).up();
  }

  down() {
    if (!fs.existsSync(this._to)) {
      return;
    }

    const stat = fs.statSync(this._to);

    if (stat.isDirectory()) {
      return new DirectoryCopyOperation(this._from, this._to).down();
    }

    return new FileCopyOperation(this._from, this._to).down();
  }
}
