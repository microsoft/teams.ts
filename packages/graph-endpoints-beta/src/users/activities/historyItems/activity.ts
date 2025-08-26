import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity': Operation<
    '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity`
 *
 * Optional. NavigationProperty/Containment; navigation property to the associated activity.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity',
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
