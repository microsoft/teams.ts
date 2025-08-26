export * as calendars from './calendars';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}',
    'delete'
  >;
  'GET /users/{user-id}/calendarGroups': Operation<'/users/{user-id}/calendarGroups', 'get'>;
  'GET /users/{user-id}/calendarGroups/{calendarGroup-id}': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}',
    'get'
  >;
  'PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}',
    'patch'
  >;
  'POST /users/{user-id}/calendarGroups': Operation<'/users/{user-id}/calendarGroups', 'post'>;
}

/**
 * `DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/calendarGroups/{calendarGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendarGroups`
 *
 * The user&#x27;s calendar groups. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/calendarGroups']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/calendarGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendarGroups',
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
 * `GET /users/{user-id}/calendarGroups/{calendarGroup-id}`
 *
 * The user&#x27;s calendar groups. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendarGroups/{calendarGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/calendarGroups/{calendarGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/calendarGroups/{calendarGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/calendarGroups`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendarGroups']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendarGroups']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/calendarGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/calendarGroups',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
