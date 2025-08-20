export * as addToDrive from './addToDrive';
export * as removeFromDrive from './removeFromDrive';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentModels': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentModels': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentModel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentModels`
 *
 * The collection of content models applied to this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentModels']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentModels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentModels',
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
 * `GET /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}`
 *
 * The collection of content models applied to this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentModel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentModel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentModels`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentModels',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
