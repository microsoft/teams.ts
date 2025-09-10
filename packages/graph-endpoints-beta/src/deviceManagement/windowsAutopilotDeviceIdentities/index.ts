import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsAutopilotDeviceIdentities': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities',
    'get'
  >;
  'GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsAutopilotDeviceIdentities': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities',
    'post'
  >;
  'POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment',
    'post'
  >;
  'POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignResourceAccountToDevice': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignResourceAccountToDevice',
    'post'
  >;
  'POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignUserToDevice': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignUserToDevice',
    'post'
  >;
  'GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile',
    'get'
  >;
  'GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile',
    'get'
  >;
  'POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice',
    'post'
  >;
  'POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignUserFromDevice': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignUserFromDevice',
    'post'
  >;
  'POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsAutopilotDeviceIdentity-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotDeviceIdentities`
 *
 * The Windows autopilot device identities contained collection.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}`
 *
 * The Windows autopilot device identities contained collection.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    paramDefs: {
      path: ['windowsAutopilotDeviceIdentity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    paramDefs: {
      path: ['windowsAutopilotDeviceIdentity-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsAutopilotDeviceIdentities`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities',
    body,
  };
}

export const allowNextEnrollment = {
  /**
   * `POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment`
   *
   * Unblocks next autopilot enrollment.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment',
      paramDefs: {
        path: ['windowsAutopilotDeviceIdentity-id'],
      },
      params,
    };
  },
};

export const assignResourceAccountToDevice = {
  /**
   * `POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignResourceAccountToDevice`
   *
   * Assigns resource account to Autopilot devices.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignResourceAccountToDevice']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignResourceAccountToDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignResourceAccountToDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignResourceAccountToDevice',
      paramDefs: {
        path: ['windowsAutopilotDeviceIdentity-id'],
      },
      params,
      body,
    };
  },
};

export const assignUserToDevice = {
  /**
   * `POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignUserToDevice`
   *
   * Assigns user to Autopilot devices.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignUserToDevice']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignUserToDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignUserToDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignUserToDevice',
      paramDefs: {
        path: ['windowsAutopilotDeviceIdentity-id'],
      },
      params,
      body,
    };
  },
};

export const deploymentProfile = {
  /**
   * `GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile`
   *
   * Deployment profile currently assigned to the Windows autopilot device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsAutopilotDeviceIdentity-id'],
      },
      params,
    };
  },
};

export const intendedDeploymentProfile = {
  /**
   * `GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile`
   *
   * Deployment profile intended to be assigned to the Windows autopilot device.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsAutopilotDeviceIdentity-id'],
      },
      params,
    };
  },
};

export const unassignResourceAccountFromDevice = {
  /**
   * `POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice`
   *
   * Unassigns the resource account from an Autopilot device.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice',
      paramDefs: {
        path: ['windowsAutopilotDeviceIdentity-id'],
      },
      params,
    };
  },
};

export const unassignUserFromDevice = {
  /**
   * `POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignUserFromDevice`
   *
   * Unassigns the user from an Autopilot device.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignUserFromDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignUserFromDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignUserFromDevice',
      paramDefs: {
        path: ['windowsAutopilotDeviceIdentity-id'],
      },
      params,
    };
  },
};

export const updateDeviceProperties = {
  /**
   * `POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties`
   *
   * Updates properties on Autopilot devices.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties',
      paramDefs: {
        path: ['windowsAutopilotDeviceIdentity-id'],
      },
      params,
      body,
    };
  },
};
