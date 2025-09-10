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
  'GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity': Operation<
    '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity',
    'get'
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
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'userActivity-id', 'activityHistoryItem-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/activities/{userActivity-id}/historyItems`
 *
 * Optional. NavigationProperty/Containment; navigation property to the activity&#x27;s activityHistoryItems.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems',
    paramDefs: {
      path: ['user-id', 'userActivity-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}`
 *
 * Optional. NavigationProperty/Containment; navigation property to the activity&#x27;s activityHistoryItems.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: {
      path: ['user-id', 'userActivity-id', 'activityHistoryItem-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: {
      path: ['user-id', 'userActivity-id', 'activityHistoryItem-id'],
    },
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
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems',
    paramDefs: {
      path: ['user-id', 'userActivity-id'],
    },
    params,
    body,
  };
}

export const activity = {
  /**
   * `GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity`
   *
   * Optional. NavigationProperty/Containment; navigation property to the associated activity.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'userActivity-id', 'activityHistoryItem-id'],
      },
      params,
    };
  },
};
