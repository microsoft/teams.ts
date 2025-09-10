import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/policies': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies',
    'get'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/authenticationStrength/policies': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies',
    'post'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'get'
  >;
  'POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
    'post'
  >;
  'GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'patch'
  >;
  'DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
    'delete'
  >;
  'POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations': Operation<
    '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['authenticationStrengthPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrength/policies`
 *
 * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies']['response']
> {
  return {
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrength/policies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}`
 *
 * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    paramDefs: {
      path: ['authenticationStrengthPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}',
    paramDefs: {
      path: ['authenticationStrengthPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/authenticationStrength/policies`
 *
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies']['body']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies']['response']
> {
  return {
    method: 'post',
    path: '/identity/conditionalAccess/authenticationStrength/policies',
    body,
  };
}

export const combinationConfigurations = {
  /**
   * `GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations`
   *
   * Get the authenticationCombinationConfiguration objects for an authentication strength policy. The objects can be of one or more of the following derived types:
   * fido2combinationConfigurations
   * x509certificatecombinationconfiguration authenticationCombinationConfiguration objects are supported only for custom authentication strengths.
   */
  list: function list(
    params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
  > {
    return {
      method: 'get',
      path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['authenticationStrengthPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations`
   *
   * Create a new authenticationCombinationConfiguration object which can be of one of the following derived types:
   * fido2combinationConfiguration
   * x509certificatecombinationconfiguration
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['body'],
    params?: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations']['response']
  > {
    return {
      method: 'post',
      path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations',
      paramDefs: {
        path: ['authenticationStrengthPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
   *
   * Read the properties and relationships of an authenticationCombinationConfiguration object.
   */
  get: function get(
    params?: IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationStrengthPolicy-id', 'authenticationCombinationConfiguration-id'],
      },
      params,
    };
  },
  /**
  * `PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
  *
  * Update the properties of an authenticationCombinationConfiguration object. 
The properties can be for one of the following derived types:
* fido2combinationConfigurations
* x509certificatecombinationconfiguration
  */
  update: function update(
    body: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
      paramDefs: {
        path: ['authenticationStrengthPolicy-id', 'authenticationCombinationConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}`
   *
   * Delete an authenticationCombinationConfiguration  for a custom authenticationStrengthPolicy object.
   */
  del: function del(
    params?: IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}',
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
   * `POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations`
   *
   * Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.
   */
  create: function create(
    body: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['body'],
    params?: IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations']['response']
  > {
    return {
      method: 'post',
      path: '/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/updateAllowedCombinations',
      paramDefs: {
        path: ['authenticationStrengthPolicy-id'],
      },
      params,
      body,
    };
  },
};
