export * as managedTenantAlertLogs from './managedTenantAlertLogs';
export * as managedTenantAlertRuleDefinitions from './managedTenantAlertRuleDefinitions';
export * as managedTenantAlertRules from './managedTenantAlertRules';
export * as managedTenantAlerts from './managedTenantAlerts';
export * as managedTenantApiNotifications from './managedTenantApiNotifications';
export * as managedTenantEmailNotifications from './managedTenantEmailNotifications';
export * as managementTemplateCollections from './managementTemplateCollections';
export * as managementTemplateStepVersions from './managementTemplateStepVersions';
export * as managementTemplateSteps from './managementTemplateSteps';
export * as managementTemplates from './managementTemplates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants': Operation<
    '/tenantRelationships/managedTenants',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants': Operation<
    '/tenantRelationships/managedTenants',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants': Operation<
    '/tenantRelationships/managedTenants',
    'patch'
  >;
  'GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances': Operation<
    '/tenantRelationships/managedTenants/aggregatedPolicyCompliances',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances': Operation<
    '/tenantRelationships/managedTenants/aggregatedPolicyCompliances',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/appPerformances': Operation<
    '/tenantRelationships/managedTenants/appPerformances',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/appPerformances': Operation<
    '/tenantRelationships/managedTenants/appPerformances',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/auditEvents': Operation<
    '/tenantRelationships/managedTenants/auditEvents',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/auditEvents': Operation<
    '/tenantRelationships/managedTenants/auditEvents',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}': Operation<
    '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}': Operation<
    '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}': Operation<
    '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcConnections': Operation<
    '/tenantRelationships/managedTenants/cloudPcConnections',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/cloudPcConnections': Operation<
    '/tenantRelationships/managedTenants/cloudPcConnections',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcDevices': Operation<
    '/tenantRelationships/managedTenants/cloudPcDevices',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/cloudPcDevices': Operation<
    '/tenantRelationships/managedTenants/cloudPcDevices',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}': Operation<
    '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcsOverview': Operation<
    '/tenantRelationships/managedTenants/cloudPcsOverview',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/cloudPcsOverview': Operation<
    '/tenantRelationships/managedTenants/cloudPcsOverview',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}': Operation<
    '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}': Operation<
    '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}': Operation<
    '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages': Operation<
    '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages': Operation<
    '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}': Operation<
    '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}': Operation<
    '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}': Operation<
    '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries': Operation<
    '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries': Operation<
    '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}': Operation<
    '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}': Operation<
    '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}': Operation<
    '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/deviceAppPerformances': Operation<
    '/tenantRelationships/managedTenants/deviceAppPerformances',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/deviceAppPerformances': Operation<
    '/tenantRelationships/managedTenants/deviceAppPerformances',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}': Operation<
    '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries': Operation<
    '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries': Operation<
    '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/deviceHealthStatuses': Operation<
    '/tenantRelationships/managedTenants/deviceHealthStatuses',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/deviceHealthStatuses': Operation<
    '/tenantRelationships/managedTenants/deviceHealthStatuses',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}': Operation<
    '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}': Operation<
    '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}': Operation<
    '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends': Operation<
    '/tenantRelationships/managedTenants/managedDeviceComplianceTrends',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends': Operation<
    '/tenantRelationships/managedTenants/managedDeviceComplianceTrends',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedDeviceCompliances': Operation<
    '/tenantRelationships/managedTenants/managedDeviceCompliances',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/managedDeviceCompliances': Operation<
    '/tenantRelationships/managedTenants/managedDeviceCompliances',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}': Operation<
    '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints': Operation<
    '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints': Operation<
    '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses': Operation<
    '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses': Operation<
    '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}': Operation<
    '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}': Operation<
    '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}': Operation<
    '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementActions': Operation<
    '/tenantRelationships/managedTenants/managementActions',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/managementActions': Operation<
    '/tenantRelationships/managedTenants/managementActions',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managementActions/{managementAction-id}': Operation<
    '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}': Operation<
    '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/managementActions/{managementAction-id}': Operation<
    '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementIntents': Operation<
    '/tenantRelationships/managedTenants/managementIntents',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/managementIntents': Operation<
    '/tenantRelationships/managedTenants/managementIntents',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}': Operation<
    '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}': Operation<
    '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}': Operation<
    '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/myRoles': Operation<
    '/tenantRelationships/managedTenants/myRoles',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/myRoles': Operation<
    '/tenantRelationships/managedTenants/myRoles',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}': Operation<
    '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}': Operation<
    '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}': Operation<
    '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/tenantGroups': Operation<
    '/tenantRelationships/managedTenants/tenantGroups',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/tenantGroups': Operation<
    '/tenantRelationships/managedTenants/tenantGroups',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}': Operation<
    '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}': Operation<
    '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}': Operation<
    '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/tenantTags': Operation<
    '/tenantRelationships/managedTenants/tenantTags',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/tenantTags': Operation<
    '/tenantRelationships/managedTenants/tenantTags',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}': Operation<
    '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}': Operation<
    '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}': Operation<
    '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/tenants': Operation<
    '/tenantRelationships/managedTenants/tenants',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/tenants': Operation<
    '/tenantRelationships/managedTenants/tenants',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/tenants/{tenant-id}': Operation<
    '/tenantRelationships/managedTenants/tenants/{tenant-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}': Operation<
    '/tenantRelationships/managedTenants/tenants/{tenant-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/tenants/{tenant-id}': Operation<
    '/tenantRelationships/managedTenants/tenants/{tenant-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/tenantsCustomizedInformation': Operation<
    '/tenantRelationships/managedTenants/tenantsCustomizedInformation',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/tenantsCustomizedInformation': Operation<
    '/tenantRelationships/managedTenants/tenantsCustomizedInformation',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/tenantsDetailedInformation': Operation<
    '/tenantRelationships/managedTenants/tenantsDetailedInformation',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/tenantsDetailedInformation': Operation<
    '/tenantRelationships/managedTenants/tenantsDetailedInformation',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}': Operation<
    '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/windowsDeviceMalwareStates': Operation<
    '/tenantRelationships/managedTenants/windowsDeviceMalwareStates',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/windowsDeviceMalwareStates': Operation<
    '/tenantRelationships/managedTenants/windowsDeviceMalwareStates',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}': Operation<
    '/tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}': Operation<
    '/tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}': Operation<
    '/tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/windowsProtectionStates': Operation<
    '/tenantRelationships/managedTenants/windowsProtectionStates',
    'get'
  >;
  'POST /tenantRelationships/managedTenants/windowsProtectionStates': Operation<
    '/tenantRelationships/managedTenants/windowsProtectionStates',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}': Operation<
    '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}': Operation<
    '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}': Operation<
    '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
    'delete'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants']['parameters']
): EndpointRequest<IEndpoints['DELETE /tenantRelationships/managedTenants']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants`
 *
 * The operations available to interact with the multi-tenant management platform.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships/managedTenants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants']['body']
): EndpointRequest<IEndpoints['PATCH /tenantRelationships/managedTenants']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants',
    body,
  };
}

export const aggregatedPolicyCompliances = {
  /**
   * `GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances`
   *
   * Get a list of the aggregatedPolicyCompliance objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/aggregatedPolicyCompliances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/aggregatedPolicyCompliances']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/aggregatedPolicyCompliances',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}`
   *
   * Aggregate view of device compliance policies across managed tenants.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['aggregatedPolicyCompliance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
      paramDefs: {
        path: ['aggregatedPolicyCompliance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/aggregatedPolicyCompliances/{aggregatedPolicyCompliance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['aggregatedPolicyCompliance-id'],
      },
      params,
    };
  },
};

