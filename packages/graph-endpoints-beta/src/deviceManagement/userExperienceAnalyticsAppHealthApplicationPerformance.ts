import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsAppHealthApplicationPerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance`
 *
 * User experience analytics appHealth Application Performance
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}`
 *
 * User experience analytics appHealth Application Performance
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsAppHealthApplicationPerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsAppHealthApplicationPerformance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance',
    paramDefs: [],
    params,
    body,
  };
}
