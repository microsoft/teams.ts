export * as endWorkingTime from './endWorkingTime';
export * as startWorkingTime from './startWorkingTime';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/solutions/workingTimeSchedule': Operation<
    '/me/solutions/workingTimeSchedule',
    'delete'
  >;
  'GET /me/solutions/workingTimeSchedule': Operation<'/me/solutions/workingTimeSchedule', 'get'>;
  'PATCH /me/solutions/workingTimeSchedule': Operation<
    '/me/solutions/workingTimeSchedule',
    'patch'
  >;
}

/**
 * `DELETE /me/solutions/workingTimeSchedule`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/solutions/workingTimeSchedule']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/solutions/workingTimeSchedule',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/solutions/workingTimeSchedule`
 *
 * The working time schedule entity associated with the solution.
 */
export function get(
  params?: IEndpoints['GET /me/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<IEndpoints['GET /me/solutions/workingTimeSchedule']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/solutions/workingTimeSchedule',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/solutions/workingTimeSchedule`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/solutions/workingTimeSchedule']['body'],
  params?: IEndpoints['PATCH /me/solutions/workingTimeSchedule']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/solutions/workingTimeSchedule']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/solutions/workingTimeSchedule',
    paramDefs: [],
    params,
    body,
  };
}
