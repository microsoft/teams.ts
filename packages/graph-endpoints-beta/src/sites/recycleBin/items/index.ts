export * as createdByUser from './createdByUser';
export * as dodelete from './delete';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as restore from './restore';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'delete'
  >;
  'GET /sites/{site-id}/recycleBin/items': Operation<'/sites/{site-id}/recycleBin/items', 'get'>;
  'GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/recycleBin/items/{recycleBinItem-id}': Operation<
    '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    'patch'
  >;
  'POST /sites/{site-id}/recycleBin/items': Operation<'/sites/{site-id}/recycleBin/items', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/recycleBin/items`
 *
 * Get a collection of recycleBinItem resources in the recycleBin of the specified SharePoint site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/recycleBin/items']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/recycleBin/items']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/recycleBin/items',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 * List of the recycleBinItems deleted by a user.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/recycleBin/items/{recycleBinItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/recycleBin/items/{recycleBinItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/recycleBin/items/{recycleBinItem-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'recycleBinItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/recycleBin/items`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/recycleBin/items']['body'],
  params?: IEndpoints['POST /sites/{site-id}/recycleBin/items']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/recycleBin/items']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/recycleBin/items',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
