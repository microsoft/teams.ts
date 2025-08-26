import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny',
    'post'
  >;
}

/**
 * `POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny']['body'],
  params?: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny',
    paramDefs: [{ name: 'privilegeManagementElevationRequest-id', in: 'path' }],
    params,
    body,
  };
}
