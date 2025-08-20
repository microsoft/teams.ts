import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity': Operation<
    '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity',
    'get'
  >;
}

/**
 * `GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity`
 *
 * Optional. NavigationProperty/Containment; navigation property to the associated activity.
 */
export function get(
  params?: IEndpoints['GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userActivity-id', in: 'path' },
      { name: 'activityHistoryItem-id', in: 'path' },
    ],
    params,
  };
}
