import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getComplianceSettingDetailsReport': Operation<
    '/deviceManagement/reports/getComplianceSettingDetailsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getComplianceSettingDetailsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getComplianceSettingDetailsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getComplianceSettingDetailsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getComplianceSettingDetailsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getComplianceSettingDetailsReport',
    paramDefs: [],
    params,
    body,
  };
}
