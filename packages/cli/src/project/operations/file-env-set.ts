import fs from 'node:fs';
import path from 'node:path';

import { String } from '@microsoft/teams.common';

import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

export class FileEnvSet implements IProjectAttributeOperation {
  readonly name = 'file.env.set';

  private _path: string;
  private _filename: string;
  private _key: string;
  private _value: any;

  constructor(path: string, filename: string, key: string, value: any) {
    this._path = path;
    this._filename = filename;
    this._key = key;
    this._value = value;
  }

  up(_: IProject) {
    const filePath = path.join(this._path, this._filename);
    const relativeFilePath = path.relative(process.cwd(), filePath);
    process.stdout.write(
      new String().cyan(`setting "${this._key}" in "${relativeFilePath}"...`).toString()
    );
    let lines: string[] = [];

    if (fs.existsSync(filePath)) {
      lines = fs.readFileSync(filePath, 'utf8').split('\n');
    }

    const env: Record<string, string> = {};

    for (const line of lines) {
      const [key, value] = line.split('=');
      env[key] = value;
    }

    env[this._key] = this._value;
    lines = Object.entries(env).map(([key, value]) => `${key}=${value}`);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    process.stdout.write('✔️\n');
  }

  down(_: IProject) {
    const filePath = path.join(this._path, this._filename);
    const relativeFilePath = path.relative(process.cwd(), filePath);

    if (!fs.existsSync(filePath)) {
      return;
    }

    process.stdout.write(
      new String().yellow(`deleting "${this._key}" from "${relativeFilePath}"...`).toString()
    );
    let lines: string[] = [];

    if (fs.existsSync(filePath)) {
      lines = fs.readFileSync(filePath, 'utf8').split('\n');
    }

    const env: Record<string, string> = {};

    for (const line of lines) {
      const [key, value] = line.split('=');
      env[key] = value;
    }

    delete env[this._key];
    lines = Object.entries(env).map(([key, value]) => `${key}=${value}`);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    process.stdout.write('✔️\n');
  }
}
