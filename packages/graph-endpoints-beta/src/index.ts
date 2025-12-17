export * as accessReviews from './accessReviews';
export * as admin from './admin';
export * as administrativeUnits from './administrativeUnits';
export * as agreements from './agreements';
export * as app from './app';
export * as appCatalogs from './appCatalogs';
export * as applicationTemplates from './applicationTemplates';
export * as applications from './applications';
export * as approvalWorkflowProviders from './approvalWorkflowProviders';
export * as auditLogs from './auditLogs';
export * as authenticationMethodDevices from './authenticationMethodDevices';
export * as authenticationMethodsPolicy from './authenticationMethodsPolicy';
export * as bookingBusinesses from './bookingBusinesses';
export * as certificateAuthorities from './certificateAuthorities';
export * as chats from './chats';
export * as commands from './commands';
export * as communications from './communications';
export * as compliance from './compliance';
export * as connections from './connections';
export * as contacts from './contacts';
export * as contracts from './contracts';
export * as copilot from './copilot';
export * as dataClassification from './dataClassification';
export * as deviceAppManagement from './deviceAppManagement';
export * as deviceManagement from './deviceManagement';
export * as devices from './devices';
export * as directory from './directory';
export * as directoryObjects from './directoryObjects';
export * as directoryRoleTemplates from './directoryRoleTemplates';
export * as directoryRoles from './directoryRoles';
export * as directorySettingTemplates from './directorySettingTemplates';
export * as domains from './domains';
export * as drives from './drives';
export * as education from './education';
export * as employeeExperience from './employeeExperience';
export * as external from './external';
export * as filteringPolicies from './filteringPolicies';
export * as financials from './financials';
export * as governanceResources from './governanceResources';
export * as governanceRoleAssignmentRequests from './governanceRoleAssignmentRequests';
export * as governanceRoleAssignments from './governanceRoleAssignments';
export * as governanceRoleDefinitions from './governanceRoleDefinitions';
export * as governanceRoleSettings from './governanceRoleSettings';
export * as groupLifecyclePolicies from './groupLifecyclePolicies';
export * as groups from './groups';
export * as identity from './identity';
export * as identityGovernance from './identityGovernance';
export * as identityProtection from './identityProtection';
export * as informationProtection from './informationProtection';
export * as invitations from './invitations';
export * as me from './me';
export * as messageRecipients from './messageRecipients';
export * as messageTraces from './messageTraces';
export * as mobilityManagementPolicies from './mobilityManagementPolicies';
export * as monitoring from './monitoring';
export * as networkAccess from './networkAccess';
export * as onPremisesPublishingProfiles from './onPremisesPublishingProfiles';
export * as organization from './organization';
export * as permissionGrants from './permissionGrants';
export * as places from './places';
export * as planner from './planner';
export * as policies from './policies';
export * as print from './print';
export * as privacy from './privacy';
export * as privilegedAccess from './privilegedAccess';
export * as privilegedApproval from './privilegedApproval';
export * as privilegedRoleAssignmentRequests from './privilegedRoleAssignmentRequests';
export * as privilegedRoleAssignments from './privilegedRoleAssignments';
export * as privilegedRoles from './privilegedRoles';
export * as privilegedSignupStatus from './privilegedSignupStatus';
export * as programControls from './programControls';
export * as programs from './programs';
export * as reports from './reports';
export * as riskyUsers from './riskyUsers';
export * as roleManagement from './roleManagement';
export * as search from './search';
export * as security from './security';
export * as servicePrincipals from './servicePrincipals';
export * as shares from './shares';
export * as sites from './sites';
export * as solutions from './solutions';
export * as storage from './storage';
export * as subscriptions from './subscriptions';
export * as teamTemplateDefinition from './teamTemplateDefinition';
export * as teams from './teams';
export * as teamwork from './teamwork';
export * as templates from './templates';
export * as tenantRelationships from './tenantRelationships';
export * as termStore from './termStore';
export * as threatSubmission from './threatSubmission';
export * as trustFramework from './trustFramework';
export * as users from './users';
export * as workplace from './workplace';

