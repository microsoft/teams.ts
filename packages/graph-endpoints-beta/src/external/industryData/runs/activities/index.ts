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
  'GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity': Operation<
    '/external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity',
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
    paramDefs: {
      path: ['industryDataRun-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['industryDataRun-id', 'industryDataRunActivity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const activity = {
  /**
   * `GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity`
   *
   * The flow that was run by this activity.
   */
  get: function get(
    params?: IEndpoints['GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/industryData/runs/{industryDataRun-id}/activities/{industryDataRunActivity-id}/activity',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['industryDataRun-id', 'industryDataRunActivity-id'],
      },
      params,
    };
  },
};
