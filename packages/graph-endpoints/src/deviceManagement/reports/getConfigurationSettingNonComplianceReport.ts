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
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationSettingNonComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
