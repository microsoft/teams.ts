export * as workingTimeSchedule from './workingTimeSchedule';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/solutions': Operation<'/users/{user-id}/solutions', 'delete'>;
  'GET /users/{user-id}/solutions': Operation<'/users/{user-id}/solutions', 'get'>;
  'PATCH /users/{user-id}/solutions': Operation<'/users/{user-id}/solutions', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/solutions`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/solutions']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/solutions']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/solutions',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/solutions`
 *
 * The identifier that relates the user to the working time schedule triggers. Read-Only. Nullable
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/solutions']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/solutions']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/solutions',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/solutions`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/solutions']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/solutions']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/solutions']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/solutions',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
