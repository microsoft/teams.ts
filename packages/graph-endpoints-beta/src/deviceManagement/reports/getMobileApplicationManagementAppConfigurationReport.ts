import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport': Operation<
    '/deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport',
    paramDefs: [],
    params,
    body,
  };
}
