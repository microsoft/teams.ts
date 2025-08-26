export * as children from './children';
export * as parentGroup from './parentGroup';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}': Operation<'/termStore/sets/{set-id}', 'delete'>;
  'GET /termStore/sets': Operation<'/termStore/sets', 'get'>;
  'GET /termStore/sets/{set-id}': Operation<'/termStore/sets/{set-id}', 'get'>;
  'PATCH /termStore/sets/{set-id}': Operation<'/termStore/sets/{set-id}', 'patch'>;
  'POST /termStore/sets': Operation<'/termStore/sets', 'post'>;
}

/**
 * `DELETE /termStore/sets/{set-id}`
 *
 * Delete a set object.
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /termStore/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/sets`
 *
 * Read the properties and relationships of a set object.
 */
export function list(
  params?: IEndpoints['GET /termStore/sets']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/sets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}`
 *
 * Read the properties and relationships of a set object.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}`
 *
 * Update the properties of a set object.
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /termStore/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}',
    paramDefs: [{ name: 'set-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /termStore/sets`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/sets']['body'],
  params?: IEndpoints['POST /termStore/sets']['parameters']
): EndpointRequest<IEndpoints['POST /termStore/sets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/sets',
    paramDefs: [],
    params,
    body,
  };
}
