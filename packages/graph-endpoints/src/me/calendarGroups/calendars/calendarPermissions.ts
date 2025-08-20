import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
    'get'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
    'post'
  >;
}

/**
 * `DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions`
 *
 * The permissions of the users with whom the calendar is shared.
 */
export function list(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['response']
> {
  return {
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
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
      { name: 'calendar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
 *
 * The permissions of the users with whom the calendar is shared.
 */
export function get(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['body'],
  params?: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions`
 *
 */
export function create(
  body: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['body'],
  params?: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['response']
> {
  return {
    method: 'post',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
    paramDefs: [
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
    body,
  };
}
