export * as activity from './activity';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}': Operation<
    '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    'delete'
  >;
  'GET /me/activities/{userActivity-id}/historyItems': Operation<
    '/me/activities/{userActivity-id}/historyItems',
    'get'
  >;
  'GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}': Operation<
    '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    'get'
  >;
  'PATCH /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}': Operation<
    '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    'patch'
  >;
  'POST /me/activities/{userActivity-id}/historyItems': Operation<
    '/me/activities/{userActivity-id}/historyItems',
    'post'
  >;
}

/**
 * `DELETE /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userActivity-id', in: 'path' },
      { name: 'activityHistoryItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/activities/{userActivity-id}/historyItems`
 *
 * Optional. NavigationProperty/Containment; navigation property to the activity&#x27;s activityHistoryItems.
 */
export function list(
  params?: IEndpoints['GET /me/activities/{userActivity-id}/historyItems']['parameters']
): EndpointRequest<IEndpoints['GET /me/activities/{userActivity-id}/historyItems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/activities/{userActivity-id}/historyItems',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}`
 *
 * Optional. NavigationProperty/Containment; navigation property to the activity&#x27;s activityHistoryItems.
 */
export function get(
  params?: IEndpoints['GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userActivity-id', in: 'path' },
      { name: 'activityHistoryItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}`
 *
 * Delete an existing history item for an existing user activity.
 */
export function update(
  body: IEndpoints['PATCH /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['body'],
  params?: IEndpoints['PATCH /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: [
      { name: 'userActivity-id', in: 'path' },
      { name: 'activityHistoryItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/activities/{userActivity-id}/historyItems`
 *
 */
export function create(
  body: IEndpoints['POST /me/activities/{userActivity-id}/historyItems']['body'],
  params?: IEndpoints['POST /me/activities/{userActivity-id}/historyItems']['parameters']
): EndpointRequest<IEndpoints['POST /me/activities/{userActivity-id}/historyItems']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/activities/{userActivity-id}/historyItems',
    paramDefs: [{ name: 'userActivity-id', in: 'path' }],
    params,
    body,
  };
}
