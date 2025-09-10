import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests',
    'get'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'patch'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests',
    'post'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedDevice-id', 'deviceLogCollectionResponse-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests`
 *
 * List of log collection requests
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests',
    paramDefs: {
      path: ['managedDevice-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 * List of log collection requests
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: {
      path: ['managedDevice-id', 'deviceLogCollectionResponse-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: {
      path: ['managedDevice-id', 'deviceLogCollectionResponse-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests',
    paramDefs: {
      path: ['managedDevice-id'],
    },
    params,
    body,
  };
}

export const createDownloadUrl = {
  /**
   * `POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl',
      paramDefs: {
        path: ['managedDevice-id', 'deviceLogCollectionResponse-id'],
      },
      params,
    };
  },
};
