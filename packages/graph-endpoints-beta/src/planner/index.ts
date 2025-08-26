export * as buckets from './buckets';
export * as plans from './plans';
export * as rosters from './rosters';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /planner': Operation<'/planner', 'get'>;
  'PATCH /planner': Operation<'/planner', 'patch'>;
}

/**
 * `GET /planner`
 *
 */
export function get(
  params?: IEndpoints['GET /planner']['parameters']
): EndpointRequest<IEndpoints['GET /planner']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner']['body'],
  params?: IEndpoints['PATCH /planner']['parameters']
): EndpointRequest<IEndpoints['PATCH /planner']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner',
    paramDefs: [],
    params,
    body,
  };
}
