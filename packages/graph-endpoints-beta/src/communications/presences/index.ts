export * as clearPresence from './clearPresence';
export * as clearUserPreferredPresence from './clearUserPreferredPresence';
export * as setPresence from './setPresence';
export * as setStatusMessage from './setStatusMessage';
export * as setUserPreferredPresence from './setUserPreferredPresence';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/presences/{presence-id}': Operation<
    '/communications/presences/{presence-id}',
    'delete'
  >;
  'GET /communications/presences': Operation<'/communications/presences', 'get'>;
  'GET /communications/presences/{presence-id}': Operation<
    '/communications/presences/{presence-id}',
    'get'
  >;
  'PATCH /communications/presences/{presence-id}': Operation<
    '/communications/presences/{presence-id}',
    'patch'
  >;
  'POST /communications/presences': Operation<'/communications/presences', 'post'>;
}

/**
 * `DELETE /communications/presences/{presence-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/presences/{presence-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /communications/presences/{presence-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/presences/{presence-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'presence-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/presences`
 *
 * Get a user&#x27;s presence information.
 */
export function list(
  params?: IEndpoints['GET /communications/presences']['parameters']
): EndpointRequest<IEndpoints['GET /communications/presences']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/presences',
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
 * `GET /communications/presences/{presence-id}`
 *
 * Get a user&#x27;s presence information.
 */
export function get(
  params?: IEndpoints['GET /communications/presences/{presence-id}']['parameters']
): EndpointRequest<IEndpoints['GET /communications/presences/{presence-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/presences/{presence-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'presence-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/presences/{presence-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/presences/{presence-id}']['body'],
  params?: IEndpoints['PATCH /communications/presences/{presence-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /communications/presences/{presence-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/presences/{presence-id}',
    paramDefs: [{ name: 'presence-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /communications/presences`
 *
 */
export function create(
  body: IEndpoints['POST /communications/presences']['body'],
  params?: IEndpoints['POST /communications/presences']['parameters']
): EndpointRequest<IEndpoints['POST /communications/presences']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/presences',
    paramDefs: [],
    params,
    body,
  };
}
