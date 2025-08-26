export * as notebooks from './notebooks';
export * as operations from './operations';
export * as pages from './pages';
export * as resources from './resources';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/onenote': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/onenote': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/onenote`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/onenote',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote',
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
 * `PATCH /groups/{group-id}/sites/{site-id}/onenote`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/onenote',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
