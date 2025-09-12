import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    'delete'
  >;
  'GET /policies/authenticationStrengthPolicies': Operation<
    '/policies/authenticationStrengthPolicies',
    'get'
  >;
  'GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    'get'
  >;
  'PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    'patch'
  >;
  'POST /policies/authenticationStrengthPolicies': Operation<
    '/policies/authenticationStrengthPolicies',
    'post'
  >;
  'GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'get'
  >;
  'POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'post'
  >;
  'GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'get'
  >;
  'PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'patch'
  >;
  'DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'delete'
  >;
  'POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations',
    'post'
  >;
}

/**
 * `DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}`
 *
 * Delete a custom authenticationStrengthPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['authenticationStrengthPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/authenticationStrengthPolicies`
 *
 * Get a list of the authenticationStrengthPolicy objects and their properties. This API returns both built-in and custom policies.
 */
export function list(
  params?: IEndpoints['GET /policies/authenticationStrengthPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/authenticationStrengthPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authenticationStrengthPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}`
 *
 * Read the properties and relationships of an authenticationStrengthPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    paramDefs: {
      path: ['authenticationStrengthPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}`
 *
 * Update the properties of an authenticationStrengthPolicy object. You cannot update the allowed auth method combinations using this request. To do so, use the Update allowed combinations action.
 */
export function update(
  body: IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    paramDefs: {
      path: ['authenticationStrengthPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/authenticationStrengthPolicies`
 *
 * Create a new custom authenticationStrengthPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/authenticationStrengthPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/authenticationStrengthPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/authenticationStrengthPolicies',
    body,
  };
}

export const combinationConfigurations = {
  /**
   * `GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations`
   *
   * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
   */
  list: function list(
    params?: IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['authenticationStrengthPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations`
   *
   */
  create: function create(
    body: IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations']['body'],
    params?: IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations',
      paramDefs: {
        path: ['authenticationStrengthPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
   *
   * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
   */
  get: function get(
    params?: IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationStrengthPolicy-id', 'authenticationCombinationConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
      paramDefs: {
        path: ['authenticationStrengthPolicy-id', 'authenticationCombinationConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authenticationStrengthPolicy-id', 'authenticationCombinationConfiguration-id'],
      },
      params,
    };
  },
};

export const updateAllowedCombinations = {
  /**
   * `POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations`
   *
   * Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.
   */
  create: function create(
    body: IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['body'],
    params?: IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/updateAllowedCombinations',
      paramDefs: {
        path: ['authenticationStrengthPolicy-id'],
      },
      params,
      body,
    };
  },
};
