import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}': Operation<
    '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    'delete'
  >;
  'GET /policies/tokenLifetimePolicies': Operation<'/policies/tokenLifetimePolicies', 'get'>;
  'GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}': Operation<
    '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    'get'
  >;
  'PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}': Operation<
    '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    'patch'
  >;
  'POST /policies/tokenLifetimePolicies': Operation<'/policies/tokenLifetimePolicies', 'post'>;
  'GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo': Operation<
    '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `DELETE /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}`
 *
 * Delete a tokenLifetimePolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['tokenLifetimePolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/tokenLifetimePolicies`
 *
 * Get a list of tokenLifetimePolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/tokenLifetimePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/tokenLifetimePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/tokenLifetimePolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}`
 *
 * Retrieve the properties and relationships of a tokenLifetimePolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    paramDefs: {
      path: ['tokenLifetimePolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}`
 *
 * Update the properties of a tokenLifetimePolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    paramDefs: {
      path: ['tokenLifetimePolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/tokenLifetimePolicies`
 *
 * Create a new tokenLifetimePolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/tokenLifetimePolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/tokenLifetimePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/tokenLifetimePolicies',
    body,
  };
}

export const appliesTo = {
  /**
   * `GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo`
   *
   * Get a list of directoryObject objects that a tokenLifetimePolicy object has been applied to. The tokenLifetimePolicy can only be applied to application and servicePrincipal resources.
   */
  get: function get(
    params?: IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['tokenLifetimePolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['tokenLifetimePolicy-id', 'directoryObject-id'],
      },
      params,
    };
  },
};
