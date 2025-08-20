export * as fromTerm from './fromTerm';
export * as set from './set';
export * as toTerm from './toTerm';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    'delete'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations',
    'get'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    'get'
  >;
  'PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    'patch'
  >;
  'POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations',
    'post'
  >;
}

/**
 * `DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function list(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations',
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
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['body'],
  params?: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations']['body'],
  params?: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}/relations',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
    body,
  };
}
