import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
    'delete'
  >;
  'GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
    'get'
  >;
  'PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
    'patch'
  >;
}

/**
 * `DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'exactMatchDataStore-id', in: 'path' },
      { name: 'exactMatchSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exactMatchDataStore-id', in: 'path' },
      { name: 'exactMatchSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['body'],
  params?: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
    paramDefs: [
      { name: 'exactMatchDataStore-id', in: 'path' },
      { name: 'exactMatchSession-id', in: 'path' },
    ],
    params,
    body,
  };
}
