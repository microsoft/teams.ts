export * as workingTimeSchedule from './workingTimeSchedule';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/solutions': Operation<'/me/solutions', 'delete'>;
  'GET /me/solutions': Operation<'/me/solutions', 'get'>;
  'PATCH /me/solutions': Operation<'/me/solutions', 'patch'>;
}

/**
 * `DELETE /me/solutions`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/solutions']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/solutions']['response']> {
  return {
    method: 'delete',
    path: '/me/solutions',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/solutions`
 *
 * The identifier that relates the user to the working time schedule triggers. Read-Only. Nullable
 */
export function list(
  params?: IEndpoints['GET /me/solutions']['parameters']
): EndpointRequest<IEndpoints['GET /me/solutions']['response']> {
  return {
    method: 'get',
    path: '/me/solutions',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/solutions`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/solutions']['body'],
  params?: IEndpoints['PATCH /me/solutions']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/solutions']['response']> {
  return {
    method: 'patch',
    path: '/me/solutions',
    paramDefs: [],
    params,
    body,
  };
}
