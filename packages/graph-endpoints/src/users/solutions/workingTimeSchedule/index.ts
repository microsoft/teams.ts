export * as endWorkingTime from './endWorkingTime';
export * as startWorkingTime from './startWorkingTime';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/solutions/workingTimeSchedule': Operation<
    '/users/{user-id}/solutions/workingTimeSchedule',
    'delete'
  >;
  'GET /users/{user-id}/solutions/workingTimeSchedule': Operation<
    '/users/{user-id}/solutions/workingTimeSchedule',
    'get'
  >;
  'PATCH /users/{user-id}/solutions/workingTimeSchedule': Operation<
    '/users/{user-id}/solutions/workingTimeSchedule',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/solutions/workingTimeSchedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/solutions/workingTimeSchedule']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/solutions/workingTimeSchedule',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/solutions/workingTimeSchedule`
 *
 * The working time schedule entity associated with the solution.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/solutions/workingTimeSchedule']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/solutions/workingTimeSchedule',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/solutions/workingTimeSchedule`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/solutions/workingTimeSchedule']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/solutions/workingTimeSchedule']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/solutions/workingTimeSchedule',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
