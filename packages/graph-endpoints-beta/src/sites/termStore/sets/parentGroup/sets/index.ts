export * as children from './children';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets',
    'get'
  >;
  'GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets`
 *
 * All sets under the group in a term [store].
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets',
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
 * `GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 * All sets under the group in a term [store].
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}
