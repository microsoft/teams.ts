import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetrics': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetrics',
    'post'
  >;
}

/**
 * `POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetrics`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetrics']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetrics']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetrics']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetrics',
    paramDefs: [
      { name: 'microsoftTunnelSite-id', in: 'path' },
      { name: 'microsoftTunnelServer-id', in: 'path' },
    ],
    params,
    body,
  };
}
