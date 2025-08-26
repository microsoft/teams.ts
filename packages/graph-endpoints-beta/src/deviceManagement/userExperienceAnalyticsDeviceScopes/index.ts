export * as triggerDeviceScopeAction from './triggerDeviceScopeAction';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceScopes': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScopes',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDeviceScopes': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScopes',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsDeviceScope-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsDeviceScopes`
 *
 * The user experience analytics device scope entity contains device scope configuration use to apply filtering on the endpoint analytics reports.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScopes',
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
 * `GET /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}`
 *
 * The user experience analytics device scope entity contains device scope configuration use to apply filtering on the endpoint analytics reports.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsDeviceScope-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsDeviceScope-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsDeviceScopes`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScopes',
    paramDefs: [],
    params,
    body,
  };
}
