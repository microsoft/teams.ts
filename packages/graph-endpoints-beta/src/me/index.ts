export * as activities from './activities';
export * as adhocCalls from './adhocCalls';
export * as analytics from './analytics';
export * as appConsentRequestsForApproval from './appConsentRequestsForApproval';
export * as approvals from './approvals';
export * as authentication from './authentication';
export * as calendar from './calendar';
export * as calendarGroups from './calendarGroups';
export * as calendars from './calendars';
export * as chats from './chats';
export * as cloudClipboard from './cloudClipboard';
export * as cloudPCs from './cloudPCs';
export * as communications from './communications';
export * as contactFolders from './contactFolders';
export * as contacts from './contacts';
export * as dataSecurityAndGovernance from './dataSecurityAndGovernance';
export * as deviceEnrollmentConfigurations from './deviceEnrollmentConfigurations';
export * as devices from './devices';
export * as employeeExperience from './employeeExperience';
export * as events from './events';
export * as followedSites from './followedSites';
export * as inferenceClassification from './inferenceClassification';
export * as informationProtection from './informationProtection';
export * as insights from './insights';
export * as joinedGroups from './joinedGroups';
export * as mailFolders from './mailFolders';
export * as managedDevices from './managedDevices';
export * as messages from './messages';
export * as mobileAppTroubleshootingEvents from './mobileAppTroubleshootingEvents';
export * as onenote from './onenote';
export * as onlineMeetings from './onlineMeetings';
export * as outlook from './outlook';
export * as pendingAccessReviewInstances from './pendingAccessReviewInstances';
export * as planner from './planner';
export * as presence from './presence';
export * as profile from './profile';
export * as security from './security';
export * as settings from './settings';
export * as solutions from './solutions';
export * as teamwork from './teamwork';
export * as todo from './todo';
export * as virtualEvents from './virtualEvents';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me': Operation<'/me', 'get'>;
  'PATCH /me': Operation<'/me', 'patch'>;
  'GET /me/agreementAcceptances': Operation<'/me/agreementAcceptances', 'get'>;
  'GET /me/agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/me/agreementAcceptances/{agreementAcceptance-id}',
    'get'
  >;
  'GET /me/appRoleAssignedResources': Operation<'/me/appRoleAssignedResources', 'get'>;
  'GET /me/appRoleAssignedResources/{servicePrincipal-id}': Operation<
    '/me/appRoleAssignedResources/{servicePrincipal-id}',
    'get'
  >;
  'GET /me/appRoleAssignments': Operation<'/me/appRoleAssignments', 'get'>;
  'POST /me/appRoleAssignments': Operation<'/me/appRoleAssignments', 'post'>;
  'GET /me/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/me/appRoleAssignments/{appRoleAssignment-id}',
    'get'
  >;
  'PATCH /me/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/me/appRoleAssignments/{appRoleAssignment-id}',
    'patch'
  >;
  'DELETE /me/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/me/appRoleAssignments/{appRoleAssignment-id}',
    'delete'
  >;
  'POST /me/assignLicense': Operation<'/me/assignLicense', 'post'>;
  'GET /me/calendarView': Operation<'/me/calendarView', 'get'>;
  'POST /me/changePassword': Operation<'/me/changePassword', 'post'>;
  'POST /me/checkMemberGroups': Operation<'/me/checkMemberGroups', 'post'>;
  'POST /me/checkMemberObjects': Operation<'/me/checkMemberObjects', 'post'>;
  'POST /me/convertExternalToInternalMemberUser': Operation<
    '/me/convertExternalToInternalMemberUser',
    'post'
  >;
  'GET /me/createdObjects': Operation<'/me/createdObjects', 'get'>;
  'GET /me/createdObjects/{directoryObject-id}': Operation<
    '/me/createdObjects/{directoryObject-id}',
    'get'
  >;
  'POST /me/deletePasswordSingleSignOnCredentials': Operation<
    '/me/deletePasswordSingleSignOnCredentials',
    'post'
  >;
  'GET /me/deviceManagementTroubleshootingEvents': Operation<
    '/me/deviceManagementTroubleshootingEvents',
    'get'
  >;
  'POST /me/deviceManagementTroubleshootingEvents': Operation<
    '/me/deviceManagementTroubleshootingEvents',
    'post'
  >;
  'GET /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'get'
  >;
  'PATCH /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'patch'
  >;
  'DELETE /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'delete'
  >;
  'GET /me/directReports': Operation<'/me/directReports', 'get'>;
  'GET /me/directReports/{directoryObject-id}': Operation<
    '/me/directReports/{directoryObject-id}',
    'get'
  >;
  'GET /me/drive': Operation<'/me/drive', 'get'>;
  'GET /me/drives': Operation<'/me/drives', 'get'>;
  'GET /me/drives/{drive-id}': Operation<'/me/drives/{drive-id}', 'get'>;
  'POST /me/exportPersonalData': Operation<'/me/exportPersonalData', 'post'>;
  'GET /me/extensions': Operation<'/me/extensions', 'get'>;
  'POST /me/extensions': Operation<'/me/extensions', 'post'>;
  'GET /me/extensions/{extension-id}': Operation<'/me/extensions/{extension-id}', 'get'>;
  'PATCH /me/extensions/{extension-id}': Operation<'/me/extensions/{extension-id}', 'patch'>;
  'DELETE /me/extensions/{extension-id}': Operation<'/me/extensions/{extension-id}', 'delete'>;
  'POST /me/findMeetingTimes': Operation<'/me/findMeetingTimes', 'post'>;
  'POST /me/getMailTips': Operation<'/me/getMailTips', 'post'>;
  'POST /me/getMemberGroups': Operation<'/me/getMemberGroups', 'post'>;
  'POST /me/getMemberObjects': Operation<'/me/getMemberObjects', 'post'>;
  'POST /me/getPasswordSingleSignOnCredentials': Operation<
    '/me/getPasswordSingleSignOnCredentials',
    'post'
  >;
  'POST /me/invalidateAllRefreshTokens': Operation<'/me/invalidateAllRefreshTokens', 'post'>;
  'GET /me/invitedBy': Operation<'/me/invitedBy', 'get'>;
  'GET /me/joinedTeams': Operation<'/me/joinedTeams', 'get'>;
  'GET /me/joinedTeams/{team-id}': Operation<'/me/joinedTeams/{team-id}', 'get'>;
  'GET /me/licenseDetails': Operation<'/me/licenseDetails', 'get'>;
  'POST /me/licenseDetails': Operation<'/me/licenseDetails', 'post'>;
  'GET /me/licenseDetails/{licenseDetails-id}': Operation<
    '/me/licenseDetails/{licenseDetails-id}',
    'get'
  >;
  'PATCH /me/licenseDetails/{licenseDetails-id}': Operation<
    '/me/licenseDetails/{licenseDetails-id}',
    'patch'
  >;
  'DELETE /me/licenseDetails/{licenseDetails-id}': Operation<
    '/me/licenseDetails/{licenseDetails-id}',
    'delete'
  >;
  'GET /me/mailboxSettings': Operation<'/me/mailboxSettings', 'get'>;
  'PATCH /me/mailboxSettings': Operation<'/me/mailboxSettings', 'patch'>;
  'GET /me/managedAppLogCollectionRequests': Operation<
    '/me/managedAppLogCollectionRequests',
    'get'
  >;
  'POST /me/managedAppLogCollectionRequests': Operation<
    '/me/managedAppLogCollectionRequests',
    'post'
  >;
  'GET /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'get'
  >;
  'PATCH /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'patch'
  >;
  'DELETE /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'delete'
  >;
  'GET /me/managedAppRegistrations': Operation<'/me/managedAppRegistrations', 'get'>;
  'GET /me/managedAppRegistrations/{managedAppRegistration-id}': Operation<
    '/me/managedAppRegistrations/{managedAppRegistration-id}',
    'get'
  >;
  'GET /me/manager': Operation<'/me/manager', 'get'>;
  'GET /me/memberOf': Operation<'/me/memberOf', 'get'>;
  'GET /me/memberOf/{directoryObject-id}': Operation<'/me/memberOf/{directoryObject-id}', 'get'>;
  'GET /me/mobileAppIntentAndStates': Operation<'/me/mobileAppIntentAndStates', 'get'>;
  'POST /me/mobileAppIntentAndStates': Operation<'/me/mobileAppIntentAndStates', 'post'>;
  'GET /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'get'
  >;
  'PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'patch'
  >;
  'DELETE /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'delete'
  >;
  'GET /me/notifications': Operation<'/me/notifications', 'get'>;
  'POST /me/notifications': Operation<'/me/notifications', 'post'>;
  'GET /me/notifications/{notification-id}': Operation<
    '/me/notifications/{notification-id}',
    'get'
  >;
  'PATCH /me/notifications/{notification-id}': Operation<
    '/me/notifications/{notification-id}',
    'patch'
  >;
  'DELETE /me/notifications/{notification-id}': Operation<
    '/me/notifications/{notification-id}',
    'delete'
  >;
  'GET /me/oauth2PermissionGrants': Operation<'/me/oauth2PermissionGrants', 'get'>;
  'GET /me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'get'
  >;
  'GET /me/onPremisesSyncBehavior': Operation<'/me/onPremisesSyncBehavior', 'get'>;
  'PATCH /me/onPremisesSyncBehavior': Operation<'/me/onPremisesSyncBehavior', 'patch'>;
  'DELETE /me/onPremisesSyncBehavior': Operation<'/me/onPremisesSyncBehavior', 'delete'>;
  'GET /me/ownedDevices': Operation<'/me/ownedDevices', 'get'>;
  'GET /me/ownedDevices/{directoryObject-id}': Operation<
    '/me/ownedDevices/{directoryObject-id}',
    'get'
  >;
  'GET /me/ownedObjects': Operation<'/me/ownedObjects', 'get'>;
  'GET /me/ownedObjects/{directoryObject-id}': Operation<
    '/me/ownedObjects/{directoryObject-id}',
    'get'
  >;
  'GET /me/people': Operation<'/me/people', 'get'>;
  'GET /me/people/{person-id}': Operation<'/me/people/{person-id}', 'get'>;
  'GET /me/permissionGrants': Operation<'/me/permissionGrants', 'get'>;
  'POST /me/permissionGrants': Operation<'/me/permissionGrants', 'post'>;
  'GET /me/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /me/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'DELETE /me/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /me/photo': Operation<'/me/photo', 'get'>;
  'PATCH /me/photo': Operation<'/me/photo', 'patch'>;
  'DELETE /me/photo': Operation<'/me/photo', 'delete'>;
  'GET /me/photos': Operation<'/me/photos', 'get'>;
  'GET /me/photos/{profilePhoto-id}': Operation<'/me/photos/{profilePhoto-id}', 'get'>;
  'GET /me/registeredDevices': Operation<'/me/registeredDevices', 'get'>;
  'GET /me/registeredDevices/{directoryObject-id}': Operation<
    '/me/registeredDevices/{directoryObject-id}',
    'get'
  >;
  'POST /me/removeAllDevicesFromManagement': Operation<
    '/me/removeAllDevicesFromManagement',
    'post'
  >;
  'POST /me/reprocessLicenseAssignment': Operation<'/me/reprocessLicenseAssignment', 'post'>;
  'POST /me/restore': Operation<'/me/restore', 'post'>;
  'POST /me/retryServiceProvisioning': Operation<'/me/retryServiceProvisioning', 'post'>;
  'POST /me/revokeSignInSessions': Operation<'/me/revokeSignInSessions', 'post'>;
  'GET /me/scopedRoleMemberOf': Operation<'/me/scopedRoleMemberOf', 'get'>;
  'POST /me/scopedRoleMemberOf': Operation<'/me/scopedRoleMemberOf', 'post'>;
  'GET /me/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'patch'
  >;
  'DELETE /me/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'delete'
  >;
  'POST /me/sendMail': Operation<'/me/sendMail', 'post'>;
  'GET /me/serviceProvisioningErrors': Operation<'/me/serviceProvisioningErrors', 'get'>;
  'GET /me/sponsors': Operation<'/me/sponsors', 'get'>;
  'GET /me/sponsors/{directoryObject-id}': Operation<'/me/sponsors/{directoryObject-id}', 'get'>;
  'GET /me/transitiveMemberOf': Operation<'/me/transitiveMemberOf', 'get'>;
  'GET /me/transitiveMemberOf/{directoryObject-id}': Operation<
    '/me/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
  'GET /me/transitiveReports': Operation<'/me/transitiveReports', 'get'>;
  'GET /me/transitiveReports/{directoryObject-id}': Operation<
    '/me/transitiveReports/{directoryObject-id}',
    'get'
  >;
  'POST /me/translateExchangeIds': Operation<'/me/translateExchangeIds', 'post'>;
  'POST /me/unblockManagedApps': Operation<'/me/unblockManagedApps', 'post'>;
  'GET /me/usageRights': Operation<'/me/usageRights', 'get'>;
  'POST /me/usageRights': Operation<'/me/usageRights', 'post'>;
  'GET /me/usageRights/{usageRight-id}': Operation<'/me/usageRights/{usageRight-id}', 'get'>;
  'PATCH /me/usageRights/{usageRight-id}': Operation<'/me/usageRights/{usageRight-id}', 'patch'>;
  'DELETE /me/usageRights/{usageRight-id}': Operation<'/me/usageRights/{usageRight-id}', 'delete'>;
  'GET /me/windowsInformationProtectionDeviceRegistrations': Operation<
    '/me/windowsInformationProtectionDeviceRegistrations',
    'get'
  >;
  'GET /me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}': Operation<
    '/me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    'get'
  >;
  'POST /me/wipeAndBlockManagedApps': Operation<'/me/wipeAndBlockManagedApps', 'post'>;
  'POST /me/wipeManagedAppRegistrationByDeviceTag': Operation<
    '/me/wipeManagedAppRegistrationByDeviceTag',
    'post'
  >;
  'POST /me/wipeManagedAppRegistrationsByAzureAdDeviceId': Operation<
    '/me/wipeManagedAppRegistrationsByAzureAdDeviceId',
    'post'
  >;
  'POST /me/wipeManagedAppRegistrationsByDeviceTag': Operation<
    '/me/wipeManagedAppRegistrationsByDeviceTag',
    'post'
  >;
}

