export * as microsoftTunnelConfiguration from './microsoftTunnelConfiguration';
export * as microsoftTunnelServers from './microsoftTunnelServers';
export * as requestUpgrade from './requestUpgrade';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    'delete'
  >;
  'GET /deviceManagement/microsoftTunnelSites': Operation<
    '/deviceManagement/microsoftTunnelSites',
    'get'
  >;
  'GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    'get'
  >;
  'PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    'patch'
  >;
  'POST /deviceManagement/microsoftTunnelSites': Operation<
    '/deviceManagement/microsoftTunnelSites',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'microsoftTunnelSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/microsoftTunnelSites`
 *
 * Collection of MicrosoftTunnelSite settings associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelSites']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/microsoftTunnelSites']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelSites',
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
 * `GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}`
 *
 * Collection of MicrosoftTunnelSite settings associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'microsoftTunnelSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    paramDefs: [{ name: 'microsoftTunnelSite-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/microsoftTunnelSites`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelSites']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelSites']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/microsoftTunnelSites']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelSites',
    paramDefs: [],
    params,
    body,
  };
}
