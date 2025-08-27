import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/cloudApps/unpublish': Operation<
    '/deviceManagement/virtualEndpoint/cloudApps/unpublish',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudApps/unpublish`
 *
 * Unpublish a cloudPcCloudApp to remove it from the end-user portal, for example, the Windows App. When a cloud app is unpublished, any changes made to its app details are reverted and reset to the values of the discovered app it&#x27;s linked to.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/unpublish']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/unpublish']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/cloudApps/unpublish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudApps/unpublish',
    paramDefs: [],
    params,
    body,
  };
}
