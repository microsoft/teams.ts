import { IProjectAttributeOperation } from '../project-attribute';

export class CompoundOperation implements IProjectAttributeOperation {
  readonly name = 'compound';

  private _operations: Array<IProjectAttributeOperation> = [];

  constructor(...operations: Array<IProjectAttributeOperation>) {
    this._operations = operations;
  }

  async up() {
    for (const op of this._operations) {
      await op.up();
    }
  }

  async down() {
    for (const op of this._operations.toReversed()) {
      await op.down();
    }
  }
}
