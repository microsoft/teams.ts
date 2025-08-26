export * as applePushNotificationCertificate from './applePushNotificationCertificate';
export * as auditEvents from './auditEvents';
export * as complianceManagementPartners from './complianceManagementPartners';
export * as conditionalAccessSettings from './conditionalAccessSettings';
export * as detectedApps from './detectedApps';
export * as deviceCategories from './deviceCategories';
export * as deviceCompliancePolicies from './deviceCompliancePolicies';
export * as deviceCompliancePolicyDeviceStateSummary from './deviceCompliancePolicyDeviceStateSummary';
export * as deviceCompliancePolicySettingStateSummaries from './deviceCompliancePolicySettingStateSummaries';
export * as deviceConfigurationDeviceStateSummaries from './deviceConfigurationDeviceStateSummaries';
export * as deviceConfigurations from './deviceConfigurations';
export * as deviceEnrollmentConfigurations from './deviceEnrollmentConfigurations';
export * as deviceManagementPartners from './deviceManagementPartners';
export * as exchangeConnectors from './exchangeConnectors';
export * as importedWindowsAutopilotDeviceIdentities from './importedWindowsAutopilotDeviceIdentities';
export * as iosUpdateStatuses from './iosUpdateStatuses';
export * as managedDeviceOverview from './managedDeviceOverview';
export * as managedDevices from './managedDevices';
export * as mobileAppTroubleshootingEvents from './mobileAppTroubleshootingEvents';
export * as mobileThreatDefenseConnectors from './mobileThreatDefenseConnectors';
export * as notificationMessageTemplates from './notificationMessageTemplates';
export * as remoteAssistancePartners from './remoteAssistancePartners';
export * as reports from './reports';
export * as resourceOperations from './resourceOperations';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as softwareUpdateStatusSummary from './softwareUpdateStatusSummary';
export * as telecomExpenseManagementPartners from './telecomExpenseManagementPartners';
export * as termsAndConditions from './termsAndConditions';
export * as troubleshootingEvents from './troubleshootingEvents';
export * as userExperienceAnalyticsAppHealthApplicationPerformance from './userExperienceAnalyticsAppHealthApplicationPerformance';
export * as userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails from './userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails';
export * as userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId from './userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId';
export * as userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion from './userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion';
export * as userExperienceAnalyticsAppHealthDeviceModelPerformance from './userExperienceAnalyticsAppHealthDeviceModelPerformance';
export * as userExperienceAnalyticsAppHealthDevicePerformance from './userExperienceAnalyticsAppHealthDevicePerformance';
export * as userExperienceAnalyticsAppHealthDevicePerformanceDetails from './userExperienceAnalyticsAppHealthDevicePerformanceDetails';
export * as userExperienceAnalyticsAppHealthOSVersionPerformance from './userExperienceAnalyticsAppHealthOSVersionPerformance';
export * as userExperienceAnalyticsAppHealthOverview from './userExperienceAnalyticsAppHealthOverview';
export * as userExperienceAnalyticsBaselines from './userExperienceAnalyticsBaselines';
export * as userExperienceAnalyticsCategories from './userExperienceAnalyticsCategories';
export * as userExperienceAnalyticsDevicePerformance from './userExperienceAnalyticsDevicePerformance';
export * as userExperienceAnalyticsDeviceScores from './userExperienceAnalyticsDeviceScores';
export * as userExperienceAnalyticsDeviceStartupHistory from './userExperienceAnalyticsDeviceStartupHistory';
export * as userExperienceAnalyticsDeviceStartupProcessPerformance from './userExperienceAnalyticsDeviceStartupProcessPerformance';
export * as userExperienceAnalyticsDeviceStartupProcesses from './userExperienceAnalyticsDeviceStartupProcesses';
export * as userExperienceAnalyticsMetricHistory from './userExperienceAnalyticsMetricHistory';
export * as userExperienceAnalyticsModelScores from './userExperienceAnalyticsModelScores';
export * as userExperienceAnalyticsOverview from './userExperienceAnalyticsOverview';
export * as userExperienceAnalyticsScoreHistory from './userExperienceAnalyticsScoreHistory';
export * as userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric from './userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric';
export * as userExperienceAnalyticsWorkFromAnywhereMetrics from './userExperienceAnalyticsWorkFromAnywhereMetrics';
export * as userExperienceAnalyticsWorkFromAnywhereModelPerformance from './userExperienceAnalyticsWorkFromAnywhereModelPerformance';
export * as virtualEndpoint from './virtualEndpoint';
export * as windowsAutopilotDeviceIdentities from './windowsAutopilotDeviceIdentities';
export * as windowsInformationProtectionAppLearningSummaries from './windowsInformationProtectionAppLearningSummaries';
export * as windowsInformationProtectionNetworkLearningSummaries from './windowsInformationProtectionNetworkLearningSummaries';
export * as windowsMalwareInformation from './windowsMalwareInformation';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement': Operation<'/deviceManagement', 'get'>;
  'PATCH /deviceManagement': Operation<'/deviceManagement', 'patch'>;
}

/**
 * `GET /deviceManagement`
 *
 * Read properties and relationships of the deviceManagement object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement`
 *
 * Update the properties of a deviceManagement object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement']['body'],
  params?: IEndpoints['PATCH /deviceManagement']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement']['response']> {
  return {
    method: 'patch',
    path: '/deviceManagement',
    paramDefs: [],
    params,
    body,
  };
}
