export * as calendarPermissions from './calendarPermissions';
export * as calendarView from './calendarView';
export * as events from './events';
export * as getSchedule from './getSchedule';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendars/{calendar-id}': Operation<'/me/calendars/{calendar-id}', 'delete'>;
  'GET /me/calendars': Operation<'/me/calendars', 'get'>;
  'GET /me/calendars/{calendar-id}': Operation<'/me/calendars/{calendar-id}', 'get'>;
  'PATCH /me/calendars/{calendar-id}': Operation<'/me/calendars/{calendar-id}', 'patch'>;
  'POST /me/calendars': Operation<'/me/calendars', 'post'>;
}

/**
 * `DELETE /me/calendars/{calendar-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendars/{calendar-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/calendars/{calendar-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/calendars/{calendar-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendars`
 *
 * Get all the user&#x27;s calendars (/calendars navigation property), get the calendars from the default calendar group or from a specific calendar group.
 */
export function list(
  params?: IEndpoints['GET /me/calendars']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendars']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendars',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/calendars/{calendar-id}`
 *
 * The user&#x27;s calendars. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/calendars/{calendar-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendars/{calendar-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendars/{calendar-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/calendars/{calendar-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendars/{calendar-id}']['body'],
  params?: IEndpoints['PATCH /me/calendars/{calendar-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/calendars/{calendar-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/calendars/{calendar-id}',
    paramDefs: [{ name: 'calendar-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/calendars`
 *
 * Create a new calendar for a user.
 */
export function create(
  body: IEndpoints['POST /me/calendars']['body'],
  params?: IEndpoints['POST /me/calendars']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendars']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendars',
    paramDefs: [],
    params,
    body,
  };
}
