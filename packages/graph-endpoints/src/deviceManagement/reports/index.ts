export * as exportJobs from './exportJobs';
export * as getCachedReport from './getCachedReport';
export * as getCompliancePolicyNonComplianceReport from './getCompliancePolicyNonComplianceReport';
export * as getCompliancePolicyNonComplianceSummaryReport from './getCompliancePolicyNonComplianceSummaryReport';
export * as getComplianceSettingNonComplianceReport from './getComplianceSettingNonComplianceReport';
export * as getConfigurationPolicyNonComplianceReport from './getConfigurationPolicyNonComplianceReport';
export * as getConfigurationPolicyNonComplianceSummaryReport from './getConfigurationPolicyNonComplianceSummaryReport';
export * as getConfigurationSettingNonComplianceReport from './getConfigurationSettingNonComplianceReport';
export * as getDeviceManagementIntentPerSettingContributingProfiles from './getDeviceManagementIntentPerSettingContributingProfiles';
export * as getDeviceManagementIntentSettingsReport from './getDeviceManagementIntentSettingsReport';
export * as getDeviceNonComplianceReport from './getDeviceNonComplianceReport';
export * as getDevicesWithoutCompliancePolicyReport from './getDevicesWithoutCompliancePolicyReport';
export * as getHistoricalReport from './getHistoricalReport';
export * as getNoncompliantDevicesAndSettingsReport from './getNoncompliantDevicesAndSettingsReport';
export * as getPolicyNonComplianceMetadata from './getPolicyNonComplianceMetadata';
export * as getPolicyNonComplianceReport from './getPolicyNonComplianceReport';
export * as getPolicyNonComplianceSummaryReport from './getPolicyNonComplianceSummaryReport';
export * as getReportFilters from './getReportFilters';
export * as getSettingNonComplianceReport from './getSettingNonComplianceReport';
export * as retrieveDeviceAppInstallationStatusReport from './retrieveDeviceAppInstallationStatusReport';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/reports': Operation<'/deviceManagement/reports', 'delete'>;
  'GET /deviceManagement/reports': Operation<'/deviceManagement/reports', 'get'>;
  'PATCH /deviceManagement/reports': Operation<'/deviceManagement/reports', 'patch'>;
}

/**
 * `DELETE /deviceManagement/reports`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/reports']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/reports']['response']> {
  return {
    method: 'delete',
    path: '/deviceManagement/reports',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/reports`
 *
 * Read properties and relationships of the deviceManagementReports object.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/reports']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/reports']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/reports',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/reports`
 *
 * Update the properties of a deviceManagementReports object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/reports']['body'],
  params?: IEndpoints['PATCH /deviceManagement/reports']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/reports']['response']> {
  return {
    method: 'patch',
    path: '/deviceManagement/reports',
    paramDefs: [],
    params,
    body,
  };
}
