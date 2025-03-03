import { ProjectAttributeOperation } from '../project-attribute';

export class IfOperation implements ProjectAttributeOperation {
  readonly name = 'if';

  private _conditions: Array<() => boolean | Promise<boolean>> = [];
  private _then?: ProjectAttributeOperation;
  private _else?: ProjectAttributeOperation;

  constructor(...conditions: Array<() => boolean | Promise<boolean>>) {
    this._conditions = conditions;
  }

  then(operation: ProjectAttributeOperation) {
    this._then = operation;
    return this;
  }

  else(operation: ProjectAttributeOperation) {
    this._else = operation;
    return this;
  }

  async up() {
    const res = await Promise.all(this._conditions.map((condition) => condition()));

    if (res.includes(false)) {
      await this._else?.up();
      return;
    }

    await this._then?.up();
  }

  async down() {
    const res = await Promise.all(this._conditions.map((condition) => condition()));

    if (res.includes(false)) {
      await this._else?.down();
      return;
    }

    await this._then?.down();
  }
}
