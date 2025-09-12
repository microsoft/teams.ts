import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/cloudPCs': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/rename': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/rename',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/resize': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/resize',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/restore': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/restore',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudPC-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/cloudPCs`
 *
 * List the cloudPC devices in a tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/cloudPCs']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/cloudPCs']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/cloudPCs',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}`
 *
 * Read the properties and relationships of a specific cloudPC object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    paramDefs: {
      path: ['cloudPC-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    paramDefs: {
      path: ['cloudPC-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudPCs`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudPCs',
    body,
  };
}

export const endGracePeriod = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod`
   *
   * End the grace period for a specific cloudPC object. The grace period is triggered when the Cloud PC license is removed or the provisioning policy is unassigned. It allows users to access Cloud PCs for up to seven days before deprovisioning occurs. Ending the grace period immediately deprovisions the Cloud PC without waiting the seven days.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const reboot = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot`
   *
   * Reboot a specific cloudPC object.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const rename = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/rename`
   *
   * Rename a specific cloudPC object. Use this API to update the displayName of a Cloud PC entity.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/rename']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/rename']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/rename']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/rename',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const resize = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/resize`
   *
   * Upgrade or downgrade an existing Cloud PC to a configuration with a new virtual CPU (vCPU) and storage size.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/resize']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/resize']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/resize']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/resize',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/restore`
   *
   * Restore a specific cloudPC object to a previous state from a snapshot. Use this API to trigger a remote action that restores a Cloud PC device to a previous state.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/restore']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/restore']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/restore',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const troubleshoot = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot`
   *
   * Troubleshoot a specific cloudPC object. Use this API to check the health status of the Cloud PC and the session host.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};
