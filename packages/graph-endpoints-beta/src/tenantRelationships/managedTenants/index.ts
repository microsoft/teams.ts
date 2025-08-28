export * as aggregatedPolicyCompliances from './aggregatedPolicyCompliances';
export * as appPerformances from './appPerformances';
export * as auditEvents from './auditEvents';
export * as cloudPcConnections from './cloudPcConnections';
export * as cloudPcDevices from './cloudPcDevices';
export * as cloudPcsOverview from './cloudPcsOverview';
export * as conditionalAccessPolicyCoverages from './conditionalAccessPolicyCoverages';
export * as credentialUserRegistrationsSummaries from './credentialUserRegistrationsSummaries';
export * as deviceAppPerformances from './deviceAppPerformances';
export * as deviceCompliancePolicySettingStateSummaries from './deviceCompliancePolicySettingStateSummaries';
export * as deviceHealthStatuses from './deviceHealthStatuses';
export * as managedDeviceComplianceTrends from './managedDeviceComplianceTrends';
export * as managedDeviceCompliances from './managedDeviceCompliances';
export * as managedTenantAlertLogs from './managedTenantAlertLogs';
export * as managedTenantAlertRuleDefinitions from './managedTenantAlertRuleDefinitions';
export * as managedTenantAlertRules from './managedTenantAlertRules';
export * as managedTenantAlerts from './managedTenantAlerts';
export * as managedTenantApiNotifications from './managedTenantApiNotifications';
export * as managedTenantEmailNotifications from './managedTenantEmailNotifications';
export * as managedTenantTicketingEndpoints from './managedTenantTicketingEndpoints';
export * as managementActionTenantDeploymentStatuses from './managementActionTenantDeploymentStatuses';
export * as managementActions from './managementActions';
export * as managementIntents from './managementIntents';
export * as managementTemplateCollectionTenantSummaries from './managementTemplateCollectionTenantSummaries';
export * as managementTemplateCollections from './managementTemplateCollections';
export * as managementTemplateStepTenantSummaries from './managementTemplateStepTenantSummaries';
export * as managementTemplateStepVersions from './managementTemplateStepVersions';
export * as managementTemplateSteps from './managementTemplateSteps';
export * as managementTemplates from './managementTemplates';
export * as myRoles from './myRoles';
export * as tenantGroups from './tenantGroups';
export * as tenantTags from './tenantTags';
export * as tenants from './tenants';
export * as tenantsCustomizedInformation from './tenantsCustomizedInformation';
export * as tenantsDetailedInformation from './tenantsDetailedInformation';
export * as windowsDeviceMalwareStates from './windowsDeviceMalwareStates';
export * as windowsProtectionStates from './windowsProtectionStates';

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
    paramDefs: [{ name: 'If-Match', in: 'header' }],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants']['parameters']
): EndpointRequest<IEndpoints['PATCH /tenantRelationships/managedTenants']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants',
    paramDefs: [],
    params,
    body,
  };
}
