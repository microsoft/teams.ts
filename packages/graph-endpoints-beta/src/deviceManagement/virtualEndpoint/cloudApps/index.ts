export * as publish from './publish';
export * as reset from './reset';
export * as unpublish from './unpublish';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/cloudApps': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudApps': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcCloudApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/cloudApps`
 *
 * List all the cloudPcCloudApp objects filtered by a provision policy ID.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/cloudApps']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/cloudApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/cloudApps',
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
 * `GET /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}`
 *
 * Read the properties of a specific cloudPcCloudApp object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcCloudApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}`
 *
 * Update the properties of a cloudPcCloudApp object, such as the display name or icon path.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/cloudApps/{cloudPcCloudApp-id}',
    paramDefs: [{ name: 'cloudPcCloudApp-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudApps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudApps',
    paramDefs: [],
    params,
    body,
  };
}
