export * as queries from './queries';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/reviewSets': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/reviewSets': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'reviewSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/reviewSets`
 *
 * Retrieve the properties and relationships of a reviewSet object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets',
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
 * `GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}`
 *
 * Retrieve the properties and relationships of a reviewSet object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'reviewSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'reviewSet-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/reviewSets`
 *
 * Create a new reviewSet object. The request body contains the display name of the review set, which is the only writable property.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets',
    paramDefs: [{ name: 'case-id', in: 'path' }],
    params,
    body,
  };
}