import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'GET /accessReviewDecisions': Operation<'/accessReviewDecisions', 'get'>;
  'POST /accessReviewDecisions': Operation<'/accessReviewDecisions', 'post'>;
  'GET /accessReviewDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviewDecisions/{accessReviewDecision-id}',
    'get'
  >;
  'PATCH /accessReviewDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviewDecisions/{accessReviewDecision-id}',
    'patch'
  >;
  'DELETE /accessReviewDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviewDecisions/{accessReviewDecision-id}',
    'delete'
  >;
  'GET /activitystatistics': Operation<'/activitystatistics', 'get'>;
  'POST /activitystatistics': Operation<'/activitystatistics', 'post'>;
  'GET /activitystatistics/{activityStatistics-id}': Operation<
    '/activitystatistics/{activityStatistics-id}',
    'get'
  >;
  'PATCH /activitystatistics/{activityStatistics-id}': Operation<
    '/activitystatistics/{activityStatistics-id}',
    'patch'
  >;
  'DELETE /activitystatistics/{activityStatistics-id}': Operation<
    '/activitystatistics/{activityStatistics-id}',
    'delete'
  >;
  'GET /agreementAcceptances': Operation<'/agreementAcceptances', 'get'>;
  'POST /agreementAcceptances': Operation<'/agreementAcceptances', 'post'>;
  'GET /agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/agreementAcceptances/{agreementAcceptance-id}',
    'get'
  >;
  'PATCH /agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/agreementAcceptances/{agreementAcceptance-id}',
    'patch'
  >;
  'DELETE /agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/agreementAcceptances/{agreementAcceptance-id}',
    'delete'
  >;
  'GET /allowedDataLocations': Operation<'/allowedDataLocations', 'get'>;
  'POST /allowedDataLocations': Operation<'/allowedDataLocations', 'post'>;
  'GET /allowedDataLocations/{allowedDataLocation-id}': Operation<
    '/allowedDataLocations/{allowedDataLocation-id}',
    'get'
  >;
  'PATCH /allowedDataLocations/{allowedDataLocation-id}': Operation<
    '/allowedDataLocations/{allowedDataLocation-id}',
    'patch'
  >;
  'DELETE /allowedDataLocations/{allowedDataLocation-id}': Operation<
    '/allowedDataLocations/{allowedDataLocation-id}',
    'delete'
  >;
  'GET /authenticationMethodConfigurations': Operation<
    '/authenticationMethodConfigurations',
    'get'
  >;
  'POST /authenticationMethodConfigurations': Operation<
    '/authenticationMethodConfigurations',
    'post'
  >;
  'GET /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'get'
  >;
  'PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'patch'
  >;
  'DELETE /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'delete'
  >;
  'GET /bookingCurrencies': Operation<'/bookingCurrencies', 'get'>;
  'POST /bookingCurrencies': Operation<'/bookingCurrencies', 'post'>;
  'GET /bookingCurrencies/{bookingCurrency-id}': Operation<
    '/bookingCurrencies/{bookingCurrency-id}',
    'get'
  >;
  'PATCH /bookingCurrencies/{bookingCurrency-id}': Operation<
    '/bookingCurrencies/{bookingCurrency-id}',
    'patch'
  >;
  'DELETE /bookingCurrencies/{bookingCurrency-id}': Operation<
    '/bookingCurrencies/{bookingCurrency-id}',
    'delete'
  >;
  'GET /businessFlowTemplates': Operation<'/businessFlowTemplates', 'get'>;
  'POST /businessFlowTemplates': Operation<'/businessFlowTemplates', 'post'>;
  'GET /businessFlowTemplates/{businessFlowTemplate-id}': Operation<
    '/businessFlowTemplates/{businessFlowTemplate-id}',
    'get'
  >;
  'PATCH /businessFlowTemplates/{businessFlowTemplate-id}': Operation<
    '/businessFlowTemplates/{businessFlowTemplate-id}',
    'patch'
  >;
  'DELETE /businessFlowTemplates/{businessFlowTemplate-id}': Operation<
    '/businessFlowTemplates/{businessFlowTemplate-id}',
    'delete'
  >;
  'GET /certificateBasedAuthConfiguration': Operation<'/certificateBasedAuthConfiguration', 'get'>;
  'POST /certificateBasedAuthConfiguration': Operation<
    '/certificateBasedAuthConfiguration',
    'post'
  >;
  'GET /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}': Operation<
    '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    'get'
  >;
  'PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}': Operation<
    '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    'patch'
  >;
  'DELETE /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}': Operation<
    '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    'delete'
  >;
  'GET /dataPolicyOperations': Operation<'/dataPolicyOperations', 'get'>;
  'POST /dataPolicyOperations': Operation<'/dataPolicyOperations', 'post'>;
  'GET /dataPolicyOperations/{dataPolicyOperation-id}': Operation<
    '/dataPolicyOperations/{dataPolicyOperation-id}',
    'get'
  >;
  'PATCH /dataPolicyOperations/{dataPolicyOperation-id}': Operation<
    '/dataPolicyOperations/{dataPolicyOperation-id}',
    'patch'
  >;
  'DELETE /dataPolicyOperations/{dataPolicyOperation-id}': Operation<
    '/dataPolicyOperations/{dataPolicyOperation-id}',
    'delete'
  >;
  'GET /domainDnsRecords': Operation<'/domainDnsRecords', 'get'>;
  'POST /domainDnsRecords': Operation<'/domainDnsRecords', 'post'>;
  'GET /domainDnsRecords/{domainDnsRecord-id}': Operation<
    '/domainDnsRecords/{domainDnsRecord-id}',
    'get'
  >;
  'PATCH /domainDnsRecords/{domainDnsRecord-id}': Operation<
    '/domainDnsRecords/{domainDnsRecord-id}',
    'patch'
  >;
  'DELETE /domainDnsRecords/{domainDnsRecord-id}': Operation<
    '/domainDnsRecords/{domainDnsRecord-id}',
    'delete'
  >;
  'GET /filterOperators': Operation<'/filterOperators', 'get'>;
  'POST /filterOperators': Operation<'/filterOperators', 'post'>;
  'GET /filterOperators/{filterOperatorSchema-id}': Operation<
    '/filterOperators/{filterOperatorSchema-id}',
    'get'
  >;
  'PATCH /filterOperators/{filterOperatorSchema-id}': Operation<
    '/filterOperators/{filterOperatorSchema-id}',
    'patch'
  >;
  'DELETE /filterOperators/{filterOperatorSchema-id}': Operation<
    '/filterOperators/{filterOperatorSchema-id}',
    'delete'
  >;
  'GET /functions': Operation<'/functions', 'get'>;
  'POST /functions': Operation<'/functions', 'post'>;
  'GET /functions/{attributeMappingFunctionSchema-id}': Operation<
    '/functions/{attributeMappingFunctionSchema-id}',
    'get'
  >;
  'PATCH /functions/{attributeMappingFunctionSchema-id}': Operation<
    '/functions/{attributeMappingFunctionSchema-id}',
    'patch'
  >;
  'DELETE /functions/{attributeMappingFunctionSchema-id}': Operation<
    '/functions/{attributeMappingFunctionSchema-id}',
    'delete'
  >;
  'GET /governanceSubjects': Operation<'/governanceSubjects', 'get'>;
  'POST /governanceSubjects': Operation<'/governanceSubjects', 'post'>;
  'GET /governanceSubjects/{governanceSubject-id}': Operation<
    '/governanceSubjects/{governanceSubject-id}',
    'get'
  >;
  'PATCH /governanceSubjects/{governanceSubject-id}': Operation<
    '/governanceSubjects/{governanceSubject-id}',
    'patch'
  >;
  'DELETE /governanceSubjects/{governanceSubject-id}': Operation<
    '/governanceSubjects/{governanceSubject-id}',
    'delete'
  >;
  'GET /identityProviders': Operation<'/identityProviders', 'get'>;
  'POST /identityProviders': Operation<'/identityProviders', 'post'>;
  'GET /identityProviders/{identityProvider-id}': Operation<
    '/identityProviders/{identityProvider-id}',
    'get'
  >;
  'PATCH /identityProviders/{identityProvider-id}': Operation<
    '/identityProviders/{identityProvider-id}',
    'patch'
  >;
  'DELETE /identityProviders/{identityProvider-id}': Operation<
    '/identityProviders/{identityProvider-id}',
    'delete'
  >;
  'GET /messageEvents': Operation<'/messageEvents', 'get'>;
  'POST /messageEvents': Operation<'/messageEvents', 'post'>;
  'GET /messageEvents/{messageEvent-id}': Operation<'/messageEvents/{messageEvent-id}', 'get'>;
  'PATCH /messageEvents/{messageEvent-id}': Operation<'/messageEvents/{messageEvent-id}', 'patch'>;
  'DELETE /messageEvents/{messageEvent-id}': Operation<
    '/messageEvents/{messageEvent-id}',
    'delete'
  >;
  'GET /network': Operation<'/network', 'get'>;
  'PATCH /network': Operation<'/network', 'patch'>;
  'GET /oauth2PermissionGrants': Operation<'/oauth2PermissionGrants', 'get'>;
  'POST /oauth2PermissionGrants': Operation<'/oauth2PermissionGrants', 'post'>;
  'GET /oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'get'
  >;
  'PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'patch'
  >;
  'DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'delete'
  >;
  'GET /payloadResponse': Operation<'/payloadResponse', 'get'>;
  'POST /payloadResponse': Operation<'/payloadResponse', 'post'>;
  'GET /payloadResponse/{payloadResponse-id}': Operation<
    '/payloadResponse/{payloadResponse-id}',
    'get'
  >;
  'PATCH /payloadResponse/{payloadResponse-id}': Operation<
    '/payloadResponse/{payloadResponse-id}',
    'patch'
  >;
  'DELETE /payloadResponse/{payloadResponse-id}': Operation<
    '/payloadResponse/{payloadResponse-id}',
    'delete'
  >;
  'GET /privilegedOperationEvents': Operation<'/privilegedOperationEvents', 'get'>;
  'POST /privilegedOperationEvents': Operation<'/privilegedOperationEvents', 'post'>;
  'GET /privilegedOperationEvents/{privilegedOperationEvent-id}': Operation<
    '/privilegedOperationEvents/{privilegedOperationEvent-id}',
    'get'
  >;
  'PATCH /privilegedOperationEvents/{privilegedOperationEvent-id}': Operation<
    '/privilegedOperationEvents/{privilegedOperationEvent-id}',
    'patch'
  >;
  'DELETE /privilegedOperationEvents/{privilegedOperationEvent-id}': Operation<
    '/privilegedOperationEvents/{privilegedOperationEvent-id}',
    'delete'
  >;
  'GET /programControlTypes': Operation<'/programControlTypes', 'get'>;
  'POST /programControlTypes': Operation<'/programControlTypes', 'post'>;
  'GET /programControlTypes/{programControlType-id}': Operation<
    '/programControlTypes/{programControlType-id}',
    'get'
  >;
  'PATCH /programControlTypes/{programControlType-id}': Operation<
    '/programControlTypes/{programControlType-id}',
    'patch'
  >;
  'DELETE /programControlTypes/{programControlType-id}': Operation<
    '/programControlTypes/{programControlType-id}',
    'delete'
  >;
  'GET /riskDetections': Operation<'/riskDetections', 'get'>;
  'POST /riskDetections': Operation<'/riskDetections', 'post'>;
  'GET /riskDetections/{riskDetection-id}': Operation<'/riskDetections/{riskDetection-id}', 'get'>;
  'PATCH /riskDetections/{riskDetection-id}': Operation<
    '/riskDetections/{riskDetection-id}',
    'patch'
  >;
  'DELETE /riskDetections/{riskDetection-id}': Operation<
    '/riskDetections/{riskDetection-id}',
    'delete'
  >;
  'GET /schemaExtensions': Operation<'/schemaExtensions', 'get'>;
  'POST /schemaExtensions': Operation<'/schemaExtensions', 'post'>;
  'GET /schemaExtensions/{schemaExtension-id}': Operation<
    '/schemaExtensions/{schemaExtension-id}',
    'get'
  >;
  'PATCH /schemaExtensions/{schemaExtension-id}': Operation<
    '/schemaExtensions/{schemaExtension-id}',
    'patch'
  >;
  'DELETE /schemaExtensions/{schemaExtension-id}': Operation<
    '/schemaExtensions/{schemaExtension-id}',
    'delete'
  >;
  'GET /scopedRoleMemberships': Operation<'/scopedRoleMemberships', 'get'>;
  'POST /scopedRoleMemberships': Operation<'/scopedRoleMemberships', 'post'>;
  'GET /scopedRoleMemberships/{scopedRoleMembership-id}': Operation<
    '/scopedRoleMemberships/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /scopedRoleMemberships/{scopedRoleMembership-id}': Operation<
    '/scopedRoleMemberships/{scopedRoleMembership-id}',
    'patch'
  >;
  'DELETE /scopedRoleMemberships/{scopedRoleMembership-id}': Operation<
    '/scopedRoleMemberships/{scopedRoleMembership-id}',
    'delete'
  >;
  'GET /settings': Operation<'/settings', 'get'>;
  'POST /settings': Operation<'/settings', 'post'>;
  'GET /settings/{directorySetting-id}': Operation<'/settings/{directorySetting-id}', 'get'>;
  'PATCH /settings/{directorySetting-id}': Operation<'/settings/{directorySetting-id}', 'patch'>;
  'DELETE /settings/{directorySetting-id}': Operation<'/settings/{directorySetting-id}', 'delete'>;
  'GET /subscribedSkus': Operation<'/subscribedSkus', 'get'>;
  'POST /subscribedSkus': Operation<'/subscribedSkus', 'post'>;
  'GET /subscribedSkus/{subscribedSku-id}': Operation<'/subscribedSkus/{subscribedSku-id}', 'get'>;
  'PATCH /subscribedSkus/{subscribedSku-id}': Operation<
    '/subscribedSkus/{subscribedSku-id}',
    'patch'
  >;
  'DELETE /subscribedSkus/{subscribedSku-id}': Operation<
    '/subscribedSkus/{subscribedSku-id}',
    'delete'
  >;
  'GET /teamsTemplates': Operation<'/teamsTemplates', 'get'>;
  'POST /teamsTemplates': Operation<'/teamsTemplates', 'post'>;
  'GET /teamsTemplates/{teamsTemplate-id}': Operation<'/teamsTemplates/{teamsTemplate-id}', 'get'>;
  'PATCH /teamsTemplates/{teamsTemplate-id}': Operation<
    '/teamsTemplates/{teamsTemplate-id}',
    'patch'
  >;
  'DELETE /teamsTemplates/{teamsTemplate-id}': Operation<
    '/teamsTemplates/{teamsTemplate-id}',
    'delete'
  >;
}

