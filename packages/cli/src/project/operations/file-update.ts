import fs from 'node:fs';
import path from 'node:path';

import { String } from '@microsoft/teams.common';

import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

export class FileUpdate implements IProjectAttributeOperation {
  readonly name = 'file.update';

  private _path: string;
  private _filename: string;
  private _content?: string | ((content: string) => string);

  constructor(path: string, filename: string, content?: string | ((content: string) => string)) {
    this._path = path;
    this._filename = filename;
    this._content = content;
  }

  up(_: IProject) {
    const filePath = path.join(this._path, this._filename);
    const relativeFilePath = path.relative(process.cwd(), filePath);

    if (!fs.existsSync(filePath)) {
      throw new Error(`"${filePath}" does not exist`);
    }

    let content = '';
    if (this._content) {
      if (typeof this._content === 'function') {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        content = this._content(fileContent);
      } else {
        content = this._content;
      }
    }

    process.stdout.write(new String().cyan(`updating "${relativeFilePath}"...`).toString());
    fs.writeFileSync(filePath, content, 'utf8');
    process.stdout.write('✔️\n');
  }

  down(_: IProject) {}
}
