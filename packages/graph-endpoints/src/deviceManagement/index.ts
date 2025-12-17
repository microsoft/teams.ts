export * as detectedApps from './detectedApps';
export * as deviceCompliancePolicies from './deviceCompliancePolicies';
export * as deviceCompliancePolicySettingStateSummaries from './deviceCompliancePolicySettingStateSummaries';
export * as deviceConfigurations from './deviceConfigurations';
export * as deviceEnrollmentConfigurations from './deviceEnrollmentConfigurations';
export * as deviceManagementPartners from './deviceManagementPartners';
export * as exchangeConnectors from './exchangeConnectors';
export * as importedWindowsAutopilotDeviceIdentities from './importedWindowsAutopilotDeviceIdentities';
export * as managedDevices from './managedDevices';
export * as mobileAppTroubleshootingEvents from './mobileAppTroubleshootingEvents';
export * as notificationMessageTemplates from './notificationMessageTemplates';
export * as remoteAssistancePartners from './remoteAssistancePartners';
export * as reports from './reports';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as termsAndConditions from './termsAndConditions';
export * as userExperienceAnalyticsAppHealthOverview from './userExperienceAnalyticsAppHealthOverview';
export * as userExperienceAnalyticsBaselines from './userExperienceAnalyticsBaselines';
export * as userExperienceAnalyticsCategories from './userExperienceAnalyticsCategories';
export * as userExperienceAnalyticsWorkFromAnywhereMetrics from './userExperienceAnalyticsWorkFromAnywhereMetrics';
export * as virtualEndpoint from './virtualEndpoint';
export * as windowsAutopilotDeviceIdentities from './windowsAutopilotDeviceIdentities';
export * as windowsMalwareInformation from './windowsMalwareInformation';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement': Operation<'/deviceManagement', 'get'>;
  'PATCH /deviceManagement': Operation<'/deviceManagement', 'patch'>;
  'GET /deviceManagement/applePushNotificationCertificate': Operation<
    '/deviceManagement/applePushNotificationCertificate',
    'get'
  >;
  'PATCH /deviceManagement/applePushNotificationCertificate': Operation<
    '/deviceManagement/applePushNotificationCertificate',
    'patch'
  >;
  'DELETE /deviceManagement/applePushNotificationCertificate': Operation<
    '/deviceManagement/applePushNotificationCertificate',
    'delete'
  >;
  'GET /deviceManagement/auditEvents': Operation<'/deviceManagement/auditEvents', 'get'>;
  'POST /deviceManagement/auditEvents': Operation<'/deviceManagement/auditEvents', 'post'>;
  'GET /deviceManagement/auditEvents/{auditEvent-id}': Operation<
    '/deviceManagement/auditEvents/{auditEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/auditEvents/{auditEvent-id}': Operation<
    '/deviceManagement/auditEvents/{auditEvent-id}',
    'patch'
  >;
  'DELETE /deviceManagement/auditEvents/{auditEvent-id}': Operation<
    '/deviceManagement/auditEvents/{auditEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/complianceManagementPartners': Operation<
    '/deviceManagement/complianceManagementPartners',
    'get'
  >;
  'POST /deviceManagement/complianceManagementPartners': Operation<
    '/deviceManagement/complianceManagementPartners',
    'post'
  >;
  'GET /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}': Operation<
    '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
    'get'
  >;
  'PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}': Operation<
    '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
    'patch'
  >;
  'DELETE /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}': Operation<
    '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
    'delete'
  >;
  'GET /deviceManagement/conditionalAccessSettings': Operation<
    '/deviceManagement/conditionalAccessSettings',
    'get'
  >;
  'PATCH /deviceManagement/conditionalAccessSettings': Operation<
    '/deviceManagement/conditionalAccessSettings',
    'patch'
  >;
  'DELETE /deviceManagement/conditionalAccessSettings': Operation<
    '/deviceManagement/conditionalAccessSettings',
    'delete'
  >;
  'GET /deviceManagement/deviceCategories': Operation<'/deviceManagement/deviceCategories', 'get'>;
  'POST /deviceManagement/deviceCategories': Operation<
    '/deviceManagement/deviceCategories',
    'post'
  >;
  'GET /deviceManagement/deviceCategories/{deviceCategory-id}': Operation<
    '/deviceManagement/deviceCategories/{deviceCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCategories/{deviceCategory-id}': Operation<
    '/deviceManagement/deviceCategories/{deviceCategory-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceCategories/{deviceCategory-id}': Operation<
    '/deviceManagement/deviceCategories/{deviceCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicyDeviceStateSummary': Operation<
    '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary': Operation<
    '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
    'patch'
  >;
  'DELETE /deviceManagement/deviceCompliancePolicyDeviceStateSummary': Operation<
    '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurationDeviceStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationDeviceStateSummaries',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationDeviceStateSummaries',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurationDeviceStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationDeviceStateSummaries',
    'delete'
  >;
  'GET /deviceManagement/iosUpdateStatuses': Operation<
    '/deviceManagement/iosUpdateStatuses',
    'get'
  >;
  'POST /deviceManagement/iosUpdateStatuses': Operation<
    '/deviceManagement/iosUpdateStatuses',
    'post'
  >;
  'GET /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}': Operation<
    '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}': Operation<
    '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
    'patch'
  >;
  'DELETE /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}': Operation<
    '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDeviceOverview': Operation<
    '/deviceManagement/managedDeviceOverview',
    'get'
  >;
  'GET /deviceManagement/mobileThreatDefenseConnectors': Operation<
    '/deviceManagement/mobileThreatDefenseConnectors',
    'get'
  >;
  'POST /deviceManagement/mobileThreatDefenseConnectors': Operation<
    '/deviceManagement/mobileThreatDefenseConnectors',
    'post'
  >;
  'GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}': Operation<
    '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
    'get'
  >;
  'PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}': Operation<
    '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
    'patch'
  >;
  'DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}': Operation<
    '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
    'delete'
  >;
  'GET /deviceManagement/resourceOperations': Operation<
    '/deviceManagement/resourceOperations',
    'get'
  >;
  'POST /deviceManagement/resourceOperations': Operation<
    '/deviceManagement/resourceOperations',
    'post'
  >;
  'GET /deviceManagement/resourceOperations/{resourceOperation-id}': Operation<
    '/deviceManagement/resourceOperations/{resourceOperation-id}',
    'get'
  >;
  'PATCH /deviceManagement/resourceOperations/{resourceOperation-id}': Operation<
    '/deviceManagement/resourceOperations/{resourceOperation-id}',
    'patch'
  >;
  'DELETE /deviceManagement/resourceOperations/{resourceOperation-id}': Operation<
    '/deviceManagement/resourceOperations/{resourceOperation-id}',
    'delete'
  >;
  'GET /deviceManagement/softwareUpdateStatusSummary': Operation<
    '/deviceManagement/softwareUpdateStatusSummary',
    'get'
  >;
  'GET /deviceManagement/troubleshootingEvents': Operation<
    '/deviceManagement/troubleshootingEvents',
    'get'
  >;
  'POST /deviceManagement/troubleshootingEvents': Operation<
    '/deviceManagement/troubleshootingEvents',
    'post'
  >;
  'GET /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'patch'
  >;
  'DELETE /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDevicePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsDevicePerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDevicePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsDevicePerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceScores': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScores',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDeviceScores': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScores',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceStartupHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupHistory',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDeviceStartupHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupHistory',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsMetricHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsMetricHistory',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsMetricHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsMetricHistory',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsModelScores': Operation<
    '/deviceManagement/userExperienceAnalyticsModelScores',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsModelScores': Operation<
    '/deviceManagement/userExperienceAnalyticsModelScores',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsOverview',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsOverview',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsOverview',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsScoreHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsScoreHistory',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsScoreHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsScoreHistory',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsInformationProtectionAppLearningSummaries': Operation<
    '/deviceManagement/windowsInformationProtectionAppLearningSummaries',
    'get'
  >;
  'POST /deviceManagement/windowsInformationProtectionAppLearningSummaries': Operation<
    '/deviceManagement/windowsInformationProtectionAppLearningSummaries',
    'post'
  >;
  'GET /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
    'patch'
  >;
  'DELETE /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries': Operation<
    '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries',
    'get'
  >;
  'POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries': Operation<
    '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries',
    'post'
  >;
  'GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
    'patch'
  >;
  'DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}': Operation<
    '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
    'delete'
  >;
}

