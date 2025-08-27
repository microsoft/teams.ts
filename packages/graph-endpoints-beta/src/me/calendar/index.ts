export * as calendarPermissions from './calendarPermissions';
export * as calendarView from './calendarView';
export * as events from './events';
export * as getSchedule from './getSchedule';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/calendar': Operation<'/me/calendar', 'get'>;
  'PATCH /me/calendar': Operation<'/me/calendar', 'patch'>;
}

/**
  * `GET /me/calendar`
  *
  * Get the properties and relationships of a calendar object. The calendar can be one for a user,
or the default calendar of a Microsoft 365 group. There are two scenarios where an app can get another user&#x27;s calendar:
  */
export function get(
  params?: IEndpoints['GET /me/calendar']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendar']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendar',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
  * `PATCH /me/calendar`
  *
  * Update the properties of a calendar object. The calendar can be one for a user,
or the default calendar of a Microsoft 365 group.
  */
export function update(
  body: IEndpoints['PATCH /me/calendar']['body'],
  params?: IEndpoints['PATCH /me/calendar']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/calendar']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/calendar',
    paramDefs: [],
    params,
    body,
  };
}
