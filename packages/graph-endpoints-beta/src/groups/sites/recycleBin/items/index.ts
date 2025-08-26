export * as createdByUser from './createdByUser';
export * as dodelete from './delete';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as restore from './restore';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/items': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/recycleBin/items': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/recycleBin/items`
 *
 * List of the recycleBinItems deleted by a user.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 * List of the recycleBinItems deleted by a user.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/recycleBin/items`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
