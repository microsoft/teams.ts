export * as children from './children';
export * as parentGroup from './parentGroup';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/sets/{set-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/sets': Operation<'/sites/{site-id}/termStore/sets', 'get'>;
  'GET /sites/{site-id}/termStore/sets/{set-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/sets/{set-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/sets': Operation<'/sites/{site-id}/termStore/sets', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/termStore/sets/{set-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore/sets/{set-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets`
 *
 * Read the properties and relationships of a set object.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStore/sets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets',
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
 * `GET /sites/{site-id}/termStore/sets/{set-id}`
 *
 * Read the properties and relationships of a set object.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/sets/{set-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore/sets/{set-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/sets`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/sets']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/sets']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/termStore/sets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/termStore/sets',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
