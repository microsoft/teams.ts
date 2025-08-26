import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsBatteryHealthModelPerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance`
 *
 * User Experience Analytics Battery Health Model Performance
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance',
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
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}`
 *
 * User Experience Analytics Battery Health Model Performance
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBatteryHealthModelPerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsBatteryHealthModelPerformance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance',
    paramDefs: [],
    params,
    body,
  };
}
