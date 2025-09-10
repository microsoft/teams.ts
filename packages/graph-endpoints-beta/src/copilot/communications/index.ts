export * as realtimeActivityFeed from './realtimeActivityFeed';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/communications': Operation<'/copilot/communications', 'delete'>;
  'GET /copilot/communications': Operation<'/copilot/communications', 'get'>;
  'PATCH /copilot/communications': Operation<'/copilot/communications', 'patch'>;
}

/**
 * `DELETE /copilot/communications`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/communications']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/communications']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/communications',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /copilot/communications`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/communications']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/communications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/communications`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/communications']['body']
): EndpointRequest<IEndpoints['PATCH /copilot/communications']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/communications',
    body,
  };
}
