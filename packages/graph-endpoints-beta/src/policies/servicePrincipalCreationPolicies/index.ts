import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    'delete'
  >;
  'GET /policies/servicePrincipalCreationPolicies': Operation<
    '/policies/servicePrincipalCreationPolicies',
    'get'
  >;
  'GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    'get'
  >;
  'PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    'patch'
  >;
  'POST /policies/servicePrincipalCreationPolicies': Operation<
    '/policies/servicePrincipalCreationPolicies',
    'post'
  >;
  'GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes',
    'get'
  >;
  'POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes',
    'post'
  >;
  'GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
    'get'
  >;
  'PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
    'patch'
  >;
  'DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
    'delete'
  >;
  'GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes',
    'get'
  >;
  'POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes',
    'post'
  >;
  'GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}',
    'get'
  >;
  'PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}',
    'patch'
  >;
  'DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}',
    'delete'
  >;
}

/**
 * `DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['servicePrincipalCreationPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/servicePrincipalCreationPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /policies/servicePrincipalCreationPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/servicePrincipalCreationPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/servicePrincipalCreationPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    paramDefs: {
      path: ['servicePrincipalCreationPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    paramDefs: {
      path: ['servicePrincipalCreationPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/servicePrincipalCreationPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /policies/servicePrincipalCreationPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/servicePrincipalCreationPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/servicePrincipalCreationPolicies',
    body,
  };
}

export const excludes = {
  /**
   * `GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes`
   *
   */
  list: function list(
    params?: IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipalCreationPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes`
   *
   */
  create: function create(
    body: IEndpoints['POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes']['body'],
    params?: IEndpoints['POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes',
      paramDefs: {
        path: ['servicePrincipalCreationPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipalCreationPolicy-id', 'servicePrincipalCreationConditionSet-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['body'],
    params?: IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
      paramDefs: {
        path: ['servicePrincipalCreationPolicy-id', 'servicePrincipalCreationConditionSet-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipalCreationPolicy-id', 'servicePrincipalCreationConditionSet-id'],
      },
      params,
    };
  },
};

export const includes = {
  /**
   * `GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes`
   *
   */
  list: function list(
    params?: IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipalCreationPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes`
   *
   */
  create: function create(
    body: IEndpoints['POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes']['body'],
    params?: IEndpoints['POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes',
      paramDefs: {
        path: ['servicePrincipalCreationPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipalCreationPolicy-id', 'servicePrincipalCreationConditionSet-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}']['body'],
    params?: IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}',
      paramDefs: {
        path: ['servicePrincipalCreationPolicy-id', 'servicePrincipalCreationConditionSet-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipalCreationPolicy-id', 'servicePrincipalCreationConditionSet-id'],
      },
      params,
    };
  },
};
