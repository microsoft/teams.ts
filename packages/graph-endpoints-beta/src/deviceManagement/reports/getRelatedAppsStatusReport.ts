import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getRelatedAppsStatusReport': Operation<
    '/deviceManagement/reports/getRelatedAppsStatusReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getRelatedAppsStatusReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getRelatedAppsStatusReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getRelatedAppsStatusReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getRelatedAppsStatusReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getRelatedAppsStatusReport',
    paramDefs: [],
    params,
    body,
  };
}
