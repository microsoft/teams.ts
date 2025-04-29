import fs from 'node:fs';
import path from 'node:path';

import { String } from '@microsoft/teams.common';

import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

export class FileCopy implements IProjectAttributeOperation {
  readonly name = 'file.copy';

  private _from: string;
  private _to: string;

  constructor(from: string, to: string) {
    this._from = from;
    this._to = to;
  }

  up(_: IProject) {
    const relativeTo = path.relative(process.cwd(), this._to);

    if (!fs.existsSync(this._from)) {
      throw new Error(`"${this._from}" does not exist`);
    }

    process.stdout.write(
      new String().cyan(`copying "${path.basename(this._from)}" => "${relativeTo}"...`).toString()
    );
    fs.copyFileSync(this._from, this._to);
    process.stdout.write('✔️\n');
  }

  down(_: IProject) {
    const relativeTo = path.relative(process.cwd(), this._to);

    if (!fs.existsSync(this._to)) {
      return;
    }

    process.stdout.write(new String().yellow(`deleting "${relativeTo}"...`).toString());
    fs.rmSync(this._to, { recursive: true });

    if (
      fs.existsSync(path.dirname(this._to)) &&
      fs.readdirSync(path.dirname(this._to), { recursive: true }).length === 0
    ) {
      fs.rmdirSync(path.dirname(this._to));
    }

    process.stdout.write('✔️\n');
  }
}
