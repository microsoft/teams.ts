import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'delete'
  >;
  'GET /groupLifecyclePolicies': Operation<'/groupLifecyclePolicies', 'get'>;
  'GET /groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'get'
  >;
  'PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'patch'
  >;
  'POST /groupLifecyclePolicies': Operation<'/groupLifecyclePolicies', 'post'>;
  'POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup': Operation<
    '/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup',
    'post'
  >;
  'POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup': Operation<
    '/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup',
    'post'
  >;
}

/**
 * `DELETE /groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 * Delete a groupLifecyclePolicy.
 */
export function del(
  params?: IEndpoints['DELETE /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupLifecyclePolicy-id'],
    },
    params,
  };
}

/**
 * `GET /groupLifecyclePolicies`
 *
 * List all the groupLifecyclePolicies.
 */
export function list(
  params?: IEndpoints['GET /groupLifecyclePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /groupLifecyclePolicies']['response']> {
  return {
    method: 'get',
    path: '/groupLifecyclePolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 * Retrieve the properties and relationships of a groupLifecyclePolicies object.
 */
export function get(
  params?: IEndpoints['GET /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: {
      path: ['groupLifecyclePolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 * Update the properties of a groupLifecyclePolicygroupLifecyclePolicy resource type object.
 */
export function update(
  body: IEndpoints['PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['body'],
  params?: IEndpoints['PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: {
      path: ['groupLifecyclePolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groupLifecyclePolicies`
 *
 * Creates a new groupLifecyclePolicy. Only one policy exists in the tenant.
 */
export function create(
  body: IEndpoints['POST /groupLifecyclePolicies']['body']
): EndpointRequest<IEndpoints['POST /groupLifecyclePolicies']['response']> {
  return {
    method: 'post',
    path: '/groupLifecyclePolicies',
    body,
  };
}

export const addGroup = {
  /**
   * `POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup`
   *
   * Add a group to a groupLifecyclePolicy. This action is supported only if the managedGroupTypes property of the policy is set to Selected.
   */
  create: function create(
    body: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['body'],
    params?: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['response']
  > {
    return {
      method: 'post',
      path: '/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup',
      paramDefs: {
        path: ['groupLifecyclePolicy-id'],
      },
      params,
      body,
    };
  },
};

export const removeGroup = {
  /**
   * `POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup`
   *
   * Removes a group from a lifecycle policy.
   */
  create: function create(
    body: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['body'],
    params?: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['response']
  > {
    return {
      method: 'post',
      path: '/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup',
      paramDefs: {
        path: ['groupLifecyclePolicy-id'],
      },
      params,
      body,
    };
  },
};
