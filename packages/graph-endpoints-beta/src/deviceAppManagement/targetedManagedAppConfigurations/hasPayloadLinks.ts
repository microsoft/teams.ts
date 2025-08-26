import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/targetedManagedAppConfigurations/hasPayloadLinks': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/targetedManagedAppConfigurations/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
