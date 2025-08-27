import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign']['body'],
  params?: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/assign',
    paramDefs: [{ name: 'iosLobAppProvisioningConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
