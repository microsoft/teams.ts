import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'delete'
  >;
  'GET /groups/{group-id}/groupLifecyclePolicies': Operation<
    '/groups/{group-id}/groupLifecyclePolicies',
    'get'
  >;
  'GET /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'patch'
  >;
  'POST /groups/{group-id}/groupLifecyclePolicies': Operation<
    '/groups/{group-id}/groupLifecyclePolicies',
    'post'
  >;
  'POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup',
    'post'
  >;
  'POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'groupLifecyclePolicy-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/groupLifecyclePolicies`
 *
 * Retrieves a list of groupLifecyclePolicy objects to which a group belongs.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/groupLifecyclePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/groupLifecyclePolicies']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/groupLifecyclePolicies',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 * The collection of lifecycle policies for this group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: {
      path: ['group-id', 'groupLifecyclePolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: {
      path: ['group-id', 'groupLifecyclePolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/groupLifecyclePolicies`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies']['body'],
  params?: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/groupLifecyclePolicies',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const addGroup = {
  /**
   * `POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup`
   *
   * Add a group to a groupLifecyclePolicy. This action is supported only if the managedGroupTypes property of the policy is set to Selected.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['body'],
    params?: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup',
      paramDefs: {
        path: ['group-id', 'groupLifecyclePolicy-id'],
      },
      params,
      body,
    };
  },
};

export const removeGroup = {
  /**
   * `POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup`
   *
   * Removes a group from a lifecycle policy.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['body'],
    params?: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup',
      paramDefs: {
        path: ['group-id', 'groupLifecyclePolicy-id'],
      },
      params,
      body,
    };
  },
};
