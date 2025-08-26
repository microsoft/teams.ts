import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
    'delete'
  >;
  'GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
    'get'
  >;
  'PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'microsoftTunnelSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration`
 *
 * The MicrosoftTunnelConfiguration that has been applied to this MicrosoftTunnelSite
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'microsoftTunnelSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['body'],
  params?: IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
    paramDefs: [{ name: 'microsoftTunnelSite-id', in: 'path' }],
    params,
    body,
  };
}
