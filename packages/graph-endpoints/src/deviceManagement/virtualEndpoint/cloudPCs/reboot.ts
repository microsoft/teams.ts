import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot`
 *
 * Reboot a specific cloudPC object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/reboot',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
