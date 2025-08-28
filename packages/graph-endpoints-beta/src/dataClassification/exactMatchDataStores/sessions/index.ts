export * as cancel from './cancel';
export * as commit from './commit';
export * as renew from './renew';
export * as uploadAgent from './uploadAgent';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    'delete'
  >;
  'GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions',
    'get'
  >;
  'GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    'get'
  >;
  'PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    'patch'
  >;
  'POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'exactMatchDataStore-id', in: 'path' },
      { name: 'exactMatchSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exactMatchDataStore-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
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
 * `PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    paramDefs: [
      { name: 'exactMatchDataStore-id', in: 'path' },
      { name: 'exactMatchSession-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions']['body'],
  params?: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions',
    paramDefs: [{ name: 'exactMatchDataStore-id', in: 'path' }],
    params,
    body,
  };
}
