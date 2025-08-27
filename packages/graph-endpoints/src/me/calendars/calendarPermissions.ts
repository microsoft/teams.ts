import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /me/calendars/{calendar-id}/calendarPermissions': Operation<
    '/me/calendars/{calendar-id}/calendarPermissions',
    'get'
  >;
  'GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'POST /me/calendars/{calendar-id}/calendarPermissions': Operation<
    '/me/calendars/{calendar-id}/calendarPermissions',
    'post'
  >;
}

/**
 * `DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'calendar-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendars/{calendar-id}/calendarPermissions`
 *
 * The permissions of the users with whom the calendar is shared.
 */
export function list(
  params?: IEndpoints['GET /me/calendars/{calendar-id}/calendarPermissions']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendars/{calendar-id}/calendarPermissions']['response']> {
  return {
    method: 'get',
    path: '/me/calendars/{calendar-id}/calendarPermissions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
 *
 * The permissions of the users with whom the calendar is shared.
 */
export function get(
  params?: IEndpoints['GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendar-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['body'],
  params?: IEndpoints['PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'calendar-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/calendars/{calendar-id}/calendarPermissions`
 *
 */
export function create(
  body: IEndpoints['POST /me/calendars/{calendar-id}/calendarPermissions']['body'],
  params?: IEndpoints['POST /me/calendars/{calendar-id}/calendarPermissions']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendars/{calendar-id}/calendarPermissions']['response']> {
  return {
    method: 'post',
    path: '/me/calendars/{calendar-id}/calendarPermissions',
    paramDefs: [{ name: 'calendar-id', in: 'path' }],
    params,
    body,
  };
}
