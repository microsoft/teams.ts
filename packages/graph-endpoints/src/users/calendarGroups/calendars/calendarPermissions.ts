import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
    'get'
  >;
  'GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions`
 *
 * The permissions of the users with whom the calendar is shared.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
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
      { name: 'calendar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
 *
 * The permissions of the users with whom the calendar is shared.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
    body,
  };
}
