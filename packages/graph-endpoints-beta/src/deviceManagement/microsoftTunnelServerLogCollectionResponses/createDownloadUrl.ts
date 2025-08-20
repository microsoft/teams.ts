import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl': Operation<
    '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl',
    'post'
  >;
}

/**
 * `POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelServerLogCollectionResponses/{microsoftTunnelServerLogCollectionResponse-id}/createDownloadUrl',
    paramDefs: [{ name: 'microsoftTunnelServerLogCollectionResponse-id', in: 'path' }],
    params,
    body,
  };
}
