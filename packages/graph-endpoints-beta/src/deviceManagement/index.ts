export * as advancedThreatProtectionOnboardingStateSummary from './advancedThreatProtectionOnboardingStateSummary';
export * as androidDeviceOwnerEnrollmentProfiles from './androidDeviceOwnerEnrollmentProfiles';
export * as androidForWorkEnrollmentProfiles from './androidForWorkEnrollmentProfiles';
export * as androidForWorkSettings from './androidForWorkSettings';
export * as androidManagedStoreAccountEnterpriseSettings from './androidManagedStoreAccountEnterpriseSettings';
export * as applePushNotificationCertificate from './applePushNotificationCertificate';
export * as appleUserInitiatedEnrollmentProfiles from './appleUserInitiatedEnrollmentProfiles';
export * as assignmentFilters from './assignmentFilters';
export * as categories from './categories';
export * as certificateConnectorDetails from './certificateConnectorDetails';
export * as chromeOSOnboardingSettings from './chromeOSOnboardingSettings';
export * as cloudCertificationAuthority from './cloudCertificationAuthority';
export * as comanagedDevices from './comanagedDevices';
export * as compliancePolicies from './compliancePolicies';
export * as configurationPolicies from './configurationPolicies';
export * as configurationPolicyTemplates from './configurationPolicyTemplates';
export * as dataSharingConsents from './dataSharingConsents';
export * as depOnboardingSettings from './depOnboardingSettings';
export * as detectedApps from './detectedApps';
export * as deviceCompliancePolicies from './deviceCompliancePolicies';
export * as deviceCompliancePolicySettingStateSummaries from './deviceCompliancePolicySettingStateSummaries';
export * as deviceComplianceScripts from './deviceComplianceScripts';
export * as deviceConfigurations from './deviceConfigurations';
export * as deviceCustomAttributeShellScripts from './deviceCustomAttributeShellScripts';
export * as deviceEnrollmentConfigurations from './deviceEnrollmentConfigurations';
export * as deviceHealthScripts from './deviceHealthScripts';
export * as deviceManagementPartners from './deviceManagementPartners';
export * as deviceManagementScripts from './deviceManagementScripts';
export * as deviceShellScripts from './deviceShellScripts';
export * as elevationRequests from './elevationRequests';
export * as embeddedSIMActivationCodePools from './embeddedSIMActivationCodePools';
export * as exchangeConnectors from './exchangeConnectors';
export * as exchangeOnPremisesPolicies from './exchangeOnPremisesPolicies';
export * as exchangeOnPremisesPolicy from './exchangeOnPremisesPolicy';
export * as groupPolicyCategories from './groupPolicyCategories';
export * as groupPolicyConfigurations from './groupPolicyConfigurations';
export * as groupPolicyDefinitionFiles from './groupPolicyDefinitionFiles';
export * as groupPolicyDefinitions from './groupPolicyDefinitions';
export * as groupPolicyMigrationReports from './groupPolicyMigrationReports';
export * as groupPolicyUploadedDefinitionFiles from './groupPolicyUploadedDefinitionFiles';
export * as hardwareConfigurations from './hardwareConfigurations';
export * as importedDeviceIdentities from './importedDeviceIdentities';
export * as importedWindowsAutopilotDeviceIdentities from './importedWindowsAutopilotDeviceIdentities';
export * as intents from './intents';
export * as intuneBrandingProfiles from './intuneBrandingProfiles';
export * as macOSSoftwareUpdateAccountSummaries from './macOSSoftwareUpdateAccountSummaries';
export * as managedDevices from './managedDevices';
export * as microsoftTunnelServerLogCollectionResponses from './microsoftTunnelServerLogCollectionResponses';
export * as microsoftTunnelSites from './microsoftTunnelSites';
export * as mobileAppTroubleshootingEvents from './mobileAppTroubleshootingEvents';
export * as monitoring from './monitoring';
export * as notificationMessageTemplates from './notificationMessageTemplates';
export * as operationApprovalRequests from './operationApprovalRequests';
export * as remoteAssistancePartners from './remoteAssistancePartners';
export * as reports from './reports';
export * as resourceAccessProfiles from './resourceAccessProfiles';
export * as reusablePolicySettings from './reusablePolicySettings';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as roleScopeTags from './roleScopeTags';
export * as templateSettings from './templateSettings';
export * as templates from './templates';
export * as tenantAttachRBAC from './tenantAttachRBAC';
export * as termsAndConditions from './termsAndConditions';
export * as userExperienceAnalyticsAppHealthOverview from './userExperienceAnalyticsAppHealthOverview';
export * as userExperienceAnalyticsBaselines from './userExperienceAnalyticsBaselines';
export * as userExperienceAnalyticsCategories from './userExperienceAnalyticsCategories';
export * as userExperienceAnalyticsDeviceScope from './userExperienceAnalyticsDeviceScope';
export * as userExperienceAnalyticsDeviceScopes from './userExperienceAnalyticsDeviceScopes';
export * as userExperienceAnalyticsWorkFromAnywhereMetrics from './userExperienceAnalyticsWorkFromAnywhereMetrics';
export * as virtualEndpoint from './virtualEndpoint';
export * as windowsAutopilotDeploymentProfiles from './windowsAutopilotDeploymentProfiles';
export * as windowsAutopilotDeviceIdentities from './windowsAutopilotDeviceIdentities';
export * as windowsAutopilotSettings from './windowsAutopilotSettings';
export * as windowsDriverUpdateProfiles from './windowsDriverUpdateProfiles';
export * as windowsFeatureUpdateProfiles from './windowsFeatureUpdateProfiles';
export * as windowsMalwareInformation from './windowsMalwareInformation';
export * as windowsQualityUpdatePolicies from './windowsQualityUpdatePolicies';
export * as windowsQualityUpdateProfiles from './windowsQualityUpdateProfiles';
export * as zebraFotaConnector from './zebraFotaConnector';
export * as zebraFotaDeployments from './zebraFotaDeployments';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement': Operation<'/deviceManagement', 'get'>;
  'PATCH /deviceManagement': Operation<'/deviceManagement', 'patch'>;
  'GET /deviceManagement/androidForWorkAppConfigurationSchemas': Operation<
    '/deviceManagement/androidForWorkAppConfigurationSchemas',
    'get'
  >;
  'POST /deviceManagement/androidForWorkAppConfigurationSchemas': Operation<
    '/deviceManagement/androidForWorkAppConfigurationSchemas',
    'post'
  >;
  'GET /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
    'get'
  >;
  'PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
    'patch'
  >;
  'DELETE /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
    'delete'
  >;
  'GET /deviceManagement/androidManagedStoreAppConfigurationSchemas': Operation<
    '/deviceManagement/androidManagedStoreAppConfigurationSchemas',
    'get'
  >;
  'POST /deviceManagement/androidManagedStoreAppConfigurationSchemas': Operation<
    '/deviceManagement/androidManagedStoreAppConfigurationSchemas',
    'post'
  >;
  'GET /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
    'get'
  >;
  'PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
    'patch'
  >;
  'DELETE /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
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
  'GET /deviceManagement/autopilotEvents': Operation<'/deviceManagement/autopilotEvents', 'get'>;
  'POST /deviceManagement/autopilotEvents': Operation<'/deviceManagement/autopilotEvents', 'post'>;
  'GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}': Operation<
    '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}': Operation<
    '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
    'patch'
  >;
  'DELETE /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}': Operation<
    '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/cartToClassAssociations': Operation<
    '/deviceManagement/cartToClassAssociations',
    'get'
  >;
  'POST /deviceManagement/cartToClassAssociations': Operation<
    '/deviceManagement/cartToClassAssociations',
    'post'
  >;
  'GET /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}': Operation<
    '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
    'get'
  >;
  'PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}': Operation<
    '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
    'patch'
  >;
  'DELETE /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}': Operation<
    '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
    'delete'
  >;
  'GET /deviceManagement/cloudCertificationAuthorityLeafCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthorityLeafCertificate',
    'get'
  >;
  'POST /deviceManagement/cloudCertificationAuthorityLeafCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthorityLeafCertificate',
    'post'
  >;
  'GET /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}': Operation<
    '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    'get'
  >;
  'PATCH /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}': Operation<
    '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    'patch'
  >;
  'DELETE /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}': Operation<
    '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
    'delete'
  >;
  'GET /deviceManagement/cloudPCConnectivityIssues': Operation<
    '/deviceManagement/cloudPCConnectivityIssues',
    'get'
  >;
  'POST /deviceManagement/cloudPCConnectivityIssues': Operation<
    '/deviceManagement/cloudPCConnectivityIssues',
    'post'
  >;
  'GET /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}': Operation<
    '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
    'get'
  >;
  'PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}': Operation<
    '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
    'patch'
  >;
  'DELETE /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}': Operation<
    '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
    'delete'
  >;
  'GET /deviceManagement/comanagementEligibleDevices': Operation<
    '/deviceManagement/comanagementEligibleDevices',
    'get'
  >;
  'POST /deviceManagement/comanagementEligibleDevices': Operation<
    '/deviceManagement/comanagementEligibleDevices',
    'post'
  >;
  'GET /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}': Operation<
    '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}': Operation<
    '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
    'patch'
  >;
  'DELETE /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}': Operation<
    '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
    'delete'
  >;
  'GET /deviceManagement/complianceCategories': Operation<
    '/deviceManagement/complianceCategories',
    'get'
  >;
  'POST /deviceManagement/complianceCategories': Operation<
    '/deviceManagement/complianceCategories',
    'post'
  >;
  'GET /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
    'patch'
  >;
  'DELETE /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
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
  'GET /deviceManagement/complianceSettings': Operation<
    '/deviceManagement/complianceSettings',
    'get'
  >;
  'POST /deviceManagement/complianceSettings': Operation<
    '/deviceManagement/complianceSettings',
    'post'
  >;
  'GET /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'patch'
  >;
  'DELETE /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
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
  'GET /deviceManagement/configManagerCollections': Operation<
    '/deviceManagement/configManagerCollections',
    'get'
  >;
  'POST /deviceManagement/configManagerCollections': Operation<
    '/deviceManagement/configManagerCollections',
    'post'
  >;
  'GET /deviceManagement/configManagerCollections/{configManagerCollection-id}': Operation<
    '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
    'get'
  >;
  'PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}': Operation<
    '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
    'patch'
  >;
  'DELETE /deviceManagement/configManagerCollections/{configManagerCollection-id}': Operation<
    '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
    'delete'
  >;
  'GET /deviceManagement/configurationCategories': Operation<
    '/deviceManagement/configurationCategories',
    'get'
  >;
  'POST /deviceManagement/configurationCategories': Operation<
    '/deviceManagement/configurationCategories',
    'post'
  >;
  'GET /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
    'patch'
  >;
  'DELETE /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/configurationSettings': Operation<
    '/deviceManagement/configurationSettings',
    'get'
  >;
  'POST /deviceManagement/configurationSettings': Operation<
    '/deviceManagement/configurationSettings',
    'post'
  >;
  'GET /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'patch'
  >;
  'DELETE /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/derivedCredentials': Operation<
    '/deviceManagement/derivedCredentials',
    'get'
  >;
  'POST /deviceManagement/derivedCredentials': Operation<
    '/deviceManagement/derivedCredentials',
    'post'
  >;
  'GET /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}': Operation<
    '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
    'get'
  >;
  'PATCH /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}': Operation<
    '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
    'patch'
  >;
  'DELETE /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}': Operation<
    '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
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
  'GET /deviceManagement/deviceConfigurationConflictSummary': Operation<
    '/deviceManagement/deviceConfigurationConflictSummary',
    'get'
  >;
  'POST /deviceManagement/deviceConfigurationConflictSummary': Operation<
    '/deviceManagement/deviceConfigurationConflictSummary',
    'post'
  >;
  'GET /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}': Operation<
    '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}': Operation<
    '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}': Operation<
    '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
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
  'GET /deviceManagement/deviceConfigurationRestrictedAppsViolations': Operation<
    '/deviceManagement/deviceConfigurationRestrictedAppsViolations',
    'get'
  >;
  'POST /deviceManagement/deviceConfigurationRestrictedAppsViolations': Operation<
    '/deviceManagement/deviceConfigurationRestrictedAppsViolations',
    'post'
  >;
  'GET /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}': Operation<
    '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}': Operation<
    '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}': Operation<
    '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurationUserStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationUserStateSummaries',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurationUserStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationUserStateSummaries',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurationUserStateSummaries': Operation<
    '/deviceManagement/deviceConfigurationUserStateSummaries',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates': Operation<
    '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates',
    'get'
  >;
  'POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates': Operation<
    '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates',
    'post'
  >;
  'GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}': Operation<
    '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}': Operation<
    '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}': Operation<
    '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
    'delete'
  >;
  'GET /deviceManagement/domainJoinConnectors': Operation<
    '/deviceManagement/domainJoinConnectors',
    'get'
  >;
  'POST /deviceManagement/domainJoinConnectors': Operation<
    '/deviceManagement/domainJoinConnectors',
    'post'
  >;
  'GET /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}': Operation<
    '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
    'get'
  >;
  'PATCH /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}': Operation<
    '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
    'patch'
  >;
  'DELETE /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}': Operation<
    '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
    'delete'
  >;
  'POST /deviceManagement/enableAndroidDeviceAdministratorEnrollment': Operation<
    '/deviceManagement/enableAndroidDeviceAdministratorEnrollment',
    'post'
  >;
  'POST /deviceManagement/enableEndpointPrivilegeManagement': Operation<
    '/deviceManagement/enableEndpointPrivilegeManagement',
    'post'
  >;
  'POST /deviceManagement/enableLegacyPcManagement': Operation<
    '/deviceManagement/enableLegacyPcManagement',
    'post'
  >;
  'POST /deviceManagement/enableUnlicensedAdminstrators': Operation<
    '/deviceManagement/enableUnlicensedAdminstrators',
    'post'
  >;
  'GET /deviceManagement/endpointPrivilegeManagementProvisioningStatus': Operation<
    '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
    'get'
  >;
  'PATCH /deviceManagement/endpointPrivilegeManagementProvisioningStatus': Operation<
    '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
    'patch'
  >;
  'DELETE /deviceManagement/endpointPrivilegeManagementProvisioningStatus': Operation<
    '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
    'delete'
  >;
  'POST /deviceManagement/evaluateAssignmentFilter': Operation<
    '/deviceManagement/evaluateAssignmentFilter',
    'post'
  >;
  'POST /deviceManagement/getAssignmentFiltersStatusDetails': Operation<
    '/deviceManagement/getAssignmentFiltersStatusDetails',
    'post'
  >;
  'GET /deviceManagement/groupPolicyObjectFiles': Operation<
    '/deviceManagement/groupPolicyObjectFiles',
    'get'
  >;
  'POST /deviceManagement/groupPolicyObjectFiles': Operation<
    '/deviceManagement/groupPolicyObjectFiles',
    'post'
  >;
  'GET /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}': Operation<
    '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}': Operation<
    '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
    'patch'
  >;
  'DELETE /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}': Operation<
    '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
    'delete'
  >;
  'GET /deviceManagement/hardwarePasswordDetails': Operation<
    '/deviceManagement/hardwarePasswordDetails',
    'get'
  >;
  'POST /deviceManagement/hardwarePasswordDetails': Operation<
    '/deviceManagement/hardwarePasswordDetails',
    'post'
  >;
  'GET /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}': Operation<
    '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}': Operation<
    '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
    'patch'
  >;
  'DELETE /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}': Operation<
    '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
    'delete'
  >;
  'GET /deviceManagement/hardwarePasswordInfo': Operation<
    '/deviceManagement/hardwarePasswordInfo',
    'get'
  >;
  'POST /deviceManagement/hardwarePasswordInfo': Operation<
    '/deviceManagement/hardwarePasswordInfo',
    'post'
  >;
  'GET /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}': Operation<
    '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}': Operation<
    '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
    'patch'
  >;
  'DELETE /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}': Operation<
    '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
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
  'GET /deviceManagement/managedDeviceCleanupRules': Operation<
    '/deviceManagement/managedDeviceCleanupRules',
    'get'
  >;
  'POST /deviceManagement/managedDeviceCleanupRules': Operation<
    '/deviceManagement/managedDeviceCleanupRules',
    'post'
  >;
  'GET /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}': Operation<
    '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}': Operation<
    '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
    'patch'
  >;
  'DELETE /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}': Operation<
    '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDeviceEncryptionStates': Operation<
    '/deviceManagement/managedDeviceEncryptionStates',
    'get'
  >;
  'POST /deviceManagement/managedDeviceEncryptionStates': Operation<
    '/deviceManagement/managedDeviceEncryptionStates',
    'post'
  >;
  'GET /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}': Operation<
    '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}': Operation<
    '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}': Operation<
    '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDeviceOverview': Operation<
    '/deviceManagement/managedDeviceOverview',
    'get'
  >;
  'GET /deviceManagement/managedDeviceWindowsOSImages': Operation<
    '/deviceManagement/managedDeviceWindowsOSImages',
    'get'
  >;
  'POST /deviceManagement/managedDeviceWindowsOSImages': Operation<
    '/deviceManagement/managedDeviceWindowsOSImages',
    'post'
  >;
  'GET /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}': Operation<
    '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}': Operation<
    '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
    'patch'
  >;
  'DELETE /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}': Operation<
    '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
    'delete'
  >;
  'GET /deviceManagement/microsoftTunnelConfigurations': Operation<
    '/deviceManagement/microsoftTunnelConfigurations',
    'get'
  >;
  'POST /deviceManagement/microsoftTunnelConfigurations': Operation<
    '/deviceManagement/microsoftTunnelConfigurations',
    'post'
  >;
  'GET /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}': Operation<
    '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}': Operation<
    '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
    'patch'
  >;
  'DELETE /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}': Operation<
    '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/microsoftTunnelHealthThresholds': Operation<
    '/deviceManagement/microsoftTunnelHealthThresholds',
    'get'
  >;
  'POST /deviceManagement/microsoftTunnelHealthThresholds': Operation<
    '/deviceManagement/microsoftTunnelHealthThresholds',
    'post'
  >;
  'GET /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}': Operation<
    '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
    'get'
  >;
  'PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}': Operation<
    '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
    'patch'
  >;
  'DELETE /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}': Operation<
    '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
    'delete'
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
  'GET /deviceManagement/ndesConnectors': Operation<'/deviceManagement/ndesConnectors', 'get'>;
  'POST /deviceManagement/ndesConnectors': Operation<'/deviceManagement/ndesConnectors', 'post'>;
  'GET /deviceManagement/ndesConnectors/{ndesConnector-id}': Operation<
    '/deviceManagement/ndesConnectors/{ndesConnector-id}',
    'get'
  >;
  'PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}': Operation<
    '/deviceManagement/ndesConnectors/{ndesConnector-id}',
    'patch'
  >;
  'DELETE /deviceManagement/ndesConnectors/{ndesConnector-id}': Operation<
    '/deviceManagement/ndesConnectors/{ndesConnector-id}',
    'delete'
  >;
  'GET /deviceManagement/operationApprovalPolicies': Operation<
    '/deviceManagement/operationApprovalPolicies',
    'get'
  >;
  'POST /deviceManagement/operationApprovalPolicies': Operation<
    '/deviceManagement/operationApprovalPolicies',
    'post'
  >;
  'GET /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}': Operation<
    '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}': Operation<
    '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
    'patch'
  >;
  'DELETE /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}': Operation<
    '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/privilegeManagementElevations': Operation<
    '/deviceManagement/privilegeManagementElevations',
    'get'
  >;
  'POST /deviceManagement/privilegeManagementElevations': Operation<
    '/deviceManagement/privilegeManagementElevations',
    'post'
  >;
  'GET /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}': Operation<
    '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
    'get'
  >;
  'PATCH /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}': Operation<
    '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
    'patch'
  >;
  'DELETE /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}': Operation<
    '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
    'delete'
  >;
  'GET /deviceManagement/remoteActionAudits': Operation<
    '/deviceManagement/remoteActionAudits',
    'get'
  >;
  'POST /deviceManagement/remoteActionAudits': Operation<
    '/deviceManagement/remoteActionAudits',
    'post'
  >;
  'GET /deviceManagement/remoteActionAudits/{remoteActionAudit-id}': Operation<
    '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
    'get'
  >;
  'PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}': Operation<
    '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
    'patch'
  >;
  'DELETE /deviceManagement/remoteActionAudits/{remoteActionAudit-id}': Operation<
    '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
    'delete'
  >;
  'GET /deviceManagement/remoteAssistanceSettings': Operation<
    '/deviceManagement/remoteAssistanceSettings',
    'get'
  >;
  'PATCH /deviceManagement/remoteAssistanceSettings': Operation<
    '/deviceManagement/remoteAssistanceSettings',
    'patch'
  >;
  'DELETE /deviceManagement/remoteAssistanceSettings': Operation<
    '/deviceManagement/remoteAssistanceSettings',
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
  'GET /deviceManagement/reusableSettings': Operation<'/deviceManagement/reusableSettings', 'get'>;
  'POST /deviceManagement/reusableSettings': Operation<
    '/deviceManagement/reusableSettings',
    'post'
  >;
  'GET /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'patch'
  >;
  'DELETE /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}': Operation<
    '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
    'delete'
  >;
  'POST /deviceManagement/sendCustomNotificationToCompanyPortal': Operation<
    '/deviceManagement/sendCustomNotificationToCompanyPortal',
    'post'
  >;
  'GET /deviceManagement/serviceNowConnections': Operation<
    '/deviceManagement/serviceNowConnections',
    'get'
  >;
  'POST /deviceManagement/serviceNowConnections': Operation<
    '/deviceManagement/serviceNowConnections',
    'post'
  >;
  'GET /deviceManagement/serviceNowConnections/{serviceNowConnection-id}': Operation<
    '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
    'get'
  >;
  'PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}': Operation<
    '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
    'patch'
  >;
  'DELETE /deviceManagement/serviceNowConnections/{serviceNowConnection-id}': Operation<
    '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
    'delete'
  >;
  'GET /deviceManagement/settingDefinitions': Operation<
    '/deviceManagement/settingDefinitions',
    'get'
  >;
  'POST /deviceManagement/settingDefinitions': Operation<
    '/deviceManagement/settingDefinitions',
    'post'
  >;
  'GET /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'patch'
  >;
  'DELETE /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/softwareUpdateStatusSummary': Operation<
    '/deviceManagement/softwareUpdateStatusSummary',
    'get'
  >;
  'GET /deviceManagement/templateInsights': Operation<'/deviceManagement/templateInsights', 'get'>;
  'POST /deviceManagement/templateInsights': Operation<
    '/deviceManagement/templateInsights',
    'post'
  >;
  'GET /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}': Operation<
    '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}': Operation<
    '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
    'patch'
  >;
  'DELETE /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}': Operation<
    '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
    'delete'
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
  'GET /deviceManagement/userExperienceAnalyticsAnomaly': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomaly',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAnomaly': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomaly',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomalyDevice': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyDevice',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAnomalyDevice': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyDevice',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
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
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}',
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
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails': Operation<
    '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceMetricHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceMetricHistory',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDeviceMetricHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceMetricHistory',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
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
  'GET /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity': Operation<
    '/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity': Operation<
    '/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsImpactingProcess': Operation<
    '/deviceManagement/userExperienceAnalyticsImpactingProcess',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsImpactingProcess': Operation<
    '/deviceManagement/userExperienceAnalyticsImpactingProcess',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}',
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
  'GET /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice': Operation<
    '/deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice': Operation<
    '/deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}',
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
  'GET /deviceManagement/userExperienceAnalyticsRemoteConnection': Operation<
    '/deviceManagement/userExperienceAnalyticsRemoteConnection',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsRemoteConnection': Operation<
    '/deviceManagement/userExperienceAnalyticsRemoteConnection',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsResourcePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsResourcePerformance',
    'get'
  >;
  'POST /deviceManagement/userExperienceAnalyticsResourcePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsResourcePerformance',
    'post'
  >;
  'GET /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
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
  'GET /deviceManagement/userPfxCertificates': Operation<
    '/deviceManagement/userPfxCertificates',
    'get'
  >;
  'POST /deviceManagement/userPfxCertificates': Operation<
    '/deviceManagement/userPfxCertificates',
    'post'
  >;
  'GET /deviceManagement/userPfxCertificates/{userPFXCertificate-id}': Operation<
    '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
    'get'
  >;
  'PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}': Operation<
    '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
    'patch'
  >;
  'DELETE /deviceManagement/userPfxCertificates/{userPFXCertificate-id}': Operation<
    '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
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
  'GET /deviceManagement/windowsUpdateCatalogItems': Operation<
    '/deviceManagement/windowsUpdateCatalogItems',
    'get'
  >;
  'POST /deviceManagement/windowsUpdateCatalogItems': Operation<
    '/deviceManagement/windowsUpdateCatalogItems',
    'post'
  >;
  'GET /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}': Operation<
    '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}': Operation<
    '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
    'patch'
  >;
  'DELETE /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}': Operation<
    '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
    'delete'
  >;
  'GET /deviceManagement/zebraFotaArtifacts': Operation<
    '/deviceManagement/zebraFotaArtifacts',
    'get'
  >;
  'POST /deviceManagement/zebraFotaArtifacts': Operation<
    '/deviceManagement/zebraFotaArtifacts',
    'post'
  >;
  'GET /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}': Operation<
    '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
    'get'
  >;
  'PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}': Operation<
    '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
    'patch'
  >;
  'DELETE /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}': Operation<
    '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
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
    ver: 'beta',
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
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement',
    body,
  };
}

