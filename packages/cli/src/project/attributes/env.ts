import { Compound, FileEnvSet } from '../operations';
import { IProjectAttribute } from '../project-attribute';

export class EnvAttribute implements IProjectAttribute {
  readonly id = 'env';
  readonly name = 'environment';
  readonly alias = 'env';
  readonly description = 'add environment variables';

  private readonly _filename: string;
  private readonly _key: string;
  private readonly _value: string;

  constructor(filename: string, key: string, value: string) {
    this._filename = filename;
    this._key = key;
    this._value = value;
  }

  typescript(targetDir: string) {
    return new Compound(new FileEnvSet(targetDir, this._filename, this._key, this._value));
  }

  csharp(_: string) {
    return new Compound();
  }
}
