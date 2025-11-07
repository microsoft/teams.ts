import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    'delete'
  >;
  'GET /deviceManagement/importedWindowsAutopilotDeviceIdentities': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities',
    'get'
  >;
  'GET /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    'get'
  >;
  'PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    'patch'
  >;
  'POST /deviceManagement/importedWindowsAutopilotDeviceIdentities': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities',
    'post'
  >;
  'POST /deviceManagement/importedWindowsAutopilotDeviceIdentities/import': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities/import',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['importedWindowsAutopilotDeviceIdentity-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/importedWindowsAutopilotDeviceIdentities`
 *
 * Collection of imported Windows autopilot devices.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/importedWindowsAutopilotDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/importedWindowsAutopilotDeviceIdentities']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}`
 *
 * Collection of imported Windows autopilot devices.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    paramDefs: {
      path: ['importedWindowsAutopilotDeviceIdentity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    paramDefs: {
      path: ['importedWindowsAutopilotDeviceIdentity-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/importedWindowsAutopilotDeviceIdentities`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/importedWindowsAutopilotDeviceIdentities']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/importedWindowsAutopilotDeviceIdentities']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities',
    body,
  };
}

const import_ = {
  /**
   * `POST /deviceManagement/importedWindowsAutopilotDeviceIdentities/import`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/importedWindowsAutopilotDeviceIdentities/import']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/importedWindowsAutopilotDeviceIdentities/import']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities/import',
      body,
    };
  },
};
export { import_ as import };
