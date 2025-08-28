export * as delegates from './delegates';
export * as delegators from './delegators';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/communications/callSettings': Operation<
    '/users/{user-id}/communications/callSettings',
    'delete'
  >;
  'GET /users/{user-id}/communications/callSettings': Operation<
    '/users/{user-id}/communications/callSettings',
    'get'
  >;
  'PATCH /users/{user-id}/communications/callSettings': Operation<
    '/users/{user-id}/communications/callSettings',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/communications/callSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/communications/callSettings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/communications/callSettings`
 *
 * The call settings assigned to the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/communications/callSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/communications/callSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/communications/callSettings']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/communications/callSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/communications/callSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/communications/callSettings',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
