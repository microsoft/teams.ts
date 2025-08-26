export * as custodians from './custodians';
export * as legalHolds from './legalHolds';
export * as noncustodialDataSources from './noncustodialDataSources';
export * as operations from './operations';
export * as reviewSets from './reviewSets';
export * as settings from './settings';
export * as sourceCollections from './sourceCollections';
export * as tags from './tags';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases': Operation<'/compliance/ediscovery/cases', 'get'>;
  'GET /compliance/ediscovery/cases/{case-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases': Operation<'/compliance/ediscovery/cases', 'post'>;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}`
 *
 * Delete a case object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases`
 *
 * Retrieve a list of case objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases']['parameters']
): EndpointRequest<IEndpoints['GET /compliance/ediscovery/cases']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases',
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
 * `GET /compliance/ediscovery/cases/{case-id}`
 *
 * Retrieve the properties and relationships of a case object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}']['parameters']
): EndpointRequest<IEndpoints['GET /compliance/ediscovery/cases/{case-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}`
 *
 * Update the properties of a case object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}',
    paramDefs: [{ name: 'case-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases`
 *
 * Create a new case object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases']['parameters']
): EndpointRequest<IEndpoints['POST /compliance/ediscovery/cases']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases',
    paramDefs: [],
    params,
    body,
  };
}
