import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    'delete'
  >;
  'GET /deviceAppManagement/defaultManagedAppProtections': Operation<
    '/deviceAppManagement/defaultManagedAppProtections',
    'get'
  >;
  'GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    'patch'
  >;
  'POST /deviceAppManagement/defaultManagedAppProtections': Operation<
    '/deviceAppManagement/defaultManagedAppProtections',
    'post'
  >;
  'GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps',
    'get'
  >;
  'POST /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps',
    'post'
  >;
  'GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'delete'
  >;
  'GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
    'patch'
  >;
  'DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
    'delete'
  >;
}

/**
 * `DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['defaultManagedAppProtection-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/defaultManagedAppProtections`
 *
 * Default managed app policies.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/defaultManagedAppProtections',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}`
 *
 * Default managed app policies.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    paramDefs: {
      path: ['defaultManagedAppProtection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    paramDefs: {
      path: ['defaultManagedAppProtection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/defaultManagedAppProtections`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections']['body']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/defaultManagedAppProtections',
    body,
  };
}

export const apps = {
  /**
   * `GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps`
   *
   * List of apps to which the policy is deployed.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['defaultManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps']['body'],
    params?: IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps',
      paramDefs: {
        path: ['defaultManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   * List of apps to which the policy is deployed.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['defaultManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        path: ['defaultManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['defaultManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
    };
  },
};

export const deploymentSummary = {
  /**
   * `GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary`
   *
   * Navigation property to deployment summary of the configuration.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['defaultManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        path: ['defaultManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['defaultManagedAppProtection-id'],
      },
      params,
    };
  },
};
