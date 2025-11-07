import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    'delete'
  >;
  'GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests',
    'get'
  >;
  'GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    'get'
  >;
  'PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    'patch'
  >;
  'POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests',
    'post'
  >;
  'POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['mobileAppTroubleshootingEvent-id', 'appLogCollectionRequest-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests`
 *
 * Indicates collection of App Log Upload Request.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests',
    paramDefs: {
      path: ['mobileAppTroubleshootingEvent-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}`
 *
 * Indicates collection of App Log Upload Request.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    paramDefs: {
      path: ['mobileAppTroubleshootingEvent-id', 'appLogCollectionRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    paramDefs: {
      path: ['mobileAppTroubleshootingEvent-id', 'appLogCollectionRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests']['body'],
  params?: IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests',
    paramDefs: {
      path: ['mobileAppTroubleshootingEvent-id'],
    },
    params,
    body,
  };
}

export const createDownloadUrl = {
  /**
   * `POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl',
      paramDefs: {
        path: ['mobileAppTroubleshootingEvent-id', 'appLogCollectionRequest-id'],
      },
      params,
    };
  },
};
