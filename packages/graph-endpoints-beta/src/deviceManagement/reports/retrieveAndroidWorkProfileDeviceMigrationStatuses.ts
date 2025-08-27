import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses': Operation<
    '/deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses',
    paramDefs: [],
    params,
    body,
  };
}
