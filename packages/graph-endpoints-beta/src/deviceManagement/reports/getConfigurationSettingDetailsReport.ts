import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getConfigurationSettingDetailsReport': Operation<
    '/deviceManagement/reports/getConfigurationSettingDetailsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getConfigurationSettingDetailsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingDetailsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingDetailsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationSettingDetailsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationSettingDetailsReport',
    paramDefs: [],
    params,
    body,
  };
}
