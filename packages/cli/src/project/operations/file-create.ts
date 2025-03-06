import path from 'node:path';
import fs from 'node:fs';
import { String } from '@microsoft/spark.common';

import { IProjectAttributeOperation } from '../project-attribute';

export class FileCreateOperation implements IProjectAttributeOperation {
  readonly name = 'file.create';

  private _path: string;
  private _filename: string;
  private _content?: string;

  constructor(path: string, filename: string, content?: string) {
    this._path = path;
    this._filename = filename;
    this._content = content;
  }

  up() {
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

  down() {
    const filePath = path.join(this._path, this._filename);
    const relativeFilePath = path.relative(process.cwd(), filePath);

    if (!fs.existsSync(filePath)) {
      return;
    }

    process.stdout.write(new String().yellow(`deleting "${relativeFilePath}"...`).toString());
    fs.rmSync(filePath);
    process.stdout.write('✔️\n');
  }
}
