import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/cloudApps/reset': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/reset',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudApps/reset`
 *
 * Reset the app details of the cloudPcCloudApp object to the app details of the initially discovered app that this cloud app is mapped to. This action requires the Microsoft.CloudPC/CloudApps/Update permission.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/reset']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/reset']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/reset']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudApps/reset',
    paramDefs: [],
    params,
    body,
  };
}
