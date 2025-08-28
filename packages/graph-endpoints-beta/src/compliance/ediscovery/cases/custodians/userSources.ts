import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}`
 *
 * Delete a userSource object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
      { name: 'userSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources`
 *
 * Get a list of the userSource objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources',
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
 * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}`
 *
 * Read the properties and relationships of a userSource object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
      { name: 'userSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
      { name: 'userSource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources`
 *
 * Create a new custodian userSource object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
    ],
    params,
    body,
  };
}
