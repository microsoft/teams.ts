import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/cloudPCs/{cloudPC-id}': Operation<'/me/cloudPCs/{cloudPC-id}', 'delete'>;
  'GET /me/cloudPCs': Operation<'/me/cloudPCs', 'get'>;
  'GET /me/cloudPCs/{cloudPC-id}': Operation<'/me/cloudPCs/{cloudPC-id}', 'get'>;
  'PATCH /me/cloudPCs/{cloudPC-id}': Operation<'/me/cloudPCs/{cloudPC-id}', 'patch'>;
  'POST /me/cloudPCs': Operation<'/me/cloudPCs', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/changeUserAccountType': Operation<
    '/me/cloudPCs/{cloudPC-id}/changeUserAccountType',
    'post'
  >;
  'POST /me/cloudPCs/{cloudPC-id}/createSnapshot': Operation<
    '/me/cloudPCs/{cloudPC-id}/createSnapshot',
    'post'
  >;
  'POST /me/cloudPCs/{cloudPC-id}/endGracePeriod': Operation<
    '/me/cloudPCs/{cloudPC-id}/endGracePeriod',
    'post'
  >;
  'POST /me/cloudPCs/{cloudPC-id}/powerOff': Operation<
    '/me/cloudPCs/{cloudPC-id}/powerOff',
    'post'
  >;
  'POST /me/cloudPCs/{cloudPC-id}/powerOn': Operation<'/me/cloudPCs/{cloudPC-id}/powerOn', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/reboot': Operation<'/me/cloudPCs/{cloudPC-id}/reboot', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/rename': Operation<'/me/cloudPCs/{cloudPC-id}/rename', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/reprovision': Operation<
    '/me/cloudPCs/{cloudPC-id}/reprovision',
    'post'
  >;
  'POST /me/cloudPCs/{cloudPC-id}/resize': Operation<'/me/cloudPCs/{cloudPC-id}/resize', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/restore': Operation<'/me/cloudPCs/{cloudPC-id}/restore', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation': Operation<
    '/me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation',
    'post'
  >;
  'POST /me/cloudPCs/{cloudPC-id}/setReviewStatus': Operation<
    '/me/cloudPCs/{cloudPC-id}/setReviewStatus',
    'post'
  >;
  'POST /me/cloudPCs/{cloudPC-id}/start': Operation<'/me/cloudPCs/{cloudPC-id}/start', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/stop': Operation<'/me/cloudPCs/{cloudPC-id}/stop', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/troubleshoot': Operation<
    '/me/cloudPCs/{cloudPC-id}/troubleshoot',
    'post'
  >;
  'POST /me/cloudPCs/validateBulkResize': Operation<'/me/cloudPCs/validateBulkResize', 'post'>;
}

/**
 * `DELETE /me/cloudPCs/{cloudPC-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/cloudPCs/{cloudPC-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudPC-id'],
    },
    params,
  };
}

/**
 * `GET /me/cloudPCs`
 *
 * List the cloudPC devices that are attributed to the signed-in user.
 */
export function list(
  params?: IEndpoints['GET /me/cloudPCs']['parameters']
): EndpointRequest<IEndpoints['GET /me/cloudPCs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/cloudPCs',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/cloudPCs/{cloudPC-id}`
 *
 * Read the properties and relationships of a specific cloudPC object.
 */
export function get(
  params?: IEndpoints['GET /me/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/cloudPCs/{cloudPC-id}',
    paramDefs: {
      path: ['cloudPC-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/cloudPCs/{cloudPC-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/cloudPCs/{cloudPC-id}']['body'],
  params?: IEndpoints['PATCH /me/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/cloudPCs/{cloudPC-id}',
    paramDefs: {
      path: ['cloudPC-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/cloudPCs`
 *
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs']['body']
): EndpointRequest<IEndpoints['POST /me/cloudPCs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs',
    body,
  };
}

