import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceScores': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScores',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDeviceScores': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScores',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsDeviceScores-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsDeviceScores`
 *
 * User experience analytics device scores
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScores']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScores']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScores',
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
 * `GET /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}`
 *
 * User experience analytics device scores
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsDeviceScores-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsDeviceScores-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsDeviceScores`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScores']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScores']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScores']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScores',
    paramDefs: [],
    params,
    body,
  };
}