/**
 * `GET /me`
 *
 * Retrieve the properties and relationships of user object. This operation returns by default only a subset of the more commonly used properties for each user. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation for the user and specify the properties in a $select OData query option. Because the user resource supports extensions, you can also use the GET operation to get custom properties and extension data in a user instance. Customers through Microsoft Entra ID for customers can also use this API operation to retrieve their details.
 */
export function get(
  params?: IEndpoints['GET /me']['parameters']
): EndpointRequest<IEndpoints['GET /me']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me',
    paramDefs: {
      header: ['ConsistencyLevel'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me`
 *
 * Update the properties of a user object.
 */
export function update(
  body: IEndpoints['PATCH /me']['body']
): EndpointRequest<IEndpoints['PATCH /me']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me',
    body,
  };
}

export const agreementAcceptances = {
  /**
   * `GET /me/agreementAcceptances`
   *
   * Allows the signed-in user to retrieve their agreementAcceptance objects.
   */
  list: function list(
    params?: IEndpoints['GET /me/agreementAcceptances']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/agreementAcceptances']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/agreementAcceptances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/agreementAcceptances/{agreementAcceptance-id}`
   *
   * The user&#x27;s terms of use acceptance statuses. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/agreementAcceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/agreementAcceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/agreementAcceptances/{agreementAcceptance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['agreementAcceptance-id'],
      },
      params,
    };
  },
};

