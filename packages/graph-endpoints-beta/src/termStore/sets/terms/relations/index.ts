export * as fromTerm from './fromTerm';
export * as set from './set';
export * as toTerm from './toTerm';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    'delete'
  >;
  'GET /termStore/sets/{set-id}/terms/{term-id}/relations': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations',
    'get'
  >;
  'GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    'get'
  >;
  'PATCH /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    'patch'
  >;
  'POST /termStore/sets/{set-id}/terms/{term-id}/relations': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}/relations',
    'post'
  >;
}

/**
 * `DELETE /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/terms/{term-id}/relations`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function list(
  params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/terms/{term-id}/relations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    paramDefs: [
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /termStore/sets/{set-id}/terms/{term-id}/relations`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/sets/{set-id}/terms/{term-id}/relations']['body'],
  params?: IEndpoints['POST /termStore/sets/{set-id}/terms/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/sets/{set-id}/terms/{term-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/sets/{set-id}/terms/{term-id}/relations',
    paramDefs: [
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
    body,
  };
}
