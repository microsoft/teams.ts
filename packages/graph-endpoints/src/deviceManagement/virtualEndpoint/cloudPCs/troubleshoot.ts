import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot`
 *
 * Troubleshoot a specific cloudPC object. Use this API to check the health status of the Cloud PC and the session host.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}/troubleshoot',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
