import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsDeviceStartupProcess-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses`
 *
 * User experience analytics device Startup Processes
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses',
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
 * `GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}`
 *
 * User experience analytics device Startup Processes
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsDeviceStartupProcess-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsDeviceStartupProcess-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses',
    paramDefs: [],
    params,
    body,
  };
}
