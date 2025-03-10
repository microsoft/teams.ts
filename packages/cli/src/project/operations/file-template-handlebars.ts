import path from 'node:path';
import fs from 'node:fs';
import Handlebars from 'handlebars';
import { String } from '@microsoft/spark.common';

import { IProjectAttributeOperation } from '../project-attribute';
import { IProject } from '../project';

export class FileTemplateHandlebars implements IProjectAttributeOperation {
  readonly name = 'file.template.handlebars';

  private _from: string;
  private _to: string;

  constructor(from: string, to: string) {
    this._from = from;
    this._to = to;
  }

  up(project: IProject) {
    const relativeTo = path.relative(process.cwd(), this._to);

    if (!fs.existsSync(this._from)) {
      throw new Error(`"${this._from}" does not exist`);
    }

    const content = fs.readFileSync(this._from, 'utf8');

    process.stdout.write(
      new String()
        .cyan(`rendering "${path.basename(this._from, '.hbs')}" => "${relativeTo}"...`)
        .toString()
    );

    const template = Handlebars.compile(content, { strict: true });
    const rendered = template(project);

    fs.writeFileSync(this._to, rendered, 'utf8');
    process.stdout.write('✔️\n');
  }

  down(_: IProject) {
    const relativeTo = path.relative(process.cwd(), this._to);

    if (!fs.existsSync(this._to)) {
      return;
    }

    process.stdout.write(new String().yellow(`deleting "${relativeTo}"...`).toString());
    fs.rmSync(this._to);
    process.stdout.write('✔️\n');
  }
}
