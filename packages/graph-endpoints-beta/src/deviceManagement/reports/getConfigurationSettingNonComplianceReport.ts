import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport': Operation<
    '/deviceManagement/reports/getConfigurationSettingNonComplianceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationSettingNonComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
