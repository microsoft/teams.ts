export * as calendarPermissions from './calendarPermissions';
export * as calendarView from './calendarView';
export * as events from './events';
export * as getSchedule from './getSchedule';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    'delete'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars',
    'get'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    'get'
  >;
  'PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    'patch'
  >;
  'POST /me/calendarGroups/{calendarGroup-id}/calendars': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars',
    'post'
  >;
}

/**
 * `DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars`
 *
 * Retrieve a list of calendars belonging to a calendar group.
 */
export function list(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendarGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
 *
 * The calendars in the calendar group. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['body'],
  params?: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    paramDefs: [
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/calendarGroups/{calendarGroup-id}/calendars`
 *
 * Use this API to create a new calendar in a calendar group for a user.
 */
export function create(
  body: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars']['body'],
  params?: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars',
    paramDefs: [{ name: 'calendarGroup-id', in: 'path' }],
    params,
    body,
  };
}
