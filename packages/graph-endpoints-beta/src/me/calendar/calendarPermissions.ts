import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendar/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /me/calendar/calendarPermissions': Operation<'/me/calendar/calendarPermissions', 'get'>;
  'GET /me/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendar/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /me/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/me/calendar/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'POST /me/calendar/calendarPermissions': Operation<'/me/calendar/calendarPermissions', 'post'>;
}

/**
 * `DELETE /me/calendar/calendarPermissions/{calendarPermission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/calendar/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/calendar/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendar/calendarPermissions`
 *
 * The permissions of the users with whom the calendar is shared.
 */
export function list(
  params?: IEndpoints['GET /me/calendar/calendarPermissions']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendar/calendarPermissions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendar/calendarPermissions',
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
 * `GET /me/calendar/calendarPermissions/{calendarPermission-id}`
 *
 * The permissions of the users with whom the calendar is shared.
 */
export function get(
  params?: IEndpoints['GET /me/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendar/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendar/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/calendar/calendarPermissions/{calendarPermission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendar/calendarPermissions/{calendarPermission-id}']['body'],
  params?: IEndpoints['PATCH /me/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/calendar/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/calendar/calendarPermissions/{calendarPermission-id}',
    paramDefs: [{ name: 'calendarPermission-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/calendar/calendarPermissions`
 *
 */
export function create(
  body: IEndpoints['POST /me/calendar/calendarPermissions']['body'],
  params?: IEndpoints['POST /me/calendar/calendarPermissions']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendar/calendarPermissions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendar/calendarPermissions',
    paramDefs: [],
    params,
    body,
  };
}
