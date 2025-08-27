export * as reupload from './reupload';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcDeviceImage-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcDeviceImage-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'cloudPcDeviceImage-id', in: 'path' }],
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
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/deviceImages',
    paramDefs: [],
    params,
    body,
  };
}
