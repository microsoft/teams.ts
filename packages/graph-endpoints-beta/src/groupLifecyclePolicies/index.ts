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
  'POST /groupLifecyclePolicies/renewGroup': Operation<
    '/groupLifecyclePolicies/renewGroup',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
    method: 'post',
    path: '/groupLifecyclePolicies',
    body,
  };
}

export const addGroup = {
  /**
   * `POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup`
   *
   */
  create: function create(
    body: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['body'],
    params?: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['response']
  > {
    return {
      ver: 'beta',
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
   */
  create: function create(
    body: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['body'],
    params?: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['response']
  > {
    return {
      ver: 'beta',
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

export const renewGroup = {
  /**
   * `POST /groupLifecyclePolicies/renewGroup`
   *
   * Renew a group&#x27;s expiration. When a group is renewed, the group expiration is extended by the number of days defined in the policy.
   */
  create: function create(
    body: IEndpoints['POST /groupLifecyclePolicies/renewGroup']['body']
  ): EndpointRequest<IEndpoints['POST /groupLifecyclePolicies/renewGroup']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groupLifecyclePolicies/renewGroup',
      body,
    };
  },
};
