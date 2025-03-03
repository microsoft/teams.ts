import { ProjectAttributeOperation } from '../project-attribute';

export class CompoundOperation implements ProjectAttributeOperation {
  readonly name = 'compound';

  private _operations: Array<ProjectAttributeOperation> = [];

  constructor(...operations: Array<ProjectAttributeOperation>) {
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
