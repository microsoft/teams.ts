import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword': Operation<
    '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword`
 *
 * Update the Active Directory domain password for a cloudPcOnPremisesConnection object. This API is supported when the type of the cloudPcOnPremisesConnection object is hybridAzureADJoin.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/onPremisesConnections/{cloudPcOnPremisesConnection-id}/updateAdDomainPassword',
    paramDefs: [{ name: 'cloudPcOnPremisesConnection-id', in: 'path' }],
    params,
    body,
  };
}
