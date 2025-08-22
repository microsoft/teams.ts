export * as custodians from './custodians';
export * as noncustodialDataSources from './noncustodialDataSources';
export * as operations from './operations';
export * as reviewSets from './reviewSets';
export * as searches from './searches';
export * as settings from './settings';
export * as tags from './tags';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases': Operation<'/security/cases/ediscoveryCases', 'get'>;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    'patch'
  >;
  'POST /security/cases/ediscoveryCases': Operation<'/security/cases/ediscoveryCases', 'post'>;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}`
 *
 * Delete an ediscoveryCase object.
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ediscoveryCase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases`
 *
 * Get a list of the ediscoveryCase objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases']['parameters']
): EndpointRequest<IEndpoints['GET /security/cases/ediscoveryCases']['response']> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases',
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
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}`
 *
 * Read the properties and relationships of an ediscoveryCase object.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}`
 *
 * Update the properties of an ediscoveryCase object.
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    paramDefs: [{ name: 'ediscoveryCase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/cases/ediscoveryCases`
 *
 * Create a new ediscoveryCase object.
 */
export function create(
  body: IEndpoints['POST /security/cases/ediscoveryCases']['body'],
  params?: IEndpoints['POST /security/cases/ediscoveryCases']['parameters']
): EndpointRequest<IEndpoints['POST /security/cases/ediscoveryCases']['response']> {
  return {
    method: 'post',
    path: '/security/cases/ediscoveryCases',
    paramDefs: [],
    params,
    body,
  };
}
