import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections': Operation<
    '/deviceAppManagement/windowsManagedAppProtections',
    'get'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    'patch'
  >;
  'POST /deviceAppManagement/windowsManagedAppProtections': Operation<
    '/deviceAppManagement/windowsManagedAppProtections',
    'post'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps',
    'get'
  >;
  'POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps',
    'post'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'delete'
  >;
  'POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign',
    'post'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
    'patch'
  >;
  'DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
    'delete'
  >;
  'POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsManagedAppProtection-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsManagedAppProtections`
 *
 * Windows managed app policies.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsManagedAppProtections',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}`
 *
 * Windows managed app policies.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    paramDefs: {
      path: ['windowsManagedAppProtection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    paramDefs: {
      path: ['windowsManagedAppProtection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsManagedAppProtections`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections']['body']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsManagedAppProtections',
    body,
  };
}

export const apps = {
  /**
   * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps`
   *
   * List of apps to which the policy is deployed.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps']['body'],
    params?: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps',
      paramDefs: {
        path: ['windowsManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   * List of apps to which the policy is deployed.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        path: ['windowsManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
    };
  },
};

export const assign = {
  /**
   * `POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign']['body'],
    params?: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign',
      paramDefs: {
        path: ['windowsManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments`
   *
   * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments',
      paramDefs: {
        path: ['windowsManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsManagedAppProtection-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        path: ['windowsManagedAppProtection-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsManagedAppProtection-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
    };
  },
};

export const deploymentSummary = {
  /**
   * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary`
   *
   * Navigation property to deployment summary of the configuration.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        path: ['windowsManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsManagedAppProtection-id'],
      },
      params,
    };
  },
};

export const targetApps = {
  /**
   * `POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps']['body'],
    params?: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps',
      paramDefs: {
        path: ['windowsManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
};
