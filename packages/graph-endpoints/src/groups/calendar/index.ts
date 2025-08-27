export * as calendarPermissions from './calendarPermissions';
export * as calendarView from './calendarView';
export * as events from './events';
export * as getSchedule from './getSchedule';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/calendar': Operation<'/groups/{group-id}/calendar', 'get'>;
}

/**
 * `GET /groups/{group-id}/calendar`
 *
 * The group&#x27;s calendar. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/calendar']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/calendar']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/calendar',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
