import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getFailedMobileAppsReport': Operation<
    '/deviceManagement/reports/getFailedMobileAppsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getFailedMobileAppsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getFailedMobileAppsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getFailedMobileAppsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getFailedMobileAppsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getFailedMobileAppsReport',
    paramDefs: [],
    params,
    body,
  };
}
