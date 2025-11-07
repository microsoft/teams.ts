export * as admin from './admin';
export * as agreements from './agreements';
export * as appCatalogs from './appCatalogs';
export * as applicationTemplates from './applicationTemplates';
export * as applications from './applications';
export * as auditLogs from './auditLogs';
export * as authenticationMethodsPolicy from './authenticationMethodsPolicy';
export * as chats from './chats';
export * as communications from './communications';
export * as connections from './connections';
export * as contacts from './contacts';
export * as contracts from './contracts';
export * as copilot from './copilot';
export * as deviceAppManagement from './deviceAppManagement';
export * as deviceManagement from './deviceManagement';
export * as devices from './devices';
export * as directory from './directory';
export * as directoryObjects from './directoryObjects';
export * as directoryRoleTemplates from './directoryRoleTemplates';
export * as directoryRoles from './directoryRoles';
export * as domains from './domains';
export * as drives from './drives';
export * as education from './education';
export * as employeeExperience from './employeeExperience';
export * as external from './external';
export * as groupLifecyclePolicies from './groupLifecyclePolicies';
export * as groupSettingTemplates from './groupSettingTemplates';
export * as groups from './groups';
export * as identity from './identity';
export * as identityGovernance from './identityGovernance';
export * as identityProtection from './identityProtection';
export * as informationProtection from './informationProtection';
export * as invitations from './invitations';
export * as me from './me';
export * as organization from './organization';
export * as permissionGrants from './permissionGrants';
export * as planner from './planner';
export * as policies from './policies';
export * as print from './print';
export * as privacy from './privacy';
export * as reports from './reports';
export * as roleManagement from './roleManagement';
export * as search from './search';
export * as security from './security';
export * as servicePrincipals from './servicePrincipals';
export * as shares from './shares';
export * as sites from './sites';
export * as solutions from './solutions';
export * as storage from './storage';
export * as subscriptions from './subscriptions';
export * as teams from './teams';
export * as teamwork from './teamwork';
export * as tenantRelationships from './tenantRelationships';
export * as users from './users';

import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
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
  'GET /compliance': Operation<'/compliance', 'get'>;
  'PATCH /compliance': Operation<'/compliance', 'patch'>;
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
  'GET /groupSettings': Operation<'/groupSettings', 'get'>;
  'POST /groupSettings': Operation<'/groupSettings', 'post'>;
  'GET /groupSettings/{groupSetting-id}': Operation<'/groupSettings/{groupSetting-id}', 'get'>;
  'PATCH /groupSettings/{groupSetting-id}': Operation<'/groupSettings/{groupSetting-id}', 'patch'>;
  'DELETE /groupSettings/{groupSetting-id}': Operation<
    '/groupSettings/{groupSetting-id}',
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
  'POST /places': Operation<'/places', 'post'>;
  'PATCH /places/{place-id}': Operation<'/places/{place-id}', 'patch'>;
  'DELETE /places/{place-id}': Operation<'/places/{place-id}', 'delete'>;
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

