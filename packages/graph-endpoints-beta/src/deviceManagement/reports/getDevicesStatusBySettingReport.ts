import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDevicesStatusBySettingReport': Operation<
    '/deviceManagement/reports/getDevicesStatusBySettingReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDevicesStatusBySettingReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDevicesStatusBySettingReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDevicesStatusBySettingReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDevicesStatusBySettingReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDevicesStatusBySettingReport',
    paramDefs: [],
    params,
    body,
  };
}
