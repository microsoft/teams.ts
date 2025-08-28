import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getComplianceSettingsReport': Operation<
    '/deviceManagement/reports/getComplianceSettingsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getComplianceSettingsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getComplianceSettingsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getComplianceSettingsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getComplianceSettingsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getComplianceSettingsReport',
    paramDefs: [],
    params,
    body,
  };
}