export const appRoleAssignedResources = {
  /**
   * `GET /me/appRoleAssignedResources`
   *
   * Get the service principals to which the user has an app role assignment either directly or through group membership.
   */
  list: function list(
    params?: IEndpoints['GET /me/appRoleAssignedResources']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/appRoleAssignedResources']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/appRoleAssignedResources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/appRoleAssignedResources/{servicePrincipal-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/appRoleAssignedResources/{servicePrincipal-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/appRoleAssignedResources/{servicePrincipal-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/appRoleAssignedResources/{servicePrincipal-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
};

export const appRoleAssignments = {
  /**
   * `GET /me/appRoleAssignments`
   *
   * Represents the app roles a user has been granted for an application. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /me/appRoleAssignments']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/appRoleAssignments']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/appRoleAssignments',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/appRoleAssignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/appRoleAssignments']['body']
  ): EndpointRequest<IEndpoints['POST /me/appRoleAssignments']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/appRoleAssignments',
      body,
    };
  },
  /**
   * `GET /me/appRoleAssignments/{appRoleAssignment-id}`
   *
   * Represents the app roles a user has been granted for an application. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /me/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/appRoleAssignments/{appRoleAssignment-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['appRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/appRoleAssignments/{appRoleAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/appRoleAssignments/{appRoleAssignment-id}']['body'],
    params?: IEndpoints['PATCH /me/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        path: ['appRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/appRoleAssignments/{appRoleAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['appRoleAssignment-id'],
      },
      params,
    };
  },
};

export const assignLicense = {
  /**
   * `POST /me/assignLicense`
   *
   * Add or remove licenses for the user to enable or disable their use of Microsoft cloud offerings that the company has licenses to. For example, an organization can have a Microsoft 365 Enterprise E3 subscription with 100 licenses, and this request assigns one of those licenses to a specific user. You can also enable and disable specific plans associated with a subscription. Direct user licensing is an alternative to group-based licensing. To get the subscriptions available in the directory, perform a GET subscribedSkus request.
   */
  create: function create(
    body: IEndpoints['POST /me/assignLicense']['body']
  ): EndpointRequest<IEndpoints['POST /me/assignLicense']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/assignLicense',
      body,
    };
  },
};

export const calendarView = {
  /**
  * `GET /me/calendarView`
  *
  * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the user&#x27;s default calendar,
or from some other calendar of the user&#x27;s.
  */
  get: function get(
    params?: IEndpoints['GET /me/calendarView']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/calendarView']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/calendarView',
      paramDefs: {
        query: [
          'startDateTime',
          'endDateTime',
          '$top',
          '$skip',
          '$search',
          '$filter',
          '$count',
          '$orderby',
          '$select',
          '$expand',
        ],
      },
      params,
    };
  },
};