export const accessReviewDecisions = {
  /**
   * `GET /accessReviewDecisions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /accessReviewDecisions']['parameters']
  ): EndpointRequest<IEndpoints['GET /accessReviewDecisions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviewDecisions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /accessReviewDecisions`
   *
   */
  create: function create(
    body: IEndpoints['POST /accessReviewDecisions']['body']
  ): EndpointRequest<IEndpoints['POST /accessReviewDecisions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviewDecisions',
      body,
    };
  },
  /**
   * `GET /accessReviewDecisions/{accessReviewDecision-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /accessReviewDecisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /accessReviewDecisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviewDecisions/{accessReviewDecision-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReviewDecision-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /accessReviewDecisions/{accessReviewDecision-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /accessReviewDecisions/{accessReviewDecision-id}']['body'],
    params?: IEndpoints['PATCH /accessReviewDecisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /accessReviewDecisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/accessReviewDecisions/{accessReviewDecision-id}',
      paramDefs: {
        path: ['accessReviewDecision-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /accessReviewDecisions/{accessReviewDecision-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /accessReviewDecisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /accessReviewDecisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/accessReviewDecisions/{accessReviewDecision-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessReviewDecision-id'],
      },
      params,
    };
  },
};

export const activitystatistics = {
  /**
   * `GET /activitystatistics`
   *
   */
  list: function list(
    params?: IEndpoints['GET /activitystatistics']['parameters']
  ): EndpointRequest<IEndpoints['GET /activitystatistics']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/activitystatistics',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /activitystatistics`
   *
   */
  create: function create(
    body: IEndpoints['POST /activitystatistics']['body']
  ): EndpointRequest<IEndpoints['POST /activitystatistics']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/activitystatistics',
      body,
    };
  },
  /**
   * `GET /activitystatistics/{activityStatistics-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /activitystatistics/{activityStatistics-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /activitystatistics/{activityStatistics-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/activitystatistics/{activityStatistics-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['activityStatistics-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /activitystatistics/{activityStatistics-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /activitystatistics/{activityStatistics-id}']['body'],
    params?: IEndpoints['PATCH /activitystatistics/{activityStatistics-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /activitystatistics/{activityStatistics-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/activitystatistics/{activityStatistics-id}',
      paramDefs: {
        path: ['activityStatistics-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /activitystatistics/{activityStatistics-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /activitystatistics/{activityStatistics-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /activitystatistics/{activityStatistics-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/activitystatistics/{activityStatistics-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['activityStatistics-id'],
      },
      params,
    };
  },
};

export const agreementAcceptances = {
  /**
   * `GET /agreementAcceptances`
   *
   */
  list: function list(
    params?: IEndpoints['GET /agreementAcceptances']['parameters']
  ): EndpointRequest<IEndpoints['GET /agreementAcceptances']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/agreementAcceptances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /agreementAcceptances`
   *
   */
  create: function create(
    body: IEndpoints['POST /agreementAcceptances']['body']
  ): EndpointRequest<IEndpoints['POST /agreementAcceptances']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/agreementAcceptances',
      body,
    };
  },
  /**
   * `GET /agreementAcceptances/{agreementAcceptance-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /agreementAcceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /agreementAcceptances/{agreementAcceptance-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/agreementAcceptances/{agreementAcceptance-id}',
      paramDefs: {
        query: ['$select'],
        path: ['agreementAcceptance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /agreementAcceptances/{agreementAcceptance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /agreementAcceptances/{agreementAcceptance-id}']['body'],
    params?: IEndpoints['PATCH /agreementAcceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /agreementAcceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/agreementAcceptances/{agreementAcceptance-id}',
      paramDefs: {
        path: ['agreementAcceptance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /agreementAcceptances/{agreementAcceptance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /agreementAcceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /agreementAcceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/agreementAcceptances/{agreementAcceptance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['agreementAcceptance-id'],
      },
      params,
    };
  },
};

export const allowedDataLocations = {
  /**
   * `GET /allowedDataLocations`
   *
   */
  list: function list(
    params?: IEndpoints['GET /allowedDataLocations']['parameters']
  ): EndpointRequest<IEndpoints['GET /allowedDataLocations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/allowedDataLocations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /allowedDataLocations`
   *
   */
  create: function create(
    body: IEndpoints['POST /allowedDataLocations']['body']
  ): EndpointRequest<IEndpoints['POST /allowedDataLocations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/allowedDataLocations',
      body,
    };
  },
  /**
   * `GET /allowedDataLocations/{allowedDataLocation-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /allowedDataLocations/{allowedDataLocation-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /allowedDataLocations/{allowedDataLocation-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/allowedDataLocations/{allowedDataLocation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['allowedDataLocation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /allowedDataLocations/{allowedDataLocation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /allowedDataLocations/{allowedDataLocation-id}']['body'],
    params?: IEndpoints['PATCH /allowedDataLocations/{allowedDataLocation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /allowedDataLocations/{allowedDataLocation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/allowedDataLocations/{allowedDataLocation-id}',
      paramDefs: {
        path: ['allowedDataLocation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /allowedDataLocations/{allowedDataLocation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /allowedDataLocations/{allowedDataLocation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /allowedDataLocations/{allowedDataLocation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/allowedDataLocations/{allowedDataLocation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['allowedDataLocation-id'],
      },
      params,
    };
  },
};

export const authenticationMethodConfigurations = {
  /**
   * `GET /authenticationMethodConfigurations`
   *
   */
  list: function list(
    params?: IEndpoints['GET /authenticationMethodConfigurations']['parameters']
  ): EndpointRequest<IEndpoints['GET /authenticationMethodConfigurations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/authenticationMethodConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /authenticationMethodConfigurations`
   *
   */
  create: function create(
    body: IEndpoints['POST /authenticationMethodConfigurations']['body']
  ): EndpointRequest<IEndpoints['POST /authenticationMethodConfigurations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/authenticationMethodConfigurations',
      body,
    };
  },
  /**
   * `GET /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationMethodConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
      paramDefs: {
        path: ['authenticationMethodConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authenticationMethodConfiguration-id'],
      },
      params,
    };
  },
};

export const bookingCurrencies = {
  /**
   * `GET /bookingCurrencies`
   *
   */
  list: function list(
    params?: IEndpoints['GET /bookingCurrencies']['parameters']
  ): EndpointRequest<IEndpoints['GET /bookingCurrencies']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/bookingCurrencies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /bookingCurrencies`
   *
   */
  create: function create(
    body: IEndpoints['POST /bookingCurrencies']['body']
  ): EndpointRequest<IEndpoints['POST /bookingCurrencies']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/bookingCurrencies',
      body,
    };
  },
  /**
   * `GET /bookingCurrencies/{bookingCurrency-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /bookingCurrencies/{bookingCurrency-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /bookingCurrencies/{bookingCurrency-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/bookingCurrencies/{bookingCurrency-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingCurrency-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /bookingCurrencies/{bookingCurrency-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /bookingCurrencies/{bookingCurrency-id}']['body'],
    params?: IEndpoints['PATCH /bookingCurrencies/{bookingCurrency-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /bookingCurrencies/{bookingCurrency-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/bookingCurrencies/{bookingCurrency-id}',
      paramDefs: {
        path: ['bookingCurrency-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /bookingCurrencies/{bookingCurrency-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /bookingCurrencies/{bookingCurrency-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /bookingCurrencies/{bookingCurrency-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/bookingCurrencies/{bookingCurrency-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['bookingCurrency-id'],
      },
      params,
    };
  },
};

export const businessFlowTemplates = {
  /**
   * `GET /businessFlowTemplates`
   *
   * In the Microsoft Entra access reviews feature, list all the businessFlowTemplate objects.
   */
  list: function list(
    params?: IEndpoints['GET /businessFlowTemplates']['parameters']
  ): EndpointRequest<IEndpoints['GET /businessFlowTemplates']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/businessFlowTemplates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /businessFlowTemplates`
   *
   */
  create: function create(
    body: IEndpoints['POST /businessFlowTemplates']['body']
  ): EndpointRequest<IEndpoints['POST /businessFlowTemplates']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/businessFlowTemplates',
      body,
    };
  },
  /**
   * `GET /businessFlowTemplates/{businessFlowTemplate-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /businessFlowTemplates/{businessFlowTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /businessFlowTemplates/{businessFlowTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/businessFlowTemplates/{businessFlowTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['businessFlowTemplate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /businessFlowTemplates/{businessFlowTemplate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /businessFlowTemplates/{businessFlowTemplate-id}']['body'],
    params?: IEndpoints['PATCH /businessFlowTemplates/{businessFlowTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /businessFlowTemplates/{businessFlowTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/businessFlowTemplates/{businessFlowTemplate-id}',
      paramDefs: {
        path: ['businessFlowTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /businessFlowTemplates/{businessFlowTemplate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /businessFlowTemplates/{businessFlowTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /businessFlowTemplates/{businessFlowTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/businessFlowTemplates/{businessFlowTemplate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['businessFlowTemplate-id'],
      },
      params,
    };
  },
};

export const certificateBasedAuthConfiguration = {
  /**
   * `GET /certificateBasedAuthConfiguration`
   *
   */
  get: function get(
    params?: IEndpoints['GET /certificateBasedAuthConfiguration']['parameters']
  ): EndpointRequest<IEndpoints['GET /certificateBasedAuthConfiguration']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/certificateBasedAuthConfiguration',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /certificateBasedAuthConfiguration`
   *
   */
  create: function create(
    body: IEndpoints['POST /certificateBasedAuthConfiguration']['body']
  ): EndpointRequest<IEndpoints['POST /certificateBasedAuthConfiguration']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/certificateBasedAuthConfiguration',
      body,
    };
  },
  /**
   * `GET /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['certificateBasedAuthConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
      paramDefs: {
        path: ['certificateBasedAuthConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['certificateBasedAuthConfiguration-id'],
      },
      params,
    };
  },
};

export const dataPolicyOperations = {
  /**
   * `GET /dataPolicyOperations`
   *
   * Retrieve the properties of the dataPolicyOperation object.
   */
  list: function list(
    params?: IEndpoints['GET /dataPolicyOperations']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataPolicyOperations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataPolicyOperations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /dataPolicyOperations`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataPolicyOperations']['body']
  ): EndpointRequest<IEndpoints['POST /dataPolicyOperations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataPolicyOperations',
      body,
    };
  },
  /**
   * `GET /dataPolicyOperations/{dataPolicyOperation-id}`
   *
   * Retrieve the properties of the dataPolicyOperation object.
   */
  get: function get(
    params?: IEndpoints['GET /dataPolicyOperations/{dataPolicyOperation-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataPolicyOperations/{dataPolicyOperation-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataPolicyOperations/{dataPolicyOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['dataPolicyOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /dataPolicyOperations/{dataPolicyOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /dataPolicyOperations/{dataPolicyOperation-id}']['body'],
    params?: IEndpoints['PATCH /dataPolicyOperations/{dataPolicyOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /dataPolicyOperations/{dataPolicyOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/dataPolicyOperations/{dataPolicyOperation-id}',
      paramDefs: {
        path: ['dataPolicyOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /dataPolicyOperations/{dataPolicyOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /dataPolicyOperations/{dataPolicyOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /dataPolicyOperations/{dataPolicyOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/dataPolicyOperations/{dataPolicyOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['dataPolicyOperation-id'],
      },
      params,
    };
  },
};

export const domainDnsRecords = {
  /**
   * `GET /domainDnsRecords`
   *
   */
  list: function list(
    params?: IEndpoints['GET /domainDnsRecords']['parameters']
  ): EndpointRequest<IEndpoints['GET /domainDnsRecords']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/domainDnsRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /domainDnsRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /domainDnsRecords']['body']
  ): EndpointRequest<IEndpoints['POST /domainDnsRecords']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/domainDnsRecords',
      body,
    };
  },
  /**
   * `GET /domainDnsRecords/{domainDnsRecord-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /domainDnsRecords/{domainDnsRecord-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /domainDnsRecords/{domainDnsRecord-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/domainDnsRecords/{domainDnsRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['domainDnsRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /domainDnsRecords/{domainDnsRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /domainDnsRecords/{domainDnsRecord-id}']['body'],
    params?: IEndpoints['PATCH /domainDnsRecords/{domainDnsRecord-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /domainDnsRecords/{domainDnsRecord-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/domainDnsRecords/{domainDnsRecord-id}',
      paramDefs: {
        path: ['domainDnsRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /domainDnsRecords/{domainDnsRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /domainDnsRecords/{domainDnsRecord-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /domainDnsRecords/{domainDnsRecord-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/domainDnsRecords/{domainDnsRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['domainDnsRecord-id'],
      },
      params,
    };
  },
};

export const filterOperators = {
  /**
   * `GET /filterOperators`
   *
   */
  list: function list(
    params?: IEndpoints['GET /filterOperators']['parameters']
  ): EndpointRequest<IEndpoints['GET /filterOperators']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/filterOperators',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /filterOperators`
   *
   */
  create: function create(
    body: IEndpoints['POST /filterOperators']['body']
  ): EndpointRequest<IEndpoints['POST /filterOperators']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/filterOperators',
      body,
    };
  },
  /**
   * `GET /filterOperators/{filterOperatorSchema-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /filterOperators/{filterOperatorSchema-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /filterOperators/{filterOperatorSchema-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/filterOperators/{filterOperatorSchema-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['filterOperatorSchema-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /filterOperators/{filterOperatorSchema-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /filterOperators/{filterOperatorSchema-id}']['body'],
    params?: IEndpoints['PATCH /filterOperators/{filterOperatorSchema-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /filterOperators/{filterOperatorSchema-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/filterOperators/{filterOperatorSchema-id}',
      paramDefs: {
        path: ['filterOperatorSchema-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /filterOperators/{filterOperatorSchema-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /filterOperators/{filterOperatorSchema-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /filterOperators/{filterOperatorSchema-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/filterOperators/{filterOperatorSchema-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['filterOperatorSchema-id'],
      },
      params,
    };
  },
};

export const functions = {
  /**
   * `GET /functions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /functions']['parameters']
  ): EndpointRequest<IEndpoints['GET /functions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/functions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /functions`
   *
   */
  create: function create(
    body: IEndpoints['POST /functions']['body']
  ): EndpointRequest<IEndpoints['POST /functions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/functions',
      body,
    };
  },
  /**
   * `GET /functions/{attributeMappingFunctionSchema-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /functions/{attributeMappingFunctionSchema-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /functions/{attributeMappingFunctionSchema-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/functions/{attributeMappingFunctionSchema-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['attributeMappingFunctionSchema-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /functions/{attributeMappingFunctionSchema-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /functions/{attributeMappingFunctionSchema-id}']['body'],
    params?: IEndpoints['PATCH /functions/{attributeMappingFunctionSchema-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /functions/{attributeMappingFunctionSchema-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/functions/{attributeMappingFunctionSchema-id}',
      paramDefs: {
        path: ['attributeMappingFunctionSchema-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /functions/{attributeMappingFunctionSchema-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /functions/{attributeMappingFunctionSchema-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /functions/{attributeMappingFunctionSchema-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/functions/{attributeMappingFunctionSchema-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['attributeMappingFunctionSchema-id'],
      },
      params,
    };
  },
};

export const governanceSubjects = {
  /**
   * `GET /governanceSubjects`
   *
   */
  list: function list(
    params?: IEndpoints['GET /governanceSubjects']['parameters']
  ): EndpointRequest<IEndpoints['GET /governanceSubjects']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceSubjects',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /governanceSubjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /governanceSubjects']['body']
  ): EndpointRequest<IEndpoints['POST /governanceSubjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/governanceSubjects',
      body,
    };
  },
  /**
   * `GET /governanceSubjects/{governanceSubject-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /governanceSubjects/{governanceSubject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /governanceSubjects/{governanceSubject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceSubjects/{governanceSubject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceSubject-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /governanceSubjects/{governanceSubject-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /governanceSubjects/{governanceSubject-id}']['body'],
    params?: IEndpoints['PATCH /governanceSubjects/{governanceSubject-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /governanceSubjects/{governanceSubject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/governanceSubjects/{governanceSubject-id}',
      paramDefs: {
        path: ['governanceSubject-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /governanceSubjects/{governanceSubject-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /governanceSubjects/{governanceSubject-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /governanceSubjects/{governanceSubject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/governanceSubjects/{governanceSubject-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['governanceSubject-id'],
      },
      params,
    };
  },
};

export const identityProviders = {
  /**
   * `GET /identityProviders`
   *
   * Retrieve a list of identityProviders objects.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identityProviders']['parameters']
  ): EndpointRequest<IEndpoints['GET /identityProviders']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityProviders',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityProviders`
   *
   * Create a new identityProvider object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /identityProviders']['body']
  ): EndpointRequest<IEndpoints['POST /identityProviders']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityProviders',
      body,
    };
  },
  /**
   * `GET /identityProviders/{identityProvider-id}`
   *
   * Retrieve the properties and relationships of an identityProvider.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityProviders/{identityProvider-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /identityProviders/{identityProvider-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityProviders/{identityProvider-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['identityProvider-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityProviders/{identityProvider-id}`
   *
   * Update the properties of an identityProvider object.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /identityProviders/{identityProvider-id}']['body'],
    params?: IEndpoints['PATCH /identityProviders/{identityProvider-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /identityProviders/{identityProvider-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityProviders/{identityProvider-id}',
      paramDefs: {
        path: ['identityProvider-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityProviders/{identityProvider-id}`
   *
   * Delete an identityProvider.
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /identityProviders/{identityProvider-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /identityProviders/{identityProvider-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityProviders/{identityProvider-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['identityProvider-id'],
      },
      params,
    };
  },
};

export const messageEvents = {
  /**
   * `GET /messageEvents`
   *
   */
  list: function list(
    params?: IEndpoints['GET /messageEvents']['parameters']
  ): EndpointRequest<IEndpoints['GET /messageEvents']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/messageEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /messageEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /messageEvents']['body']
  ): EndpointRequest<IEndpoints['POST /messageEvents']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/messageEvents',
      body,
    };
  },
  /**
   * `GET /messageEvents/{messageEvent-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /messageEvents/{messageEvent-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /messageEvents/{messageEvent-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/messageEvents/{messageEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['messageEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /messageEvents/{messageEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /messageEvents/{messageEvent-id}']['body'],
    params?: IEndpoints['PATCH /messageEvents/{messageEvent-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /messageEvents/{messageEvent-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/messageEvents/{messageEvent-id}',
      paramDefs: {
        path: ['messageEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /messageEvents/{messageEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /messageEvents/{messageEvent-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /messageEvents/{messageEvent-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/messageEvents/{messageEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['messageEvent-id'],
      },
      params,
    };
  },
};

export const network = {
  /**
   * `GET /network`
   *
   */
  get: function get(
    params?: IEndpoints['GET /network']['parameters']
  ): EndpointRequest<IEndpoints['GET /network']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/network',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /network`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /network']['body']
  ): EndpointRequest<IEndpoints['PATCH /network']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/network',
      body,
    };
  },
};

export const oauth2PermissionGrants = {
  /**
   * `GET /oauth2PermissionGrants`
   *
   * Retrieve a list of oAuth2PermissionGrant objects, representing delegated permissions which have been granted for client applications to access APIs on behalf of signed-in users.
   */
  list: function list(
    params?: IEndpoints['GET /oauth2PermissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /oauth2PermissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/oauth2PermissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /oauth2PermissionGrants`
   *
   * Create a delegated permission grant, represented by an oAuth2PermissionGrant object. A delegated permission grant authorizes a client service principal (representing a client application) to access a resource service principal (representing an API), on behalf of a signed-in user, for the level of access limited by the delegated permissions which were granted.
   */
  create: function create(
    body: IEndpoints['POST /oauth2PermissionGrants']['body']
  ): EndpointRequest<IEndpoints['POST /oauth2PermissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/oauth2PermissionGrants',
      body,
    };
  },
  /**
   * `GET /oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
   *
   * Retrieve the properties of a single delegated permission grant represented by an oAuth2PermissionGrant object. An oAuth2PermissionGrant represents delegated permissions which have been granted for a client application to access an API on behalf of a signed-in user.
   */
  get: function get(
    params?: IEndpoints['GET /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['oAuth2PermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
   *
   * Update the properties of oAuth2PermissionGrant object, representing a delegated permission grant. An oAuth2PermissionGrant can be updated to change which delegated permissions are granted, by adding or removing items from the list in scopes.
   */
  update: function update(
    body: IEndpoints['PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
      paramDefs: {
        path: ['oAuth2PermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
   *
   * Delete an oAuth2PermissionGrant, representing a delegated permission grant. When a delegated permission grant is deleted, the access it granted is revoked. Existing access tokens will continue to be valid for their lifetime, but new access tokens will not be granted for the delegated permissions identified in the deleted oAuth2PermissionGrant.
   */
  del: function del(
    params?: IEndpoints['DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['oAuth2PermissionGrant-id'],
      },
      params,
    };
  },
};

export const payloadResponse = {
  /**
   * `GET /payloadResponse`
   *
   */
  get: function get(
    params?: IEndpoints['GET /payloadResponse']['parameters']
  ): EndpointRequest<IEndpoints['GET /payloadResponse']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/payloadResponse',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /payloadResponse`
   *
   */
  create: function create(
    body: IEndpoints['POST /payloadResponse']['body']
  ): EndpointRequest<IEndpoints['POST /payloadResponse']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/payloadResponse',
      body,
    };
  },
  /**
   * `GET /payloadResponse/{payloadResponse-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /payloadResponse/{payloadResponse-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /payloadResponse/{payloadResponse-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/payloadResponse/{payloadResponse-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['payloadResponse-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /payloadResponse/{payloadResponse-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /payloadResponse/{payloadResponse-id}']['body'],
    params?: IEndpoints['PATCH /payloadResponse/{payloadResponse-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /payloadResponse/{payloadResponse-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/payloadResponse/{payloadResponse-id}',
      paramDefs: {
        path: ['payloadResponse-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /payloadResponse/{payloadResponse-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /payloadResponse/{payloadResponse-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /payloadResponse/{payloadResponse-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/payloadResponse/{payloadResponse-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['payloadResponse-id'],
      },
      params,
    };
  },
};

export const privilegedOperationEvents = {
  /**
   * `GET /privilegedOperationEvents`
   *
   */
  list: function list(
    params?: IEndpoints['GET /privilegedOperationEvents']['parameters']
  ): EndpointRequest<IEndpoints['GET /privilegedOperationEvents']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedOperationEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /privilegedOperationEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /privilegedOperationEvents']['body']
  ): EndpointRequest<IEndpoints['POST /privilegedOperationEvents']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedOperationEvents',
      body,
    };
  },
  /**
   * `GET /privilegedOperationEvents/{privilegedOperationEvent-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /privilegedOperationEvents/{privilegedOperationEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedOperationEvents/{privilegedOperationEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedOperationEvents/{privilegedOperationEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedOperationEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedOperationEvents/{privilegedOperationEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedOperationEvents/{privilegedOperationEvent-id}']['body'],
    params?: IEndpoints['PATCH /privilegedOperationEvents/{privilegedOperationEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privilegedOperationEvents/{privilegedOperationEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedOperationEvents/{privilegedOperationEvent-id}',
      paramDefs: {
        path: ['privilegedOperationEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedOperationEvents/{privilegedOperationEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedOperationEvents/{privilegedOperationEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedOperationEvents/{privilegedOperationEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedOperationEvents/{privilegedOperationEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegedOperationEvent-id'],
      },
      params,
    };
  },
};

export const programControlTypes = {
  /**
   * `GET /programControlTypes`
   *
   * In the Microsoft Entra access reviews feature, list all the programControlType objects.
   */
  list: function list(
    params?: IEndpoints['GET /programControlTypes']['parameters']
  ): EndpointRequest<IEndpoints['GET /programControlTypes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/programControlTypes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /programControlTypes`
   *
   */
  create: function create(
    body: IEndpoints['POST /programControlTypes']['body']
  ): EndpointRequest<IEndpoints['POST /programControlTypes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/programControlTypes',
      body,
    };
  },
  /**
   * `GET /programControlTypes/{programControlType-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /programControlTypes/{programControlType-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /programControlTypes/{programControlType-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/programControlTypes/{programControlType-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['programControlType-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /programControlTypes/{programControlType-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /programControlTypes/{programControlType-id}']['body'],
    params?: IEndpoints['PATCH /programControlTypes/{programControlType-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /programControlTypes/{programControlType-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/programControlTypes/{programControlType-id}',
      paramDefs: {
        path: ['programControlType-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /programControlTypes/{programControlType-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /programControlTypes/{programControlType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /programControlTypes/{programControlType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/programControlTypes/{programControlType-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['programControlType-id'],
      },
      params,
    };
  },
};

export const riskDetections = {
  /**
   * `GET /riskDetections`
   *
   * Retrieve the properties of a riskDetection object.
   */
  list: function list(
    params?: IEndpoints['GET /riskDetections']['parameters']
  ): EndpointRequest<IEndpoints['GET /riskDetections']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/riskDetections',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /riskDetections`
   *
   */
  create: function create(
    body: IEndpoints['POST /riskDetections']['body']
  ): EndpointRequest<IEndpoints['POST /riskDetections']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/riskDetections',
      body,
    };
  },
  /**
   * `GET /riskDetections/{riskDetection-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /riskDetections/{riskDetection-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /riskDetections/{riskDetection-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/riskDetections/{riskDetection-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['riskDetection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /riskDetections/{riskDetection-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /riskDetections/{riskDetection-id}']['body'],
    params?: IEndpoints['PATCH /riskDetections/{riskDetection-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /riskDetections/{riskDetection-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/riskDetections/{riskDetection-id}',
      paramDefs: {
        path: ['riskDetection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /riskDetections/{riskDetection-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /riskDetections/{riskDetection-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /riskDetections/{riskDetection-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/riskDetections/{riskDetection-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['riskDetection-id'],
      },
      params,
    };
  },
};

export const schemaExtensions = {
  /**
  * `GET /schemaExtensions`
  *
  * Get a list of schemaExtension objects in your tenant. The schema extensions can be InDevelopment, Available, or Deprecated and includes schema extensions:
+ Created by any apps you own in the current tenant.
+ Owned by other apps that are marked as Available.
+ Created by other developers from other tenants and marked as Available. This is different from other APIs that only return tenant-specific data. Extension data created based on schema extension definitions is tenant-specific and can only be accessed by apps explicitly granted permission. 
  */
  list: function list(
    params?: IEndpoints['GET /schemaExtensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /schemaExtensions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/schemaExtensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
  * `POST /schemaExtensions`
  *
  * Create a new schemaExtension definition and its associated schema extension property to extend a supporting resource type. Schema extensions let you add strongly-typed custom data to a resource. The app that creates a schema extension is the owner app. Depending on the 
state of the extension, the owner app, and only the owner app, may update or delete the extension.  See examples of how to define a schema extension that describes a training course, 
use the schema extension definition to create a new group with training course data, and 
add training course data to an existing group.
  */
  create: function create(
    body: IEndpoints['POST /schemaExtensions']['body']
  ): EndpointRequest<IEndpoints['POST /schemaExtensions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/schemaExtensions',
      body,
    };
  },
  /**
   * `GET /schemaExtensions/{schemaExtension-id}`
   *
   * Get the properties of the specified schemaExtension definition.
   */
  get: function get(
    params?: IEndpoints['GET /schemaExtensions/{schemaExtension-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /schemaExtensions/{schemaExtension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/schemaExtensions/{schemaExtension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['schemaExtension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /schemaExtensions/{schemaExtension-id}`
   *
   * Update properties in the definition of the specified schemaExtension. Additive updates to the extension can only be made when the extension is in the InDevelopment or Available status. This means custom properties or target resource types cannot be removed from the definition, but new custom properties can be added and the description of the extension changed. The update applies to all the resources that are included in the targetTypes property of the extension. These resources are among the supporting resource types. For delegated flows, the signed-in user can update a schema extension as long as the owner property of the extension is set to the appId of an application the signed-in user owns. That application can be the one that initially created the extension, or some other application owned by the signed-in user.  This criteria for the owner property allows a signed-in user to make updates through other applications they don&#x27;t own, such as Microsoft Graph Explorer. When using Graph Explorer to update a schemaExtension resource, include the owner property in the PATCH request body.
   */
  update: function update(
    body: IEndpoints['PATCH /schemaExtensions/{schemaExtension-id}']['body'],
    params?: IEndpoints['PATCH /schemaExtensions/{schemaExtension-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /schemaExtensions/{schemaExtension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/schemaExtensions/{schemaExtension-id}',
      paramDefs: {
        path: ['schemaExtension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /schemaExtensions/{schemaExtension-id}`
   *
   * Delete the definition of a schema extension. In app-only scenarios, only the app that created the schema extension (owner app) can delete the schema extension definition, and only when the extension is in the InDevelopment state. In delegated scenarios, the owner of the owner app can delete the schema extension definition, and only when the extension is in the InDevelopment state.  Deleting a schema extension definition before deleting the data associated with the extension in the target resources makes the data inaccessible. To recover the data, you can recreate the schema extension definition with the same configuration, but only if you used the verified domain for the schema extension id.
   */
  del: function del(
    params?: IEndpoints['DELETE /schemaExtensions/{schemaExtension-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /schemaExtensions/{schemaExtension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/schemaExtensions/{schemaExtension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['schemaExtension-id'],
      },
      params,
    };
  },
};

export const scopedRoleMemberships = {
  /**
   * `GET /scopedRoleMemberships`
   *
   */
  list: function list(
    params?: IEndpoints['GET /scopedRoleMemberships']['parameters']
  ): EndpointRequest<IEndpoints['GET /scopedRoleMemberships']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/scopedRoleMemberships',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /scopedRoleMemberships`
   *
   */
  create: function create(
    body: IEndpoints['POST /scopedRoleMemberships']['body']
  ): EndpointRequest<IEndpoints['POST /scopedRoleMemberships']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/scopedRoleMemberships',
      body,
    };
  },
  /**
   * `GET /scopedRoleMemberships/{scopedRoleMembership-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /scopedRoleMemberships/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /scopedRoleMemberships/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/scopedRoleMemberships/{scopedRoleMembership-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['scopedRoleMembership-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /scopedRoleMemberships/{scopedRoleMembership-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /scopedRoleMemberships/{scopedRoleMembership-id}']['body'],
    params?: IEndpoints['PATCH /scopedRoleMemberships/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /scopedRoleMemberships/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/scopedRoleMemberships/{scopedRoleMembership-id}',
      paramDefs: {
        path: ['scopedRoleMembership-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /scopedRoleMemberships/{scopedRoleMembership-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /scopedRoleMemberships/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /scopedRoleMemberships/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/scopedRoleMemberships/{scopedRoleMembership-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['scopedRoleMembership-id'],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /settings`
   *
   * Retrieve a list of tenant-level or group-specific directory settings objects.
   */
  list: function list(
    params?: IEndpoints['GET /settings']['parameters']
  ): EndpointRequest<IEndpoints['GET /settings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/settings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /settings`
   *
   * Create a new directory setting based on the templates available in directorySettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
   */
  create: function create(
    body: IEndpoints['POST /settings']['body']
  ): EndpointRequest<IEndpoints['POST /settings']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/settings',
      body,
    };
  },
  /**
   * `GET /settings/{directorySetting-id}`
   *
   * Retrieve the properties of a specific directory setting object.
   */
  get: function get(
    params?: IEndpoints['GET /settings/{directorySetting-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /settings/{directorySetting-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/settings/{directorySetting-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['directorySetting-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /settings/{directorySetting-id}`
   *
   * Update the properties of a specific directory setting object.
   */
  update: function update(
    body: IEndpoints['PATCH /settings/{directorySetting-id}']['body'],
    params?: IEndpoints['PATCH /settings/{directorySetting-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /settings/{directorySetting-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/settings/{directorySetting-id}',
      paramDefs: {
        path: ['directorySetting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /settings/{directorySetting-id}`
   *
   * Delete a directory setting.
   */
  del: function del(
    params?: IEndpoints['DELETE /settings/{directorySetting-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /settings/{directorySetting-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/settings/{directorySetting-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['directorySetting-id'],
      },
      params,
    };
  },
};

