import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/retrieveSecurityTaskAppsReport': Operation<
    '/deviceManagement/reports/retrieveSecurityTaskAppsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/retrieveSecurityTaskAppsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/retrieveSecurityTaskAppsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/retrieveSecurityTaskAppsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/retrieveSecurityTaskAppsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/retrieveSecurityTaskAppsReport',
    paramDefs: [],
    params,
    body,
  };
}
