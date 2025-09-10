import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsQualityUpdatePolicies': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies',
    'get'
  >;
  'GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsQualityUpdatePolicies': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies',
    'post'
  >;
  'POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign',
    'post'
  >;
  'GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsQualityUpdatePolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsQualityUpdatePolicies`
 *
 * A collection of Windows quality update policies
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdatePolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}`
 *
 * A collection of Windows quality update policies
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    paramDefs: {
      path: ['windowsQualityUpdatePolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    paramDefs: {
      path: ['windowsQualityUpdatePolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsQualityUpdatePolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsQualityUpdatePolicies',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign',
      paramDefs: {
        path: ['windowsQualityUpdatePolicy-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments`
   *
   * List of the groups this profile is assgined to.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsQualityUpdatePolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments',
      paramDefs: {
        path: ['windowsQualityUpdatePolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}`
   *
   * List of the groups this profile is assgined to.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsQualityUpdatePolicy-id', 'windowsQualityUpdatePolicyAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
      paramDefs: {
        path: ['windowsQualityUpdatePolicy-id', 'windowsQualityUpdatePolicyAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsQualityUpdatePolicy-id', 'windowsQualityUpdatePolicyAssignment-id'],
      },
      params,
    };
  },
};

export const bulkAction = {
  /**
   * `POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction',
      paramDefs: {
        path: ['windowsQualityUpdatePolicy-id'],
      },
      params,
      body,
    };
  },
};
