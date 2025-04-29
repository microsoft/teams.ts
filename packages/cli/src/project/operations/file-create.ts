import fs from 'node:fs';
import path from 'node:path';

import { String } from '@microsoft/teams.common';

import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

export class FileCreate implements IProjectAttributeOperation {
  readonly name = 'file.create';

  private _path: string;
  private _filename: string;
  private _content?: string;

  constructor(path: string, filename: string, content?: string) {
    this._path = path;
    this._filename = filename;
    this._content = content;
  }

  up(_: IProject) {
    const filePath = path.join(this._path, this._filename);
    const relativeFilePath = path.relative(process.cwd(), filePath);

    if (!fs.existsSync(this._path)) {
      fs.mkdirSync(this._path, { recursive: true });
    }

    if (fs.existsSync(filePath)) {
      throw new Error(`"${filePath}" already exists`);
    }

    process.stdout.write(new String().cyan(`creating "${relativeFilePath}"...`).toString());
    fs.writeFileSync(filePath, this._content || '', 'utf8');
    process.stdout.write('✔️\n');
  }

  down(_: IProject) {
    const filePath = path.join(this._path, this._filename);
    const relativeFilePath = path.relative(process.cwd(), filePath);

    if (!fs.existsSync(filePath)) {
      return;
    }

    process.stdout.write(new String().yellow(`deleting "${relativeFilePath}"...`).toString());
    fs.rmSync(filePath, { recursive: true });

    if (
      fs.existsSync(path.dirname(filePath)) &&
      fs.readdirSync(path.dirname(filePath), { recursive: true }).length === 0
    ) {
      fs.rmdirSync(path.dirname(filePath));
    }

    process.stdout.write('✔️\n');
  }
}
