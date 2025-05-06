import fs from 'node:fs';
import path from 'node:path';

import { String } from '@microsoft/teams.common';

import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

export class FileJsonSet implements IProjectAttributeOperation {
  readonly name = 'file.json.set';

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
    const ext = path.extname(this._filename).toLowerCase();
    const filePath = path.join(this._path, this._filename);
    const relativeFilePath = path.relative(process.cwd(), filePath);

    if (!fs.existsSync(filePath)) {
      throw new Error(`"${filePath}" does not exist`);
    }

    if (ext !== '.json') {
      throw new Error(`"${filePath}" is not a json type`);
    }

    process.stdout.write(
      new String().cyan(`setting "${this._key}" in "${relativeFilePath}"...`).toString()
    );
    let json = {};

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      json = JSON.parse(content);
    } catch (err) {
      throw new Error(`"${filePath}" could not be parsed`);
    }

    json = this._set(json, this._key, this._value);
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
    process.stdout.write('✔️\n');
  }

  down(_: IProject) {
    const ext = path.extname(this._filename).toLowerCase();
    const filePath = path.join(this._path, this._filename);
    const relativeFilePath = path.relative(process.cwd(), filePath);

    if (!fs.existsSync(filePath)) {
      return;
    }

    if (ext !== '.json') {
      throw new Error(`"${filePath}" is not a json type`);
    }

    let json = {};

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      json = JSON.parse(content);
    } catch (err) {
      throw new Error(`"${filePath}" could not be parsed`);
    }

    if (!this._exists(json, this._key)) {
      return;
    }

    process.stdout.write(
      new String().yellow(`removing "${this._key}" in "${relativeFilePath}"...`).toString()
    );

    json = this._set(json, this._key);
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
    process.stdout.write('✔️\n');
  }

  private _exists(object: any, path: string) {
    const parts = path.split('.');
    let current = object;

    while (parts.length) {
      const key = parts.shift();

      if (!key) continue;
      if (!current[key]) return false;
      current = current[key];
    }

    return current !== undefined;
  }

  private _set(object: any, path: string, value?: any) {
    const parts = path.split('.');
    let current = object;

    while (parts.length) {
      const key = parts.shift();

      if (!key) continue;

      if (!parts.length) {
        current[key] = value;
      } else {
        if (!current[key]) {
          current[key] = {};
        }

        current = current[key];
      }
    }

    return object;
  }
}
