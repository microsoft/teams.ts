export * as addToDrive from './addToDrive';
export * as removeFromDrive from './removeFromDrive';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/sites/{site-id}/contentModels/{contentModel-id}',
    'delete'
  >;
  'GET /sites/{site-id}/contentModels': Operation<'/sites/{site-id}/contentModels', 'get'>;
  'GET /sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/sites/{site-id}/contentModels/{contentModel-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/sites/{site-id}/contentModels/{contentModel-id}',
    'patch'
  >;
  'POST /sites/{site-id}/contentModels': Operation<'/sites/{site-id}/contentModels', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/contentModels/{contentModel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/contentModels/{contentModel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'contentModel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/contentModels`
 *
 * Read the properties and relationships of a contentModel object.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/contentModels']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/contentModels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/contentModels',
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
 * `GET /sites/{site-id}/contentModels/{contentModel-id}`
 *
 * Read the properties and relationships of a contentModel object.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/contentModels/{contentModel-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'contentModel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/contentModels/{contentModel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/contentModels/{contentModel-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/contentModels/{contentModel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'contentModel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/contentModels`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/contentModels']['body'],
  params?: IEndpoints['POST /sites/{site-id}/contentModels']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/contentModels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/contentModels',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
