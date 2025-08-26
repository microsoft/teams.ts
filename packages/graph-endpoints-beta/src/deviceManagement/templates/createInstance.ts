import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/createInstance': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/createInstance',
    'post'
  >;
}

/**
 * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/createInstance`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/createInstance']['body'],
  params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/createInstance']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/createInstance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/createInstance',
    paramDefs: [{ name: 'deviceManagementTemplate-id', in: 'path' }],
    params,
    body,
  };
}