export const changePassword = {
  /**
  * `POST /me/changePassword`
  *
  * Update the signed-in user&#x27;s password. Any user can update their password without belonging to any administrator role.
To update another user&#x27;s password in either delegated or app-only scenarios, update the passwordProfile property of the user instead. See Example 3: Update the passwordProfile of a user and reset their password.
  */
  create: function create(
    body: IEndpoints['POST /me/changePassword']['body']
  ): EndpointRequest<IEndpoints['POST /me/changePassword']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/changePassword',
      body,
    };
  },
};

export const checkMemberGroups = {
  /**
  * `POST /me/checkMemberGroups`
  *
  * Check for membership in a specified list of group IDs, and return from that list the IDs of groups where a specified object is a member. The specified object can be of one of the following types:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Microsoft Entra ID. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.
  */
  create: function create(
    body: IEndpoints['POST /me/checkMemberGroups']['body']
  ): EndpointRequest<IEndpoints['POST /me/checkMemberGroups']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/checkMemberGroups',
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
  * `POST /me/checkMemberObjects`
  *
  * Check for membership in a list of group IDs, administrative unit IDs, or directory role IDs, for the IDs of the specified 
- user
- group
- service principal
- organizational contact
- device
- directory object. This method is transitive.
  */
  create: function create(
    body: IEndpoints['POST /me/checkMemberObjects']['body']
  ): EndpointRequest<IEndpoints['POST /me/checkMemberObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/checkMemberObjects',
      body,
    };
  },
};

export const convertExternalToInternalMemberUser = {
  /**
   * `POST /me/convertExternalToInternalMemberUser`
   *
   * Convert an externally authenticated user into an internal user. The user is able to sign into the host tenant as an internal user and access resources as a member. For more information about this conversion, see Convert external users to internal users.
   */
  create: function create(
    body: IEndpoints['POST /me/convertExternalToInternalMemberUser']['body']
  ): EndpointRequest<IEndpoints['POST /me/convertExternalToInternalMemberUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/convertExternalToInternalMemberUser',
      body,
    };
  },
};

export const createdObjects = {
  /**
   * `GET /me/createdObjects`
   *
   * Get a list of directory objects that were created by the user. This API returns only those directory objects that were created by a user who isn&#x27;t in any administrator role; otherwise, it returns an empty object.
   */
  list: function list(
    params?: IEndpoints['GET /me/createdObjects']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/createdObjects']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/createdObjects',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/createdObjects/{directoryObject-id}`
   *
   * Directory objects that the user created. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/createdObjects/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/createdObjects/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/createdObjects/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const deletePasswordSingleSignOnCredentials = {
  /**
   * `POST /me/deletePasswordSingleSignOnCredentials`
   *
   * Delete the password-based single sign-on credentials for a given user to a given service principal.
   */
  create: function create(
    body: IEndpoints['POST /me/deletePasswordSingleSignOnCredentials']['body']
  ): EndpointRequest<IEndpoints['POST /me/deletePasswordSingleSignOnCredentials']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/deletePasswordSingleSignOnCredentials',
      body,
    };
  },
};

export const deviceManagementTroubleshootingEvents = {
  /**
   * `GET /me/deviceManagementTroubleshootingEvents`
   *
   * The list of troubleshooting events for this user.
   */
  list: function list(
    params?: IEndpoints['GET /me/deviceManagementTroubleshootingEvents']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/deviceManagementTroubleshootingEvents']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/deviceManagementTroubleshootingEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/deviceManagementTroubleshootingEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/deviceManagementTroubleshootingEvents']['body']
  ): EndpointRequest<IEndpoints['POST /me/deviceManagementTroubleshootingEvents']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/deviceManagementTroubleshootingEvents',
      body,
    };
  },
  /**
   * `GET /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
   *
   * The list of troubleshooting events for this user.
   */
  get: function get(
    params?: IEndpoints['GET /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementTroubleshootingEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['body'],
    params?: IEndpoints['PATCH /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
      paramDefs: {
        path: ['deviceManagementTroubleshootingEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementTroubleshootingEvent-id'],
      },
      params,
    };
  },
};

export const directReports = {
  /**
   * `GET /me/directReports`
   *
   * Get a user&#x27;s direct reports. Returns the users and contacts for whom this user is assigned as manager. This API doesn&#x27;t support getting the direct report chain beyond the specified user&#x27;s direct reports.
   */
  list: function list(
    params?: IEndpoints['GET /me/directReports']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/directReports']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/directReports',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/directReports/{directoryObject-id}`
   *
   * The users and contacts that report to the user. (The users and contacts with their manager property set to this user.) Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /me/directReports/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/directReports/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/directReports/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const drive = {
  /**
   * `GET /me/drive`
   *
   * Retrieve the properties and relationships of a drive resource. A drive is the top-level container for a file system, such as OneDrive or SharePoint document libraries.
   */
  get: function get(
    params?: IEndpoints['GET /me/drive']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/drive']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/drive',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
};

export const drives = {
  /**
   * `GET /me/drives`
   *
   * Retrieve the list of drive resources available for a target user, group, or site.
   */
  list: function list(
    params?: IEndpoints['GET /me/drives']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/drives']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/drives',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/drives/{drive-id}`
   *
   * A collection of drives available for this user. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/drives/{drive-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/drives/{drive-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/drives/{drive-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id'],
      },
      params,
    };
  },
};

export const exportPersonalData = {
  /**
   * `POST /me/exportPersonalData`
   *
   * Submit a data policy operation request from a company administrator or an application to export an organizational user&#x27;s data. This data includes the user&#x27;s data stored in OneDrive and their activity reports. For more information about exporting data while complying with regulations, see Data Subject Requests and the GDPR and CCPA.
   */
  create: function create(
    body: IEndpoints['POST /me/exportPersonalData']['body']
  ): EndpointRequest<IEndpoints['POST /me/exportPersonalData']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/exportPersonalData',
      body,
    };
  },
};

export const extensions = {
  /**
   * `GET /me/extensions`
   *
   * The collection of open extensions defined for the user. Supports $expand. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/extensions']['body']
  ): EndpointRequest<IEndpoints['POST /me/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/extensions',
      body,
    };
  },
  /**
   * `GET /me/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the user. Supports $expand. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/extensions/{extension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /me/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/extensions/{extension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/extensions/{extension-id}',
      paramDefs: {
        path: ['extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/extensions/{extension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['extension-id'],
      },
      params,
    };
  },
};

export const findMeetingTimes = {
  /**
  * `POST /me/findMeetingTimes`
  *
  * Suggest meeting times and locations based on organizer and attendee availability, and time or location constraints specified as parameters. If findMeetingTimes cannot return any meeting suggestions, the response would indicate a reason in the emptySuggestionsReason property.
Based on this value, you can better adjust the parameters and call findMeetingTimes again. The algorithm used to suggest meeting times and locations undergoes fine-tuning from time to time. In scenarios like test environments where the input parameters and calendar data remain static, expect that the suggested results may differ over time.
  */
  create: function create(
    body: IEndpoints['POST /me/findMeetingTimes']['body']
  ): EndpointRequest<IEndpoints['POST /me/findMeetingTimes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/findMeetingTimes',
      body,
    };
  },
};