export const changeUserAccountType = {
  /**
   * `POST /me/cloudPCs/{cloudPC-id}/changeUserAccountType`
   *
   * Change the account type of the user on a specific Cloud PC.
   */
  create: function create(
    body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/changeUserAccountType']['body'],
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/changeUserAccountType']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/cloudPCs/{cloudPC-id}/changeUserAccountType']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/changeUserAccountType',
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
   * `POST /me/cloudPCs/{cloudPC-id}/createSnapshot`
   *
   * Create a snapshot for a specific Cloud PC device.
   */
  create: function create(
    body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/createSnapshot']['body'],
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/createSnapshot']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/createSnapshot']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/createSnapshot',
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
   * `POST /me/cloudPCs/{cloudPC-id}/endGracePeriod`
   *
   * End the grace period for a specific Cloud PC. The grace period is triggered when the Cloud PC license is removed or the provisioning policy is unassigned. It allows users to access Cloud PCs for up to seven days before deprovisioning occurs. Ending the grace period immediately deprovisions the Cloud PC without waiting the seven days.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/endGracePeriod']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/endGracePeriod']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/endGracePeriod',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const powerOff = {
  /**
   * `POST /me/cloudPCs/{cloudPC-id}/powerOff`
   *
   * Power off a Windows 365 Frontline Cloud PC. This action supports Microsoft Endpoint Manager (MEM) admin scenarios.  After a Windows 365 Frontline Cloud PC is powered off, it&#x27;s deallocated, and licenses are revoked immediately. Only IT admin users can perform this action.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/powerOff']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/powerOff']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/powerOff',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const powerOn = {
  /**
   * `POST /me/cloudPCs/{cloudPC-id}/powerOn`
   *
   * Power on a Windows 365 Frontline Cloud PC. This action supports Microsoft Endpoint Manager (MEM) admin scenarios.  After a Windows 365 Frontline Cloud PC is powered on, it is allocated to a user, and licenses are assigned immediately. Only IT admin users can perform this action.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/powerOn']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/powerOn']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/powerOn',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const reboot = {
  /**
   * `POST /me/cloudPCs/{cloudPC-id}/reboot`
   *
   * Reboot a specific Cloud PC.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reboot']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reboot']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/reboot',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const rename = {
  /**
   * `POST /me/cloudPCs/{cloudPC-id}/rename`
   *
   * Rename a specific Cloud PC. Use this API to update the displayName for the Cloud PC entity.
   */
  create: function create(
    body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/rename']['body'],
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/rename']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/rename']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/rename',
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
   * `POST /me/cloudPCs/{cloudPC-id}/reprovision`
   *
   * Reprovision a specific Cloud PC.
   */
  create: function create(
    body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reprovision']['body'],
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reprovision']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reprovision']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/reprovision',
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
   * `POST /me/cloudPCs/{cloudPC-id}/resize`
   *
   * Upgrade or downgrade an existing Cloud PC to a configuration with a new virtual CPU (vCPU) and storage size.
   */
  create: function create(
    body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/resize']['body'],
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/resize']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/resize']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/resize',
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
   * `POST /me/cloudPCs/{cloudPC-id}/restore`
   *
   * Restore a specific Cloud PC. Use this API to trigger a remote action that restores a Cloud PC device to a previous state.
   */
  create: function create(
    body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/restore']['body'],
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/restore']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/restore',
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
   * `POST /me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation`
   *
   * Retry installation for the partner agents that failed to install on the Cloud PC. Service side checks which agent installation failed firstly and retry.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const setReviewStatus = {
  /**
   * `POST /me/cloudPCs/{cloudPC-id}/setReviewStatus`
   *
   * Set the review status of a specific Cloud PC device using the Cloud PC ID. Use this API to set the review status of a Cloud PC to in review if you consider a Cloud PC suspicious. After the review is completed, use this API again to set the Cloud PC back to a normal state.
   */
  create: function create(
    body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/setReviewStatus']['body'],
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/setReviewStatus']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/setReviewStatus']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/setReviewStatus',
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
   * `POST /me/cloudPCs/{cloudPC-id}/start`
   *
   * Start a specific Cloud PC. Currently, only Windows 365 Frontline Cloud PCs are supported.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/start']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/start']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/start',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const stop = {
  /**
   * `POST /me/cloudPCs/{cloudPC-id}/stop`
   *
   * Stop a specific Cloud PC. Currently, only Windows 365 Frontline Cloud PCs are supported.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/stop']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/stop']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/stop',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const troubleshoot = {
  /**
   * `POST /me/cloudPCs/{cloudPC-id}/troubleshoot`
   *
   * Troubleshoot a specific Cloud PC. Use this API to check the health status of the Cloud PC and the session host.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/troubleshoot']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/troubleshoot']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/troubleshoot',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};

export const validateBulkResize = {
  /**
   * `POST /me/cloudPCs/validateBulkResize`
   *
   * Validate that a set of cloudPC devices meet the requirements to be bulk resized.
   */
  create: function create(
    body: IEndpoints['POST /me/cloudPCs/validateBulkResize']['body']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/validateBulkResize']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/cloudPCs/validateBulkResize',
      body,
    };
  },
};
