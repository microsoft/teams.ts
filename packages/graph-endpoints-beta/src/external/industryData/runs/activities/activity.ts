import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity': Operation<
    '/external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity',
    'get'
  >;
}

/**
 * `GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity`
 *
 * The flow that was run by this activity.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'industryDataRun-id', in: 'path' },
      { name: 'industryDataRunActivity-id', in: 'path' },
    ],
    params,
  };
}
