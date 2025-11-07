import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/cloudPCs/{cloudPC-id}': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}',
    'delete'
  >;
  'GET /users/{user-id}/cloudPCs': Operation<'/users/{user-id}/cloudPCs', 'get'>;
  'GET /users/{user-id}/cloudPCs/{cloudPC-id}': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}',
    'get'
  >;
  'PATCH /users/{user-id}/cloudPCs/{cloudPC-id}': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}',
    'patch'
  >;
  'POST /users/{user-id}/cloudPCs': Operation<'/users/{user-id}/cloudPCs', 'post'>;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/changeUserAccountType': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/changeUserAccountType',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/powerOff': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/powerOff',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/powerOn': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/powerOn',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/reboot': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/reboot',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/rename': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/rename',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/reprovision': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/reprovision',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/resize',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/restore',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/setReviewStatus': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/setReviewStatus',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/start': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/start',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/stop': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/stop',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/validateBulkResize': Operation<
    '/users/{user-id}/cloudPCs/validateBulkResize',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/cloudPCs/{cloudPC-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'cloudPC-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/cloudPCs`
 *
 * The user&#x27;s Cloud PCs. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/cloudPCs']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/cloudPCs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/cloudPCs',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/cloudPCs/{cloudPC-id}`
 *
 * The user&#x27;s Cloud PCs. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}',
    paramDefs: {
      path: ['user-id', 'cloudPC-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/cloudPCs/{cloudPC-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/cloudPCs/{cloudPC-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}',
    paramDefs: {
      path: ['user-id', 'cloudPC-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/cloudPCs`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/cloudPCs']['body'],
  params?: IEndpoints['POST /users/{user-id}/cloudPCs']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/cloudPCs',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const changeUserAccountType = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/changeUserAccountType`
   *
   * Change the account type of the user on a specific Cloud PC.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/changeUserAccountType']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/changeUserAccountType']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/changeUserAccountType']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/changeUserAccountType',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const createSnapshot = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot`
   *
   * Create a snapshot for a specific Cloud PC device.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/createSnapshot',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const endGracePeriod = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod`
   *
   * End the grace period for a specific Cloud PC. The grace period is triggered when the Cloud PC license is removed or the provisioning policy is unassigned. It allows users to access Cloud PCs for up to seven days before deprovisioning occurs. Ending the grace period immediately deprovisions the Cloud PC without waiting the seven days.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
    };
  },
};

export const powerOff = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/powerOff`
   *
   * Power off a Windows 365 Frontline Cloud PC. This action supports Microsoft Endpoint Manager (MEM) admin scenarios.  After a Windows 365 Frontline Cloud PC is powered off, it&#x27;s deallocated, and licenses are revoked immediately. Only IT admin users can perform this action.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/powerOff']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/powerOff']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/powerOff',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
    };
  },
};

export const powerOn = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/powerOn`
   *
   * Power on a Windows 365 Frontline Cloud PC. This action supports Microsoft Endpoint Manager (MEM) admin scenarios.  After a Windows 365 Frontline Cloud PC is powered on, it is allocated to a user, and licenses are assigned immediately. Only IT admin users can perform this action.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/powerOn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/powerOn']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/powerOn',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
    };
  },
};

export const reboot = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/reboot`
   *
   * Reboot a specific Cloud PC.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/reboot']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/reboot']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/reboot',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
    };
  },
};

export const rename = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/rename`
   *
   * Rename a specific Cloud PC. Use this API to update the displayName for the Cloud PC entity.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/rename']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/rename']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/rename']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/rename',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const reprovision = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/reprovision`
   *
   * Reprovision a specific Cloud PC.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/reprovision']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/reprovision']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/reprovision']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/reprovision',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const resize = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize`
   *
   * Upgrade or downgrade an existing Cloud PC to a configuration with a new virtual CPU (vCPU) and storage size.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/resize',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore`
   *
   * Restore a specific Cloud PC. Use this API to trigger a remote action that restores a Cloud PC device to a previous state.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/restore',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const retryPartnerAgentInstallation = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation`
   *
   * Retry installation for the partner agents that failed to install on the Cloud PC. Service side checks which agent installation failed firstly and retry.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
    };
  },
};

export const setReviewStatus = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/setReviewStatus`
   *
   * Set the review status of a specific Cloud PC device using the Cloud PC ID. Use this API to set the review status of a Cloud PC to in review if you consider a Cloud PC suspicious. After the review is completed, use this API again to set the Cloud PC back to a normal state.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/setReviewStatus']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/setReviewStatus']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/setReviewStatus']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/setReviewStatus',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
      body,
    };
  },
};

export const start = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/start`
   *
   * Start a specific Cloud PC. Currently, only Windows 365 Frontline Cloud PCs are supported.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/start']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/start']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/start',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
    };
  },
};

export const stop = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/stop`
   *
   * Stop a specific Cloud PC. Currently, only Windows 365 Frontline Cloud PCs are supported.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/stop']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/stop']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/stop',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
    };
  },
};

export const troubleshoot = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot`
   *
   * Troubleshoot a specific Cloud PC. Use this API to check the health status of the Cloud PC and the session host.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
    };
  },
};

export const validateBulkResize = {
  /**
   * `POST /users/{user-id}/cloudPCs/validateBulkResize`
   *
   * Validate that a set of cloudPC devices meet the requirements to be bulk resized.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudPCs/validateBulkResize']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/validateBulkResize']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/validateBulkResize']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/cloudPCs/validateBulkResize',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
