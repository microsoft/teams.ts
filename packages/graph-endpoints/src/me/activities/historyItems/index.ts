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
  'GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity': Operation<
    '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity',
    'get'
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
    method: 'delete',
    path: '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['userActivity-id', 'activityHistoryItem-id'],
    },
    params,
  };
}

/**
 * `GET /me/activities/{userActivity-id}/historyItems`
 *
 * Optional. NavigationProperty/Containment; navigation property to the activity&#x27;s historyItems.
 */
export function list(
  params?: IEndpoints['GET /me/activities/{userActivity-id}/historyItems']['parameters']
): EndpointRequest<IEndpoints['GET /me/activities/{userActivity-id}/historyItems']['response']> {
  return {
    method: 'get',
    path: '/me/activities/{userActivity-id}/historyItems',
    paramDefs: {
      path: ['userActivity-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}`
 *
 * Optional. NavigationProperty/Containment; navigation property to the activity&#x27;s historyItems.
 */
export function get(
  params?: IEndpoints['GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: {
      path: ['userActivity-id', 'activityHistoryItem-id'],
      query: ['$select', '$expand'],
    },
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
    method: 'patch',
    path: '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}',
    paramDefs: {
      path: ['userActivity-id', 'activityHistoryItem-id'],
    },
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
    method: 'post',
    path: '/me/activities/{userActivity-id}/historyItems',
    paramDefs: {
      path: ['userActivity-id'],
    },
    params,
    body,
  };
}

export const activity = {
  /**
   * `GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity`
   *
   * Optional. NavigationProperty/Containment; navigation property to the associated activity.
   */
  get: function get(
    params?: IEndpoints['GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity']['response']
  > {
    return {
      method: 'get',
      path: '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userActivity-id', 'activityHistoryItem-id'],
      },
      params,
    };
  },
};
