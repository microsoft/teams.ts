import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'delete'
  >;
  'GET /users/{user-id}/calendar/calendarPermissions': Operation<
    '/users/{user-id}/calendar/calendarPermissions',
    'get'
  >;
  'GET /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'get'
  >;
  'PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}': Operation<
    '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
    'patch'
  >;
  'POST /users/{user-id}/calendar/calendarPermissions': Operation<
    '/users/{user-id}/calendar/calendarPermissions',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}`
 *
 * Delete calendarPermission.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendar/calendarPermissions`
 *
 * Get the specified permissions object of a user or group calendar that has been shared.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/calendar/calendarPermissions']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/calendar/calendarPermissions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendar/calendarPermissions',
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
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}`
 *
 * Get the specified permissions object of a user or group calendar that has been shared.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}`
 *
 * Update the permissions assigned to an existing share recipient or delegate, through the corresponding calendarPermission object for a calendar.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/calendar/calendarPermissions/{calendarPermission-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendarPermission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/calendar/calendarPermissions`
 *
 * Create a calendarPermission resource to specify the identity and role of the user with whom the specified calendar is being shared or delegated.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendar/calendarPermissions']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendar/calendarPermissions']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/calendar/calendarPermissions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/calendar/calendarPermissions',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