export const androidForWorkAppConfigurationSchemas = {
  /**
   * `GET /deviceManagement/androidForWorkAppConfigurationSchemas`
   *
   * Android for Work app configuration schema entities.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/androidForWorkAppConfigurationSchemas']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/androidForWorkAppConfigurationSchemas']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/androidForWorkAppConfigurationSchemas',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/androidForWorkAppConfigurationSchemas`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidForWorkAppConfigurationSchemas']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidForWorkAppConfigurationSchemas']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidForWorkAppConfigurationSchemas',
      body,
    };
  },
  /**
   * `GET /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}`
   *
   * Android for Work app configuration schema entities.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['androidForWorkAppConfigurationSchema-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
      paramDefs: {
        path: ['androidForWorkAppConfigurationSchema-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['androidForWorkAppConfigurationSchema-id'],
      },
      params,
    };
  },
};

export const androidManagedStoreAppConfigurationSchemas = {
  /**
   * `GET /deviceManagement/androidManagedStoreAppConfigurationSchemas`
   *
   * Android Enterprise app configuration schema entities.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/androidManagedStoreAppConfigurationSchemas']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/androidManagedStoreAppConfigurationSchemas']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/androidManagedStoreAppConfigurationSchemas',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/androidManagedStoreAppConfigurationSchemas`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidManagedStoreAppConfigurationSchemas']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidManagedStoreAppConfigurationSchemas']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidManagedStoreAppConfigurationSchemas',
      body,
    };
  },
  /**
   * `GET /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}`
   *
   * Android Enterprise app configuration schema entities.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['androidManagedStoreAppConfigurationSchema-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
      paramDefs: {
        path: ['androidManagedStoreAppConfigurationSchema-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['androidManagedStoreAppConfigurationSchema-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const autopilotEvents = {
  /**
   * `GET /deviceManagement/autopilotEvents`
   *
   * The list of autopilot events for the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/autopilotEvents']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/autopilotEvents']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/autopilotEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/autopilotEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/autopilotEvents']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/autopilotEvents']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/autopilotEvents',
      body,
    };
  },
  /**
   * `GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}`
   *
   * The list of autopilot events for the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementAutopilotEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
      paramDefs: {
        path: ['deviceManagementAutopilotEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementAutopilotEvent-id'],
      },
      params,
    };
  },
};

export const cartToClassAssociations = {
  /**
   * `GET /deviceManagement/cartToClassAssociations`
   *
   * The Cart To Class Associations.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/cartToClassAssociations']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/cartToClassAssociations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/cartToClassAssociations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/cartToClassAssociations`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/cartToClassAssociations']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/cartToClassAssociations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cartToClassAssociations',
      body,
    };
  },
  /**
   * `GET /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}`
   *
   * The Cart To Class Associations.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cartToClassAssociation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
      paramDefs: {
        path: ['cartToClassAssociation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/cartToClassAssociations/{cartToClassAssociation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cartToClassAssociation-id'],
      },
      params,
    };
  },
};

export const cloudCertificationAuthorityLeafCertificate = {
  /**
   * `GET /deviceManagement/cloudCertificationAuthorityLeafCertificate`
   *
   * Collection of CloudCertificationAuthorityLeafCertificate records associated with account.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthorityLeafCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/cloudCertificationAuthorityLeafCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/cloudCertificationAuthorityLeafCertificate',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/cloudCertificationAuthorityLeafCertificate`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/cloudCertificationAuthorityLeafCertificate']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/cloudCertificationAuthorityLeafCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudCertificationAuthorityLeafCertificate',
      body,
    };
  },
  /**
   * `GET /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}`
   *
   * Collection of CloudCertificationAuthorityLeafCertificate records associated with account.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudCertificationAuthorityLeafCertificate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
      paramDefs: {
        path: ['cloudCertificationAuthorityLeafCertificate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/cloudCertificationAuthorityLeafCertificate/{cloudCertificationAuthorityLeafCertificate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudCertificationAuthorityLeafCertificate-id'],
      },
      params,
    };
  },
};

export const cloudPCConnectivityIssues = {
  /**
   * `GET /deviceManagement/cloudPCConnectivityIssues`
   *
   * The list of CloudPC Connectivity Issue.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/cloudPCConnectivityIssues']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/cloudPCConnectivityIssues']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/cloudPCConnectivityIssues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/cloudPCConnectivityIssues`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/cloudPCConnectivityIssues']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/cloudPCConnectivityIssues']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/cloudPCConnectivityIssues',
      body,
    };
  },
  /**
   * `GET /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}`
   *
   * The list of CloudPC Connectivity Issue.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPCConnectivityIssue-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
      paramDefs: {
        path: ['cloudPCConnectivityIssue-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPCConnectivityIssue-id'],
      },
      params,
    };
  },
};

export const comanagementEligibleDevices = {
  /**
   * `GET /deviceManagement/comanagementEligibleDevices`
   *
   * The list of co-management eligible devices report
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/comanagementEligibleDevices']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/comanagementEligibleDevices']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagementEligibleDevices',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/comanagementEligibleDevices`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/comanagementEligibleDevices']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/comanagementEligibleDevices']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/comanagementEligibleDevices',
      body,
    };
  },
  /**
   * `GET /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}`
   *
   * The list of co-management eligible devices report
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['comanagementEligibleDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
      paramDefs: {
        path: ['comanagementEligibleDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['comanagementEligibleDevice-id'],
      },
      params,
    };
  },
};

export const complianceCategories = {
  /**
   * `GET /deviceManagement/complianceCategories`
   *
   * List of all compliance categories
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/complianceCategories']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/complianceCategories']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/complianceCategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/complianceCategories`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/complianceCategories']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/complianceCategories']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/complianceCategories',
      body,
    };
  },
  /**
   * `GET /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}`
   *
   * List of all compliance categories
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementConfigurationCategory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
      paramDefs: {
        path: ['deviceManagementConfigurationCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementConfigurationCategory-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const complianceSettings = {
  /**
   * `GET /deviceManagement/complianceSettings`
   *
   * List of all ComplianceSettings
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/complianceSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/complianceSettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/complianceSettings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/complianceSettings`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/complianceSettings']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/complianceSettings']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/complianceSettings',
      body,
    };
  },
  /**
   * `GET /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}`
   *
   * List of all ComplianceSettings
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementConfigurationSettingDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        path: ['deviceManagementConfigurationSettingDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementConfigurationSettingDefinition-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/conditionalAccessSettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const configManagerCollections = {
  /**
   * `GET /deviceManagement/configManagerCollections`
   *
   * A list of ConfigManagerCollection
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/configManagerCollections']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/configManagerCollections']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/configManagerCollections',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/configManagerCollections`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/configManagerCollections']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/configManagerCollections']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configManagerCollections',
      body,
    };
  },
  /**
   * `GET /deviceManagement/configManagerCollections/{configManagerCollection-id}`
   *
   * A list of ConfigManagerCollection
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/configManagerCollections/{configManagerCollection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/configManagerCollections/{configManagerCollection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['configManagerCollection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
      paramDefs: {
        path: ['configManagerCollection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/configManagerCollections/{configManagerCollection-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/configManagerCollections/{configManagerCollection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/configManagerCollections/{configManagerCollection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['configManagerCollection-id'],
      },
      params,
    };
  },
};

export const configurationCategories = {
  /**
   * `GET /deviceManagement/configurationCategories`
   *
   * List of all Configuration Categories
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/configurationCategories']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/configurationCategories']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/configurationCategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/configurationCategories`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/configurationCategories']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/configurationCategories']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configurationCategories',
      body,
    };
  },
  /**
   * `GET /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}`
   *
   * List of all Configuration Categories
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementConfigurationCategory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
      paramDefs: {
        path: ['deviceManagementConfigurationCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementConfigurationCategory-id'],
      },
      params,
    };
  },
};

export const configurationSettings = {
  /**
   * `GET /deviceManagement/configurationSettings`
   *
   * List of all ConfigurationSettings
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/configurationSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/configurationSettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/configurationSettings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/configurationSettings`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/configurationSettings']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/configurationSettings']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configurationSettings',
      body,
    };
  },
  /**
   * `GET /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}`
   *
   * List of all ConfigurationSettings
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementConfigurationSettingDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        path: ['deviceManagementConfigurationSettingDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementConfigurationSettingDefinition-id'],
      },
      params,
    };
  },
};

export const derivedCredentials = {
  /**
   * `GET /deviceManagement/derivedCredentials`
   *
   * Collection of Derived credential settings associated with account.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/derivedCredentials']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/derivedCredentials']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/derivedCredentials',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/derivedCredentials`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/derivedCredentials']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/derivedCredentials']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/derivedCredentials',
      body,
    };
  },
  /**
   * `GET /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}`
   *
   * Collection of Derived credential settings associated with account.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementDerivedCredentialSettings-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
      paramDefs: {
        path: ['deviceManagementDerivedCredentialSettings-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/derivedCredentials/{deviceManagementDerivedCredentialSettings-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementDerivedCredentialSettings-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceCompliancePolicyDeviceStateSummary',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const deviceConfigurationConflictSummary = {
  /**
   * `GET /deviceManagement/deviceConfigurationConflictSummary`
   *
   * Summary of policies in conflict state for this account.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurationConflictSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurationConflictSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurationConflictSummary',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceConfigurationConflictSummary`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurationConflictSummary']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurationConflictSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurationConflictSummary',
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}`
   *
   * Summary of policies in conflict state for this account.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceConfigurationConflictSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
      paramDefs: {
        path: ['deviceConfigurationConflictSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceConfigurationConflictSummary-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurationDeviceStateSummaries',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const deviceConfigurationRestrictedAppsViolations = {
  /**
   * `GET /deviceManagement/deviceConfigurationRestrictedAppsViolations`
   *
   * Restricted apps violations for this account.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurationRestrictedAppsViolations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurationRestrictedAppsViolations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurationRestrictedAppsViolations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceConfigurationRestrictedAppsViolations`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurationRestrictedAppsViolations']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurationRestrictedAppsViolations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurationRestrictedAppsViolations',
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}`
   *
   * Restricted apps violations for this account.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['restrictedAppsViolation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
      paramDefs: {
        path: ['restrictedAppsViolation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['restrictedAppsViolation-id'],
      },
      params,
    };
  },
};

export const deviceConfigurationUserStateSummaries = {
  /**
   * `GET /deviceManagement/deviceConfigurationUserStateSummaries`
   *
   * The device configuration user state summary for this account.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurationUserStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurationUserStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurationUserStateSummaries',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurationUserStateSummaries`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurationUserStateSummaries']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurationUserStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceConfigurationUserStateSummaries',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurationUserStateSummaries`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurationUserStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurationUserStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurationUserStateSummaries',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const deviceConfigurationsAllManagedDeviceCertificateStates = {
  /**
   * `GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates`
   *
   * Summary of all certificates for all devices.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates',
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}`
   *
   * Summary of all certificates for all devices.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedAllDeviceCertificateState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
      paramDefs: {
        path: ['managedAllDeviceCertificateState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedAllDeviceCertificateState-id'],
      },
      params,
    };
  },
};

export const domainJoinConnectors = {
  /**
   * `GET /deviceManagement/domainJoinConnectors`
   *
   * A list of connector objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/domainJoinConnectors']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/domainJoinConnectors']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/domainJoinConnectors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/domainJoinConnectors`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/domainJoinConnectors']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/domainJoinConnectors']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/domainJoinConnectors',
      body,
    };
  },
  /**
   * `GET /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}`
   *
   * A list of connector objects.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementDomainJoinConnector-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
      paramDefs: {
        path: ['deviceManagementDomainJoinConnector-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/domainJoinConnectors/{deviceManagementDomainJoinConnector-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementDomainJoinConnector-id'],
      },
      params,
    };
  },
};

export const enableAndroidDeviceAdministratorEnrollment = {
  /**
   * `POST /deviceManagement/enableAndroidDeviceAdministratorEnrollment`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/enableAndroidDeviceAdministratorEnrollment']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/enableAndroidDeviceAdministratorEnrollment',
    };
  },
};

export const enableEndpointPrivilegeManagement = {
  /**
   * `POST /deviceManagement/enableEndpointPrivilegeManagement`
   *
   * DEPRECATED - DO NOT USE. (Triggers onboarding of tenant to Microsoft Managed Platform - Cloud (MMP-C)).
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/enableEndpointPrivilegeManagement']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/enableEndpointPrivilegeManagement',
    };
  },
};

export const enableLegacyPcManagement = {
  /**
   * `POST /deviceManagement/enableLegacyPcManagement`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/enableLegacyPcManagement']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/enableLegacyPcManagement',
    };
  },
};

export const enableUnlicensedAdminstrators = {
  /**
   * `POST /deviceManagement/enableUnlicensedAdminstrators`
   *
   * Upon enabling, users assigned as administrators via Role Assignment Memberships will no longer require an assigned Intune license. You are limited to 350 unlicensed direct members for each AAD security group in a role assignment, but you can assign multiple AAD security groups to a role if you need to support more than 350 unlicensed administrators. Licensed administrators will continue to function as-is in that transitive memberships apply and are not subject to the 350 member limit.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/enableUnlicensedAdminstrators']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/enableUnlicensedAdminstrators',
    };
  },
};

export const endpointPrivilegeManagementProvisioningStatus = {
  /**
   * `GET /deviceManagement/endpointPrivilegeManagementProvisioningStatus`
   *
   * Endpoint privilege management (EPM) tenant provisioning status contains tenant level license and onboarding state information.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/endpointPrivilegeManagementProvisioningStatus`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/endpointPrivilegeManagementProvisioningStatus`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const evaluateAssignmentFilter = {
  /**
   * `POST /deviceManagement/evaluateAssignmentFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/evaluateAssignmentFilter']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/evaluateAssignmentFilter']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/evaluateAssignmentFilter',
      body,
    };
  },
};

export const getAssignmentFiltersStatusDetails = {
  /**
   * `POST /deviceManagement/getAssignmentFiltersStatusDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/getAssignmentFiltersStatusDetails']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/getAssignmentFiltersStatusDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/getAssignmentFiltersStatusDetails',
      body,
    };
  },
};

export const groupPolicyObjectFiles = {
  /**
   * `GET /deviceManagement/groupPolicyObjectFiles`
   *
   * A list of Group Policy Object files uploaded.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/groupPolicyObjectFiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/groupPolicyObjectFiles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyObjectFiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/groupPolicyObjectFiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyObjectFiles']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/groupPolicyObjectFiles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyObjectFiles',
      body,
    };
  },
  /**
   * `GET /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}`
   *
   * A list of Group Policy Object files uploaded.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyObjectFile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
      paramDefs: {
        path: ['groupPolicyObjectFile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['groupPolicyObjectFile-id'],
      },
      params,
    };
  },
};

export const hardwarePasswordDetails = {
  /**
   * `GET /deviceManagement/hardwarePasswordDetails`
   *
   * Device BIOS password information for devices with managed BIOS and firmware configuration, which provides device serial number, list of previous passwords, and current password.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/hardwarePasswordDetails']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/hardwarePasswordDetails']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwarePasswordDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/hardwarePasswordDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/hardwarePasswordDetails']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/hardwarePasswordDetails']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/hardwarePasswordDetails',
      body,
    };
  },
  /**
   * `GET /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}`
   *
   * Device BIOS password information for devices with managed BIOS and firmware configuration, which provides device serial number, list of previous passwords, and current password.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hardwarePasswordDetail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
      paramDefs: {
        path: ['hardwarePasswordDetail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['hardwarePasswordDetail-id'],
      },
      params,
    };
  },
};

export const hardwarePasswordInfo = {
  /**
   * `GET /deviceManagement/hardwarePasswordInfo`
   *
   * Intune will provide customer the ability to configure BIOS configuration settings on the enrolled Windows 10 and Windows 11 Microsoft Entra joined devices. Starting from June, 2024, customers should start using hardwarePasswordDetail resource type - Microsoft Graph beta | Microsoft Learn. HardwarePasswordInfo will be marked as deprecated with Intune Release 2409
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/hardwarePasswordInfo']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/hardwarePasswordInfo']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwarePasswordInfo',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/hardwarePasswordInfo`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/hardwarePasswordInfo']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/hardwarePasswordInfo']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/hardwarePasswordInfo',
      body,
    };
  },
  /**
   * `GET /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}`
   *
   * Intune will provide customer the ability to configure BIOS configuration settings on the enrolled Windows 10 and Windows 11 Microsoft Entra joined devices. Starting from June, 2024, customers should start using hardwarePasswordDetail resource type - Microsoft Graph beta | Microsoft Learn. HardwarePasswordInfo will be marked as deprecated with Intune Release 2409
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hardwarePasswordInfo-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
      paramDefs: {
        path: ['hardwarePasswordInfo-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['hardwarePasswordInfo-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const managedDeviceCleanupRules = {
  /**
   * `GET /deviceManagement/managedDeviceCleanupRules`
   *
   * Device cleanup rule V2
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/managedDeviceCleanupRules']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/managedDeviceCleanupRules']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDeviceCleanupRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/managedDeviceCleanupRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDeviceCleanupRules']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/managedDeviceCleanupRules']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDeviceCleanupRules',
      body,
    };
  },
  /**
   * `GET /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}`
   *
   * Device cleanup rule V2
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDeviceCleanupRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
      paramDefs: {
        path: ['managedDeviceCleanupRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/managedDeviceCleanupRules/{managedDeviceCleanupRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDeviceCleanupRule-id'],
      },
      params,
    };
  },
};

export const managedDeviceEncryptionStates = {
  /**
   * `GET /deviceManagement/managedDeviceEncryptionStates`
   *
   * Encryption report for devices in this account
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/managedDeviceEncryptionStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDeviceEncryptionStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDeviceEncryptionStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/managedDeviceEncryptionStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDeviceEncryptionStates']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDeviceEncryptionStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDeviceEncryptionStates',
      body,
    };
  },
  /**
   * `GET /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}`
   *
   * Encryption report for devices in this account
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDeviceEncryptionState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
      paramDefs: {
        path: ['managedDeviceEncryptionState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDeviceEncryptionState-id'],
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
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDeviceOverview',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
};

export const managedDeviceWindowsOSImages = {
  /**
   * `GET /deviceManagement/managedDeviceWindowsOSImages`
   *
   * A list of ManagedDeviceWindowsOperatingSystemImages
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/managedDeviceWindowsOSImages']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/managedDeviceWindowsOSImages']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDeviceWindowsOSImages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/managedDeviceWindowsOSImages`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/managedDeviceWindowsOSImages']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/managedDeviceWindowsOSImages']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/managedDeviceWindowsOSImages',
      body,
    };
  },
  /**
   * `GET /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}`
   *
   * A list of ManagedDeviceWindowsOperatingSystemImages
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDeviceWindowsOperatingSystemImage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
      paramDefs: {
        path: ['managedDeviceWindowsOperatingSystemImage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/managedDeviceWindowsOSImages/{managedDeviceWindowsOperatingSystemImage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDeviceWindowsOperatingSystemImage-id'],
      },
      params,
    };
  },
};

export const microsoftTunnelConfigurations = {
  /**
   * `GET /deviceManagement/microsoftTunnelConfigurations`
   *
   * Collection of MicrosoftTunnelConfiguration settings associated with account.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/microsoftTunnelConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/microsoftTunnelConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/microsoftTunnelConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/microsoftTunnelConfigurations`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/microsoftTunnelConfigurations']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/microsoftTunnelConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/microsoftTunnelConfigurations',
      body,
    };
  },
  /**
   * `GET /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}`
   *
   * Collection of MicrosoftTunnelConfiguration settings associated with account.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['microsoftTunnelConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
      paramDefs: {
        path: ['microsoftTunnelConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['microsoftTunnelConfiguration-id'],
      },
      params,
    };
  },
};

export const microsoftTunnelHealthThresholds = {
  /**
   * `GET /deviceManagement/microsoftTunnelHealthThresholds`
   *
   * Collection of MicrosoftTunnelHealthThreshold settings associated with account.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/microsoftTunnelHealthThresholds']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/microsoftTunnelHealthThresholds']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/microsoftTunnelHealthThresholds',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/microsoftTunnelHealthThresholds`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/microsoftTunnelHealthThresholds']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/microsoftTunnelHealthThresholds']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/microsoftTunnelHealthThresholds',
      body,
    };
  },
  /**
   * `GET /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}`
   *
   * Collection of MicrosoftTunnelHealthThreshold settings associated with account.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['microsoftTunnelHealthThreshold-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
      paramDefs: {
        path: ['microsoftTunnelHealthThreshold-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['microsoftTunnelHealthThreshold-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const ndesConnectors = {
  /**
   * `GET /deviceManagement/ndesConnectors`
   *
   * The collection of Ndes connectors for this account.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/ndesConnectors']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/ndesConnectors']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/ndesConnectors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/ndesConnectors`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/ndesConnectors']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/ndesConnectors']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/ndesConnectors',
      body,
    };
  },
  /**
   * `GET /deviceManagement/ndesConnectors/{ndesConnector-id}`
   *
   * The collection of Ndes connectors for this account.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/ndesConnectors/{ndesConnector-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/ndesConnectors/{ndesConnector-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/ndesConnectors/{ndesConnector-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['ndesConnector-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/ndesConnectors/{ndesConnector-id}',
      paramDefs: {
        path: ['ndesConnector-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/ndesConnectors/{ndesConnector-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/ndesConnectors/{ndesConnector-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/ndesConnectors/{ndesConnector-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/ndesConnectors/{ndesConnector-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['ndesConnector-id'],
      },
      params,
    };
  },
};

export const operationApprovalPolicies = {
  /**
   * `GET /deviceManagement/operationApprovalPolicies`
   *
   * The Operation Approval Policies
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/operationApprovalPolicies']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/operationApprovalPolicies']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/operationApprovalPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/operationApprovalPolicies`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/operationApprovalPolicies']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/operationApprovalPolicies']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/operationApprovalPolicies',
      body,
    };
  },
  /**
   * `GET /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}`
   *
   * The Operation Approval Policies
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['operationApprovalPolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
      paramDefs: {
        path: ['operationApprovalPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['operationApprovalPolicy-id'],
      },
      params,
    };
  },
};

export const privilegeManagementElevations = {
  /**
   * `GET /deviceManagement/privilegeManagementElevations`
   *
   * The endpoint privilege management elevation event entity contains elevation details.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/privilegeManagementElevations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/privilegeManagementElevations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/privilegeManagementElevations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/privilegeManagementElevations`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/privilegeManagementElevations']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/privilegeManagementElevations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/privilegeManagementElevations',
      body,
    };
  },
  /**
   * `GET /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}`
   *
   * The endpoint privilege management elevation event entity contains elevation details.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegeManagementElevation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
      paramDefs: {
        path: ['privilegeManagementElevation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/privilegeManagementElevations/{privilegeManagementElevation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegeManagementElevation-id'],
      },
      params,
    };
  },
};

export const remoteActionAudits = {
  /**
   * `GET /deviceManagement/remoteActionAudits`
   *
   * The list of device remote action audits with the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/remoteActionAudits']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/remoteActionAudits']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/remoteActionAudits',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/remoteActionAudits`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/remoteActionAudits']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/remoteActionAudits']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/remoteActionAudits',
      body,
    };
  },
  /**
   * `GET /deviceManagement/remoteActionAudits/{remoteActionAudit-id}`
   *
   * The list of device remote action audits with the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['remoteActionAudit-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
      paramDefs: {
        path: ['remoteActionAudit-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/remoteActionAudits/{remoteActionAudit-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['remoteActionAudit-id'],
      },
      params,
    };
  },
};

export const remoteAssistanceSettings = {
  /**
   * `GET /deviceManagement/remoteAssistanceSettings`
   *
   * The remote assistance settings singleton
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/remoteAssistanceSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/remoteAssistanceSettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/remoteAssistanceSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/remoteAssistanceSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/remoteAssistanceSettings']['body']
  ): EndpointRequest<IEndpoints['PATCH /deviceManagement/remoteAssistanceSettings']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/remoteAssistanceSettings',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/remoteAssistanceSettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/remoteAssistanceSettings']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /deviceManagement/remoteAssistanceSettings']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/remoteAssistanceSettings',
      paramDefs: {
        header: ['If-Match'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const reusableSettings = {
  /**
   * `GET /deviceManagement/reusableSettings`
   *
   * List of all reusable settings
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/reusableSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/reusableSettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/reusableSettings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/reusableSettings`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reusableSettings']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/reusableSettings']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reusableSettings',
      body,
    };
  },
  /**
   * `GET /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}`
   *
   * List of all reusable settings
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementConfigurationSettingDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        path: ['deviceManagementConfigurationSettingDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementConfigurationSettingDefinition-id'],
      },
      params,
    };
  },
};

export const sendCustomNotificationToCompanyPortal = {
  /**
   * `POST /deviceManagement/sendCustomNotificationToCompanyPortal`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/sendCustomNotificationToCompanyPortal']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/sendCustomNotificationToCompanyPortal']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/sendCustomNotificationToCompanyPortal',
      body,
    };
  },
};

export const serviceNowConnections = {
  /**
   * `GET /deviceManagement/serviceNowConnections`
   *
   * A list of ServiceNowConnections
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/serviceNowConnections']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/serviceNowConnections']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/serviceNowConnections',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/serviceNowConnections`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/serviceNowConnections']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/serviceNowConnections']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/serviceNowConnections',
      body,
    };
  },
  /**
   * `GET /deviceManagement/serviceNowConnections/{serviceNowConnection-id}`
   *
   * A list of ServiceNowConnections
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['serviceNowConnection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
      paramDefs: {
        path: ['serviceNowConnection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/serviceNowConnections/{serviceNowConnection-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['serviceNowConnection-id'],
      },
      params,
    };
  },
};

export const settingDefinitions = {
  /**
   * `GET /deviceManagement/settingDefinitions`
   *
   * The device management intent setting definitions
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/settingDefinitions']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/settingDefinitions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/settingDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/settingDefinitions`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/settingDefinitions']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/settingDefinitions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/settingDefinitions',
      body,
    };
  },
  /**
   * `GET /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   * The device management intent setting definitions
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementSettingDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        path: ['deviceManagementSettingDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/settingDefinitions/{deviceManagementSettingDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementSettingDefinition-id'],
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
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/softwareUpdateStatusSummary',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
};

export const templateInsights = {
  /**
   * `GET /deviceManagement/templateInsights`
   *
   * List of setting insights in a template
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/templateInsights']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/templateInsights']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templateInsights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/templateInsights`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/templateInsights']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/templateInsights']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/templateInsights',
      body,
    };
  },
  /**
   * `GET /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}`
   *
   * List of setting insights in a template
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementTemplateInsightsDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
      paramDefs: {
        path: ['deviceManagementTemplateInsightsDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/templateInsights/{deviceManagementTemplateInsightsDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementTemplateInsightsDefinition-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const userExperienceAnalyticsAnomaly = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAnomaly`
   *
   * The user experience analytics anomaly entity contains anomaly details.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomaly']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomaly']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAnomaly',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAnomaly`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomaly']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomaly']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAnomaly',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}`
   *
   * The user experience analytics anomaly entity contains anomaly details.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAnomaly-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAnomaly-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAnomaly/{userExperienceAnalyticsAnomaly-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAnomaly-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsAnomalyCorrelationGroupOverview = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview`
   *
   * The user experience analytics anomaly correlation group overview entity contains the information for each correlation group of an anomaly.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}`
   *
   * The user experience analytics anomaly correlation group overview entity contains the information for each correlation group of an anomaly.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAnomalyCorrelationGroupOverview-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAnomalyCorrelationGroupOverview-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAnomalyCorrelationGroupOverview/{userExperienceAnalyticsAnomalyCorrelationGroupOverview-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAnomalyCorrelationGroupOverview-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsAnomalyDevice = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAnomalyDevice`
   *
   * The user experience analytics anomaly entity contains device details.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAnomalyDevice',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAnomalyDevice`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomalyDevice']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAnomalyDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAnomalyDevice',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}`
   *
   * The user experience analytics anomaly entity contains device details.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAnomalyDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAnomalyDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAnomalyDevice/{userExperienceAnalyticsAnomalyDevice-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAnomalyDevice-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion`
   *
   * User experience analytics appHealth Application Performance by App Version
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}`
   *
   * User experience analytics appHealth Application Performance by App Version
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersion/{userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsAppHealthAppPerformanceByAppVersion-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const userExperienceAnalyticsBatteryHealthAppImpact = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact`
   *
   * User Experience Analytics Battery Health App Impact
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}`
   *
   * User Experience Analytics Battery Health App Impact
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBatteryHealthAppImpact-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsBatteryHealthAppImpact-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthAppImpact/{userExperienceAnalyticsBatteryHealthAppImpact-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsBatteryHealthAppImpact-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsBatteryHealthCapacityDetails = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails`
   *
   * User Experience Analytics Battery Health Capacity Details
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsBatteryHealthDeviceAppImpact = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact`
   *
   * User Experience Analytics Battery Health Device App Impact
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}`
   *
   * User Experience Analytics Battery Health Device App Impact
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBatteryHealthDeviceAppImpact-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsBatteryHealthDeviceAppImpact-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceAppImpact/{userExperienceAnalyticsBatteryHealthDeviceAppImpact-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsBatteryHealthDeviceAppImpact-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsBatteryHealthDevicePerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance`
   *
   * User Experience Analytics Battery Health Device Performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}`
   *
   * User Experience Analytics Battery Health Device Performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBatteryHealthDevicePerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsBatteryHealthDevicePerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDevicePerformance/{userExperienceAnalyticsBatteryHealthDevicePerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsBatteryHealthDevicePerformance-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory`
   *
   * User Experience Analytics Battery Health Device Runtime History
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}`
   *
   * User Experience Analytics Battery Health Device Runtime History
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory/{userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsBatteryHealthDeviceRuntimeHistory-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsBatteryHealthModelPerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance`
   *
   * User Experience Analytics Battery Health Model Performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}`
   *
   * User Experience Analytics Battery Health Model Performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBatteryHealthModelPerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsBatteryHealthModelPerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthModelPerformance/{userExperienceAnalyticsBatteryHealthModelPerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsBatteryHealthModelPerformance-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsBatteryHealthOsPerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance`
   *
   * User Experience Analytics Battery Health Os Performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}`
   *
   * User Experience Analytics Battery Health Os Performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsBatteryHealthOsPerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsBatteryHealthOsPerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthOsPerformance/{userExperienceAnalyticsBatteryHealthOsPerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsBatteryHealthOsPerformance-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsBatteryHealthRuntimeDetails = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails`
   *
   * User Experience Analytics Battery Health Runtime Details
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsDeviceMetricHistory = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceMetricHistory`
   *
   * User experience analytics device metric history. The report will be retired on December 31, 2024. You can start using the Cloud PC connection quality report now via https://learn.microsoft.com/windows-365/enterprise/report-cloud-pc-connection-quality.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceMetricHistory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceMetricHistory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceMetricHistory',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsDeviceMetricHistory`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceMetricHistory']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceMetricHistory']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsDeviceMetricHistory',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}`
   *
   * User experience analytics device metric history. The report will be retired on December 31, 2024. You can start using the Cloud PC connection quality report now via https://learn.microsoft.com/windows-365/enterprise/report-cloud-pc-connection-quality.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsMetricHistory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsMetricHistory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsDeviceMetricHistory/{userExperienceAnalyticsMetricHistory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsMetricHistory-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const userExperienceAnalyticsDeviceTimelineEvent = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent`
   *
   * The user experience analytics device events entity contains NRT device timeline event details.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}`
   *
   * The user experience analytics device events entity contains NRT device timeline event details.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsDeviceTimelineEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsDeviceTimelineEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent/{userExperienceAnalyticsDeviceTimelineEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsDeviceTimelineEvent-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsDevicesWithoutCloudIdentity = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity`
   *
   * User experience analytics devices without cloud identity.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}`
   *
   * User experience analytics devices without cloud identity.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsDeviceWithoutCloudIdentity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsDeviceWithoutCloudIdentity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsDevicesWithoutCloudIdentity/{userExperienceAnalyticsDeviceWithoutCloudIdentity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsDeviceWithoutCloudIdentity-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsImpactingProcess = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsImpactingProcess`
   *
   * User experience analytics impacting process
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsImpactingProcess']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsImpactingProcess']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsImpactingProcess',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsImpactingProcess`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsImpactingProcess']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsImpactingProcess']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsImpactingProcess',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}`
   *
   * User experience analytics impacting process
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsImpactingProcess-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsImpactingProcess-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsImpactingProcess/{userExperienceAnalyticsImpactingProcess-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsImpactingProcess-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const userExperienceAnalyticsNotAutopilotReadyDevice = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice`
   *
   * User experience analytics devices not Windows Autopilot ready.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}`
   *
   * User experience analytics devices not Windows Autopilot ready.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsNotAutopilotReadyDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsNotAutopilotReadyDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsNotAutopilotReadyDevice/{userExperienceAnalyticsNotAutopilotReadyDevice-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsNotAutopilotReadyDevice-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsOverview',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsRemoteConnection = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsRemoteConnection`
   *
   * User experience analytics remote connection. The report will be retired on December 31, 2024. You can start using the Cloud PC connection quality report now via https://learn.microsoft.com/windows-365/enterprise/report-cloud-pc-connection-quality.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsRemoteConnection']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsRemoteConnection']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsRemoteConnection',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsRemoteConnection`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsRemoteConnection']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsRemoteConnection']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsRemoteConnection',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}`
   *
   * User experience analytics remote connection. The report will be retired on December 31, 2024. You can start using the Cloud PC connection quality report now via https://learn.microsoft.com/windows-365/enterprise/report-cloud-pc-connection-quality.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsRemoteConnection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsRemoteConnection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsRemoteConnection/{userExperienceAnalyticsRemoteConnection-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsRemoteConnection-id'],
      },
      params,
    };
  },
};

export const userExperienceAnalyticsResourcePerformance = {
  /**
   * `GET /deviceManagement/userExperienceAnalyticsResourcePerformance`
   *
   * User experience analytics resource performance
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsResourcePerformance']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsResourcePerformance']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsResourcePerformance',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userExperienceAnalyticsResourcePerformance`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsResourcePerformance']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/userExperienceAnalyticsResourcePerformance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userExperienceAnalyticsResourcePerformance',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}`
   *
   * User experience analytics resource performance
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userExperienceAnalyticsResourcePerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
      paramDefs: {
        path: ['userExperienceAnalyticsResourcePerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userExperienceAnalyticsResourcePerformance-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const userPfxCertificates = {
  /**
   * `GET /deviceManagement/userPfxCertificates`
   *
   * Collection of PFX certificates associated with a user.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/userPfxCertificates']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/userPfxCertificates']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userPfxCertificates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/userPfxCertificates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/userPfxCertificates']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/userPfxCertificates']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/userPfxCertificates',
      body,
    };
  },
  /**
   * `GET /deviceManagement/userPfxCertificates/{userPFXCertificate-id}`
   *
   * Collection of PFX certificates associated with a user.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userPFXCertificate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
      paramDefs: {
        path: ['userPFXCertificate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/userPfxCertificates/{userPFXCertificate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userPFXCertificate-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const windowsUpdateCatalogItems = {
  /**
   * `GET /deviceManagement/windowsUpdateCatalogItems`
   *
   * A collection of windows update catalog items (fetaure updates item , quality updates item)
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/windowsUpdateCatalogItems']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/windowsUpdateCatalogItems']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsUpdateCatalogItems',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/windowsUpdateCatalogItems`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsUpdateCatalogItems']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/windowsUpdateCatalogItems']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsUpdateCatalogItems',
      body,
    };
  },
  /**
   * `GET /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}`
   *
   * A collection of windows update catalog items (fetaure updates item , quality updates item)
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsUpdateCatalogItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
      paramDefs: {
        path: ['windowsUpdateCatalogItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsUpdateCatalogItem-id'],
      },
      params,
    };
  },
};

export const zebraFotaArtifacts = {
  /**
   * `GET /deviceManagement/zebraFotaArtifacts`
   *
   * The Collection of ZebraFotaArtifacts.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/zebraFotaArtifacts']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/zebraFotaArtifacts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/zebraFotaArtifacts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/zebraFotaArtifacts`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/zebraFotaArtifacts']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/zebraFotaArtifacts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/zebraFotaArtifacts',
      body,
    };
  },
  /**
   * `GET /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}`
   *
   * The Collection of ZebraFotaArtifacts.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['zebraFotaArtifact-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
      paramDefs: {
        path: ['zebraFotaArtifact-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['zebraFotaArtifact-id'],
      },
      params,
    };
  },
};
