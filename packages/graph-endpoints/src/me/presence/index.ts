export * as clearPresence from './clearPresence';
export * as clearUserPreferredPresence from './clearUserPreferredPresence';
export * as setPresence from './setPresence';
export * as setStatusMessage from './setStatusMessage';
export * as setUserPreferredPresence from './setUserPreferredPresence';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/presence': Operation<'/me/presence', 'delete'>;
  'GET /me/presence': Operation<'/me/presence', 'get'>;
  'PATCH /me/presence': Operation<'/me/presence', 'patch'>;
}

/**
 * `DELETE /me/presence`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/presence']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/presence']['response']> {
  return {
    method: 'delete',
    path: '/me/presence',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/presence`
 *
 * Get a user&#x27;s presence information.
 */
export function get(
  params?: IEndpoints['GET /me/presence']['parameters']
): EndpointRequest<IEndpoints['GET /me/presence']['response']> {
  return {
    method: 'get',
    path: '/me/presence',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/presence`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/presence']['body'],
  params?: IEndpoints['PATCH /me/presence']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/presence']['response']> {
  return {
    method: 'patch',
    path: '/me/presence',
    paramDefs: [],
    params,
    body,
  };
}
