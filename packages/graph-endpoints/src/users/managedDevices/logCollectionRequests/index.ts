import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests',
    'get'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    'patch'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests',
    'post'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'managedDevice-id', 'deviceLogCollectionResponse-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests`
 *
 * List of log collection requests
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests',
    paramDefs: {
      path: ['user-id', 'managedDevice-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 * List of log collection requests
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: {
      path: ['user-id', 'managedDevice-id', 'deviceLogCollectionResponse-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}',
    paramDefs: {
      path: ['user-id', 'managedDevice-id', 'deviceLogCollectionResponse-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests',
    paramDefs: {
      path: ['user-id', 'managedDevice-id'],
    },
    params,
    body,
  };
}

export const createDownloadUrl = {
  /**
   * `POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}/createDownloadUrl',
      paramDefs: {
        path: ['user-id', 'managedDevice-id', 'deviceLogCollectionResponse-id'],
      },
      params,
    };
  },
};
