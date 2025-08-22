import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/targetApps',
    paramDefs: [{ name: 'targetedManagedAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
