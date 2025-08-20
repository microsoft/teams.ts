export * as createDownloadUrl from './createDownloadUrl';
export * as generateDownloadUrl from './generateDownloadUrl';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'microsoftTunnelServerLogCollectionResponse-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'microsoftTunnelServerLogCollectionResponse-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'microsoftTunnelServerLogCollectionResponse-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/microsoftTunnelServerLogCollectionResponses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelServerLogCollectionResponses',
    paramDefs: [],
    params,
    body,
  };
}
