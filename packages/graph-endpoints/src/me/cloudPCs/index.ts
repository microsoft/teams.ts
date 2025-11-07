import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/cloudPCs/{cloudPC-id}': Operation<'/me/cloudPCs/{cloudPC-id}', 'delete'>;
  'GET /me/cloudPCs': Operation<'/me/cloudPCs', 'get'>;
  'GET /me/cloudPCs/{cloudPC-id}': Operation<'/me/cloudPCs/{cloudPC-id}', 'get'>;
  'PATCH /me/cloudPCs/{cloudPC-id}': Operation<'/me/cloudPCs/{cloudPC-id}', 'patch'>;
  'POST /me/cloudPCs': Operation<'/me/cloudPCs', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/endGracePeriod': Operation<
    '/me/cloudPCs/{cloudPC-id}/endGracePeriod',
    'post'
  >;
  'POST /me/cloudPCs/{cloudPC-id}/reboot': Operation<'/me/cloudPCs/{cloudPC-id}/reboot', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/rename': Operation<'/me/cloudPCs/{cloudPC-id}/rename', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/resize': Operation<'/me/cloudPCs/{cloudPC-id}/resize', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/restore': Operation<'/me/cloudPCs/{cloudPC-id}/restore', 'post'>;
  'POST /me/cloudPCs/{cloudPC-id}/troubleshoot': Operation<
    '/me/cloudPCs/{cloudPC-id}/troubleshoot',
    'post'
  >;
}

/**
 * `DELETE /me/cloudPCs/{cloudPC-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/cloudPCs/{cloudPC-id}']['response']> {
  return {
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
 * The user&#x27;s Cloud PCs. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/cloudPCs/{cloudPC-id}']['response']> {
  return {
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
    method: 'post',
    path: '/me/cloudPCs',
    body,
  };
}

export const endGracePeriod = {
  /**
   * `POST /me/cloudPCs/{cloudPC-id}/endGracePeriod`
   *
   * End the grace period for a specific cloudPC object. The grace period is triggered when the Cloud PC license is removed or the provisioning policy is unassigned. It allows users to access Cloud PCs for up to seven days before deprovisioning occurs. Ending the grace period immediately deprovisions the Cloud PC without waiting the seven days.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/endGracePeriod']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/endGracePeriod']['response']> {
    return {
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/endGracePeriod',
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
   * Reboot a specific cloudPC object.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reboot']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/reboot']['response']> {
    return {
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
   * Rename a specific cloudPC object. Use this API to update the displayName of a Cloud PC entity.
   */
  create: function create(
    body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/rename']['body'],
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/rename']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/rename']['response']> {
    return {
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
   * Restore a specific cloudPC object to a previous state from a snapshot. Use this API to trigger a remote action that restores a Cloud PC device to a previous state.
   */
  create: function create(
    body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/restore']['body'],
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/restore']['response']> {
    return {
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

export const troubleshoot = {
  /**
   * `POST /me/cloudPCs/{cloudPC-id}/troubleshoot`
   *
   * Troubleshoot a specific cloudPC object. Use this API to check the health status of the Cloud PC and the session host.
   */
  create: function create(
    params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/troubleshoot']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/troubleshoot']['response']> {
    return {
      method: 'post',
      path: '/me/cloudPCs/{cloudPC-id}/troubleshoot',
      paramDefs: {
        path: ['cloudPC-id'],
      },
      params,
    };
  },
};
