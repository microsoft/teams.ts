export * as assignments from './assignments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/provisioningPolicies': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/retry': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/retry',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}`
 *
 * Delete a cloudPcProvisioningPolicy object. You can’t delete a policy that’s in use.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudPcProvisioningPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/provisioningPolicies`
 *
 * List properties and relationships of the cloudPcProvisioningPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}`
 *
 * Read the properties and relationships of a cloudPcProvisioningPolicy object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    paramDefs: {
      path: ['cloudPcProvisioningPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}`
 *
 * Update the properties of a cloudPcProvisioningPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    paramDefs: {
      path: ['cloudPcProvisioningPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/provisioningPolicies`
 *
 * Create a new cloudPcProvisioningPolicy object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies',
    body,
  };
}

export const apply = {
  /**
   * `POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply`
   *
   * Apply the current provisioning policy configuration to all Cloud PC devices under a specified policy. Currently, the region is the only policy setting that you can apply.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply',
      paramDefs: {
        path: ['cloudPcProvisioningPolicy-id'],
      },
      params,
      body,
    };
  },
};

export const applyConfig = {
  /**
   * `POST /deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig`
   *
   * Update the provisioning policy configuration for a set of Cloud PC devices by their IDs. This method supports retry and allows you to apply the configuration to a subset of Cloud PCs initially to test.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig',
      body,
    };
  },
};

export const assign = {
  /**
   * `POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign`
   *
   * Assign cloudPcProvisioningPolicy to user groups.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign',
      paramDefs: {
        path: ['cloudPcProvisioningPolicy-id'],
      },
      params,
      body,
    };
  },
};

export const retry = {
  /**
   * `POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/retry`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/retry']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/retry']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/retry',
      paramDefs: {
        path: ['cloudPcProvisioningPolicy-id'],
      },
      params,
    };
  },
};

export const schedulePolicyApplyTask = {
  /**
   * `POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask`
   *
   * Set a scheduled auto-reprovision task to do automatic regular apply. Frontline shared only. Administrators only.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask',
      paramDefs: {
        path: ['cloudPcProvisioningPolicy-id'],
      },
      params,
      body,
    };
  },
};
