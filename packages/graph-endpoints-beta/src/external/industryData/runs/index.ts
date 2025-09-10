export * as activities from './activities';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /external/industryData/runs': Operation<'/external/industryData/runs', 'get'>;
  'GET /external/industryData/runs/{industryDataRun-id}': Operation<
    '/external/industryData/runs/{industryDataRun-id}',
    'get'
  >;
}

/**
 * `GET /external/industryData/runs`
 *
 * Get a list of the industryDataRun objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/runs']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/runs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/runs',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /external/industryData/runs/{industryDataRun-id}`
 *
 * Read the properties and relationships of an industryDataRun object.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/runs/{industryDataRun-id}']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/runs/{industryDataRun-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/runs/{industryDataRun-id}',
    paramDefs: {
      path: ['industryDataRun-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}