export const getMailTips = {
  /**
  * `POST /me/getMailTips`
  *
  * Get the MailTips of one or more recipients as available to the signed-in user. Note that by making a POST call to the getMailTips action, you can request specific types of MailTips to
be returned for more than one recipient at one time. The requested MailTips are returned in a mailTips collection.
  */
  create: function create(
    body: IEndpoints['POST /me/getMailTips']['body']
  ): EndpointRequest<IEndpoints['POST /me/getMailTips']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/getMailTips',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /me/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /me/getMemberGroups']['body']
  ): EndpointRequest<IEndpoints['POST /me/getMemberGroups']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/getMemberGroups',
      body,
    };
  },
};

export const getMemberObjects = {
  /**
  * `POST /me/getMemberObjects`
  *
  * Return all IDs for the groups, administrative units, and directory roles that an object of one of the following types is a member of:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. Only users and role-enabled groups can be members of directory roles.
  */
  create: function create(
    body: IEndpoints['POST /me/getMemberObjects']['body']
  ): EndpointRequest<IEndpoints['POST /me/getMemberObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/getMemberObjects',
      body,
    };
  },
};

export const getPasswordSingleSignOnCredentials = {
  /**
   * `POST /me/getPasswordSingleSignOnCredentials`
   *
   * Get the list of password-based single sign-on credentials for a given user. This API returns the encrypted passwords as null or empty strings.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/getPasswordSingleSignOnCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/getPasswordSingleSignOnCredentials',
    };
  },
};

export const invalidateAllRefreshTokens = {
  /**
   * `POST /me/invalidateAllRefreshTokens`
   *
   * Invalidates all of the user&#x27;s refresh tokens issued to applications and session cookies in a user&#x27;s browser, by resetting the refreshTokensValidFromDateTime user property to the current date-time. Typically, this operation is performed (by the user or an administrator) if the user has a lost or stolen device. This operation would prevent access to any of the organization&#x27;s data accessed through applications on the device without the user first being required to sign in again. In fact, this operation would force the user to sign in again for all applications that they have previously consented to, independent of device. For developers, if the application attempts to redeem a delegated access token for this user by using an invalidated refresh token, the application receives an error. If this happens, the application needs to acquire a new refresh token by making a request to the OAuth 2.0 /authorize endpoint, which forces the user to sign in.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/invalidateAllRefreshTokens']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/invalidateAllRefreshTokens',
    };
  },
};

export const invitedBy = {
  /**
   * `GET /me/invitedBy`
   *
   * The user or service principal that invited the user.
   */
  get: function get(
    params?: IEndpoints['GET /me/invitedBy']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/invitedBy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/invitedBy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
};

export const joinedTeams = {
  /**
   * `GET /me/joinedTeams`
   *
   * Get the teams in Microsoft Teams that the user is a direct member of.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/joinedTeams',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}`
   *
   * The Microsoft Teams teams the user is a member of. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/joinedTeams/{team-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id'],
      },
      params,
    };
  },
};

export const licenseDetails = {
  /**
   * `GET /me/licenseDetails`
   *
   * Retrieve a list of licenseDetails objects for enterprise users. This API returns details for licenses that are directly assigned and those transitively assigned through memberships in licensed groups.
   */
  list: function list(
    params?: IEndpoints['GET /me/licenseDetails']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/licenseDetails']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/licenseDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/licenseDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/licenseDetails']['body']
  ): EndpointRequest<IEndpoints['POST /me/licenseDetails']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/licenseDetails',
      body,
    };
  },
  /**
   * `GET /me/licenseDetails/{licenseDetails-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/licenseDetails/{licenseDetails-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/licenseDetails/{licenseDetails-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/licenseDetails/{licenseDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['licenseDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/licenseDetails/{licenseDetails-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/licenseDetails/{licenseDetails-id}']['body'],
    params?: IEndpoints['PATCH /me/licenseDetails/{licenseDetails-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/licenseDetails/{licenseDetails-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/licenseDetails/{licenseDetails-id}',
      paramDefs: {
        path: ['licenseDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/licenseDetails/{licenseDetails-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/licenseDetails/{licenseDetails-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/licenseDetails/{licenseDetails-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/licenseDetails/{licenseDetails-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['licenseDetails-id'],
      },
      params,
    };
  },
};

export const mailboxSettings = {
  /**
   * `GET /me/mailboxSettings`
   *
   * Get the user&#x27;s mailboxSettings. You can view all mailbox settings, or get specific settings. Users can set the following settings for their mailboxes through an Outlook client: Users can set their preferred date and time formats using Outlook on the web. Users can choose one of the supported short date or short time formats. This GET operation returns the format the user has chosen. Users can set the time zone they prefer on any Outlook client, by choosing from the supported time zones that their administrator has set up for their mailbox server. The administrator can set up time zones in the Windows time zone format or  Internet Assigned Numbers Authority (IANA) time zone (also known as Olson time zone) format. The Windows format is the default. This GET operation returns the user&#x27;s preferred time zone in the format that the administrator has set up. If you want that time zone to be in a specific format (Windows or IANA), you can first update the preferred time zone in that format as a mailbox setting. Subsequently you will be able to get the time zone in that format. Alternatively, you can manage the format conversion separately in your app.
   */
  list: function list(
    params?: IEndpoints['GET /me/mailboxSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/mailboxSettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/mailboxSettings`
   *
   * Enable, configure, or disable one or more of the following settings as part of a user&#x27;s mailboxSettings: When updating the preferred date or time format for a user, specify it in respectively, the short date or short time format. When updating the preferred time zone for a user, specify it in the Windows or Internet Assigned Numbers Authority (IANA) time zone (also known as Olson time zone) format. You can also further customize the time zone as shown in example 2 below.
   */
  update: function update(
    body: IEndpoints['PATCH /me/mailboxSettings']['body']
  ): EndpointRequest<IEndpoints['PATCH /me/mailboxSettings']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/mailboxSettings',
      body,
    };
  },
};

