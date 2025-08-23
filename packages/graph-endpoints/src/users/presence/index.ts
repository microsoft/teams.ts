export * as clearPresence from './clearPresence';
export * as clearUserPreferredPresence from './clearUserPreferredPresence';
export * as setPresence from './setPresence';
export * as setStatusMessage from './setStatusMessage';
export * as setUserPreferredPresence from './setUserPreferredPresence';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/presence': Operation<'/users/{user-id}/presence', 'delete'>;
  'GET /users/{user-id}/presence': Operation<'/users/{user-id}/presence', 'get'>;
  'PATCH /users/{user-id}/presence': Operation<'/users/{user-id}/presence', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/presence`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/presence']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/presence']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/presence',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/presence`
 *
 * Set a presence status message for a user. An optional expiration date and time can be supplied.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/presence']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/presence']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/presence',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/presence`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/presence']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/presence']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/presence']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/presence',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
