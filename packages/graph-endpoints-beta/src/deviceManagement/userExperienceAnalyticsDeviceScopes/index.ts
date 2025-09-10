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
  'POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['userExperienceAnalyticsDeviceScope-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['userExperienceAnalyticsDeviceScope-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['userExperienceAnalyticsDeviceScope-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsDeviceScopes`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsDeviceScopes',
    body,
  };
}

export const triggerDeviceScopeAction = {
  /**
   * `POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction']['body'],
    params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsDeviceScopes/{userExperienceAnalyticsDeviceScope-id}/triggerDeviceScopeAction',
      paramDefs: {
        path: ['userExperienceAnalyticsDeviceScope-id'],
      },
      params,
      body,
    };
  },
};
