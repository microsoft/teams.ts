import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign']['body'],
  params?: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assign',
    paramDefs: [{ name: 'targetedManagedAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
