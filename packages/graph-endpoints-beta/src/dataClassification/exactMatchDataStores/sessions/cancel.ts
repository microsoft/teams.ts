import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel',
    'post'
  >;
}

/**
 * `POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel']['body'],
  params?: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel',
    paramDefs: [
      { name: 'exactMatchDataStore-id', in: 'path' },
      { name: 'exactMatchSession-id', in: 'path' },
    ],
    params,
    body,
  };
}
