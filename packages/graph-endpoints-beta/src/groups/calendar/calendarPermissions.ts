import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /groups/{group-id}/calendar/calendarPermissions': Operation<
    '/groups/{group-id}/calendar/calendarPermissions',
    'get'
  >;
  'GET /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'POST /groups/{group-id}/calendar/calendarPermissions': Operation<
    '/groups/{group-id}/calendar/calendarPermissions',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/calendar/calendarPermissions`
 *
 * The permissions of the users with whom the calendar is shared.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/calendar/calendarPermissions']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/calendar/calendarPermissions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/calendar/calendarPermissions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}`
 *
 * The permissions of the users with whom the calendar is shared.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/calendar/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/calendar/calendarPermissions`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/calendar/calendarPermissions']['body'],
  params?: IEndpoints['POST /groups/{group-id}/calendar/calendarPermissions']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/calendar/calendarPermissions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/calendar/calendarPermissions',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
