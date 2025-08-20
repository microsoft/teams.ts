import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign',
    paramDefs: [{ name: 'deviceManagementScript-id', in: 'path' }],
    params,
    body,
  };
}
