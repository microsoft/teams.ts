import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /authenticationMethodsPolicy': Operation<'/authenticationMethodsPolicy', 'get'>;
  'PATCH /authenticationMethodsPolicy': Operation<'/authenticationMethodsPolicy', 'patch'>;
  'GET /authenticationMethodsPolicy/authenticationMethodConfigurations': Operation<
    '/authenticationMethodsPolicy/authenticationMethodConfigurations',
    'get'
  >;
  'POST /authenticationMethodsPolicy/authenticationMethodConfigurations': Operation<
    '/authenticationMethodsPolicy/authenticationMethodConfigurations',
    'post'
  >;
  'GET /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'get'
  >;
  'PATCH /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'patch'
  >;
  'DELETE /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'delete'
  >;
}

/**
 * `GET /authenticationMethodsPolicy`
 *
 */
export function get(
  params?: IEndpoints['GET /authenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /authenticationMethodsPolicy']['response']> {
  return {
    method: 'get',
    path: '/authenticationMethodsPolicy',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /authenticationMethodsPolicy`
 *
 */
export function update(
  body: IEndpoints['PATCH /authenticationMethodsPolicy']['body']
): EndpointRequest<IEndpoints['PATCH /authenticationMethodsPolicy']['response']> {
  return {
    method: 'patch',
    path: '/authenticationMethodsPolicy',
    body,
  };
}

export const authenticationMethodConfigurations = {
  /**
   * `GET /authenticationMethodsPolicy/authenticationMethodConfigurations`
   *
   * Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
   */
  list: function list(
    params?: IEndpoints['GET /authenticationMethodsPolicy/authenticationMethodConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /authenticationMethodsPolicy/authenticationMethodConfigurations']['response']
  > {
    return {
      method: 'get',
      path: '/authenticationMethodsPolicy/authenticationMethodConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /authenticationMethodsPolicy/authenticationMethodConfigurations`
   *
   */
  create: function create(
    body: IEndpoints['POST /authenticationMethodsPolicy/authenticationMethodConfigurations']['body']
  ): EndpointRequest<
    IEndpoints['POST /authenticationMethodsPolicy/authenticationMethodConfigurations']['response']
  > {
    return {
      method: 'post',
      path: '/authenticationMethodsPolicy/authenticationMethodConfigurations',
      body,
    };
  },
  /**
   * `GET /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
   *
   * Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
   */
  get: function get(
    params?: IEndpoints['GET /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
  > {
    return {
      method: 'get',
      path: '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationMethodConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
      paramDefs: {
        path: ['authenticationMethodConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authenticationMethodConfiguration-id'],
      },
      params,
    };
  },
};
