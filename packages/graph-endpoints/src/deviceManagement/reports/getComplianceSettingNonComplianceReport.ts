import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getComplianceSettingNonComplianceReport': Operation<
    '/deviceManagement/reports/getComplianceSettingNonComplianceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getComplianceSettingNonComplianceReport`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getComplianceSettingNonComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getComplianceSettingNonComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getComplianceSettingNonComplianceReport']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/reports/getComplianceSettingNonComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
