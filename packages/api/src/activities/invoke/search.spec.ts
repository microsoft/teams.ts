import { SearchInvokeValue } from '../../models';

import { ISearchInvokeActivity } from './search';

describe('SearchInvokeActivity', () => {
  it('should match the expected wire format', () => {
    const activity: ISearchInvokeActivity = {
      type: 'invoke',
      name: 'application/search',
      value: { kind: 'search', queryText: 'hello', dataset: 'cities' },
    } as ISearchInvokeActivity;

    expect(activity.type).toEqual('invoke');
    expect(activity.name).toEqual('application/search');
    expect(activity.value.queryText).toEqual('hello');
    expect(activity.value.dataset).toEqual('cities');
  });

  it('should accept a value without kind (Adaptive Card dynamic typeahead payload)', () => {
    const value: SearchInvokeValue = {
      queryText: 'mario',
      queryOptions: { skip: 0, top: 5 },
      dataset: 'nintendoGames',
    };

    expect(value.kind).toBeUndefined();
    expect(value.queryText).toEqual('mario');
    expect(value.dataset).toEqual('nintendoGames');
  });
});