export const subscribedSkus = {
  /**
   * `GET /subscribedSkus`
   *
   * Get the list of commercial subscriptions that an organization has acquired. For the mapping of license names as displayed on the Microsoft Entra admin center or the Microsoft 365 admin center against their Microsoft Graph skuId and skuPartNumber properties, see Product names and service plan identifiers for licensing.
   */
  list: function list(
    params?: IEndpoints['GET /subscribedSkus']['parameters']
  ): EndpointRequest<IEndpoints['GET /subscribedSkus']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/subscribedSkus',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /subscribedSkus`
   *
   */
  create: function create(
    body: IEndpoints['POST /subscribedSkus']['body']
  ): EndpointRequest<IEndpoints['POST /subscribedSkus']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/subscribedSkus',
      body,
    };
  },
  /**
   * `GET /subscribedSkus/{subscribedSku-id}`
   *
   * Get a specific commercial subscription that an organization has acquired.
   */
  get: function get(
    params?: IEndpoints['GET /subscribedSkus/{subscribedSku-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /subscribedSkus/{subscribedSku-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/subscribedSkus/{subscribedSku-id}',
      paramDefs: {
        query: ['$select'],
        path: ['subscribedSku-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /subscribedSkus/{subscribedSku-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /subscribedSkus/{subscribedSku-id}']['body'],
    params?: IEndpoints['PATCH /subscribedSkus/{subscribedSku-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /subscribedSkus/{subscribedSku-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/subscribedSkus/{subscribedSku-id}',
      paramDefs: {
        path: ['subscribedSku-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /subscribedSkus/{subscribedSku-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /subscribedSkus/{subscribedSku-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /subscribedSkus/{subscribedSku-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/subscribedSkus/{subscribedSku-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['subscribedSku-id'],
      },
      params,
    };
  },
};

export const teamsTemplates = {
  /**
   * `GET /teamsTemplates`
   *
   */
  list: function list(
    params?: IEndpoints['GET /teamsTemplates']['parameters']
  ): EndpointRequest<IEndpoints['GET /teamsTemplates']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamsTemplates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /teamsTemplates`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamsTemplates']['body']
  ): EndpointRequest<IEndpoints['POST /teamsTemplates']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamsTemplates',
      body,
    };
  },
  /**
   * `GET /teamsTemplates/{teamsTemplate-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /teamsTemplates/{teamsTemplate-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /teamsTemplates/{teamsTemplate-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamsTemplates/{teamsTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamsTemplate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teamsTemplates/{teamsTemplate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teamsTemplates/{teamsTemplate-id}']['body'],
    params?: IEndpoints['PATCH /teamsTemplates/{teamsTemplate-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /teamsTemplates/{teamsTemplate-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teamsTemplates/{teamsTemplate-id}',
      paramDefs: {
        path: ['teamsTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamsTemplates/{teamsTemplate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamsTemplates/{teamsTemplate-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /teamsTemplates/{teamsTemplate-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamsTemplates/{teamsTemplate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamsTemplate-id'],
      },
      params,
    };
  },
};
