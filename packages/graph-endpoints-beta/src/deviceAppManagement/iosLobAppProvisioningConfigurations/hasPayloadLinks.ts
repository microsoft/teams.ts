import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
