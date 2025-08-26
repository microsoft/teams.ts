export * as group from './group';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}`
 *
 * Delete a unifiedGroupSource object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
      { name: 'unifiedGroupSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources`
 *
 * Get a list of the unifiedGroupSource objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources',
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
      { name: 'custodian-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}`
 *
 * Read the properties and relationships of a unifiedGroupSource object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
      { name: 'unifiedGroupSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources/{unifiedGroupSource-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
      { name: 'unifiedGroupSource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources`
 *
 * Create a new unifiedGroupSource object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/unifiedGroupSources',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
    ],
    params,
    body,
  };
}
