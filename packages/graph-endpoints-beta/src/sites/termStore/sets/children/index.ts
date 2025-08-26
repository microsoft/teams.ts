export * as childrenChildren from './childrenChildren';
export * as relations from './relations';
export * as set from './set';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/children': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children',
    'get'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/sets/{set-id}/children': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets/{set-id}/children`
 *
 * Children terms of set in term [store].
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children',
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
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}`
 *
 * Children terms of set in term [store].
 */
export function get$1(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/sets/{set-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/children']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}
