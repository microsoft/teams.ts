import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/authenticationStrengths/policies': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies',
    'get'
  >;
  'GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/authenticationStrengths/policies': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies',
    'post'
  >;
  'GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'get'
  >;
  'POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'post'
  >;
  'GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'patch'
  >;
  'DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'delete'
  >;
  'POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations': Operation<
    '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['authenticationStrengthPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrengths/policies`
 *
 * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrengths/policies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}`
 *
 * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}',
    paramDefs: {
      path: ['authenticationStrengthPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}',
    paramDefs: {
      path: ['authenticationStrengthPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/authenticationStrengths/policies`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies']['body']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/conditionalAccess/authenticationStrengths/policies',
    body,
  };
}

export const combinationConfigurations = {
  /**
   * `GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations`
   *
   * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['authenticationStrengthPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['body'],
    params?: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
      paramDefs: {
        path: ['authenticationStrengthPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
   *
   * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationStrengthPolicy-id', 'authenticationCombinationConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
      paramDefs: {
        path: ['authenticationStrengthPolicy-id', 'authenticationCombinationConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
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
   * `POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations`
   *
   * Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['body'],
    params?: IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations',
      paramDefs: {
        path: ['authenticationStrengthPolicy-id'],
      },
      params,
      body,
    };
  },
};
