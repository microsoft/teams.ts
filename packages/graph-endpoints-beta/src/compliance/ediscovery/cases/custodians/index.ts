export * as lastIndexOperation from './lastIndexOperation';
export * as siteSources from './siteSources';
export * as unifiedGroupSources from './unifiedGroupSources';
export * as userSources from './userSources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/custodians': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/custodians`
 *
 * Get a list of the custodian objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/custodians',
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
 * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}`
 *
 * Read the properties and relationships of a custodian object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}`
 *
 * Update the properties of a custodian object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/custodians`
 *
 * Create a new custodian object. After the custodian object is created, you will need to create the custodian&#x27;s userSource to reference their mailbox and OneDrive for Business site.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/custodians',
    paramDefs: [{ name: 'case-id', in: 'path' }],
    params,
    body,
  };
}
