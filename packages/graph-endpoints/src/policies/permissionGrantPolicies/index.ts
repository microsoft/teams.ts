import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    'delete'
  >;
  'GET /policies/permissionGrantPolicies': Operation<'/policies/permissionGrantPolicies', 'get'>;
  'GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    'get'
  >;
  'PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    'patch'
  >;
  'POST /policies/permissionGrantPolicies': Operation<'/policies/permissionGrantPolicies', 'post'>;
  'GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes',
    'get'
  >;
  'POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes',
    'post'
  >;
  'GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
    'get'
  >;
  'PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
    'patch'
  >;
  'DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
    'delete'
  >;
  'GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes',
    'get'
  >;
  'POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes',
    'post'
  >;
  'GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
    'get'
  >;
  'PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
    'patch'
  >;
  'DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
    'delete'
  >;
}

/**
 * `DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}`
 *
 * Delete a permissionGrantPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['permissionGrantPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/permissionGrantPolicies`
 *
 * Retrieve the list of permissionGrantPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/permissionGrantPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/permissionGrantPolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/permissionGrantPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}`
 *
 * Retrieve a single permissionGrantPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    paramDefs: {
      path: ['permissionGrantPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}`
 *
 * Update properties of a  permissionGrantPolicy.
 */
export function update(
  body: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    paramDefs: {
      path: ['permissionGrantPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/permissionGrantPolicies`
 *
 * Creates a permissionGrantPolicy. A permission grant policy is used to describe the conditions under which permissions can be granted (for example, during application consent). After creating the permission grant policy, you can add include condition sets to add matching rules, and add exclude condition sets to add exclusion rules.
 */
export function create(
  body: IEndpoints['POST /policies/permissionGrantPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/permissionGrantPolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/permissionGrantPolicies',
    body,
  };
}

export const excludes = {
  /**
   * `GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes`
   *
   * Retrieve the condition sets which are *excluded* in a permissionGrantPolicy.
   */
  list: function list(
    params?: IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes']['response']
  > {
    return {
      method: 'get',
      path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['permissionGrantPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes`
   *
   * Add conditions under which a permission grant event is *excluded* in a permission grant policy. You do this by adding a permissionGrantConditionSet to the excludes collection of a  permissionGrantPolicy.
   */
  create: function create(
    body: IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes']['body'],
    params?: IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes']['response']
  > {
    return {
      method: 'post',
      path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes',
      paramDefs: {
        path: ['permissionGrantPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}`
   *
   * Condition sets that are excluded in this permission grant policy. Automatically expanded on GET.
   */
  get: function get(
    params?: IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['response']
  > {
    return {
      method: 'get',
      path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['permissionGrantPolicy-id', 'permissionGrantConditionSet-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['body'],
    params?: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
      paramDefs: {
        path: ['permissionGrantPolicy-id', 'permissionGrantConditionSet-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}`
   *
   * Deletes a permissionGrantConditionSet from the excludes collection of a permissionGrantPolicy.
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['permissionGrantPolicy-id', 'permissionGrantConditionSet-id'],
      },
      params,
    };
  },
};

export const includes = {
  /**
   * `GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes`
   *
   * Retrieve the condition sets which are *included* in a permissionGrantPolicy.
   */
  list: function list(
    params?: IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes']['response']
  > {
    return {
      method: 'get',
      path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['permissionGrantPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes`
   *
   * Add conditions under which a permission grant event is *included* in a permission grant policy. You do this by adding a permissionGrantConditionSet to the includes collection of a  permissionGrantPolicy.
   */
  create: function create(
    body: IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes']['body'],
    params?: IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes']['response']
  > {
    return {
      method: 'post',
      path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes',
      paramDefs: {
        path: ['permissionGrantPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}`
   *
   * Condition sets that are included in this permission grant policy. Automatically expanded on GET.
   */
  get: function get(
    params?: IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['response']
  > {
    return {
      method: 'get',
      path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['permissionGrantPolicy-id', 'permissionGrantConditionSet-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['body'],
    params?: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
      paramDefs: {
        path: ['permissionGrantPolicy-id', 'permissionGrantConditionSet-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}`
   *
   * Deletes a permissionGrantConditionSet from the includes collection of a permissionGrantPolicy.
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['permissionGrantPolicy-id', 'permissionGrantConditionSet-id'],
      },
      params,
    };
  },
};
