import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport': Operation<
    '/deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport',
    paramDefs: [],
    params,
    body,
  };
}
