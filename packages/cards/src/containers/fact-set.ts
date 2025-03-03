import { BaseElement } from '../base';

/**
 * The `FactSet` element displays a series of facts (i.e. name/value pairs) in a tabular form.
 */
export interface FactSet extends BaseElement {
  type: 'FactSet';

  /**
   * The array of `Fact`'s
   */
  facts: Fact[];
}

export type FactSetParams = Omit<FactSet, 'type' | 'facts'>;

/**
 * The `FactSet` element displays a series of facts (i.e. name/value pairs) in a tabular form.
 */
export function FactSet(facts: Fact[] = [], params?: FactSetParams): FactSet {
  return {
    type: 'FactSet',
    facts,
    ...params,
  };
}

/**
 * Describes a `Fact` in a `FactSet` as a key/value pair.
 */
export interface Fact {
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
export function Fact(title: string, value: string): Fact {
  return { title, value };
}
