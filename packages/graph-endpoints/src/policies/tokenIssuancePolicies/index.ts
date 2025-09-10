import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}': Operation<
    '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    'delete'
  >;
  'GET /policies/tokenIssuancePolicies': Operation<'/policies/tokenIssuancePolicies', 'get'>;
  'GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}': Operation<
    '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    'get'
  >;
  'PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}': Operation<
    '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    'patch'
  >;
  'POST /policies/tokenIssuancePolicies': Operation<'/policies/tokenIssuancePolicies', 'post'>;
  'GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo': Operation<
    '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `DELETE /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}`
 *
 * Delete a tokenIssuancePolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['tokenIssuancePolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/tokenIssuancePolicies`
 *
 * Get a list of tokenIssuancePolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/tokenIssuancePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/tokenIssuancePolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/tokenIssuancePolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}`
 *
 * The policy that specifies the characteristics of SAML tokens issued by Microsoft Entra ID.
 */
export function get(
  params?: IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    paramDefs: {
      path: ['tokenIssuancePolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}`
 *
 * Update the properties of a tokenIssuancePolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}',
    paramDefs: {
      path: ['tokenIssuancePolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/tokenIssuancePolicies`
 *
 * Create a new tokenIssuancePolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/tokenIssuancePolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/tokenIssuancePolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/tokenIssuancePolicies',
    body,
  };
}

export const appliesTo = {
  /**
   * `GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo`
   *
   * Get a list of directoryObject objects that a tokenIssuancePolicy object has been applied to. The tokenIssuancePolicy can only be applied to application.
   */
  get: function get(
    params?: IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo']['response']
  > {
    return {
      method: 'get',
      path: '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['tokenIssuancePolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}/appliesTo/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['tokenIssuancePolicy-id', 'directoryObject-id'],
      },
      params,
    };
  },
};