export const managedAppLogCollectionRequests = {
  /**
   * `GET /me/managedAppLogCollectionRequests`
   *
   * Zero or more log collection requests triggered for the user.
   */
  list: function list(
    params?: IEndpoints['GET /me/managedAppLogCollectionRequests']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/managedAppLogCollectionRequests']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedAppLogCollectionRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/managedAppLogCollectionRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/managedAppLogCollectionRequests']['body']
  ): EndpointRequest<IEndpoints['POST /me/managedAppLogCollectionRequests']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/managedAppLogCollectionRequests',
      body,
    };
  },
  /**
   * `GET /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
   *
   * Zero or more log collection requests triggered for the user.
   */
  get: function get(
    params?: IEndpoints['GET /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedAppLogCollectionRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['body'],
    params?: IEndpoints['PATCH /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
      paramDefs: {
        path: ['managedAppLogCollectionRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedAppLogCollectionRequest-id'],
      },
      params,
    };
  },
};

export const managedAppRegistrations = {
  /**
   * `GET /me/managedAppRegistrations`
   *
   * Zero or more managed app registrations that belong to the user.
   */
  list: function list(
    params?: IEndpoints['GET /me/managedAppRegistrations']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/managedAppRegistrations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedAppRegistrations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/managedAppRegistrations/{managedAppRegistration-id}`
   *
   * Zero or more managed app registrations that belong to the user.
   */
  get: function get(
    params?: IEndpoints['GET /me/managedAppRegistrations/{managedAppRegistration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/managedAppRegistrations/{managedAppRegistration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/managedAppRegistrations/{managedAppRegistration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedAppRegistration-id'],
      },
      params,
    };
  },
};

export const manager = {
  /**
   * `GET /me/manager`
   *
   * The user or contact that is this user&#x27;s manager. Read-only. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /me/manager']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/manager']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/manager',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
      },
      params,
    };
  },
};

export const memberOf = {
  /**
   * `GET /me/memberOf`
   *
   * The groups, directory roles, and administrative units that the user is a member of. Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /me/memberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/memberOf']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/memberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/memberOf/{directoryObject-id}`
   *
   * The groups, directory roles, and administrative units that the user is a member of. Read-only. Nullable. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/memberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/memberOf/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/memberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const mobileAppIntentAndStates = {
  /**
   * `GET /me/mobileAppIntentAndStates`
   *
   * The list of troubleshooting events for this user.
   */
  list: function list(
    params?: IEndpoints['GET /me/mobileAppIntentAndStates']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/mobileAppIntentAndStates']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/mobileAppIntentAndStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/mobileAppIntentAndStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/mobileAppIntentAndStates']['body']
  ): EndpointRequest<IEndpoints['POST /me/mobileAppIntentAndStates']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/mobileAppIntentAndStates',
      body,
    };
  },
  /**
   * `GET /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
   *
   * The list of troubleshooting events for this user.
   */
  get: function get(
    params?: IEndpoints['GET /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mobileAppIntentAndState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['body'],
    params?: IEndpoints['PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
      paramDefs: {
        path: ['mobileAppIntentAndState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mobileAppIntentAndState-id'],
      },
      params,
    };
  },
};

export const notifications = {
  /**
   * `GET /me/notifications`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /me/notifications']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/notifications']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/notifications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/notifications`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/notifications']['body']
  ): EndpointRequest<IEndpoints['POST /me/notifications']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/notifications',
      body,
    };
  },
  /**
   * `GET /me/notifications/{notification-id}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /me/notifications/{notification-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/notifications/{notification-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/notifications/{notification-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['notification-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/notifications/{notification-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /me/notifications/{notification-id}']['body'],
    params?: IEndpoints['PATCH /me/notifications/{notification-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/notifications/{notification-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/notifications/{notification-id}',
      paramDefs: {
        path: ['notification-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/notifications/{notification-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /me/notifications/{notification-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/notifications/{notification-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/notifications/{notification-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['notification-id'],
      },
      params,
    };
  },
};

export const oauth2PermissionGrants = {
  /**
   * `GET /me/oauth2PermissionGrants`
   *
   */
  list: function list(
    params?: IEndpoints['GET /me/oauth2PermissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/oauth2PermissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/oauth2PermissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['oAuth2PermissionGrant-id'],
      },
      params,
    };
  },
};

