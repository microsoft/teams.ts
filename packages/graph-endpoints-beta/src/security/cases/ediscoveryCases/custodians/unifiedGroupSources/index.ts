export * as group from './group';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    'patch'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources',
    'post'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}`
 *
 * Delete a unifiedGroupSource object associated with an ediscoveryCustodian.
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryCustodian-id', in: 'path' },
      { name: 'unifiedGroupSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources`
 *
 * Get a list of the unifiedGroupSource objects associated with an ediscoveryCustodian.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources',
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
      { name: 'ediscoveryCustodian-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}`
 *
 * Data source entity for groups associated with the custodian.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryCustodian-id', in: 'path' },
      { name: 'unifiedGroupSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryCustodian-id', in: 'path' },
      { name: 'unifiedGroupSource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources`
 *
 * Create a new unifiedGroupSource object associated with an eDiscovery custodian.
 */
export function create(
  body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources']['body'],
  params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/unifiedGroupSources',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryCustodian-id', in: 'path' },
    ],
    params,
    body,
  };
}
