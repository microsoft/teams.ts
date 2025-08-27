export * as siteSources from './siteSources';
export * as unifiedGroupSources from './unifiedGroupSources';
export * as userSources from './userSources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/legalHolds': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}`
 *
 * Delete a legalHold object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'legalHold-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/legalHolds`
 *
 * Read the properties and relationships of a legalHold object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}`
 *
 * Read the properties and relationships of a legalHold object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'legalHold-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}`
 *
 * Update the properties of a legalHold object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'legalHold-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/legalHolds`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds',
    paramDefs: [{ name: 'case-id', in: 'path' }],
    params,
    body,
  };
}
