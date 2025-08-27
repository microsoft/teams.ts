import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade',
    'post'
  >;
}

/**
 * `POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade',
    paramDefs: [{ name: 'microsoftTunnelSite-id', in: 'path' }],
    params,
    body,
  };
}
