export * as certificateBasedApplicationConfigurations from './certificateBasedApplicationConfigurations';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /certificateAuthorities': Operation<'/certificateAuthorities', 'get'>;
  'PATCH /certificateAuthorities': Operation<'/certificateAuthorities', 'patch'>;
  'GET /certificateAuthorities/mutualTlsOauthConfigurations': Operation<
    '/certificateAuthorities/mutualTlsOauthConfigurations',
    'get'
  >;
  'POST /certificateAuthorities/mutualTlsOauthConfigurations': Operation<
    '/certificateAuthorities/mutualTlsOauthConfigurations',
    'post'
  >;
  'GET /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'get'
  >;
  'PATCH /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'patch'
  >;
  'DELETE /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'delete'
  >;
}

/**
 * `GET /certificateAuthorities`
 *
 */
export function list(
  params?: IEndpoints['GET /certificateAuthorities']['parameters']
): EndpointRequest<IEndpoints['GET /certificateAuthorities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/certificateAuthorities',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /certificateAuthorities`
 *
 */
export function update(
  body: IEndpoints['PATCH /certificateAuthorities']['body']
): EndpointRequest<IEndpoints['PATCH /certificateAuthorities']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/certificateAuthorities',
    body,
  };
}

export const mutualTlsOauthConfigurations = {
  /**
   * `GET /certificateAuthorities/mutualTlsOauthConfigurations`
   *
   * Defines the trusted certificate authorities for certificates that can be added to Internet of Things (IoT) devices.
   */
  list: function list(
    params?: IEndpoints['GET /certificateAuthorities/mutualTlsOauthConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /certificateAuthorities/mutualTlsOauthConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/certificateAuthorities/mutualTlsOauthConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /certificateAuthorities/mutualTlsOauthConfigurations`
   *
   */
  create: function create(
    body: IEndpoints['POST /certificateAuthorities/mutualTlsOauthConfigurations']['body']
  ): EndpointRequest<
    IEndpoints['POST /certificateAuthorities/mutualTlsOauthConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/certificateAuthorities/mutualTlsOauthConfigurations',
      body,
    };
  },
  /**
   * `GET /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
   *
   * Defines the trusted certificate authorities for certificates that can be added to Internet of Things (IoT) devices.
   */
  get: function get(
    params?: IEndpoints['GET /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mutualTlsOauthConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
      paramDefs: {
        path: ['mutualTlsOauthConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
   *
   * Delete the specified mutualTlsOauthConfiguration resource. You must first delete the deviceTemplate object that references the ID.
   */
  del: function del(
    params?: IEndpoints['DELETE /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mutualTlsOauthConfiguration-id'],
      },
      params,
    };
  },
};
