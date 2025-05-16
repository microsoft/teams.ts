import { Compound, FileEnvSet, FileJsonSet } from '../operations';
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

  async csharp(targetDir: string) {
    const changeCase = await import('change-case');
    // Ensures keys like "teams.clientId" are converted to "Teams.ClientId"
    // It follows the C# convention for environment variables
    const key = this._key.split('.')
      .map(part => changeCase.pascalCase(part))
      .join('.');

    return new Compound(new FileJsonSet(targetDir, this._filename, key, this._value));
  }
}
