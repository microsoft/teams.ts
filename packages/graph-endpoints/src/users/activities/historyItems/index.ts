export * as activity from './activity';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}': Operation<
    '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    'delete'
  >;
  'GET /users/{user-id}/activities/{userActivity-id}/historyItems': Operation<
    '/users/{user-id}/activities/{userActivity-id}/historyItems',
    'get'
  >;
  'GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}': Operation<
    '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    'get'
  >;
  'PATCH /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}': Operation<
    '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    'patch'
  >;
  'POST /users/{user-id}/activities/{userActivity-id}/historyItems': Operation<
    '/users/{user-id}/activities/{userActivity-id}/historyItems',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'userActivity-id', in: 'path' },
      { name: 'activityHistoryItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/activities/{userActivity-id}/historyItems`
 *
 * Optional. NavigationProperty/Containment; navigation property to the activity&#x27;s historyItems.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems',
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
      { name: 'userActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}`
 *
 * Optional. NavigationProperty/Containment; navigation property to the activity&#x27;s historyItems.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'userActivity-id', in: 'path' },
      { name: 'activityHistoryItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'userActivity-id', in: 'path' },
      { name: 'activityHistoryItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/activities/{userActivity-id}/historyItems`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/activities/{userActivity-id}/historyItems']['body'],
  params?: IEndpoints['POST /users/{user-id}/activities/{userActivity-id}/historyItems']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/activities/{userActivity-id}/historyItems']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'userActivity-id', in: 'path' },
    ],
    params,
    body,
  };
}
