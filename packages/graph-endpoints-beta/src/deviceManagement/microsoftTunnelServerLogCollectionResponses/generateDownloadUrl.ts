import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl': Operation<
    '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl',
    'post'
  >;
}

/**
 * `POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/generateDownloadUrl',
    paramDefs: [{ name: 'microsoftTunnelServerLogCollectionResponse-id', in: 'path' }],
    params,
    body,
  };
}
