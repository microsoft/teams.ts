export * as webinars from './webinars';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/virtualEvents': Operation<'/users/{user-id}/virtualEvents', 'delete'>;
  'GET /users/{user-id}/virtualEvents': Operation<'/users/{user-id}/virtualEvents', 'get'>;
  'PATCH /users/{user-id}/virtualEvents': Operation<'/users/{user-id}/virtualEvents', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/virtualEvents`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/virtualEvents',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/virtualEvents`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/virtualEvents',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/virtualEvents`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/virtualEvents']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/virtualEvents',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
