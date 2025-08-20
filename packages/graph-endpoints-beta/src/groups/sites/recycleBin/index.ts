export * as createdByUser from './createdByUser';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/recycleBin': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/recycleBin': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/recycleBin': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/recycleBin`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/recycleBin']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/recycleBin']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/recycleBin`
 *
 * A container for a collection of recycleBinItem resources in this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/recycleBin`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
