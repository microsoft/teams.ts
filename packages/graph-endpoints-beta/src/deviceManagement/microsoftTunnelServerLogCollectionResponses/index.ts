import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}': Operation<
    '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}',
    'delete'
  >;
  'GET /deviceManagement/microsoftTunnelServerLogCollectionResponses': Operation<
    '/deviceManagement/microsoftTunnelServerLogCollectionResponses',
    'get'
  >;
  'GET /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}': Operation<
    '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}',
    'get'
  >;
  'PATCH /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}': Operation<
    '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}',
    'patch'
  >;
  'POST /deviceManagement/microsoftTunnelServerLogCollectionResponses': Operation<
    '/deviceManagement/microsoftTunnelServerLogCollectionResponses',
    'post'
  >;
  'POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl': Operation<
    '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl',
    'post'
  >;
  'POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl': Operation<
    '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['microsoftTunnelServerLogCollectionResponse-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/microsoftTunnelServerLogCollectionResponses`
 *
 * Collection of MicrosoftTunnelServerLogCollectionResponse settings associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelServerLogCollectionResponses']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/microsoftTunnelServerLogCollectionResponses']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelServerLogCollectionResponses',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}`
 *
 * Collection of MicrosoftTunnelServerLogCollectionResponse settings associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}',
    paramDefs: {
      path: ['microsoftTunnelServerLogCollectionResponse-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}',
    paramDefs: {
      path: ['microsoftTunnelServerLogCollectionResponse-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/microsoftTunnelServerLogCollectionResponses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelServerLogCollectionResponses',
    body,
  };
}

export const createDownloadUrl = {
  /**
   * `POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl',
      paramDefs: {
        path: ['microsoftTunnelServerLogCollectionResponse-id'],
      },
      params,
    };
  },
};

export const generateDownloadUrl = {
  /**
   * `POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl',
      paramDefs: {
        path: ['microsoftTunnelServerLogCollectionResponse-id'],
      },
      params,
    };
  },
};
