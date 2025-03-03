import { ProjectAttribute } from '../project-attribute';
import { CompoundOperation, FileEnvSetOperation } from '../operations';

export class EnvAttribute implements ProjectAttribute {
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
    return new CompoundOperation(
      new FileEnvSetOperation(targetDir, this._filename, this._key, this._value)
    );
  }

  csharp(_: string) {
    return new CompoundOperation();
  }
}
