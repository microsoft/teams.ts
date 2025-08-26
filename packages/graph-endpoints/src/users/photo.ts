import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/photo': Operation<'/users/{user-id}/photo', 'delete'>;
  'GET /users/{user-id}/photo': Operation<'/users/{user-id}/photo', 'get'>;
  'PATCH /users/{user-id}/photo': Operation<'/users/{user-id}/photo', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/photo`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/photo']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/photo']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/photo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/photo`
 *
 * The user&#x27;s profile photo. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/photo']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/photo']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/photo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/photo`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/photo']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/photo']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/photo']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/photo',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
