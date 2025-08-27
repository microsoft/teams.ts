import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getConfigurationSettingsReport': Operation<
    '/deviceManagement/reports/getConfigurationSettingsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getConfigurationSettingsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationSettingsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationSettingsReport',
    paramDefs: [],
    params,
    body,
  };
}
