import fs from 'node:fs';
import path from 'node:path';

import Handlebars from 'handlebars';

import { String } from '@microsoft/teams.common';

import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

export class FileTemplateHandlebars implements IProjectAttributeOperation {
  readonly name = 'file.template.handlebars';

  private _from: string;
  private _to: string;

  constructor(from: string, to: string) {
    this._from = from;
    this._to = to;
  }

  async up(project: IProject) {
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

    const changeCase = await import('change-case');
    const template = Handlebars.compile(content, { strict: true });
    const rendered = template(project, {
      helpers: {
        capitalize: (text: string) => {
          if (!text) return '';
          return changeCase.capitalCase(text);
        },
        toPascalCase: (text: string) => {
          if (!text) return '';
          return changeCase.pascalCase(text);
        },
        toDotCase: (text: string) => {
          if (!text) return '';
          return changeCase.dotCase(text);
        },
        toKebabCase: (text: string) => {
          if (!text) return '';
          return changeCase.kebabCase(text);
        },
      },
    });

    fs.writeFileSync(this._to, rendered, 'utf8');
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
