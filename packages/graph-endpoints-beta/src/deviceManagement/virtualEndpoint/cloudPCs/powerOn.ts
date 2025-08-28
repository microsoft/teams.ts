import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn`
 *
 * Power on a Windows 365 Frontline Cloud PC. This action supports Microsoft Endpoint Manager (MEM) admin scenarios.  After a Windows 365 Frontline Cloud PC is powered on, it is allocated to a user, and licenses are assigned immediately. Only IT admin users can perform this action.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOn',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
