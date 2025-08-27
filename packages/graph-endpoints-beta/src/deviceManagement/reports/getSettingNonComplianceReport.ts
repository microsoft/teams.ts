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
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getSettingNonComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getSettingNonComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getSettingNonComplianceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getSettingNonComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
