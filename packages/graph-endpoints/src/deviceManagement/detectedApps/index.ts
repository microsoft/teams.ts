import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/detectedApps/{detectedApp-id}': Operation<
    '/deviceManagement/detectedApps/{detectedApp-id}',
    'delete'
  >;
  'GET /deviceManagement/detectedApps': Operation<'/deviceManagement/detectedApps', 'get'>;
  'GET /deviceManagement/detectedApps/{detectedApp-id}': Operation<
    '/deviceManagement/detectedApps/{detectedApp-id}',
    'get'
  >;
  'PATCH /deviceManagement/detectedApps/{detectedApp-id}': Operation<
    '/deviceManagement/detectedApps/{detectedApp-id}',
    'patch'
  >;
  'POST /deviceManagement/detectedApps': Operation<'/deviceManagement/detectedApps', 'post'>;
  'GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices': Operation<
    '/deviceManagement/detectedApps/{detectedApp-id}/managedDevices',
    'get'
  >;
  'GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}': Operation<
    '/deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/detectedApps/{detectedApp-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/detectedApps/{detectedApp-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/detectedApps/{detectedApp-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['detectedApp-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/detectedApps`
 *
 * The list of detected apps associated with a device.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/detectedApps']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/detectedApps']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/detectedApps',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/detectedApps/{detectedApp-id}`
 *
 * The list of detected apps associated with a device.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/detectedApps/{detectedApp-id}',
    paramDefs: {
      path: ['detectedApp-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/detectedApps/{detectedApp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/detectedApps/{detectedApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/detectedApps/{detectedApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/detectedApps/{detectedApp-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/detectedApps/{detectedApp-id}',
    paramDefs: {
      path: ['detectedApp-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/detectedApps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/detectedApps']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/detectedApps']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/detectedApps',
    body,
  };
}

export const managedDevices = {
  /**
   * `GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices`
   *
   * The devices that have the discovered application installed
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/detectedApps/{detectedApp-id}/managedDevices',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['detectedApp-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}`
   *
   * The devices that have the discovered application installed
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['detectedApp-id', 'managedDevice-id'],
      },
      params,
    };
  },
};
