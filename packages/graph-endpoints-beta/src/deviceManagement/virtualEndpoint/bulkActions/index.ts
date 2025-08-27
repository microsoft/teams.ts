export * as retry from './retry';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}': Operation<
    '/deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/bulkActions': Operation<
    '/deviceManagement/virtualEndpoint/bulkActions',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}': Operation<
    '/deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}': Operation<
    '/deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/bulkActions': Operation<
    '/deviceManagement/virtualEndpoint/bulkActions',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcBulkAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/bulkActions`
 *
 * Get a list of the cloudPcBulkAction objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/bulkActions']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/bulkActions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/bulkActions',
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
 * `GET /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}`
 *
 * Read the properties and relationships of a cloudPcBulkAction object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcBulkAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}',
    paramDefs: [{ name: 'cloudPcBulkAction-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/bulkActions`
 *
 * Create a new cloudPcBulkAction object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/bulkActions',
    paramDefs: [],
    params,
    body,
  };
}
