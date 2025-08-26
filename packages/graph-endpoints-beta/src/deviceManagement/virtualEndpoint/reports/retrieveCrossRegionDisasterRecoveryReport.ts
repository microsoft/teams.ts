import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport`
 *
 * Retrieve the Windows 365 cross-region disaster recovery report, including cloudPcId, userId, deviceId, cloudPCDeviceDisplayName, userPrincipalName, enabledDRType, disasterRecoveryStatus, licenseType, drHealthStatus, currentRestorePointDateTime, backupCloudPcStatus, and activationExpirationDateTime.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport',
    paramDefs: [],
    params,
    body,
  };
}
