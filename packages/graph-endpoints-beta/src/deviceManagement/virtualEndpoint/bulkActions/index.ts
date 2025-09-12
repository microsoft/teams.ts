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
  'POST /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry': Operation<
    '/deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudPcBulkAction-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['cloudPcBulkAction-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['cloudPcBulkAction-id'],
    },
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
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/bulkActions',
    body,
  };
}

export const retry = {
  /**
   * `POST /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/bulkActions/{cloudPcBulkAction-id}/retry',
      paramDefs: {
        path: ['cloudPcBulkAction-id'],
      },
      params,
      body,
    };
  },
};
