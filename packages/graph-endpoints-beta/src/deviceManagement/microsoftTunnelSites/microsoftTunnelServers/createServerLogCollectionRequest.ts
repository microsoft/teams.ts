import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/createServerLogCollectionRequest': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/createServerLogCollectionRequest',
    'post'
  >;
}

/**
 * `POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/createServerLogCollectionRequest`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/createServerLogCollectionRequest']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/createServerLogCollectionRequest']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/createServerLogCollectionRequest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelServers/{microsoftTunnelServer-id}/createServerLogCollectionRequest',
    paramDefs: [
      { name: 'microsoftTunnelSite-id', in: 'path' },
      { name: 'microsoftTunnelServer-id', in: 'path' },
    ],
    params,
    body,
  };
}