export const appPerformances = {
  /**
   * `GET /tenantRelationships/managedTenants/appPerformances`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/appPerformances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/appPerformances']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/appPerformances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/appPerformances`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/appPerformances']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/appPerformances']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/appPerformances',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['appPerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
      paramDefs: {
        path: ['appPerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/appPerformances/{appPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/appPerformances/{appPerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['appPerformance-id'],
      },
      params,
    };
  },
};

export const auditEvents = {
  /**
   * `GET /tenantRelationships/managedTenants/auditEvents`
   *
   * Get a list of the auditEvent objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/auditEvents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/auditEvents']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/auditEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/auditEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/auditEvents']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/auditEvents']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/auditEvents',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}`
   *
   * Read the properties and relationships of an auditEvent object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['auditEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
      paramDefs: {
        path: ['auditEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/auditEvents/{auditEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/auditEvents/{auditEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['auditEvent-id'],
      },
      params,
    };
  },
};

export const cloudPcConnections = {
  /**
   * `GET /tenantRelationships/managedTenants/cloudPcConnections`
   *
   * Get a list of the cloudPcConnection objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcConnections']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/cloudPcConnections']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/cloudPcConnections',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/cloudPcConnections`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/cloudPcConnections']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/cloudPcConnections']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/cloudPcConnections',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}`
   *
   * Read the properties and relationships of a cloudPcConnection object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcConnection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
      paramDefs: {
        path: ['cloudPcConnection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/cloudPcConnections/{cloudPcConnection-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcConnection-id'],
      },
      params,
    };
  },
};

export const cloudPcDevices = {
  /**
   * `GET /tenantRelationships/managedTenants/cloudPcDevices`
   *
   * Get a list of the cloudPcDevice objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcDevices']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/cloudPcDevices']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/cloudPcDevices',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/cloudPcDevices`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/cloudPcDevices']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/cloudPcDevices']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/cloudPcDevices',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}`
   *
   * Read the properties and relationships of a cloudPcDevice object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
      paramDefs: {
        path: ['cloudPcDevice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/cloudPcDevices/{cloudPcDevice-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcDevice-id'],
      },
      params,
    };
  },
};

export const cloudPcsOverview = {
  /**
   * `GET /tenantRelationships/managedTenants/cloudPcsOverview`
   *
   * Get a list of the cloudPcOverview objects and their properties.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcsOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/cloudPcsOverview']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/cloudPcsOverview',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/cloudPcsOverview`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/cloudPcsOverview']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/cloudPcsOverview']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/cloudPcsOverview',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}`
   *
   * Read the properties and relationships of a cloudPcOverview object.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcOverview-tenantId'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
      paramDefs: {
        path: ['cloudPcOverview-tenantId'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/cloudPcsOverview/{cloudPcOverview-tenantId}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcOverview-tenantId'],
      },
      params,
    };
  },
};

export const conditionalAccessPolicyCoverages = {
  /**
   * `GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages`
   *
   * Get a list of the conditionalAccessPolicyCoverage objects and their properties. Use this operation to list Microsoft Entra Conditional Access policy coverage for all tenants that are being managed by the multi-tenant management platform.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}`
   *
   * Read the properties and relationships of a conditionalAccessPolicyCoverage object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['conditionalAccessPolicyCoverage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
      paramDefs: {
        path: ['conditionalAccessPolicyCoverage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/conditionalAccessPolicyCoverages/{conditionalAccessPolicyCoverage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['conditionalAccessPolicyCoverage-id'],
      },
      params,
    };
  },
};

export const credentialUserRegistrationsSummaries = {
  /**
   * `GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries`
   *
   * Get a list of the credentialUserRegistrationsSummary objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}`
   *
   * Read the properties and relationships of a credentialUserRegistrationsSummary object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['credentialUserRegistrationsSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
      paramDefs: {
        path: ['credentialUserRegistrationsSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries/{credentialUserRegistrationsSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['credentialUserRegistrationsSummary-id'],
      },
      params,
    };
  },
};

export const deviceAppPerformances = {
  /**
   * `GET /tenantRelationships/managedTenants/deviceAppPerformances`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceAppPerformances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/deviceAppPerformances']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/deviceAppPerformances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/deviceAppPerformances`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/deviceAppPerformances']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/deviceAppPerformances']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/deviceAppPerformances',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceAppPerformance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
      paramDefs: {
        path: ['deviceAppPerformance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/deviceAppPerformances/{deviceAppPerformance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceAppPerformance-id'],
      },
      params,
    };
  },
};

export const deviceCompliancePolicySettingStateSummaries = {
  /**
   * `GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries`
   *
   * Get a list of the deviceCompliancePolicySettingStateSummary objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
   *
   * Read the properties and relationships of a deviceCompliancePolicySettingStateSummary object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceCompliancePolicySettingStateSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
      paramDefs: {
        path: ['deviceCompliancePolicySettingStateSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceCompliancePolicySettingStateSummary-id'],
      },
      params,
    };
  },
};

export const deviceHealthStatuses = {
  /**
   * `GET /tenantRelationships/managedTenants/deviceHealthStatuses`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceHealthStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/deviceHealthStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/deviceHealthStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/deviceHealthStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/deviceHealthStatuses']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/deviceHealthStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/deviceHealthStatuses',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceHealthStatus-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
      paramDefs: {
        path: ['deviceHealthStatus-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/deviceHealthStatuses/{deviceHealthStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceHealthStatus-id'],
      },
      params,
    };
  },
};

export const managedDeviceComplianceTrends = {
  /**
   * `GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends`
   *
   * Get a list of the managedDeviceComplianceTrend objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedDeviceComplianceTrends',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/managedDeviceComplianceTrends']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/managedDeviceComplianceTrends',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}`
   *
   * Read the properties and relationships of a managedDeviceComplianceTrend object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDeviceComplianceTrend-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
      paramDefs: {
        path: ['managedDeviceComplianceTrend-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/managedDeviceComplianceTrends/{managedDeviceComplianceTrend-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDeviceComplianceTrend-id'],
      },
      params,
    };
  },
};

export const managedDeviceCompliances = {
  /**
   * `GET /tenantRelationships/managedTenants/managedDeviceCompliances`
   *
   * Get a list of the managedDeviceCompliance objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceCompliances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceCompliances']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedDeviceCompliances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/managedDeviceCompliances`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/managedDeviceCompliances']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/managedDeviceCompliances']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/managedDeviceCompliances',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}`
   *
   * Read the properties and relationships of a managedDeviceCompliance object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedDeviceCompliance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
      paramDefs: {
        path: ['managedDeviceCompliance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/managedDeviceCompliances/{managedDeviceCompliance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedDeviceCompliance-id'],
      },
      params,
    };
  },
};

export const managedTenantTicketingEndpoints = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/managedTenantTicketingEndpoints']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantTicketingEndpoint-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
      paramDefs: {
        path: ['managedTenantTicketingEndpoint-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedTenantTicketingEndpoint-id'],
      },
      params,
    };
  },
};

export const managementActionTenantDeploymentStatuses = {
  /**
   * `GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses`
   *
   * Get a list of the managementActionTenantDeploymentStatus objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}`
   *
   * Read the properties and relationships of a managementActionTenantDeploymentStatus object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementActionTenantDeploymentStatus-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
      paramDefs: {
        path: ['managementActionTenantDeploymentStatus-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/managementActionTenantDeploymentStatuses/{managementActionTenantDeploymentStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managementActionTenantDeploymentStatus-id'],
      },
      params,
    };
  },
};

export const managementActions = {
  /**
   * `GET /tenantRelationships/managedTenants/managementActions`
   *
   * Get a list of the managementAction objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementActions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementActions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementActions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/managementActions`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/managementActions']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/managementActions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/managementActions',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managementActions/{managementAction-id}`
   *
   * Read the properties and relationships of a managementAction object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementAction-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
      paramDefs: {
        path: ['managementAction-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/managementActions/{managementAction-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/managementActions/{managementAction-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/managementActions/{managementAction-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managementAction-id'],
      },
      params,
    };
  },
};

export const managementIntents = {
  /**
   * `GET /tenantRelationships/managedTenants/managementIntents`
   *
   * Get a list of the managementIntent objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementIntents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementIntents']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementIntents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/managementIntents`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/managementIntents']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/managementIntents']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/managementIntents',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}`
   *
   * Read the properties and relationships of a managementIntent object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementIntent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
      paramDefs: {
        path: ['managementIntent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/managementIntents/{managementIntent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/managementIntents/{managementIntent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managementIntent-id'],
      },
      params,
    };
  },
};

export const managementTemplateCollectionTenantSummaries = {
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementTemplateCollectionTenantSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}',
      paramDefs: {
        path: ['managementTemplateCollectionTenantSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/managementTemplateCollectionTenantSummaries/{managementTemplateCollectionTenantSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managementTemplateCollectionTenantSummary-id'],
      },
      params,
    };
  },
};

export const managementTemplateStepTenantSummaries = {
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementTemplateStepTenantSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
      paramDefs: {
        path: ['managementTemplateStepTenantSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/managementTemplateStepTenantSummaries/{managementTemplateStepTenantSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managementTemplateStepTenantSummary-id'],
      },
      params,
    };
  },
};

export const myRoles = {
  /**
  * `GET /tenantRelationships/managedTenants/myRoles`
  *
  * Get the roles that a signed-in user has through a delegated relationship across managed tenants. For information on the types of delegated relationships between a Managed Service Provider (MSP) who uses Microsoft 365 Lighthouse, and their business customers with Microsoft 365 Business Premium tenants, see the following articles on the Partner Center:
- Delegated administration privileges (DAP)
- Granular delegated admin privileges (GDAP)
  */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/myRoles']['parameters']
  ): EndpointRequest<IEndpoints['GET /tenantRelationships/managedTenants/myRoles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/myRoles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/myRoles`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/myRoles']['body']
  ): EndpointRequest<IEndpoints['POST /tenantRelationships/managedTenants/myRoles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/myRoles',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}`
   *
   * The collection of role assignments to a signed-in user for a managed tenant.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['myRole-tenantId'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
      paramDefs: {
        path: ['myRole-tenantId'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
      paramDefs: {
        header: ['If-Match'],
        path: ['myRole-tenantId'],
      },
      params,
    };
  },
};

export const tenantGroups = {
  /**
   * `GET /tenantRelationships/managedTenants/tenantGroups`
   *
   * Get a list of the tenantGroup objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/tenantGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/tenantGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/tenantGroups`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/tenantGroups']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/tenantGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/tenantGroups',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}`
   *
   * Read the properties and relationships of a tenantGroup object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['tenantGroup-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
      paramDefs: {
        path: ['tenantGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/tenantGroups/{tenantGroup-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['tenantGroup-id'],
      },
      params,
    };
  },
};

export const tenantTags = {
  /**
   * `GET /tenantRelationships/managedTenants/tenantTags`
   *
   * Get a list of the tenantTag objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantTags']['parameters']
  ): EndpointRequest<IEndpoints['GET /tenantRelationships/managedTenants/tenantTags']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/tenantTags',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/tenantTags`
   *
   * Create a new tenantTag object.
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/tenantTags']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/tenantTags']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/tenantTags',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}`
   *
   * Read the properties and relationships of a tenantTag object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['tenantTag-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}`
   *
   * Update the properties of a tenantTag object.
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
      paramDefs: {
        path: ['tenantTag-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}`
   *
   * Delete a tenantTag object.
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/tenantTags/{tenantTag-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/tenantTags/{tenantTag-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['tenantTag-id'],
      },
      params,
    };
  },
};

export const tenants = {
  /**
   * `GET /tenantRelationships/managedTenants/tenants`
   *
   * Get a list of the tenant objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/tenants']['parameters']
  ): EndpointRequest<IEndpoints['GET /tenantRelationships/managedTenants/tenants']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/tenants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/tenants`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/tenants']['body']
  ): EndpointRequest<IEndpoints['POST /tenantRelationships/managedTenants/tenants']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/tenants',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/tenants/{tenant-id}`
   *
   * Read the properties and relationships of a tenant object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/tenants/{tenant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/tenants/{tenant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/tenants/{tenant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['tenant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/tenants/{tenant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/tenants/{tenant-id}',
      paramDefs: {
        path: ['tenant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/tenants/{tenant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/tenants/{tenant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/tenants/{tenant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/tenants/{tenant-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['tenant-id'],
      },
      params,
    };
  },
};

export const tenantsCustomizedInformation = {
  /**
   * `GET /tenantRelationships/managedTenants/tenantsCustomizedInformation`
   *
   * Get a list of the tenantCustomizedInformation objects and their properties.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantsCustomizedInformation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/tenantsCustomizedInformation']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/tenantsCustomizedInformation',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/tenantsCustomizedInformation`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/tenantsCustomizedInformation']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/tenantsCustomizedInformation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/tenantsCustomizedInformation',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}`
   *
   * Read the properties and relationships of a tenantCustomizedInformation object.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['tenantCustomizedInformation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}`
   *
   * Update the properties of a tenantCustomizedInformation object.
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
      paramDefs: {
        path: ['tenantCustomizedInformation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/tenantsCustomizedInformation/{tenantCustomizedInformation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['tenantCustomizedInformation-id'],
      },
      params,
    };
  },
};

export const tenantsDetailedInformation = {
  /**
   * `GET /tenantRelationships/managedTenants/tenantsDetailedInformation`
   *
   * Get a list of the tenantDetailedInformation objects and their properties.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantsDetailedInformation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/tenantsDetailedInformation']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/tenantsDetailedInformation',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/tenantsDetailedInformation`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/tenantsDetailedInformation']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/tenantsDetailedInformation']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/tenantsDetailedInformation',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}`
   *
   * Read the properties and relationships of a tenantDetailedInformation object.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['tenantDetailedInformation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
      paramDefs: {
        path: ['tenantDetailedInformation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/tenantsDetailedInformation/{tenantDetailedInformation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['tenantDetailedInformation-id'],
      },
      params,
    };
  },
};

export const windowsDeviceMalwareStates = {
  /**
   * `GET /tenantRelationships/managedTenants/windowsDeviceMalwareStates`
   *
   * Get a list of the windowsDeviceMalwareState objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/windowsDeviceMalwareStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/windowsDeviceMalwareStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/windowsDeviceMalwareStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/windowsDeviceMalwareStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/windowsDeviceMalwareStates']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/windowsDeviceMalwareStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/windowsDeviceMalwareStates',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}`
   *
   * Read the properties and relationships of a windowsDeviceMalwareState object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsDeviceMalwareState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}',
      paramDefs: {
        path: ['windowsDeviceMalwareState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/windowsDeviceMalwareStates/{windowsDeviceMalwareState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsDeviceMalwareState-id'],
      },
      params,
    };
  },
};

export const windowsProtectionStates = {
  /**
   * `GET /tenantRelationships/managedTenants/windowsProtectionStates`
   *
   * Get a list of the windowsProtectionState objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/windowsProtectionStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/windowsProtectionStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/windowsProtectionStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/managedTenants/windowsProtectionStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/managedTenants/windowsProtectionStates']['body']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/managedTenants/windowsProtectionStates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/managedTenants/windowsProtectionStates',
      body,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}`
   *
   * Read the properties and relationships of a windowsProtectionState object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsProtectionState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
      paramDefs: {
        path: ['windowsProtectionState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/managedTenants/windowsProtectionStates/{windowsProtectionState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsProtectionState-id'],
      },
      params,
    };
  },
};
