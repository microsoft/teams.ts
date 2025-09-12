import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}': Operation<
    '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    'delete'
  >;
  'GET /deviceManagement/chromeOSOnboardingSettings': Operation<
    '/deviceManagement/chromeOSOnboardingSettings',
    'get'
  >;
  'GET /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}': Operation<
    '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    'get'
  >;
  'PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}': Operation<
    '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    'patch'
  >;
  'POST /deviceManagement/chromeOSOnboardingSettings': Operation<
    '/deviceManagement/chromeOSOnboardingSettings',
    'post'
  >;
  'POST /deviceManagement/chromeOSOnboardingSettings/connect': Operation<
    '/deviceManagement/chromeOSOnboardingSettings/connect',
    'post'
  >;
  'POST /deviceManagement/chromeOSOnboardingSettings/disconnect': Operation<
    '/deviceManagement/chromeOSOnboardingSettings/disconnect',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chromeOSOnboardingSettings-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/chromeOSOnboardingSettings`
 *
 * Collection of ChromeOSOnboardingSettings settings associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/chromeOSOnboardingSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/chromeOSOnboardingSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/chromeOSOnboardingSettings',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}`
 *
 * Collection of ChromeOSOnboardingSettings settings associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    paramDefs: {
      path: ['chromeOSOnboardingSettings-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/chromeOSOnboardingSettings/{chromeOSOnboardingSettings-id}',
    paramDefs: {
      path: ['chromeOSOnboardingSettings-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/chromeOSOnboardingSettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/chromeOSOnboardingSettings',
    body,
  };
}

export const connect = {
  /**
   * `POST /deviceManagement/chromeOSOnboardingSettings/connect`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings/connect']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings/connect']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/chromeOSOnboardingSettings/connect',
      body,
    };
  },
};

export const disconnect = {
  /**
   * `POST /deviceManagement/chromeOSOnboardingSettings/disconnect`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/chromeOSOnboardingSettings/disconnect']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/chromeOSOnboardingSettings/disconnect',
    };
  },
};
