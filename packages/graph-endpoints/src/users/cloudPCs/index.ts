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
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod',
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
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/resize': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/resize',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/restore',
    'post'
  >;
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot',
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
    method: 'post',
    path: '/users/{user-id}/cloudPCs',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const endGracePeriod = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod`
   *
   * End the grace period for a specific cloudPC object. The grace period is triggered when the Cloud PC license is removed or the provisioning policy is unassigned. It allows users to access Cloud PCs for up to seven days before deprovisioning occurs. Ending the grace period immediately deprovisions the Cloud PC without waiting the seven days.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/endGracePeriod',
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
   * Reboot a specific cloudPC object.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/reboot']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/reboot']['response']> {
    return {
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
   * Rename a specific cloudPC object. Use this API to update the displayName of a Cloud PC entity.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/rename']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/rename']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/rename']['response']> {
    return {
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
   * Restore a specific cloudPC object to a previous state from a snapshot. Use this API to trigger a remote action that restores a Cloud PC device to a previous state.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore']['body'],
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/restore']['response']
  > {
    return {
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

export const troubleshoot = {
  /**
   * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot`
   *
   * Troubleshoot a specific cloudPC object. Use this API to check the health status of the Cloud PC and the session host.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/cloudPCs/{cloudPC-id}/troubleshoot',
      paramDefs: {
        path: ['user-id', 'cloudPC-id'],
      },
      params,
    };
  },
};
