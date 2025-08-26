import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getEncryptionReportForDevices': Operation<
    '/deviceManagement/reports/getEncryptionReportForDevices',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getEncryptionReportForDevices`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getEncryptionReportForDevices']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getEncryptionReportForDevices']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getEncryptionReportForDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getEncryptionReportForDevices',
    paramDefs: [],
    params,
    body,
  };
}
