export * as activity from './activity';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /external/industryData/runs/{industryDataRun-id}/activities': Operation<
    '/external/industryData/runs/{industryDataRun-id}/activities',
    'get'
  >;
  'GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}': Operation<
    '/external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}',
    'get'
  >;
}

/**
 * `GET /external/industryData/runs/{industryDataRun-id}/activities`
 *
 * The set of activities performed during the run.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/runs/{industryDataRun-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/runs/{industryDataRun-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/runs/{industryDataRun-id}/activities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'industryDataRun-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}`
 *
 * The set of activities performed during the run.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'industryDataRun-id', in: 'path' },
      { name: 'industryDataRunActivity-id', in: 'path' },
    ],
    params,
  };
}
