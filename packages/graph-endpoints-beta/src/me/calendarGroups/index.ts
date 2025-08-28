export * as calendars from './calendars';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendarGroups/{calendarGroup-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}',
    'delete'
  >;
  'GET /me/calendarGroups': Operation<'/me/calendarGroups', 'get'>;
  'GET /me/calendarGroups/{calendarGroup-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}',
    'get'
  >;
  'PATCH /me/calendarGroups/{calendarGroup-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}',
    'patch'
  >;
  'POST /me/calendarGroups': Operation<'/me/calendarGroups', 'post'>;
}

/**
 * `DELETE /me/calendarGroups/{calendarGroup-id}`
 *
 * Delete a calendar group other than the default calendar group.
 */
export function del(
  params?: IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/calendarGroups/{calendarGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'calendarGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendarGroups`
 *
 * Get the user&#x27;s calendar groups.
 */
export function list(
  params?: IEndpoints['GET /me/calendarGroups']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendarGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendarGroups',
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
 * `GET /me/calendarGroups/{calendarGroup-id}`
 *
 * Retrieve the properties and relationships of a calendar group object.
 */
export function get(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendarGroups/{calendarGroup-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendarGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/calendarGroups/{calendarGroup-id}`
 *
 * Update the properties of calendargroup object.
 */
export function update(
  body: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}']['body'],
  params?: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/calendarGroups/{calendarGroup-id}',
    paramDefs: [{ name: 'calendarGroup-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/calendarGroups`
 *
 * Use this API to create a new CalendarGroup.
 */
export function create(
  body: IEndpoints['POST /me/calendarGroups']['body'],
  params?: IEndpoints['POST /me/calendarGroups']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendarGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendarGroups',
    paramDefs: [],
    params,
    body,
  };
}
