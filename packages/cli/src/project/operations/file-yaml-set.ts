import fs from 'node:fs';
import path from 'node:path';

import yaml from 'yaml';

import { String } from '@microsoft/teams.common';

import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

export class FileYamlSet implements IProjectAttributeOperation {
  readonly name = 'file.yaml.set';

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

    if (ext !== '.yml' && ext !== '.yaml') {
      throw new Error(`"${filePath}" is not a yaml type`);
    }

    process.stdout.write(
      new String().cyan(`setting "${this._key}" in "${relativeFilePath}"...`).toString()
    );
    let object = {};

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      object = yaml.parse(content);
    } catch (err) {
      throw new Error(`"${filePath}" could not be parsed`);
    }

    object = this._set(object, this._key, this._value);
    fs.writeFileSync(filePath, yaml.stringify(object, null, 2) + '\n', 'utf8');
    process.stdout.write('✔️\n');
  }

  down(_: IProject) {
    const ext = path.extname(this._filename).toLowerCase();
    const filePath = path.join(this._path, this._filename);
    const relativeFilePath = path.relative(process.cwd(), filePath);

    if (!fs.existsSync(filePath)) {
      return;
    }

    if (ext !== '.yml' && ext !== '.yaml') {
      throw new Error(`"${filePath}" is not a yaml type`);
    }

    let object = {};

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      object = yaml.parse(content);
    } catch (err) {
      throw new Error(`"${filePath}" could not be parsed`);
    }

    if (!this._exists(object, this._key)) {
      return;
    }

    process.stdout.write(
      new String().yellow(`removing "${this._key}" in "${relativeFilePath}"...`).toString()
    );

    object = this._set(object, this._key);
    fs.writeFileSync(filePath, yaml.stringify(object, null, 2) + '\n', 'utf8');
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
        current = current[key] || {};
      }
    }

    return object;
  }
}
