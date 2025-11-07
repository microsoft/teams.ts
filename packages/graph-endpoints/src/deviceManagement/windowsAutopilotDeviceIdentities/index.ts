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
  'POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignUserToDevice': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/assignUserToDevice',
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
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities',
    body,
  };
}

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
