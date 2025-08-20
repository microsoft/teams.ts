import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'legalHold-id', in: 'path' },
      { name: 'userSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources`
 *
 * Get the list of userSource objects associated with a legal hold.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources',
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
      { name: 'legalHold-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}`
 *
 * Data source entity for a the legal hold. This is the container for a mailbox and OneDrive for Business site.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'legalHold-id', in: 'path' },
      { name: 'userSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'legalHold-id', in: 'path' },
      { name: 'userSource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources`
 *
 * Adds a userSource to a legalHold object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'legalHold-id', in: 'path' },
    ],
    params,
    body,
  };
}
