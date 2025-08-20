export * as calendarPermissions from './calendarPermissions';
export * as calendarView from './calendarView';
export * as events from './events';
export * as getSchedule from './getSchedule';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    'delete'
  >;
  'GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars',
    'get'
  >;
  'GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    'get'
  >;
  'PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    'patch'
  >;
  'POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars`
 *
 * The calendars in the calendar group. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
 *
 * The calendars in the calendar group. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}
