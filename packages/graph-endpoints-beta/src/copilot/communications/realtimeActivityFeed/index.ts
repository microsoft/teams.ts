export * as meetings from './meetings';
export * as multiActivitySubscriptions from './multiActivitySubscriptions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/communications/realtimeActivityFeed': Operation<
    '/copilot/communications/realtimeActivityFeed',
    'delete'
  >;
  'GET /copilot/communications/realtimeActivityFeed': Operation<
    '/copilot/communications/realtimeActivityFeed',
    'get'
  >;
  'PATCH /copilot/communications/realtimeActivityFeed': Operation<
    '/copilot/communications/realtimeActivityFeed',
    'patch'
  >;
}

/**
 * `DELETE /copilot/communications/realtimeActivityFeed`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/communications/realtimeActivityFeed']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/communications/realtimeActivityFeed']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/communications/realtimeActivityFeed',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /copilot/communications/realtimeActivityFeed`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/communications/realtimeActivityFeed']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications/realtimeActivityFeed',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/communications/realtimeActivityFeed`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed']['body']
): EndpointRequest<IEndpoints['PATCH /copilot/communications/realtimeActivityFeed']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/communications/realtimeActivityFeed',
    body,
  };
}
