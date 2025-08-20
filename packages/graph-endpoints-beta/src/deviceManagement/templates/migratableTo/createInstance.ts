import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance',
    'post'
  >;
}

/**
 * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance']['body'],
  params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/createInstance',
    paramDefs: [
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplate-id1', in: 'path' },
    ],
    params,
    body,
  };
}
