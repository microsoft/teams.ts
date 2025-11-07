import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    'delete'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections': Operation<
    '/deviceAppManagement/androidManagedAppProtections',
    'get'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    'patch'
  >;
  'POST /deviceAppManagement/androidManagedAppProtections': Operation<
    '/deviceAppManagement/androidManagedAppProtections',
    'post'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps',
    'get'
  >;
  'POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps',
    'post'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'delete'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
    'patch'
  >;
  'DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
    'delete'
  >;
}

/**
 * `DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['androidManagedAppProtection-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/androidManagedAppProtections`
 *
 * Android managed app policies.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/androidManagedAppProtections']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/androidManagedAppProtections',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}`
 *
 * Android managed app policies.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    paramDefs: {
      path: ['androidManagedAppProtection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    paramDefs: {
      path: ['androidManagedAppProtection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/androidManagedAppProtections`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections']['body']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/androidManagedAppProtections']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/androidManagedAppProtections',
    body,
  };
}

export const apps = {
  /**
   * `GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps`
   *
   * List of apps to which the policy is deployed.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['androidManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps']['body'],
    params?: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps',
      paramDefs: {
        path: ['androidManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   * List of apps to which the policy is deployed.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['androidManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        path: ['androidManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['androidManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments`
   *
   * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['androidManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments',
      paramDefs: {
        path: ['androidManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['androidManagedAppProtection-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        path: ['androidManagedAppProtection-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['androidManagedAppProtection-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
    };
  },
};

export const deploymentSummary = {
  /**
   * `GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary`
   *
   * Navigation property to deployment summary of the configuration.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['androidManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        path: ['androidManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['androidManagedAppProtection-id'],
      },
      params,
    };
  },
};
