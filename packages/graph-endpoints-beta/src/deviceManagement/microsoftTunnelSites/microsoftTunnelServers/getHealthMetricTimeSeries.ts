import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetricTimeSeries': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetricTimeSeries',
    'post'
  >;
}

/**
 * `POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetricTimeSeries`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetricTimeSeries']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetricTimeSeries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetricTimeSeries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/getHealthMetricTimeSeries',
    paramDefs: [
      { name: 'microsoftTunnelSite-id', in: 'path' },
      { name: 'microsoftTunnelServer-id', in: 'path' },
    ],
    params,
    body,
  };
}
