import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff`
 *
 * Power off a Windows 365 Frontline Cloud PC. This action supports Microsoft Endpoint Manager (MEM) admin scenarios.  After a Windows 365 Frontline Cloud PC is powered off, it&#x27;s deallocated, and licenses are revoked immediately. Only IT admin users can perform this action.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/powerOff',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
