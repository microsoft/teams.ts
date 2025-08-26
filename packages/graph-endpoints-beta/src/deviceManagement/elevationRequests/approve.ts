import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve',
    'post'
  >;
}

/**
 * `POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve']['body'],
  params?: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve',
    paramDefs: [{ name: 'privilegeManagementElevationRequest-id', in: 'path' }],
    params,
    body,
  };
}
