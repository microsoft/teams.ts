import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}',
    'delete'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations',
    'get'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}',
    'patch'
  >;
  'POST /deviceAppManagement/targetedManagedAppConfigurations': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations',
    'post'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps',
    'get'
  >;
  'POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps',
    'post'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
    'delete'
  >;
  'POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign',
    'post'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
    'patch'
  >;
  'DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
    'delete'
  >;
  'POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['targetedManagedAppConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations`
 *
 * Targeted managed app configurations.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}`
 *
 * Targeted managed app configurations.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}',
    paramDefs: {
      path: ['targetedManagedAppConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}',
    paramDefs: {
      path: ['targetedManagedAppConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/targetedManagedAppConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations']['body']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/targetedManagedAppConfigurations',
    body,
  };
}

export const apps = {
  /**
   * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps`
   *
   * List of apps to which the policy is deployed.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['targetedManagedAppConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps']['body'],
    params?: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps',
      paramDefs: {
        path: ['targetedManagedAppConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}`
   *
   * List of apps to which the policy is deployed.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['targetedManagedAppConfiguration-id', 'managedMobileApp-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        path: ['targetedManagedAppConfiguration-id', 'managedMobileApp-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['targetedManagedAppConfiguration-id', 'managedMobileApp-id'],
      },
      params,
    };
  },
};

export const assign = {
  /**
   * `POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign']['body'],
    params?: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign',
      paramDefs: {
        path: ['targetedManagedAppConfiguration-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments`
   *
   * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['targetedManagedAppConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments',
      paramDefs: {
        path: ['targetedManagedAppConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['targetedManagedAppConfiguration-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        path: ['targetedManagedAppConfiguration-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['targetedManagedAppConfiguration-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
    };
  },
};

export const deploymentSummary = {
  /**
   * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary`
   *
   * Navigation property to deployment summary of the configuration.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['targetedManagedAppConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
      paramDefs: {
        path: ['targetedManagedAppConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['targetedManagedAppConfiguration-id'],
      },
      params,
    };
  },
};

export const targetApps = {
  /**
   * `POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps']['body'],
    params?: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps',
      paramDefs: {
        path: ['targetedManagedAppConfiguration-id'],
      },
      params,
      body,
    };
  },
};
