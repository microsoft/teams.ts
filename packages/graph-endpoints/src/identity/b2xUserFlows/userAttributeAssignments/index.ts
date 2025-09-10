import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    'delete'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments',
    'get'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    'get'
  >;
  'PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    'patch'
  >;
  'POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments',
    'post'
  >;
  'POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder',
    'post'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute',
    'get'
  >;
}

/**
 * `DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}`
 *
 * Delete an identityUserFlowAttributeAssignment object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['b2xIdentityUserFlow-id', 'identityUserFlowAttributeAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments`
 *
 * Get the identityUserFlowAttributeAssignment resources from the userAttributeAssignments navigation property in a b2xIdentityUserFlow.
 */
export function list(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}`
 *
 * Read the properties and relationships of an identityUserFlowAttributeAssignment object.
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id', 'identityUserFlowAttributeAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}`
 *
 * Update the properties of a identityUserFlowAttributeAssignment object.
 */
export function update(
  body: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['body'],
  params?: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id', 'identityUserFlowAttributeAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments`
 *
 * Create a new identityUserFlowAttributeAssignment object in a b2xIdentityUserFlow.
 */
export function create(
  body: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments']['body'],
  params?: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments']['response']
> {
  return {
    method: 'post',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id'],
    },
    params,
    body,
  };
}

export const setOrder = {
  /**
   * `POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder`
   *
   * Set the order of identityUserFlowAttributeAssignments being collected within a user flow.
   */
  create: function create(
    body: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder']['body'],
    params?: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder']['response']
  > {
    return {
      method: 'post',
      path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder',
      paramDefs: {
        path: ['b2xIdentityUserFlow-id'],
      },
      params,
      body,
    };
  },
};

export const userAttribute = {
  /**
   * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute`
   *
   * The user attribute that you want to add to your user flow.
   */
  get: function get(
    params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute']['response']
  > {
    return {
      method: 'get',
      path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['b2xIdentityUserFlow-id', 'identityUserFlowAttributeAssignment-id'],
      },
      params,
    };
  },
};
