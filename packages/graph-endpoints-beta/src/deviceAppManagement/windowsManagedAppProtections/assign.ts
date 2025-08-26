import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assign',
    paramDefs: [{ name: 'windowsManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
