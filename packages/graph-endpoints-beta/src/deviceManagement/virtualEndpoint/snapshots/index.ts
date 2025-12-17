import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}': Operation<
    '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/snapshots': Operation<
    '/deviceManagement/virtualEndpoint/snapshots',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}': Operation<
    '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}': Operation<
    '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/snapshots': Operation<
    '/deviceManagement/virtualEndpoint/snapshots',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/snapshots/importSnapshot': Operation<
    '/deviceManagement/virtualEndpoint/snapshots/importSnapshot',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/snapshots/purgeImportedSnapshot': Operation<
    '/deviceManagement/virtualEndpoint/snapshots/purgeImportedSnapshot',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudPcSnapshot-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/snapshots`
 *
 * Cloud PC snapshots.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/snapshots']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/snapshots']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/snapshots',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}`
 *
 * Cloud PC snapshots.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    paramDefs: {
      path: ['cloudPcSnapshot-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    paramDefs: {
      path: ['cloudPcSnapshot-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/snapshots`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/snapshots']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/snapshots']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/snapshots',
    body,
  };
}

export const importSnapshot = {
  /**
   * `POST /deviceManagement/virtualEndpoint/snapshots/importSnapshot`
   *
   * Import the snapshot from the customer-managed storage account using the provided information, and store it in the Azure storage account within the Cloud PC service on behalf of the customer.  To provision a new Cloud PC for a licensed user, import a valid .vhd snapshot from a customer-managed storage account into the Azure storage account used by the Cloud PC service.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/snapshots/importSnapshot']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/snapshots/importSnapshot']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/snapshots/importSnapshot',
      body,
    };
  },
};

export const purgeImportedSnapshot = {
  /**
   * `POST /deviceManagement/virtualEndpoint/snapshots/purgeImportedSnapshot`
   *
   * Purge (delete) the unused imported snapshot from the Windows 365 service-managed storage account.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/snapshots/purgeImportedSnapshot']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/snapshots/purgeImportedSnapshot']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/snapshots/purgeImportedSnapshot',
      body,
    };
  },
};
