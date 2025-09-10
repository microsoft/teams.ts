import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/deviceImages': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/deviceImages': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}`
 *
 * Delete a cloudPcDeviceImage object.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudPcDeviceImage-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/deviceImages`
 *
 * List the properties and relationships of the cloudPcDeviceImage objects (OS images) uploaded to Cloud PC.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/deviceImages']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/deviceImages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/deviceImages',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}`
 *
 * Read the properties and relationships of a specific cloudPcDeviceImage object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
    paramDefs: {
      path: ['cloudPcDeviceImage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
    paramDefs: {
      path: ['cloudPcDeviceImage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/deviceImages`
 *
 * Create a new cloudPcDeviceImage object. Upload a custom OS image that you can later provision on Cloud PCs.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/deviceImages',
    body,
  };
}

export const reupload = {
  /**
   * `POST /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload`
   *
   * Reupload a cloudPcDeviceImage object that failed to upload.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}/reupload',
      paramDefs: {
        path: ['cloudPcDeviceImage-id'],
      },
      params,
    };
  },
};
