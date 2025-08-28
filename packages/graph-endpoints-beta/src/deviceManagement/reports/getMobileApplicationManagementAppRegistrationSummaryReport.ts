import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport': Operation<
    '/deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
