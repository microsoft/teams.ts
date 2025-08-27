import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/cloudApps/publish': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/publish',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudApps/publish`
 *
 * Publish a cloudPcCloudApp object to make it available to end users through their portal, such as the Windows App.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/publish']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/publish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudApps/publish',
    paramDefs: [],
    params,
    body,
  };
}
