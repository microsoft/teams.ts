import { IProject } from '../project';
import { IProjectAttributeOperation } from '../project-attribute';

export class Compound implements IProjectAttributeOperation {
  readonly name = 'compound';

  private _operations: Array<IProjectAttributeOperation> = [];

  constructor(...operations: Array<IProjectAttributeOperation>) {
    this._operations = operations;
  }

  async up(project: IProject) {
    for (const op of this._operations) {
      await op.up(project);
    }
  }

  async down(project: IProject) {
    for (const op of this._operations.toReversed()) {
      await op.down(project);
    }
  }
}