export const onPremisesSyncBehavior = {
  /**
   * `GET /me/onPremisesSyncBehavior`
   *
   * Indicates the state of synchronization for a user between the cloud and on-premises Active Directory. Supports $filter only with advanced query capabilities, for example, $filter&#x3D;onPremisesSyncBehavior/isCloudManaged eq true&amp;$count&#x3D;true.
   */
  get: function get(
    params?: IEndpoints['GET /me/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/onPremisesSyncBehavior']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onPremisesSyncBehavior',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/onPremisesSyncBehavior`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/onPremisesSyncBehavior']['body']
  ): EndpointRequest<IEndpoints['PATCH /me/onPremisesSyncBehavior']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/onPremisesSyncBehavior',
      body,
    };
  },
  /**
   * `DELETE /me/onPremisesSyncBehavior`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/onPremisesSyncBehavior']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onPremisesSyncBehavior',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const ownedDevices = {
  /**
   * `GET /me/ownedDevices`
   *
   * Get the list of devices that are owned by the user.
   */
  list: function list(
    params?: IEndpoints['GET /me/ownedDevices']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/ownedDevices']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/ownedDevices',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/ownedDevices/{directoryObject-id}`
   *
   * Devices owned by the user. Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /me/ownedDevices/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/ownedDevices/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/ownedDevices/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const ownedObjects = {
  /**
   * `GET /me/ownedObjects`
   *
   * Get the list of directory objects that are owned by the user.
   */
  list: function list(
    params?: IEndpoints['GET /me/ownedObjects']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/ownedObjects']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/ownedObjects',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/ownedObjects/{directoryObject-id}`
   *
   * Directory objects owned by the user. Read-only. Nullable. Supports $expand, $select nested in $expand, and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
   */
  get: function get(
    params?: IEndpoints['GET /me/ownedObjects/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/ownedObjects/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/ownedObjects/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const people = {
  /**
   * `GET /me/people`
   *
   * Retrieve a list of person objects ordered by their relevance to the user, which is determined by the user&#x27;s communication and collaboration patterns, and business relationships.
   */
  get: function get(
    params?: IEndpoints['GET /me/people']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/people']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/people',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/people/{person-id}`
   *
   * Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user&#x27;s communication, collaboration, and business relationships. A person aggregates information from mail, contacts, and social networks.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/people/{person-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/people/{person-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/people/{person-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['person-id'],
      },
      params,
    };
  },
};

export const permissionGrants = {
  /**
   * `GET /me/permissionGrants`
   *
   * List all resource-specific permission grants of a user.
   */
  list: function list(
    params?: IEndpoints['GET /me/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/permissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/permissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/permissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/permissionGrants']['body']
  ): EndpointRequest<IEndpoints['POST /me/permissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/permissionGrants',
      body,
    };
  },
  /**
   * `GET /me/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * List all resource-specific permission grants of a user.
   */
  get: function get(
    params?: IEndpoints['GET /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        path: ['resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
};

export const photo = {
  /**
   * `GET /me/photo`
   *
   * The user&#x27;s profile photo. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/photo']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/photo']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/photo',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/photo`
   *
   * Update the photo for the specified contact, group, team, or user in a tenant. The size of the photo you can update to is limited to 4 MB. You can use either PATCH or PUT for this operation.
   */
  update: function update(
    body: IEndpoints['PATCH /me/photo']['body']
  ): EndpointRequest<IEndpoints['PATCH /me/photo']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/photo',
      body,
    };
  },
  /**
   * `DELETE /me/photo`
   *
   * Delete the photo for the signed-in user or the specified group.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/photo']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/photo']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/photo',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const photos = {
  /**
   * `GET /me/photos`
   *
   * The collection of the user&#x27;s profile photos in different sizes. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /me/photos']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/photos']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/photos',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/photos/{profilePhoto-id}`
   *
   * The collection of the user&#x27;s profile photos in different sizes. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/photos/{profilePhoto-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/photos/{profilePhoto-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/photos/{profilePhoto-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['profilePhoto-id'],
      },
      params,
    };
  },
};

export const registeredDevices = {
  /**
   * `GET /me/registeredDevices`
   *
   * Get the list of user&#x27;s registered devices.
   */
  list: function list(
    params?: IEndpoints['GET /me/registeredDevices']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/registeredDevices']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/registeredDevices',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/registeredDevices/{directoryObject-id}`
   *
   * Devices that are registered for the user. Read-only. Nullable. Supports $expand and returns up to 100 objects.
   */
  get: function get(
    params?: IEndpoints['GET /me/registeredDevices/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/registeredDevices/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/registeredDevices/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const removeAllDevicesFromManagement = {
  /**
   * `POST /me/removeAllDevicesFromManagement`
   *
   * Retire all devices from management for this user
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/removeAllDevicesFromManagement']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/removeAllDevicesFromManagement',
    };
  },
};

export const reprocessLicenseAssignment = {
  /**
   * `POST /me/reprocessLicenseAssignment`
   *
   * Reprocess all group-based license assignments for the user. To learn more about group-based licensing, see What is group-based licensing in Microsoft Entra ID. Also see Identify and resolve license assignment problems for a group in Microsoft Entra ID for more details.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/reprocessLicenseAssignment']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/reprocessLicenseAssignment',
    };
  },
};

export const restore = {
  /**
  * `POST /me/restore`
  *
  * Restore a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- externalUserProfile
- group
- pendingExternalUserProfile
- servicePrincipal
- user If an item was accidentally deleted, you can fully restore the item. This isn&#x27;t applicable to security groups, which are deleted permanently. Also, restoring an application doesn&#x27;t restore the associated service principal automatically. You must call this API to explicitly restore the deleted service principal. A recently deleted item remains available for up to 30 days. After 30 days, the item is permanently deleted.
  */
  create: function create(): EndpointRequest<IEndpoints['POST /me/restore']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/restore',
    };
  },
};

export const retryServiceProvisioning = {
  /**
   * `POST /me/retryServiceProvisioning`
   *
   * Retry the provisioning of a user object in Microsoft Entra ID.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/retryServiceProvisioning']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/retryServiceProvisioning',
    };
  },
};

export const revokeSignInSessions = {
  /**
   * `POST /me/revokeSignInSessions`
   *
   * Invalidates all the refresh tokens issued to applications for a user (as well as session cookies in a user&#x27;s browser), by resetting the signInSessionsValidFromDateTime user property to the current date-time. Typically, this operation is performed (by the user or an administrator) if the user has a lost or stolen device. This operation prevents access to the organization&#x27;s data through applications on the device by requiring the user to sign in again to all applications that they have previously consented to, independent of device. If the application attempts to redeem a delegated access token for this user by using an invalidated refresh token, the application will get an error. If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint, which will force the user to sign in.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/revokeSignInSessions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/revokeSignInSessions',
    };
  },
};

export const scopedRoleMemberOf = {
  /**
   * `GET /me/scopedRoleMemberOf`
   *
   * Retrieve a list of scopedRoleMembership for the user.
   */
  get: function get(
    params?: IEndpoints['GET /me/scopedRoleMemberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/scopedRoleMemberOf']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/scopedRoleMemberOf',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/scopedRoleMemberOf`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/scopedRoleMemberOf']['body']
  ): EndpointRequest<IEndpoints['POST /me/scopedRoleMemberOf']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/scopedRoleMemberOf',
      body,
    };
  },
  /**
   * `GET /me/scopedRoleMemberOf/{scopedRoleMembership-id}`
   *
   * The scoped-role administrative unit memberships for this user. Read-only. Nullable.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['scopedRoleMembership-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['body'],
    params?: IEndpoints['PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
      paramDefs: {
        path: ['scopedRoleMembership-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/scopedRoleMemberOf/{scopedRoleMembership-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['scopedRoleMembership-id'],
      },
      params,
    };
  },
};

export const sendMail = {
  /**
   * `POST /me/sendMail`
   *
   * Send the message specified in the request body using either JSON or MIME format. When using JSON format, you can include an attachment and use a mention to call out another user in the new message. When using MIME format: This method saves the message in the Sent Items folder. Alternatively, create a draft message to send later. To learn more about the steps involved in the backend before a mail is delivered to recipients, see here.
   */
  create: function create(
    body: IEndpoints['POST /me/sendMail']['body']
  ): EndpointRequest<IEndpoints['POST /me/sendMail']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/sendMail',
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /me/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /me/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/serviceProvisioningErrors']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
};

export const sponsors = {
  /**
   * `GET /me/sponsors`
   *
   * The users and groups responsible for this guest user&#x27;s privileges in the tenant and keep the guest user&#x27;s information and access updated. (HTTP Methods: GET, POST, DELETE.). Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /me/sponsors']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/sponsors']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/sponsors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/sponsors/{directoryObject-id}`
   *
   * The users and groups responsible for this guest user&#x27;s privileges in the tenant and keep the guest user&#x27;s information and access updated. (HTTP Methods: GET, POST, DELETE.). Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /me/sponsors/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/sponsors/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/sponsors/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const transitiveMemberOf = {
  /**
   * `GET /me/transitiveMemberOf`
   *
   * The groups, including nested groups and directory roles that a user is a member of. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/transitiveMemberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/transitiveMemberOf']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/transitiveMemberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/transitiveMemberOf/{directoryObject-id}`
   *
   * The groups, including nested groups and directory roles that a user is a member of. Nullable.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/transitiveMemberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/transitiveMemberOf/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/transitiveMemberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const transitiveReports = {
  /**
   * `GET /me/transitiveReports`
   *
   * The transitive reports for a user. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /me/transitiveReports']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/transitiveReports']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/transitiveReports',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/transitiveReports/{directoryObject-id}`
   *
   * The transitive reports for a user. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/transitiveReports/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/transitiveReports/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/transitiveReports/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const translateExchangeIds = {
  /**
   * `POST /me/translateExchangeIds`
   *
   * Translate identifiers of Outlook-related resources between formats.
   */
  create: function create(
    body: IEndpoints['POST /me/translateExchangeIds']['body']
  ): EndpointRequest<IEndpoints['POST /me/translateExchangeIds']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/translateExchangeIds',
      body,
    };
  },
};

