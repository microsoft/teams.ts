export * as childTags from './childTags';
export * as parent from './parent';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/tags/{tag-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/tags': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/tags/{tag-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/tags': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/tags/{tag-id}`
 *
 * Delete a tag object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'tag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/tags`
 *
 * Retrieve a list of tag objects from an eDiscovery case.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags']['parameters']
): EndpointRequest<IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/tags',
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
 * `GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}`
 *
 * Read the properties and relationships of a tag object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'tag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/tags/{tag-id}`
 *
 * Update the properties of a tag object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'tag-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/tags`
 *
 * Create a new tag for the specified case.  The tags are used in review sets while reviewing content.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/tags']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/tags']['parameters']
): EndpointRequest<IEndpoints['POST /compliance/ediscovery/cases/{case-id}/tags']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/tags',
    paramDefs: [{ name: 'case-id', in: 'path' }],
    params,
    body,
  };
}
