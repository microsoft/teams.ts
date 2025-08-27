export * as calendarPermissions from './calendarPermissions';
export * as calendarView from './calendarView';
export * as events from './events';
export * as getSchedule from './getSchedule';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/calendar': Operation<'/users/{user-id}/calendar', 'get'>;
  'PATCH /users/{user-id}/calendar': Operation<'/users/{user-id}/calendar', 'patch'>;
}

/**
 * `GET /users/{user-id}/calendar`
 *
 * The user&#x27;s primary calendar. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendar']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/calendar']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendar',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/calendar`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/calendar']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/calendar']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/calendar']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/calendar',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
