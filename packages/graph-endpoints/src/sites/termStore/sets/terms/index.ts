export * as children from './children';
export * as relations from './relations';
export * as set from './set';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/terms': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/terms',
    'get'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/sets/{set-id}/terms': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/terms',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}`
 *
 * Delete a term object.
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}',
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
 * `GET /sites/{site-id}/termStore/sets/{set-id}/terms`
 *
 * All the terms under the set.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/terms']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/terms']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/terms',
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
 * `GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}`
 *
 * All the terms under the set.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}',
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
 * `PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}`
 *
 * Update the properties of a term object.
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}',
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
 * `POST /sites/{site-id}/termStore/sets/{set-id}/terms`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/terms']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/terms']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/terms']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/termStore/sets/{set-id}/terms',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}
