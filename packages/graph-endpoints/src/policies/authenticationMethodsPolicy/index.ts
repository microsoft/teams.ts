import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authenticationMethodsPolicy': Operation<
    '/policies/authenticationMethodsPolicy',
    'delete'
  >;
  'GET /policies/authenticationMethodsPolicy': Operation<
    '/policies/authenticationMethodsPolicy',
    'get'
  >;
  'PATCH /policies/authenticationMethodsPolicy': Operation<
    '/policies/authenticationMethodsPolicy',
    'patch'
  >;
  'GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations': Operation<
    '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations',
    'get'
  >;
  'POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations': Operation<
    '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations',
    'post'
  >;
  'GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'get'
  >;
  'PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'patch'
  >;
  'DELETE /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'delete'
  >;
}

/**
 * `DELETE /policies/authenticationMethodsPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/authenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/authenticationMethodsPolicy']['response']> {
  return {
    method: 'delete',
    path: '/policies/authenticationMethodsPolicy',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /policies/authenticationMethodsPolicy`
 *
 * Read the properties and relationships of an authenticationMethodsPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/authenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/authenticationMethodsPolicy']['response']> {
  return {
    method: 'get',
    path: '/policies/authenticationMethodsPolicy',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/authenticationMethodsPolicy`
 *
 * Update the properties of an authenticationMethodsPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/authenticationMethodsPolicy']['body']
): EndpointRequest<IEndpoints['PATCH /policies/authenticationMethodsPolicy']['response']> {
  return {
    method: 'patch',
    path: '/policies/authenticationMethodsPolicy',
    body,
  };
}

export const authenticationMethodConfigurations = {
  /**
   * `GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations`
   *
   * Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
   */
  list: function list(
    params?: IEndpoints['GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations']['response']
  > {
    return {
      method: 'get',
      path: '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations`
   *
   */
  create: function create(
    body: IEndpoints['POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations']['body']
  ): EndpointRequest<
    IEndpoints['POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations']['response']
  > {
    return {
      method: 'post',
      path: '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations',
      body,
    };
  },
  /**
   * `GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
   *
   * Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
   */
  get: function get(
    params?: IEndpoints['GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
  > {
    return {
      method: 'get',
      path: '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationMethodConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
      paramDefs: {
        path: ['authenticationMethodConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authenticationMethodConfiguration-id'],
      },
      params,
    };
  },
};
