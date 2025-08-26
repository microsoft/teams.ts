export * as lookup from './lookup';
export * as sessions from './sessions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    'delete'
  >;
  'GET /dataClassification/exactMatchDataStores': Operation<
    '/dataClassification/exactMatchDataStores',
    'get'
  >;
  'GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    'get'
  >;
  'PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    'patch'
  >;
  'POST /dataClassification/exactMatchDataStores': Operation<
    '/dataClassification/exactMatchDataStores',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'exactMatchDataStore-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/exactMatchDataStores`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/exactMatchDataStores']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/exactMatchDataStores']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchDataStores',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exactMatchDataStore-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}',
    paramDefs: [{ name: 'exactMatchDataStore-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/exactMatchDataStores`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/exactMatchDataStores']['body'],
  params?: IEndpoints['POST /dataClassification/exactMatchDataStores']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/exactMatchDataStores']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/exactMatchDataStores',
    paramDefs: [],
    params,
    body,
  };
}
