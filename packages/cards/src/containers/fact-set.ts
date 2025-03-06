import { IElement, Element } from '../base';

/**
 * The `FactSet` element displays a series of facts (i.e. name/value pairs) in a tabular form.
 */
export interface IFactSet extends IElement {
  type: 'FactSet';

  /**
   * The array of `Fact`'s
   */
  facts: IFact[];
}

export type FactSetOptions = Omit<IFactSet, 'type' | 'facts'>;

/**
 * The `FactSet` element displays a series of facts (i.e. name/value pairs) in a tabular form.
 */
export class FactSet extends Element implements IFactSet {
  type: 'FactSet';

  /**
   * The array of `Fact`'s
   */
  facts: IFact[];

  constructor(...facts: IFact[]) {
    super();
    this.type = 'FactSet';
    this.facts = facts;
  }

  withOptions(value: FactSetOptions) {
    Object.assign(this, value);
    return this;
  }

  addFacts(...value: IFact[]) {
    this.facts.push(...value);
    return this;
  }
}

/**
 * Describes a `Fact` in a `FactSet` as a key/value pair.
 */
export interface IFact {
  /**
   * The title of the fact.
   */
  title: string;

  /**
   * The value of the fact.
   */
  value: string;
}

/**
 * Describes a `Fact` in a `FactSet` as a key/value pair.
 */
export class Fact implements IFact {
  /**
   * The title of the fact.
   */
  title: string;

  /**
   * The value of the fact.
   */
  value: string;

  constructor(title: string, value: string) {
    this.title = title;
    this.value = value;
  }
}
