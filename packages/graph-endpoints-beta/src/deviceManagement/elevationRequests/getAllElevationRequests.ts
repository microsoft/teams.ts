import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests',
    'post'
  >;
}

/**
 * `POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests']['body'],
  params?: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests',
    paramDefs: [{ name: 'privilegeManagementElevationRequest-id', in: 'path' }],
    params,
    body,
  };
}
