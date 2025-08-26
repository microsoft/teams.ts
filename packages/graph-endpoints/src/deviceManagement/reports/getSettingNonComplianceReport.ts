import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getSettingNonComplianceReport': Operation<
    '/deviceManagement/reports/getSettingNonComplianceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getSettingNonComplianceReport`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getSettingNonComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getSettingNonComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getSettingNonComplianceReport']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/reports/getSettingNonComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
