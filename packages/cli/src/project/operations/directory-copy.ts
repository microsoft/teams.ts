import fs from 'node:fs';
import path from 'node:path';

import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

import { FileCopy } from './file-copy';
import { FileTemplateHandlebars } from './file-template-handlebars';

export class DirectoryCopy implements IProjectAttributeOperation {
  readonly name = 'directory.copy';

  private _from: string;
  private _to: string;

  constructor(from: string, to: string) {
    this._from = from;
    this._to = to;
  }

  async up(project: IProject) {
    const operations: Array<IProjectAttributeOperation> = [];

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
      const isHandlebars = item.endsWith('.hbs');

      if (stat.isDirectory()) {
        operations.push(
          new DirectoryCopy(path.resolve(this._from, item), path.resolve(this._to, item))
        );
      } else {
        if (isHandlebars) {
          operations.push(
            new FileTemplateHandlebars(
              path.resolve(this._from, item),
              path.resolve(this._to, item.replace('.hbs', ''))
            )
          );
        } else {
          operations.push(
            new FileCopy(path.resolve(this._from, item), path.resolve(this._to, item))
          );
        }
      }
    }

    for (const op of operations) {
      await op.up(project);
    }
  }

  async down(project: IProject) {
    const operations: Array<IProjectAttributeOperation> = [];

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
      const isHandlebars = item.endsWith('.hbs');

      if (stat.isDirectory()) {
        operations.push(
          new DirectoryCopy(path.resolve(this._from, item), path.resolve(this._to, item))
        );
      } else {
        if (isHandlebars) {
          operations.push(
            new FileTemplateHandlebars(
              path.resolve(this._from, item),
              path.resolve(this._to, item.replace('.hbs', ''))
            )
          );
        } else {
          operations.push(
            new FileCopy(path.resolve(this._from, item), path.resolve(this._to, item))
          );
        }
      }
    }

    for (const op of operations.toReversed()) {
      await op.down(project);
    }
  }
}
