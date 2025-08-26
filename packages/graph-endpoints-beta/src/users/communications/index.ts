export * as callSettings from './callSettings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/communications': Operation<'/users/{user-id}/communications', 'delete'>;
  'GET /users/{user-id}/communications': Operation<'/users/{user-id}/communications', 'get'>;
  'PATCH /users/{user-id}/communications': Operation<'/users/{user-id}/communications', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/communications`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/communications']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/communications']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/communications',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/communications`
 *
 * The user&#x27;s communications settings on Teams.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/communications']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/communications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/communications',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/communications`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/communications']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/communications']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/communications']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/communications',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
