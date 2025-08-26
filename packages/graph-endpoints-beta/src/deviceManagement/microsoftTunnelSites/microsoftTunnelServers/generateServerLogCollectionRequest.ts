import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/generateServerLogCollectionRequest': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/generateServerLogCollectionRequest',
    'post'
  >;
}

/**
 * `POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/generateServerLogCollectionRequest`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/generateServerLogCollectionRequest']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/generateServerLogCollectionRequest']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/generateServerLogCollectionRequest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/generateServerLogCollectionRequest',
    paramDefs: [
      { name: 'microsoftTunnelSite-id', in: 'path' },
      { name: 'microsoftTunnelServer-id', in: 'path' },
    ],
    params,
    body,
  };
}