export const unblockManagedApps = {
  /**
   * `POST /me/unblockManagedApps`
   *
   * Unblocks the managed app user from app check-in.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/unblockManagedApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/unblockManagedApps',
    };
  },
};

export const usageRights = {
  /**
   * `GET /me/usageRights`
   *
   * Represents the usage rights a user has been granted.
   */
  list: function list(
    params?: IEndpoints['GET /me/usageRights']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/usageRights']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/usageRights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/usageRights`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/usageRights']['body']
  ): EndpointRequest<IEndpoints['POST /me/usageRights']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/usageRights',
      body,
    };
  },
  /**
   * `GET /me/usageRights/{usageRight-id}`
   *
   * Represents the usage rights a user has been granted.
   */
  get: function get(
    params?: IEndpoints['GET /me/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/usageRights/{usageRight-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/usageRights/{usageRight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['usageRight-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/usageRights/{usageRight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/usageRights/{usageRight-id}']['body'],
    params?: IEndpoints['PATCH /me/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/usageRights/{usageRight-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/usageRights/{usageRight-id}',
      paramDefs: {
        path: ['usageRight-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/usageRights/{usageRight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/usageRights/{usageRight-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/usageRights/{usageRight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['usageRight-id'],
      },
      params,
    };
  },
};

export const windowsInformationProtectionDeviceRegistrations = {
  /**
   * `GET /me/windowsInformationProtectionDeviceRegistrations`
   *
   * Zero or more WIP device registrations that belong to the user.
   */
  list: function list(
    params?: IEndpoints['GET /me/windowsInformationProtectionDeviceRegistrations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/windowsInformationProtectionDeviceRegistrations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/windowsInformationProtectionDeviceRegistrations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}`
   *
   * Zero or more WIP device registrations that belong to the user.
   */
  get: function get(
    params?: IEndpoints['GET /me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsInformationProtectionDeviceRegistration-id'],
      },
      params,
    };
  },
};

export const wipeAndBlockManagedApps = {
  /**
   * `POST /me/wipeAndBlockManagedApps`
   *
   * Blocks the managed app user from app check-in.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /me/wipeAndBlockManagedApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/wipeAndBlockManagedApps',
    };
  },
};

export const wipeManagedAppRegistrationByDeviceTag = {
  /**
   * `POST /me/wipeManagedAppRegistrationByDeviceTag`
   *
   * Issues a wipe operation on an app registration with specified device tag.
   */
  create: function create(
    body: IEndpoints['POST /me/wipeManagedAppRegistrationByDeviceTag']['body']
  ): EndpointRequest<IEndpoints['POST /me/wipeManagedAppRegistrationByDeviceTag']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/wipeManagedAppRegistrationByDeviceTag',
      body,
    };
  },
};

export const wipeManagedAppRegistrationsByAzureAdDeviceId = {
  /**
   * `POST /me/wipeManagedAppRegistrationsByAzureAdDeviceId`
   *
   * Issues a wipe operation on an app registration with specified aad device Id.
   */
  create: function create(
    body: IEndpoints['POST /me/wipeManagedAppRegistrationsByAzureAdDeviceId']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/wipeManagedAppRegistrationsByAzureAdDeviceId']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/wipeManagedAppRegistrationsByAzureAdDeviceId',
      body,
    };
  },
};

export const wipeManagedAppRegistrationsByDeviceTag = {
  /**
   * `POST /me/wipeManagedAppRegistrationsByDeviceTag`
   *
   * Issues a wipe operation on an app registration with specified device tag.
   */
  create: function create(
    body: IEndpoints['POST /me/wipeManagedAppRegistrationsByDeviceTag']['body']
  ): EndpointRequest<IEndpoints['POST /me/wipeManagedAppRegistrationsByDeviceTag']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/wipeManagedAppRegistrationsByDeviceTag',
      body,
    };
  },
};
