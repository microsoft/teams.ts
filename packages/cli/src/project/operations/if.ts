import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

export class If implements IProjectAttributeOperation {
  readonly name = 'if';

  private _conditions: Array<() => boolean | Promise<boolean>> = [];
  private _then?: IProjectAttributeOperation;
  private _else?: IProjectAttributeOperation;

  constructor(...conditions: Array<() => boolean | Promise<boolean>>) {
    this._conditions = conditions;
  }

  then(operation: IProjectAttributeOperation) {
    this._then = operation;
    return this;
  }

  else(operation: IProjectAttributeOperation) {
    this._else = operation;
    return this;
  }

  async up(project: IProject) {
    const res = await Promise.all(this._conditions.map((condition) => condition()));

    if (res.includes(false)) {
      await this._else?.up(project);
      return;
    }

    await this._then?.up(project);
  }

  async down(project: IProject) {
    const res = await Promise.all(this._conditions.map((condition) => condition()));

    if (res.includes(false)) {
      await this._else?.down(project);
      return;
    }

    await this._then?.down(project);
  }
}