export const agreementAcceptances = {
  /**
   * `GET /agreementAcceptances`
   *
   */
  list: function list(
    params?: IEndpoints['GET /agreementAcceptances']['parameters']
  ): EndpointRequest<IEndpoints['GET /agreementAcceptances']['response']> {
    return {
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

export const authenticationMethodConfigurations = {
  /**
   * `GET /authenticationMethodConfigurations`
   *
   */
  list: function list(
    params?: IEndpoints['GET /authenticationMethodConfigurations']['parameters']
  ): EndpointRequest<IEndpoints['GET /authenticationMethodConfigurations']['response']> {
    return {
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

export const certificateBasedAuthConfiguration = {
  /**
   * `GET /certificateBasedAuthConfiguration`
   *
   */
  get: function get(
    params?: IEndpoints['GET /certificateBasedAuthConfiguration']['parameters']
  ): EndpointRequest<IEndpoints['GET /certificateBasedAuthConfiguration']['response']> {
    return {
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

export const compliance = {
  /**
   * `GET /compliance`
   *
   */
  get: function get(
    params?: IEndpoints['GET /compliance']['parameters']
  ): EndpointRequest<IEndpoints['GET /compliance']['response']> {
    return {
      method: 'get',
      path: '/compliance',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /compliance`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /compliance']['body']
  ): EndpointRequest<IEndpoints['PATCH /compliance']['response']> {
    return {
      method: 'patch',
      path: '/compliance',
      body,
    };
  },
};

export const dataPolicyOperations = {
  /**
   * `GET /dataPolicyOperations`
   *
   * Retrieve the properties of a dataPolicyOperation object.
   */
  list: function list(
    params?: IEndpoints['GET /dataPolicyOperations']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataPolicyOperations']['response']> {
    return {
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
      method: 'post',
      path: '/dataPolicyOperations',
      body,
    };
  },
  /**
   * `GET /dataPolicyOperations/{dataPolicyOperation-id}`
   *
   * Retrieve the properties of a dataPolicyOperation object.
   */
  get: function get(
    params?: IEndpoints['GET /dataPolicyOperations/{dataPolicyOperation-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /dataPolicyOperations/{dataPolicyOperation-id}']['response']> {
    return {
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

export const groupSettings = {
  /**
   * `GET /groupSettings`
   *
   * Retrieve a list of tenant-level or group-specific group settings objects.
   */
  list: function list(
    params?: IEndpoints['GET /groupSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /groupSettings']['response']> {
    return {
      method: 'get',
      path: '/groupSettings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /groupSettings`
   *
   * Create a new group setting based on the templates available in groupSettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
   */
  create: function create(
    body: IEndpoints['POST /groupSettings']['body']
  ): EndpointRequest<IEndpoints['POST /groupSettings']['response']> {
    return {
      method: 'post',
      path: '/groupSettings',
      body,
    };
  },
  /**
   * `GET /groupSettings/{groupSetting-id}`
   *
   * Retrieve the properties of a specific group setting object. The setting can be a tenant-level or group-specific setting.
   */
  get: function get(
    params?: IEndpoints['GET /groupSettings/{groupSetting-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /groupSettings/{groupSetting-id}']['response']> {
    return {
      method: 'get',
      path: '/groupSettings/{groupSetting-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupSetting-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groupSettings/{groupSetting-id}`
   *
   * Update the properties of a groupSetting object for tenant-wide group settings or a specific group setting.
   */
  update: function update(
    body: IEndpoints['PATCH /groupSettings/{groupSetting-id}']['body'],
    params?: IEndpoints['PATCH /groupSettings/{groupSetting-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /groupSettings/{groupSetting-id}']['response']> {
    return {
      method: 'patch',
      path: '/groupSettings/{groupSetting-id}',
      paramDefs: {
        path: ['groupSetting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groupSettings/{groupSetting-id}`
   *
   * Delete a tenant-level or group-specific groupSetting object.
   */
  del: function del(
    params?: IEndpoints['DELETE /groupSettings/{groupSetting-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /groupSettings/{groupSetting-id}']['response']> {
    return {
      method: 'delete',
      path: '/groupSettings/{groupSetting-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['groupSetting-id'],
      },
      params,
    };
  },
};

export const identityProviders = {
  /**
   * `GET /identityProviders`
   *
   * Retrieve all identityProviders in the directory.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identityProviders']['parameters']
  ): EndpointRequest<IEndpoints['GET /identityProviders']['response']> {
    return {
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
   * Create a new identityProvider by specifying display name, identityProvider type, client ID, and client secret.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /identityProviders']['body']
  ): EndpointRequest<IEndpoints['POST /identityProviders']['response']> {
    return {
      method: 'post',
      path: '/identityProviders',
      body,
    };
  },
  /**
   * `GET /identityProviders/{identityProvider-id}`
   *
   * Retrieve the properties of an existing identityProvider.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityProviders/{identityProvider-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /identityProviders/{identityProvider-id}']['response']> {
    return {
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
   * Update properties in an existing identityProvider.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /identityProviders/{identityProvider-id}']['body'],
    params?: IEndpoints['PATCH /identityProviders/{identityProvider-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /identityProviders/{identityProvider-id}']['response']> {
    return {
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
   * Delete an existing identityProvider.
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /identityProviders/{identityProvider-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /identityProviders/{identityProvider-id}']['response']> {
    return {
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
   * Create a delegated permission grant represented by an oAuth2PermissionGrant object. A delegated permission grant authorizes a client service principal (representing a client application) to access a resource service principal (representing an API), on behalf of a signed-in user, for the level of access limited by the delegated permissions which were granted.
   */
  create: function create(
    body: IEndpoints['POST /oauth2PermissionGrants']['body']
  ): EndpointRequest<IEndpoints['POST /oauth2PermissionGrants']['response']> {
    return {
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
   * Delete a delegated permission grant, represented by an oAuth2PermissionGrant object. When a delegated permission grant is deleted, the access it granted is revoked. Existing access tokens will continue to be valid for their lifetime, but new access tokens will not be granted for the delegated permissions identified in the deleted oAuth2PermissionGrant.
   */
  del: function del(
    params?: IEndpoints['DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
  > {
    return {
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

export const places = {
  /**
   * `POST /places`
   *
   */
  create: function create(
    body: IEndpoints['POST /places']['body']
  ): EndpointRequest<IEndpoints['POST /places']['response']> {
    return {
      method: 'post',
      path: '/places',
      body,
    };
  },
  /**
   * `PATCH /places/{place-id}`
   *
   * Update the properties of place object, which can be a room or roomList. You can identify the room or roomList by specifying the id or emailAddress property.
   */
  update: function update(
    body: IEndpoints['PATCH /places/{place-id}']['body'],
    params?: IEndpoints['PATCH /places/{place-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /places/{place-id}']['response']> {
    return {
      method: 'patch',
      path: '/places/{place-id}',
      paramDefs: {
        path: ['place-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /places/{place-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /places/{place-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /places/{place-id}']['response']> {
    return {
      method: 'delete',
      path: '/places/{place-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['place-id'],
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
   */
  list: function list(
    params?: IEndpoints['GET /schemaExtensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /schemaExtensions']['response']> {
    return {
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
      method: 'post',
      path: '/schemaExtensions',
      body,
    };
  },
  /**
   * `GET /schemaExtensions/{schemaExtension-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /schemaExtensions/{schemaExtension-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /schemaExtensions/{schemaExtension-id}']['response']> {
    return {
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
   * Delete the definition of a schema extension. Only the app that created the schema extension (owner app) can delete the schema extension definition, and only when the extension is in the InDevelopment state. Deleting a schema extension definition does not affect accessing custom data that has been added to resource instances based on that definition.
   */
  del: function del(
    params?: IEndpoints['DELETE /schemaExtensions/{schemaExtension-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /schemaExtensions/{schemaExtension-id}']['response']> {
    return {
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
