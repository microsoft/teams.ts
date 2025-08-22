import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getNoncompliantDevicesAndSettingsReport': Operation<
    '/deviceManagement/reports/getNoncompliantDevicesAndSettingsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getNoncompliantDevicesAndSettingsReport`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getNoncompliantDevicesAndSettingsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getNoncompliantDevicesAndSettingsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getNoncompliantDevicesAndSettingsReport']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/reports/getNoncompliantDevicesAndSettingsReport',
    paramDefs: [],
    params,
    body,
  };
}
