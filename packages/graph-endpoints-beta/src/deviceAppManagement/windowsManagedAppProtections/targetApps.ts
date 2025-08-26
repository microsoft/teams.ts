import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/targetApps',
    paramDefs: [{ name: 'windowsManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
