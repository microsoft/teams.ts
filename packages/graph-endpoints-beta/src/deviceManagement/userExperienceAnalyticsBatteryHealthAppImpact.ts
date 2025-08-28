import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsBatteryHealthAppImpact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact`
 *
 * User Experience Analytics Battery Health App Impact
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact',
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
 * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}`
 *
 * User Experience Analytics Battery Health App Impact
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsBatteryHealthAppImpact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsBatteryHealthAppImpact-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact',
    paramDefs: [],
    params,
    body,
  };
}
