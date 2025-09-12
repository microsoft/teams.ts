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
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/changeUserAccountType': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/changeUserAccountType',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/createSnapshot': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/createSnapshot',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn',
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
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reprovision': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reprovision',
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
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/setReviewStatus': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/setReviewStatus',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/start': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/start',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/stop': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/stop',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudPCs',
    body,
  };
}

export const changeUserAccountType = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/changeUserAccountType`
   *
   * Change the account type of the user on a specific Cloud PC.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/changeUserAccountType']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/changeUserAccountType']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/changeUserAccountType']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/changeUserAccountType',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const createSnapshot = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/createSnapshot`
   *
   * Create a snapshot for a specific Cloud PC device.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/createSnapshot']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/createSnapshot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/createSnapshot']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/createSnapshot',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const endGracePeriod = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod`
   *
   * End the grace period for a specific Cloud PC. The grace period is triggered when the Cloud PC license is removed or the provisioning policy is unassigned. It allows users to access Cloud PCs for up to seven days before deprovisioning occurs. Ending the grace period immediately deprovisions the Cloud PC without waiting the seven days.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/endGracePeriod',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const powerOff = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff`
   *
   * Power off a Windows 365 Frontline Cloud PC. This action supports Microsoft Endpoint Manager (MEM) admin scenarios.  After a Windows 365 Frontline Cloud PC is powered off, it&#x27;s deallocated, and licenses are revoked immediately. Only IT admin users can perform this action.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const powerOn = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn`
   *
   * Power on a Windows 365 Frontline Cloud PC. This action supports Microsoft Endpoint Manager (MEM) admin scenarios.  After a Windows 365 Frontline Cloud PC is powered on, it is allocated to a user, and licenses are assigned immediately. Only IT admin users can perform this action.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn',
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
   * Reboot a specific Cloud PC.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot']['response']
  > {
    return {
      ver: 'beta',
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
   * Rename a specific Cloud PC. Use this API to update the displayName for the Cloud PC entity.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/rename']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/rename']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/rename']['response']
  > {
    return {
      ver: 'beta',
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

export const reprovision = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reprovision`
   *
   * Reprovision a specific Cloud PC.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reprovision']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reprovision']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reprovision']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reprovision',
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
      ver: 'beta',
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
   * Restore a specific Cloud PC. Use this API to trigger a remote action that restores a Cloud PC device to a previous state.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/restore']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/restore']['response']
  > {
    return {
      ver: 'beta',
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

export const retryPartnerAgentInstallation = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation`
   *
   * Retry installation for the partner agents that failed to install on the Cloud PC. Service side checks which agent installation failed firstly and retry.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const setReviewStatus = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/setReviewStatus`
   *
   * Set the review status of a specific Cloud PC device using the Cloud PC ID. Use this API to set the review status of a Cloud PC to in review if you consider a Cloud PC suspicious. After the review is completed, use this API again to set the Cloud PC back to a normal state.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/setReviewStatus']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/setReviewStatus']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/setReviewStatus']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/setReviewStatus',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const start = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/start`
   *
   * Start a specific Cloud PC. Currently, only Windows 365 Frontline Cloud PCs are supported.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/start']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/start']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/start',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const stop = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/stop`
   *
   * Stop a specific Cloud PC. Currently, only Windows 365 Frontline Cloud PCs are supported.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/stop']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/stop']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/stop',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const troubleshoot = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot`
   *
   * Troubleshoot a specific Cloud PC. Use this API to check the health status of the Cloud PC and the session host.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const validateBulkResize = {
  /**
   * `POST /deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize`
   *
   * Validate that a set of cloudPC devices meet the requirements to be bulk resized.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize',
      body,
    };
  },
};
