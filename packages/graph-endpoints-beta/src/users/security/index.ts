export * as informationProtection from './informationProtection';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/security': Operation<'/users/{user-id}/security', 'delete'>;
  'GET /users/{user-id}/security': Operation<'/users/{user-id}/security', 'get'>;
  'PATCH /users/{user-id}/security': Operation<'/users/{user-id}/security', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/security`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/security']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/security']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/security',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/security`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/security']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/security']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/security',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/security`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/security']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/security']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/security']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/security',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
