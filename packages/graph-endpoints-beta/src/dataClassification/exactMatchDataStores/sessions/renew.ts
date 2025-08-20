import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew',
    'post'
  >;
}

/**
 * `POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew']['body'],
  params?: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew']['parameters']
): EndpointRequest<
  IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew',
    paramDefs: [
      { name: 'exactMatchDataStore-id', in: 'path' },
      { name: 'exactMatchSession-id', in: 'path' },
    ],
    params,
    body,
  };
}