/**
 * `GET /deviceManagement`
 *
 */
export function get(
  params?: IEndpoints['GET /deviceManagement']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement']['response']> {
  return {
    method: 'patch',
    path: '/deviceManagement',
    body,
  };
}

export const applePushNotificationCertificate = {
  /**
   * `GET /deviceManagement/applePushNotificationCertificate`
   *
   * Apple push notification certificate.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/applePushNotificationCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/applePushNotificationCertificate']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/applePushNotificationCertificate',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/applePushNotificationCertificate`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/applePushNotificationCertificate']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/applePushNotificationCertificate']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/applePushNotificationCertificate',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/applePushNotificationCertificate`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/applePushNotificationCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/applePushNotificationCertificate']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/applePushNotificationCertificate',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const auditEvents = {
  /**
   * `GET /deviceManagement/auditEvents`
   *
   * The Audit Events
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/auditEvents']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/auditEvents']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/auditEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/auditEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/auditEvents']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/auditEvents']['response']> {
    return {
      method: 'post',
      path: '/deviceManagement/auditEvents',
      body,
    };
  },
  /**
   * `GET /deviceManagement/auditEvents/{auditEvent-id}`
   *
   * The Audit Events
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/auditEvents/{auditEvent-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/auditEvents/{auditEvent-id}']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/auditEvents/{auditEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['auditEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/auditEvents/{auditEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/auditEvents/{auditEvent-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/auditEvents/{auditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/auditEvents/{auditEvent-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/auditEvents/{auditEvent-id}',
      paramDefs: {
        path: ['auditEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/auditEvents/{auditEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/auditEvents/{auditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/auditEvents/{auditEvent-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/auditEvents/{auditEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['auditEvent-id'],
      },
      params,
    };
  },
};

export const complianceManagementPartners = {
  /**
   * `GET /deviceManagement/complianceManagementPartners`
   *
   * The list of Compliance Management Partners configured by the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/complianceManagementPartners']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/complianceManagementPartners']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/complianceManagementPartners',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/complianceManagementPartners`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/complianceManagementPartners']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/complianceManagementPartners']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/complianceManagementPartners',
      body,
    };
  },
  /**
   * `GET /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}`
   *
   * The list of Compliance Management Partners configured by the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['complianceManagementPartner-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
      paramDefs: {
        path: ['complianceManagementPartner-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['complianceManagementPartner-id'],
      },
      params,
    };
  },
};

export const conditionalAccessSettings = {
  /**
   * `GET /deviceManagement/conditionalAccessSettings`
   *
   * The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/conditionalAccessSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/conditionalAccessSettings']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/conditionalAccessSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/conditionalAccessSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/conditionalAccessSettings']['body']
  ): EndpointRequest<IEndpoints['PATCH /deviceManagement/conditionalAccessSettings']['response']> {
    return {
      method: 'patch',
      path: '/deviceManagement/conditionalAccessSettings',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/conditionalAccessSettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/conditionalAccessSettings']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /deviceManagement/conditionalAccessSettings']['response']> {
    return {
      method: 'delete',
      path: '/deviceManagement/conditionalAccessSettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const deviceCategories = {
  /**
   * `GET /deviceManagement/deviceCategories`
   *
   * The list of device categories with the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceCategories']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/deviceCategories']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceCategories`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceCategories']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/deviceCategories']['response']> {
    return {
      method: 'post',
      path: '/deviceManagement/deviceCategories',
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceCategories/{deviceCategory-id}`
   *
   * The list of device categories with the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCategories/{deviceCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCategories/{deviceCategory-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCategories/{deviceCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceCategory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceCategories/{deviceCategory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceCategories/{deviceCategory-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceCategories/{deviceCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceCategories/{deviceCategory-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceCategories/{deviceCategory-id}',
      paramDefs: {
        path: ['deviceCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceCategories/{deviceCategory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceCategories/{deviceCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceCategories/{deviceCategory-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceCategories/{deviceCategory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceCategory-id'],
      },
      params,
    };
  },
};

export const deviceCompliancePolicyDeviceStateSummary = {
  /**
   * `GET /deviceManagement/deviceCompliancePolicyDeviceStateSummary`
   *
   * The device compliance state summary for this account.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceCompliancePolicyDeviceStateSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceCompliancePolicyDeviceStateSummary']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const deviceConfigurationDeviceStateSummaries = {
  /**
   * `GET /deviceManagement/deviceConfigurationDeviceStateSummaries`
   *
   * The device configuration device state summary for this account.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurationDeviceStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurationDeviceStateSummaries']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceConfigurationDeviceStateSummaries',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceConfigurationDeviceStateSummaries',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurationDeviceStateSummaries`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurationDeviceStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurationDeviceStateSummaries']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceConfigurationDeviceStateSummaries',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const iosUpdateStatuses = {
  /**
   * `GET /deviceManagement/iosUpdateStatuses`
   *
   * The IOS software update installation statuses for this account.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/iosUpdateStatuses']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/iosUpdateStatuses']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/iosUpdateStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/iosUpdateStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/iosUpdateStatuses']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/iosUpdateStatuses']['response']> {
    return {
      method: 'post',
      path: '/deviceManagement/iosUpdateStatuses',
      body,
    };
  },
  /**
   * `GET /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}`
   *
   * The IOS software update installation statuses for this account.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['iosUpdateDeviceStatus-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
      paramDefs: {
        path: ['iosUpdateDeviceStatus-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['iosUpdateDeviceStatus-id'],
      },
      params,
    };
  },
};

export const managedDeviceOverview = {
  /**
   * `GET /deviceManagement/managedDeviceOverview`
   *
   * Device overview
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDeviceOverview']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/managedDeviceOverview']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/managedDeviceOverview',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
};

export const mobileThreatDefenseConnectors = {
  /**
   * `GET /deviceManagement/mobileThreatDefenseConnectors`
   *
   * The list of Mobile threat Defense connectors configured by the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/mobileThreatDefenseConnectors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/mobileThreatDefenseConnectors`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/mobileThreatDefenseConnectors']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/mobileThreatDefenseConnectors']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/mobileThreatDefenseConnectors',
      body,
    };
  },
  /**
   * `GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}`
   *
   * The list of Mobile threat Defense connectors configured by the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mobileThreatDefenseConnector-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
      paramDefs: {
        path: ['mobileThreatDefenseConnector-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mobileThreatDefenseConnector-id'],
      },
      params,
    };
  },
};

export const resourceOperations = {
  /**
   * `GET /deviceManagement/resourceOperations`
   *
   * The Resource Operations.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/resourceOperations']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/resourceOperations']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/resourceOperations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/resourceOperations`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/resourceOperations']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/resourceOperations']['response']> {
    return {
      method: 'post',
      path: '/deviceManagement/resourceOperations',
      body,
    };
  },
  /**
   * `GET /deviceManagement/resourceOperations/{resourceOperation-id}`
   *
   * The Resource Operations.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/resourceOperations/{resourceOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/resourceOperations/{resourceOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/resourceOperations/{resourceOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['resourceOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/resourceOperations/{resourceOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/resourceOperations/{resourceOperation-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/resourceOperations/{resourceOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/resourceOperations/{resourceOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/resourceOperations/{resourceOperation-id}',
      paramDefs: {
        path: ['resourceOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/resourceOperations/{resourceOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/resourceOperations/{resourceOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/resourceOperations/{resourceOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/resourceOperations/{resourceOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['resourceOperation-id'],
      },
      params,
    };
  },
};

export const softwareUpdateStatusSummary = {
  /**
   * `GET /deviceManagement/softwareUpdateStatusSummary`
   *
   * The software update status summary.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/softwareUpdateStatusSummary']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/softwareUpdateStatusSummary']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/softwareUpdateStatusSummary',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
};

export const troubleshootingEvents = {
  /**
   * `GET /deviceManagement/troubleshootingEvents`
   *
   * The list of troubleshooting events for the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/troubleshootingEvents']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/troubleshootingEvents']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/troubleshootingEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/troubleshootingEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/troubleshootingEvents']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/troubleshootingEvents']['response']> {
    return {
      method: 'post',
      path: '/deviceManagement/troubleshootingEvents',
      body,
    };
  },
  /**
   * `GET /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
   *
   * The list of troubleshooting events for the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementTroubleshootingEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
      paramDefs: {
        path: ['deviceManagementTroubleshootingEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/troubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementTroubleshootingEvent-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsAppHealthApplicationPerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance`
   *
   * User experience analytics appHealth Application Performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}`
   *
   * User experience analytics appHealth Application Performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAppHealthApplicationPerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAppHealthApplicationPerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformance/{userExperienceAnalyticsAppHealthApplicationPerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAppHealthApplicationPerformance-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails`
   *
   * User experience analytics appHealth Application Performance by App Version details
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}`
   *
   * User experience analytics appHealth Application Performance by App Version details
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId`
   *
   * User experience analytics appHealth Application Performance by App Version Device Id
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}`
   *
   * User experience analytics appHealth Application Performance by App Version Device Id
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion`
   *
   * User experience analytics appHealth Application Performance by OS Version
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}`
   *
   * User experience analytics appHealth Application Performance by OS Version
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion/{userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByOSVersion-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsAppHealthDeviceModelPerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance`
   *
   * User experience analytics appHealth Model Performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}`
   *
   * User experience analytics appHealth Model Performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAppHealthDeviceModelPerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAppHealthDeviceModelPerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDeviceModelPerformance/{userExperienceAnalyticsAppHealthDeviceModelPerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAppHealthDeviceModelPerformance-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsAppHealthDevicePerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance`
   *
   * User experience analytics appHealth Device Performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}`
   *
   * User experience analytics appHealth Device Performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAppHealthDevicePerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAppHealthDevicePerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformance/{userExperienceAnalyticsAppHealthDevicePerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAppHealthDevicePerformance-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsAppHealthDevicePerformanceDetails = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails`
   *
   * User experience analytics device performance details
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}`
   *
   * User experience analytics device performance details
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAppHealthDevicePerformanceDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAppHealthDevicePerformanceDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthDevicePerformanceDetails/{userExperienceAnalyticsAppHealthDevicePerformanceDetails-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAppHealthDevicePerformanceDetails-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsAppHealthOSVersionPerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance`
   *
   * User experience analytics appHealth OS version Performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}`
   *
   * User experience analytics appHealth OS version Performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAppHealthOSVersionPerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAppHealthOSVersionPerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthOSVersionPerformance/{userExperienceAnalyticsAppHealthOSVersionPerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAppHealthOSVersionPerformance-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsDevicePerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDevicePerformance`
   *
   * User experience analytics device performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDevicePerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDevicePerformance']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDevicePerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsDevicePerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDevicePerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsDevicePerformance']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsDevicePerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}`
   *
   * User experience analytics device performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsDevicePerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsDevicePerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsDevicePerformance/{userExperienceAnalyticsDevicePerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsDevicePerformance-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsDeviceScores = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceScores`
   *
   * User experience analytics device scores
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScores']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScores']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceScores',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsDeviceScores`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScores']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceScores']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsDeviceScores',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}`
   *
   * User experience analytics device scores
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsDeviceScores-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsDeviceScores-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsDeviceScores/{userExperienceAnalyticsDeviceScores-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsDeviceScores-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsDeviceStartupHistory = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceStartupHistory`
   *
   * User experience analytics device Startup History
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupHistory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupHistory']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupHistory',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsDeviceStartupHistory`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceStartupHistory']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceStartupHistory']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupHistory',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}`
   *
   * User experience analytics device Startup History
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsDeviceStartupHistory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsDeviceStartupHistory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupHistory/{userExperienceAnalyticsDeviceStartupHistory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsDeviceStartupHistory-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsDeviceStartupProcessPerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance`
   *
   * User experience analytics device Startup Process Performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}`
   *
   * User experience analytics device Startup Process Performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsDeviceStartupProcessPerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsDeviceStartupProcessPerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcessPerformance/{userExperienceAnalyticsDeviceStartupProcessPerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsDeviceStartupProcessPerformance-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsDeviceStartupProcesses = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses`
   *
   * User experience analytics device Startup Processes
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}`
   *
   * User experience analytics device Startup Processes
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsDeviceStartupProcess-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsDeviceStartupProcess-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsDeviceStartupProcesses/{userExperienceAnalyticsDeviceStartupProcess-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsDeviceStartupProcess-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsMetricHistory = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsMetricHistory`
   *
   * User experience analytics metric history
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsMetricHistory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsMetricHistory']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsMetricHistory',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsMetricHistory`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsMetricHistory']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsMetricHistory']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsMetricHistory',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}`
   *
   * User experience analytics metric history
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsMetricHistory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsMetricHistory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsMetricHistory-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsModelScores = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsModelScores`
   *
   * User experience analytics model scores
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsModelScores']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsModelScores']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsModelScores',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsModelScores`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsModelScores']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsModelScores']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsModelScores',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}`
   *
   * User experience analytics model scores
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsModelScores-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsModelScores-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsModelScores-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsOverview = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsOverview`
   *
   * User experience analytics overview
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsOverview']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsOverview',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsOverview`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsOverview']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsOverview']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsOverview',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsOverview`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsOverview']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsOverview',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsScoreHistory = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsScoreHistory`
   *
   * User experience analytics device Startup Score History
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsScoreHistory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsScoreHistory']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsScoreHistory',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsScoreHistory`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsScoreHistory']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsScoreHistory']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsScoreHistory',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}`
   *
   * User experience analytics device Startup Score History
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsScoreHistory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsScoreHistory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsScoreHistory-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric`
   *
   * User experience analytics work from anywhere hardware readiness metrics.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsWorkFromAnywhereModelPerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance`
   *
   * The user experience analytics work from anywhere model performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}`
   *
   * The user experience analytics work from anywhere model performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsWorkFromAnywhereModelPerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsWorkFromAnywhereModelPerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsWorkFromAnywhereModelPerformance/{userExperienceAnalyticsWorkFromAnywhereModelPerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsWorkFromAnywhereModelPerformance-id'],
      },
      params,
    };
  },
};

export const windowsInformationProtectionAppLearningSummaries = {
  /**
   * `GET /deviceManagement/windowsInformationProtectionAppLearningSummaries`
   *
   * The windows information protection app learning summaries.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/windowsInformationProtectionAppLearningSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsInformationProtectionAppLearningSummaries']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/windowsInformationProtectionAppLearningSummaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/windowsInformationProtectionAppLearningSummaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsInformationProtectionAppLearningSummaries']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsInformationProtectionAppLearningSummaries']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/windowsInformationProtectionAppLearningSummaries',
      body,
    };
  },
  /**
   * `GET /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}`
   *
   * The windows information protection app learning summaries.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsInformationProtectionAppLearningSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
      paramDefs: {
        path: ['windowsInformationProtectionAppLearningSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsInformationProtectionAppLearningSummary-id'],
      },
      params,
    };
  },
};

export const windowsInformationProtectionNetworkLearningSummaries = {
  /**
   * `GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries`
   *
   * The windows information protection network learning summaries.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsInformationProtectionNetworkLearningSummaries']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries',
      body,
    };
  },
  /**
   * `GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}`
   *
   * The windows information protection network learning summaries.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsInformationProtectionNetworkLearningSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
      paramDefs: {
        path: ['windowsInformationProtectionNetworkLearningSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsInformationProtectionNetworkLearningSummary-id'],
      },
      params,
    };
  },
};
