import path from 'node:path';
import fs from 'node:fs';

import { ProjectAttributeOperation } from '../project-attribute';
import { FileCopyOperation } from './file-copy';

export class DirectoryCopyOperation implements ProjectAttributeOperation {
  readonly name = 'directory.copy';

  private _from: string;
  private _to: string;

  constructor(from: string, to: string) {
    this._from = from;
    this._to = to;
  }

  async up() {
    const operations: Array<ProjectAttributeOperation> = [];

    if (!fs.existsSync(this._from)) {
      throw new Error(`"${this._from}" does not exist`);
    }

    if (!fs.statSync(this._from).isDirectory()) {
      throw new Error(`"${this._from}" is not a directory`);
    }

    if (!fs.existsSync(this._to)) {
      fs.mkdirSync(this._to, { recursive: true });
    }

    const items = fs.readdirSync(this._from);

    for (const item of items) {
      const stat = fs.statSync(path.resolve(this._from, item));

      if (stat.isDirectory()) {
        operations.push(
          new DirectoryCopyOperation(path.resolve(this._from, item), path.resolve(this._to, item))
        );
      } else {
        operations.push(
          new FileCopyOperation(path.resolve(this._from, item), path.resolve(this._to, item))
        );
      }
    }

    for (const op of operations) {
      await op.up();
    }
  }

  async down() {
    const operations: Array<ProjectAttributeOperation> = [];

    if (!fs.existsSync(this._from)) {
      throw new Error(`"${this._from}" does not exist`);
    }

    if (!fs.statSync(this._from).isDirectory()) {
      throw new Error(`"${this._from}" is not a directory`);
    }

    if (!fs.existsSync(this._to)) {
      fs.mkdirSync(this._to, { recursive: true });
    }

    const items = fs.readdirSync(this._from);

    for (const item of items) {
      const stat = fs.statSync(path.resolve(this._from, item));

      if (stat.isDirectory()) {
        operations.push(
          new DirectoryCopyOperation(path.resolve(this._from, item), path.resolve(this._to, item))
        );
      } else {
        operations.push(
          new FileCopyOperation(path.resolve(this._from, item), path.resolve(this._to, item))
        );
      }
    }

    for (const op of operations.toReversed()) {
      await op.down();
    }
  }
}
