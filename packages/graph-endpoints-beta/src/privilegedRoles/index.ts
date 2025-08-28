export * as assignments from './assignments';
export * as selfActivate from './selfActivate';
export * as selfDeactivate from './selfDeactivate';
export * as settings from './settings';
export * as summary from './summary';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoles/{privilegedRole-id}': Operation<
    '/privilegedRoles/{privilegedRole-id}',
    'delete'
  >;
  'GET /privilegedRoles': Operation<'/privilegedRoles', 'get'>;
  'GET /privilegedRoles/{privilegedRole-id}': Operation<
    '/privilegedRoles/{privilegedRole-id}',
    'get'
  >;
  'PATCH /privilegedRoles/{privilegedRole-id}': Operation<
    '/privilegedRoles/{privilegedRole-id}',
    'patch'
  >;
  'POST /privilegedRoles': Operation<'/privilegedRoles', 'post'>;
}

/**
 * `DELETE /privilegedRoles/{privilegedRole-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /privilegedRoles/{privilegedRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoles/{privilegedRole-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedRoles`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoles']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoles',
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
 * `GET /privilegedRoles/{privilegedRole-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoles/{privilegedRole-id}']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoles/{privilegedRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoles/{privilegedRole-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedRoles/{privilegedRole-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}']['body'],
  params?: IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /privilegedRoles/{privilegedRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoles/{privilegedRole-id}',
    paramDefs: [{ name: 'privilegedRole-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /privilegedRoles`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoles']['body'],
  params?: IEndpoints['POST /privilegedRoles']['parameters']
): EndpointRequest<IEndpoints['POST /privilegedRoles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoles',
    paramDefs: [],
    params,
    body,
  };
}
