export * as siteSources from './siteSources';
export * as userSources from './userSources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}',
    'patch'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds',
    'post'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryHoldPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds`
 *
 * Get a list of the ediscoveryHoldPolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}`
 *
 * Returns a list of case eDiscoveryHoldPolicy objects for this case.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryHoldPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds/{ediscoveryHoldPolicy-id}',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryHoldPolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds`
 *
 * Create a new ediscoveryHoldPolicy object.
 */
export function create(
  body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds']['body'],
  params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/legalHolds',
    paramDefs: [{ name: 'ediscoveryCase-id', in: 'path' }],
    params,
    body,
  };
}
