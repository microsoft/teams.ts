import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke',
    'post'
  >;
}

/**
 * `POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke']['body'],
  params?: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke',
    paramDefs: [{ name: 'privilegeManagementElevationRequest-id', in: 'path' }],
    params,
    body,
  };
}
