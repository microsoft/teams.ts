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
  'DELETE /users/{user-id}': Operation<'/users/{user-id}', 'delete'>;
  'GET /users': Operation<'/users', 'get'>;
  'GET /users/{user-id}': Operation<'/users/{user-id}', 'get'>;
  'PATCH /users/{user-id}': Operation<'/users/{user-id}', 'patch'>;
  'POST /users': Operation<'/users', 'post'>;
  'GET /users/{user-id}/agreementAcceptances': Operation<
    '/users/{user-id}/agreementAcceptances',
    'get'
  >;
  'GET /users/{user-id}/agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/users/{user-id}/agreementAcceptances/{agreementAcceptance-id}',
    'get'
  >;
  'GET /users/{user-id}/appRoleAssignedResources': Operation<
    '/users/{user-id}/appRoleAssignedResources',
    'get'
  >;
  'GET /users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}': Operation<
    '/users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}',
    'get'
  >;
  'GET /users/{user-id}/appRoleAssignments': Operation<
    '/users/{user-id}/appRoleAssignments',
    'get'
  >;
  'POST /users/{user-id}/appRoleAssignments': Operation<
    '/users/{user-id}/appRoleAssignments',
    'post'
  >;
  'GET /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
    'get'
  >;
  'PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
    'delete'
  >;
  'POST /users/{user-id}/assignLicense': Operation<'/users/{user-id}/assignLicense', 'post'>;
  'GET /users/{user-id}/calendarView': Operation<'/users/{user-id}/calendarView', 'get'>;
  'POST /users/{user-id}/changePassword': Operation<'/users/{user-id}/changePassword', 'post'>;
  'POST /users/{user-id}/checkMemberGroups': Operation<
    '/users/{user-id}/checkMemberGroups',
    'post'
  >;
  'POST /users/{user-id}/checkMemberObjects': Operation<
    '/users/{user-id}/checkMemberObjects',
    'post'
  >;
  'POST /users/{user-id}/convertExternalToInternalMemberUser': Operation<
    '/users/{user-id}/convertExternalToInternalMemberUser',
    'post'
  >;
  'GET /users/{user-id}/createdObjects': Operation<'/users/{user-id}/createdObjects', 'get'>;
  'GET /users/{user-id}/createdObjects/{directoryObject-id}': Operation<
    '/users/{user-id}/createdObjects/{directoryObject-id}',
    'get'
  >;
  'POST /users/{user-id}/deletePasswordSingleSignOnCredentials': Operation<
    '/users/{user-id}/deletePasswordSingleSignOnCredentials',
    'post'
  >;
  'GET /users/{user-id}/deviceManagementTroubleshootingEvents': Operation<
    '/users/{user-id}/deviceManagementTroubleshootingEvents',
    'get'
  >;
  'POST /users/{user-id}/deviceManagementTroubleshootingEvents': Operation<
    '/users/{user-id}/deviceManagementTroubleshootingEvents',
    'post'
  >;
  'GET /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'get'
  >;
  'PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}': Operation<
    '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
    'delete'
  >;
  'GET /users/{user-id}/directReports': Operation<'/users/{user-id}/directReports', 'get'>;
  'GET /users/{user-id}/directReports/{directoryObject-id}': Operation<
    '/users/{user-id}/directReports/{directoryObject-id}',
    'get'
  >;
  'GET /users/{user-id}/drive': Operation<'/users/{user-id}/drive', 'get'>;
  'GET /users/{user-id}/drives': Operation<'/users/{user-id}/drives', 'get'>;
  'GET /users/{user-id}/drives/{drive-id}': Operation<'/users/{user-id}/drives/{drive-id}', 'get'>;
  'POST /users/{user-id}/exportPersonalData': Operation<
    '/users/{user-id}/exportPersonalData',
    'post'
  >;
  'GET /users/{user-id}/extensions': Operation<'/users/{user-id}/extensions', 'get'>;
  'POST /users/{user-id}/extensions': Operation<'/users/{user-id}/extensions', 'post'>;
  'GET /users/{user-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /users/{user-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /users/{user-id}/findMeetingTimes': Operation<'/users/{user-id}/findMeetingTimes', 'post'>;
  'POST /users/getByIds': Operation<'/users/getByIds', 'post'>;
  'POST /users/{user-id}/getMailTips': Operation<'/users/{user-id}/getMailTips', 'post'>;
  'POST /users/{user-id}/getMemberGroups': Operation<'/users/{user-id}/getMemberGroups', 'post'>;
  'POST /users/{user-id}/getMemberObjects': Operation<'/users/{user-id}/getMemberObjects', 'post'>;
  'POST /users/{user-id}/getPasswordSingleSignOnCredentials': Operation<
    '/users/{user-id}/getPasswordSingleSignOnCredentials',
    'post'
  >;
  'POST /users/getUserOwnedObjects': Operation<'/users/getUserOwnedObjects', 'post'>;
  'POST /users/{user-id}/invalidateAllRefreshTokens': Operation<
    '/users/{user-id}/invalidateAllRefreshTokens',
    'post'
  >;
  'GET /users/{user-id}/invitedBy': Operation<'/users/{user-id}/invitedBy', 'get'>;
  'GET /users/{user-id}/joinedTeams': Operation<'/users/{user-id}/joinedTeams', 'get'>;
  'GET /users/{user-id}/joinedTeams/{team-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}',
    'get'
  >;
  'GET /users/{user-id}/licenseDetails': Operation<'/users/{user-id}/licenseDetails', 'get'>;
  'POST /users/{user-id}/licenseDetails': Operation<'/users/{user-id}/licenseDetails', 'post'>;
  'GET /users/{user-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/users/{user-id}/licenseDetails/{licenseDetails-id}',
    'get'
  >;
  'PATCH /users/{user-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/users/{user-id}/licenseDetails/{licenseDetails-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/users/{user-id}/licenseDetails/{licenseDetails-id}',
    'delete'
  >;
  'GET /users/{user-id}/mailboxSettings': Operation<'/users/{user-id}/mailboxSettings', 'get'>;
  'PATCH /users/{user-id}/mailboxSettings': Operation<'/users/{user-id}/mailboxSettings', 'patch'>;
  'GET /users/{user-id}/managedAppLogCollectionRequests': Operation<
    '/users/{user-id}/managedAppLogCollectionRequests',
    'get'
  >;
  'POST /users/{user-id}/managedAppLogCollectionRequests': Operation<
    '/users/{user-id}/managedAppLogCollectionRequests',
    'post'
  >;
  'GET /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/managedAppRegistrations': Operation<
    '/users/{user-id}/managedAppRegistrations',
    'get'
  >;
  'GET /users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}': Operation<
    '/users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}',
    'get'
  >;
  'GET /users/{user-id}/manager': Operation<'/users/{user-id}/manager', 'get'>;
  'GET /users/{user-id}/memberOf': Operation<'/users/{user-id}/memberOf', 'get'>;
  'GET /users/{user-id}/memberOf/{directoryObject-id}': Operation<
    '/users/{user-id}/memberOf/{directoryObject-id}',
    'get'
  >;
  'GET /users/{user-id}/mobileAppIntentAndStates': Operation<
    '/users/{user-id}/mobileAppIntentAndStates',
    'get'
  >;
  'POST /users/{user-id}/mobileAppIntentAndStates': Operation<
    '/users/{user-id}/mobileAppIntentAndStates',
    'post'
  >;
  'GET /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'get'
  >;
  'PATCH /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}': Operation<
    '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
    'delete'
  >;
  'GET /users/{user-id}/notifications': Operation<'/users/{user-id}/notifications', 'get'>;
  'POST /users/{user-id}/notifications': Operation<'/users/{user-id}/notifications', 'post'>;
  'GET /users/{user-id}/notifications/{notification-id}': Operation<
    '/users/{user-id}/notifications/{notification-id}',
    'get'
  >;
  'PATCH /users/{user-id}/notifications/{notification-id}': Operation<
    '/users/{user-id}/notifications/{notification-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/notifications/{notification-id}': Operation<
    '/users/{user-id}/notifications/{notification-id}',
    'delete'
  >;
  'GET /users/{user-id}/oauth2PermissionGrants': Operation<
    '/users/{user-id}/oauth2PermissionGrants',
    'get'
  >;
  'GET /users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'get'
  >;
  'GET /users/{user-id}/onPremisesSyncBehavior': Operation<
    '/users/{user-id}/onPremisesSyncBehavior',
    'get'
  >;
  'PATCH /users/{user-id}/onPremisesSyncBehavior': Operation<
    '/users/{user-id}/onPremisesSyncBehavior',
    'patch'
  >;
  'DELETE /users/{user-id}/onPremisesSyncBehavior': Operation<
    '/users/{user-id}/onPremisesSyncBehavior',
    'delete'
  >;
  'GET /users/{user-id}/ownedDevices': Operation<'/users/{user-id}/ownedDevices', 'get'>;
  'GET /users/{user-id}/ownedDevices/{directoryObject-id}': Operation<
    '/users/{user-id}/ownedDevices/{directoryObject-id}',
    'get'
  >;
  'GET /users/{user-id}/ownedObjects': Operation<'/users/{user-id}/ownedObjects', 'get'>;
  'GET /users/{user-id}/ownedObjects/{directoryObject-id}': Operation<
    '/users/{user-id}/ownedObjects/{directoryObject-id}',
    'get'
  >;
  'GET /users/{user-id}/people': Operation<'/users/{user-id}/people', 'get'>;
  'GET /users/{user-id}/people/{person-id}': Operation<
    '/users/{user-id}/people/{person-id}',
    'get'
  >;
  'GET /users/{user-id}/permissionGrants': Operation<'/users/{user-id}/permissionGrants', 'get'>;
  'POST /users/{user-id}/permissionGrants': Operation<'/users/{user-id}/permissionGrants', 'post'>;
  'GET /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /users/{user-id}/photo': Operation<'/users/{user-id}/photo', 'get'>;
  'PATCH /users/{user-id}/photo': Operation<'/users/{user-id}/photo', 'patch'>;
  'DELETE /users/{user-id}/photo': Operation<'/users/{user-id}/photo', 'delete'>;
  'GET /users/{user-id}/photos': Operation<'/users/{user-id}/photos', 'get'>;
  'GET /users/{user-id}/photos/{profilePhoto-id}': Operation<
    '/users/{user-id}/photos/{profilePhoto-id}',
    'get'
  >;
  'GET /users/{user-id}/registeredDevices': Operation<'/users/{user-id}/registeredDevices', 'get'>;
  'GET /users/{user-id}/registeredDevices/{directoryObject-id}': Operation<
    '/users/{user-id}/registeredDevices/{directoryObject-id}',
    'get'
  >;
  'POST /users/{user-id}/removeAllDevicesFromManagement': Operation<
    '/users/{user-id}/removeAllDevicesFromManagement',
    'post'
  >;
  'POST /users/{user-id}/reprocessLicenseAssignment': Operation<
    '/users/{user-id}/reprocessLicenseAssignment',
    'post'
  >;
  'POST /users/{user-id}/restore': Operation<'/users/{user-id}/restore', 'post'>;
  'POST /users/{user-id}/retryServiceProvisioning': Operation<
    '/users/{user-id}/retryServiceProvisioning',
    'post'
  >;
  'POST /users/{user-id}/revokeSignInSessions': Operation<
    '/users/{user-id}/revokeSignInSessions',
    'post'
  >;
  'GET /users/{user-id}/scopedRoleMemberOf': Operation<
    '/users/{user-id}/scopedRoleMemberOf',
    'get'
  >;
  'POST /users/{user-id}/scopedRoleMemberOf': Operation<
    '/users/{user-id}/scopedRoleMemberOf',
    'post'
  >;
  'GET /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'delete'
  >;
  'POST /users/{user-id}/sendMail': Operation<'/users/{user-id}/sendMail', 'post'>;
  'GET /users/{user-id}/serviceProvisioningErrors': Operation<
    '/users/{user-id}/serviceProvisioningErrors',
    'get'
  >;
  'GET /users/{user-id}/sponsors': Operation<'/users/{user-id}/sponsors', 'get'>;
  'GET /users/{user-id}/sponsors/{directoryObject-id}': Operation<
    '/users/{user-id}/sponsors/{directoryObject-id}',
    'get'
  >;
  'GET /users/{user-id}/transitiveMemberOf': Operation<
    '/users/{user-id}/transitiveMemberOf',
    'get'
  >;
  'GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/users/{user-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
  'GET /users/{user-id}/transitiveReports': Operation<'/users/{user-id}/transitiveReports', 'get'>;
  'GET /users/{user-id}/transitiveReports/{directoryObject-id}': Operation<
    '/users/{user-id}/transitiveReports/{directoryObject-id}',
    'get'
  >;
  'POST /users/{user-id}/translateExchangeIds': Operation<
    '/users/{user-id}/translateExchangeIds',
    'post'
  >;
  'POST /users/{user-id}/unblockManagedApps': Operation<
    '/users/{user-id}/unblockManagedApps',
    'post'
  >;
  'GET /users/{user-id}/usageRights': Operation<'/users/{user-id}/usageRights', 'get'>;
  'POST /users/{user-id}/usageRights': Operation<'/users/{user-id}/usageRights', 'post'>;
  'GET /users/{user-id}/usageRights/{usageRight-id}': Operation<
    '/users/{user-id}/usageRights/{usageRight-id}',
    'get'
  >;
  'PATCH /users/{user-id}/usageRights/{usageRight-id}': Operation<
    '/users/{user-id}/usageRights/{usageRight-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/usageRights/{usageRight-id}': Operation<
    '/users/{user-id}/usageRights/{usageRight-id}',
    'delete'
  >;
  'POST /users/validatePassword': Operation<'/users/validatePassword', 'post'>;
  'POST /users/validateProperties': Operation<'/users/validateProperties', 'post'>;
  'GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations': Operation<
    '/users/{user-id}/windowsInformationProtectionDeviceRegistrations',
    'get'
  >;
  'GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}': Operation<
    '/users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
    'get'
  >;
  'POST /users/{user-id}/wipeAndBlockManagedApps': Operation<
    '/users/{user-id}/wipeAndBlockManagedApps',
    'post'
  >;
  'POST /users/{user-id}/wipeManagedAppRegistrationByDeviceTag': Operation<
    '/users/{user-id}/wipeManagedAppRegistrationByDeviceTag',
    'post'
  >;
  'POST /users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId': Operation<
    '/users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId',
    'post'
  >;
  'POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag': Operation<
    '/users/{user-id}/wipeManagedAppRegistrationsByDeviceTag',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}`
 *
 * Delete a user object.   When deleted, user resources, including their mailbox and license assignments, are moved to a temporary container and if the user is restored within 30 days, these objects are restored to them. The user is also restored to any groups they were a member of. After 30 days and if not restored, the user object is permanently deleted and their assigned resources freed. To manage the deleted user object, see deletedItems.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users`
 *
 * Retrieve a list of user objects. This operation returns by default only a subset of the more commonly used properties for each user. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation for the user and specify the properties in a $select OData query option.
 */
export function list(
  params?: IEndpoints['GET /users']['parameters']
): EndpointRequest<IEndpoints['GET /users']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users',
    paramDefs: {
      header: ['ConsistencyLevel'],
      query: ['$top', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}`
 *
 * Retrieve the properties and relationships of user object. This operation returns by default only a subset of the more commonly used properties for each user. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation for the user and specify the properties in a $select OData query option. Because the user resource supports extensions, you can also use the GET operation to get custom properties and extension data in a user instance. Customers through Microsoft Entra ID for customers can also use this API operation to retrieve their details.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}`
 *
 * Update the properties of a user object.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /users`
  *
  * Create a new user.
The request body contains the user to create. At a minimum, you must specify the required properties for the user. You can optionally specify any other writable properties. This operation returns by default only a subset of the properties for each user. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation and specify the properties in a $select OData query option.
  */
export function create(
  body: IEndpoints['POST /users']['body']
): EndpointRequest<IEndpoints['POST /users']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users',
    body,
  };
}

export const agreementAcceptances = {
  /**
   * `GET /users/{user-id}/agreementAcceptances`
   *
   * The user&#x27;s terms of use acceptance statuses. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/agreementAcceptances']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/agreementAcceptances']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/agreementAcceptances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/agreementAcceptances/{agreementAcceptance-id}`
   *
   * The user&#x27;s terms of use acceptance statuses. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/agreementAcceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/agreementAcceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/agreementAcceptances/{agreementAcceptance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'agreementAcceptance-id'],
      },
      params,
    };
  },
};

export const appRoleAssignedResources = {
  /**
   * `GET /users/{user-id}/appRoleAssignedResources`
   *
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/appRoleAssignedResources']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/appRoleAssignedResources']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/appRoleAssignedResources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/appRoleAssignedResources/{servicePrincipal-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'servicePrincipal-id'],
      },
      params,
    };
  },
};

export const appRoleAssignments = {
  /**
   * `GET /users/{user-id}/appRoleAssignments`
   *
   * Retrieve the list of appRoleAssignments that a user has been granted. This operation also returns app role assignments granted to groups that the user is a direct member of.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/appRoleAssignments']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/appRoleAssignments']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/appRoleAssignments',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/appRoleAssignments`
   *
   * Use this API to assign an app role to a user, creating an appRoleAssignment object. To grant an app role assignment to a user, you need three identifiers:
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/appRoleAssignments']['body'],
    params?: IEndpoints['POST /users/{user-id}/appRoleAssignments']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/appRoleAssignments']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/appRoleAssignments',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}`
   *
   * Represents the app roles a user has been granted for an application. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id', 'appRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        path: ['user-id', 'appRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}`
   *
   * Delete an appRoleAssignment that has been granted to a user.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'appRoleAssignment-id'],
      },
      params,
    };
  },
};

export const assignLicense = {
  /**
   * `POST /users/{user-id}/assignLicense`
   *
   * Add or remove licenses for the user to enable or disable their use of Microsoft cloud offerings that the company has licenses to. For example, an organization can have a Microsoft 365 Enterprise E3 subscription with 100 licenses, and this request assigns one of those licenses to a specific user. You can also enable and disable specific plans associated with a subscription. Direct user licensing is an alternative to group-based licensing. To get the subscriptions available in the directory, perform a GET subscribedSkus request.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/assignLicense']['body'],
    params?: IEndpoints['POST /users/{user-id}/assignLicense']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/assignLicense']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/assignLicense',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const calendarView = {
  /**
   * `GET /users/{user-id}/calendarView`
   *
   * The calendar view for the calendar. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/calendarView']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/calendarView']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/calendarView',
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
        path: ['user-id'],
      },
      params,
    };
  },
};

export const changePassword = {
  /**
  * `POST /users/{user-id}/changePassword`
  *
  * Update the signed-in user&#x27;s password. Any user can update their password without belonging to any administrator role.
To update another user&#x27;s password in either delegated or app-only scenarios, update the passwordProfile property of the user instead. See Example 3: Update the passwordProfile of a user and reset their password.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/changePassword']['body'],
    params?: IEndpoints['POST /users/{user-id}/changePassword']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/changePassword']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/changePassword',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberGroups = {
  /**
  * `POST /users/{user-id}/checkMemberGroups`
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
    body: IEndpoints['POST /users/{user-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /users/{user-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/checkMemberGroups']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/checkMemberGroups',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /users/{user-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /users/{user-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/checkMemberObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/checkMemberObjects',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const convertExternalToInternalMemberUser = {
  /**
   * `POST /users/{user-id}/convertExternalToInternalMemberUser`
   *
   * Convert an externally authenticated user into an internal user. The user is able to sign into the host tenant as an internal user and access resources as a member. For more information about this conversion, see Convert external users to internal users.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/convertExternalToInternalMemberUser']['body'],
    params?: IEndpoints['POST /users/{user-id}/convertExternalToInternalMemberUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/convertExternalToInternalMemberUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/convertExternalToInternalMemberUser',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const createdObjects = {
  /**
   * `GET /users/{user-id}/createdObjects`
   *
   * Directory objects that the user created. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/createdObjects']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/createdObjects']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/createdObjects',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/createdObjects/{directoryObject-id}`
   *
   * Directory objects that the user created. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/createdObjects/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/createdObjects/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/createdObjects/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const deletePasswordSingleSignOnCredentials = {
  /**
   * `POST /users/{user-id}/deletePasswordSingleSignOnCredentials`
   *
   * Delete the password-based single sign-on credentials for a given user to a given service principal.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/deletePasswordSingleSignOnCredentials']['body'],
    params?: IEndpoints['POST /users/{user-id}/deletePasswordSingleSignOnCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/deletePasswordSingleSignOnCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/deletePasswordSingleSignOnCredentials',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const deviceManagementTroubleshootingEvents = {
  /**
   * `GET /users/{user-id}/deviceManagementTroubleshootingEvents`
   *
   * The list of troubleshooting events for this user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/deviceManagementTroubleshootingEvents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/deviceManagementTroubleshootingEvents']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/deviceManagementTroubleshootingEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/deviceManagementTroubleshootingEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/deviceManagementTroubleshootingEvents']['body'],
    params?: IEndpoints['POST /users/{user-id}/deviceManagementTroubleshootingEvents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/deviceManagementTroubleshootingEvents']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/deviceManagementTroubleshootingEvents',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
   *
   * The list of troubleshooting events for this user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'deviceManagementTroubleshootingEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
      paramDefs: {
        path: ['user-id', 'deviceManagementTroubleshootingEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/deviceManagementTroubleshootingEvents/{deviceManagementTroubleshootingEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'deviceManagementTroubleshootingEvent-id'],
      },
      params,
    };
  },
};

export const directReports = {
  /**
   * `GET /users/{user-id}/directReports`
   *
   * The users and contacts that report to the user. (The users and contacts with their manager property set to this user.) Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/directReports']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/directReports']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/directReports',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/directReports/{directoryObject-id}`
   *
   * The users and contacts that report to the user. (The users and contacts with their manager property set to this user.) Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/directReports/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/directReports/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/directReports/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const drive = {
  /**
   * `GET /users/{user-id}/drive`
   *
   * The user&#x27;s OneDrive. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/drive']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/drive']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/drive',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
};

export const drives = {
  /**
   * `GET /users/{user-id}/drives`
   *
   * A collection of drives available for this user. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/drives']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/drives']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/drives',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/drives/{drive-id}`
   *
   * A collection of drives available for this user. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/drives/{drive-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/drives/{drive-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/drives/{drive-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'drive-id'],
      },
      params,
    };
  },
};

export const exportPersonalData = {
  /**
   * `POST /users/{user-id}/exportPersonalData`
   *
   * Submit a data policy operation request from a company administrator or an application to export an organizational user&#x27;s data. This data includes the user&#x27;s data stored in OneDrive and their activity reports. For more information about exporting data while complying with regulations, see Data Subject Requests and the GDPR and CCPA.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/exportPersonalData']['body'],
    params?: IEndpoints['POST /users/{user-id}/exportPersonalData']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/exportPersonalData']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/exportPersonalData',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const extensions = {
  /**
   * `GET /users/{user-id}/extensions`
   *
   * The collection of open extensions defined for the user. Supports $expand. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/extensions']['body'],
    params?: IEndpoints['POST /users/{user-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/extensions',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the user. Supports $expand. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/extensions/{extension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /users/{user-id}/extensions/{extension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['user-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /users/{user-id}/extensions/{extension-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'extension-id'],
      },
      params,
    };
  },
};

export const findMeetingTimes = {
  /**
  * `POST /users/{user-id}/findMeetingTimes`
  *
  * Suggest meeting times and locations based on organizer and attendee availability, and time or location constraints specified as parameters. If findMeetingTimes cannot return any meeting suggestions, the response would indicate a reason in the emptySuggestionsReason property.
Based on this value, you can better adjust the parameters and call findMeetingTimes again. The algorithm used to suggest meeting times and locations undergoes fine-tuning from time to time. In scenarios like test environments where the input parameters and calendar data remain static, expect that the suggested results may differ over time.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/findMeetingTimes']['body'],
    params?: IEndpoints['POST /users/{user-id}/findMeetingTimes']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/findMeetingTimes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/findMeetingTimes',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /users/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /users/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /users/getByIds']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/getByIds',
      body,
    };
  },
};

export const getMailTips = {
  /**
  * `POST /users/{user-id}/getMailTips`
  *
  * Get the MailTips of one or more recipients as available to the signed-in user. Note that by making a POST call to the getMailTips action, you can request specific types of MailTips to
be returned for more than one recipient at one time. The requested MailTips are returned in a mailTips collection.
  */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/getMailTips']['body'],
    params?: IEndpoints['POST /users/{user-id}/getMailTips']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/getMailTips']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/getMailTips',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /users/{user-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /users/{user-id}/getMemberGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/getMemberGroups']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/getMemberGroups',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
   * `POST /users/{user-id}/getMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /users/{user-id}/getMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/getMemberObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/getMemberObjects',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const getPasswordSingleSignOnCredentials = {
  /**
   * `POST /users/{user-id}/getPasswordSingleSignOnCredentials`
   *
   * Get the list of password-based single sign-on credentials for a given user. This API returns the encrypted passwords as null or empty strings.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/getPasswordSingleSignOnCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/getPasswordSingleSignOnCredentials']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/getPasswordSingleSignOnCredentials',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const getUserOwnedObjects = {
  /**
   * `POST /users/getUserOwnedObjects`
   *
   * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
   */
  create: function create(
    body: IEndpoints['POST /users/getUserOwnedObjects']['body']
  ): EndpointRequest<IEndpoints['POST /users/getUserOwnedObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/getUserOwnedObjects',
      body,
    };
  },
};

export const invalidateAllRefreshTokens = {
  /**
   * `POST /users/{user-id}/invalidateAllRefreshTokens`
   *
   * Invalidates all of the user&#x27;s refresh tokens issued to applications and session cookies in a user&#x27;s browser, by resetting the refreshTokensValidFromDateTime user property to the current date-time. Typically, this operation is performed (by the user or an administrator) if the user has a lost or stolen device. This operation would prevent access to any of the organization&#x27;s data accessed through applications on the device without the user first being required to sign in again. In fact, this operation would force the user to sign in again for all applications that they have previously consented to, independent of device. For developers, if the application attempts to redeem a delegated access token for this user by using an invalidated refresh token, the application receives an error. If this happens, the application needs to acquire a new refresh token by making a request to the OAuth 2.0 /authorize endpoint, which forces the user to sign in.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/invalidateAllRefreshTokens']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/invalidateAllRefreshTokens']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/invalidateAllRefreshTokens',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const invitedBy = {
  /**
   * `GET /users/{user-id}/invitedBy`
   *
   * Get the user or servicePrincipal that invited the specified user into the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/invitedBy']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/invitedBy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/invitedBy',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
};

export const joinedTeams = {
  /**
   * `GET /users/{user-id}/joinedTeams`
   *
   * The Microsoft Teams teams the user is a member of. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/joinedTeams',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}`
   *
   * The Microsoft Teams teams the user is a member of. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'team-id'],
      },
      params,
    };
  },
};

export const licenseDetails = {
  /**
   * `GET /users/{user-id}/licenseDetails`
   *
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/licenseDetails']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/licenseDetails']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/licenseDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/licenseDetails`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/licenseDetails']['body'],
    params?: IEndpoints['POST /users/{user-id}/licenseDetails']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/licenseDetails']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/licenseDetails',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/licenseDetails/{licenseDetails-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/licenseDetails/{licenseDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/licenseDetails/{licenseDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/licenseDetails/{licenseDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'licenseDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/licenseDetails/{licenseDetails-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/licenseDetails/{licenseDetails-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/licenseDetails/{licenseDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/licenseDetails/{licenseDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/licenseDetails/{licenseDetails-id}',
      paramDefs: {
        path: ['user-id', 'licenseDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/licenseDetails/{licenseDetails-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/licenseDetails/{licenseDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/licenseDetails/{licenseDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/licenseDetails/{licenseDetails-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'licenseDetails-id'],
      },
      params,
    };
  },
};

export const mailboxSettings = {
  /**
   * `GET /users/{user-id}/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/mailboxSettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/mailboxSettings']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /users/{user-id}/mailboxSettings']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/mailboxSettings',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const managedAppLogCollectionRequests = {
  /**
   * `GET /users/{user-id}/managedAppLogCollectionRequests`
   *
   * Zero or more log collection requests triggered for the user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/managedAppLogCollectionRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedAppLogCollectionRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedAppLogCollectionRequests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/managedAppLogCollectionRequests`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/managedAppLogCollectionRequests']['body'],
    params?: IEndpoints['POST /users/{user-id}/managedAppLogCollectionRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/managedAppLogCollectionRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/managedAppLogCollectionRequests',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
   *
   * Zero or more log collection requests triggered for the user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'managedAppLogCollectionRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
      paramDefs: {
        path: ['user-id', 'managedAppLogCollectionRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'managedAppLogCollectionRequest-id'],
      },
      params,
    };
  },
};

export const managedAppRegistrations = {
  /**
   * `GET /users/{user-id}/managedAppRegistrations`
   *
   * Zero or more managed app registrations that belong to the user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/managedAppRegistrations']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/managedAppRegistrations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedAppRegistrations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}`
   *
   * Zero or more managed app registrations that belong to the user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'managedAppRegistration-id'],
      },
      params,
    };
  },
};

export const manager = {
  /**
   * `GET /users/{user-id}/manager`
   *
   * Returns the user or organizational contact assigned as the user&#x27;s manager. Optionally, you can expand the manager&#x27;s chain up to the root node.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/manager']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/manager']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/manager',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
};

export const memberOf = {
  /**
   * `GET /users/{user-id}/memberOf`
   *
   * Get groups, directory roles, and administrative units that the user is a direct member of. This operation isn&#x27;t transitive. To retrieve groups, directory roles, and administrative units that the user is a member through transitive membership, use the List user transitive memberOf API.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/memberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/memberOf']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/memberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/memberOf/{directoryObject-id}`
   *
   * The groups, directory roles, and administrative units that the user is a member of. Read-only. Nullable. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/memberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/memberOf/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/memberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const mobileAppIntentAndStates = {
  /**
   * `GET /users/{user-id}/mobileAppIntentAndStates`
   *
   * The list of troubleshooting events for this user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/mobileAppIntentAndStates']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/mobileAppIntentAndStates']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mobileAppIntentAndStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/mobileAppIntentAndStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/mobileAppIntentAndStates']['body'],
    params?: IEndpoints['POST /users/{user-id}/mobileAppIntentAndStates']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/mobileAppIntentAndStates']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/mobileAppIntentAndStates',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
   *
   * The list of troubleshooting events for this user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'mobileAppIntentAndState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
      paramDefs: {
        path: ['user-id', 'mobileAppIntentAndState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/mobileAppIntentAndStates/{mobileAppIntentAndState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'mobileAppIntentAndState-id'],
      },
      params,
    };
  },
};

export const notifications = {
  /**
   * `GET /users/{user-id}/notifications`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/notifications']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/notifications']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/notifications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/notifications`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/notifications']['body'],
    params?: IEndpoints['POST /users/{user-id}/notifications']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/notifications']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/notifications',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/notifications/{notification-id}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/notifications/{notification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/notifications/{notification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/notifications/{notification-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'notification-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/notifications/{notification-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/notifications/{notification-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/notifications/{notification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/notifications/{notification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/notifications/{notification-id}',
      paramDefs: {
        path: ['user-id', 'notification-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/notifications/{notification-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/notifications/{notification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/notifications/{notification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/notifications/{notification-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'notification-id'],
      },
      params,
    };
  },
};

export const oauth2PermissionGrants = {
  /**
   * `GET /users/{user-id}/oauth2PermissionGrants`
   *
   * Retrieve a list of oAuth2PermissionGrant entities, which represent delegated permissions granted to enable a client application to access an API on behalf of the user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/oauth2PermissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/oauth2PermissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/oauth2PermissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'oAuth2PermissionGrant-id'],
      },
      params,
    };
  },
};

export const onPremisesSyncBehavior = {
  /**
   * `GET /users/{user-id}/onPremisesSyncBehavior`
   *
   * Indicates the state of synchronization for a user between the cloud and on-premises Active Directory. Supports $filter only with advanced query capabilities, for example, $filter&#x3D;onPremisesSyncBehavior/isCloudManaged eq true&amp;$count&#x3D;true.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/onPremisesSyncBehavior']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onPremisesSyncBehavior',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/onPremisesSyncBehavior`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/onPremisesSyncBehavior']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /users/{user-id}/onPremisesSyncBehavior']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/onPremisesSyncBehavior',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onPremisesSyncBehavior`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /users/{user-id}/onPremisesSyncBehavior']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onPremisesSyncBehavior',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id'],
      },
      params,
    };
  },
};

export const ownedDevices = {
  /**
   * `GET /users/{user-id}/ownedDevices`
   *
   * Devices owned by the user. Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/ownedDevices']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/ownedDevices']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/ownedDevices',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/ownedDevices/{directoryObject-id}`
   *
   * Devices owned by the user. Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/ownedDevices/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/ownedDevices/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/ownedDevices/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const ownedObjects = {
  /**
   * `GET /users/{user-id}/ownedObjects`
   *
   * Directory objects owned by the user. Read-only. Nullable. Supports $expand, $select nested in $expand, and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/ownedObjects']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/ownedObjects']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/ownedObjects',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/ownedObjects/{directoryObject-id}`
   *
   * Directory objects owned by the user. Read-only. Nullable. Supports $expand, $select nested in $expand, and $filter (/$count eq 0, /$count ne 0, /$count eq 1, /$count ne 1).
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/ownedObjects/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/ownedObjects/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/ownedObjects/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const people = {
  /**
   * `GET /users/{user-id}/people`
   *
   * Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user&#x27;s communication, collaboration, and business relationships. A person aggregates information from mail, contacts, and social networks.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/people']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/people']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/people',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/people/{person-id}`
   *
   * Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user&#x27;s communication, collaboration, and business relationships. A person aggregates information from mail, contacts, and social networks.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/people/{person-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/people/{person-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/people/{person-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'person-id'],
      },
      params,
    };
  },
};

export const permissionGrants = {
  /**
   * `GET /users/{user-id}/permissionGrants`
   *
   * List all resource-specific permission grants of a user. This list specifies the Microsoft Entra apps that have access to the user, along with the corresponding kind of resource-specific access that each app has.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/permissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/permissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/permissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/permissionGrants']['body'],
    params?: IEndpoints['POST /users/{user-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/permissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/permissionGrants',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * List all resource-specific permission grants of a user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        path: ['user-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
};

export const photo = {
  /**
   * `GET /users/{user-id}/photo`
   *
   * The user&#x27;s profile photo. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/photo']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/photo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/photo`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/photo']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /users/{user-id}/photo']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/photo',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/photo`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /users/{user-id}/photo']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/photo',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id'],
      },
      params,
    };
  },
};

export const photos = {
  /**
   * `GET /users/{user-id}/photos`
   *
   * The collection of the user&#x27;s profile photos in different sizes. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/photos']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/photos']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/photos',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/photos/{profilePhoto-id}`
   *
   * The collection of the user&#x27;s profile photos in different sizes. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/photos/{profilePhoto-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/photos/{profilePhoto-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/photos/{profilePhoto-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'profilePhoto-id'],
      },
      params,
    };
  },
};

export const registeredDevices = {
  /**
   * `GET /users/{user-id}/registeredDevices`
   *
   * Devices that are registered for the user. Read-only. Nullable. Supports $expand and returns up to 100 objects.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/registeredDevices']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/registeredDevices']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/registeredDevices',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/registeredDevices/{directoryObject-id}`
   *
   * Devices that are registered for the user. Read-only. Nullable. Supports $expand and returns up to 100 objects.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/registeredDevices/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/registeredDevices/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/registeredDevices/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const removeAllDevicesFromManagement = {
  /**
   * `POST /users/{user-id}/removeAllDevicesFromManagement`
   *
   * Retire all devices from management for this user
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/removeAllDevicesFromManagement']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/removeAllDevicesFromManagement']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/removeAllDevicesFromManagement',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const reprocessLicenseAssignment = {
  /**
   * `POST /users/{user-id}/reprocessLicenseAssignment`
   *
   * Reprocess all group-based license assignments for the user. To learn more about group-based licensing, see What is group-based licensing in Microsoft Entra ID. Also see Identify and resolve license assignment problems for a group in Microsoft Entra ID for more details.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/reprocessLicenseAssignment']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/reprocessLicenseAssignment']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/reprocessLicenseAssignment',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
  * `POST /users/{user-id}/restore`
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
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/restore']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/restore',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const retryServiceProvisioning = {
  /**
   * `POST /users/{user-id}/retryServiceProvisioning`
   *
   * Retry the provisioning of a user object in Microsoft Entra ID.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/retryServiceProvisioning']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/retryServiceProvisioning']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/retryServiceProvisioning',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const revokeSignInSessions = {
  /**
   * `POST /users/{user-id}/revokeSignInSessions`
   *
   * Invalidates all the refresh tokens issued to applications for a user (as well as session cookies in a user&#x27;s browser), by resetting the signInSessionsValidFromDateTime user property to the current date-time. Typically, this operation is performed (by the user or an administrator) if the user has a lost or stolen device. This operation prevents access to the organization&#x27;s data through applications on the device by requiring the user to sign in again to all applications that they have previously consented to, independent of device. If the application attempts to redeem a delegated access token for this user by using an invalidated refresh token, the application will get an error. If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint, which will force the user to sign in.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/revokeSignInSessions']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/revokeSignInSessions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/revokeSignInSessions',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const scopedRoleMemberOf = {
  /**
   * `GET /users/{user-id}/scopedRoleMemberOf`
   *
   * The scoped-role administrative unit memberships for this user. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/scopedRoleMemberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/scopedRoleMemberOf']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/scopedRoleMemberOf',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/scopedRoleMemberOf`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/scopedRoleMemberOf']['body'],
    params?: IEndpoints['POST /users/{user-id}/scopedRoleMemberOf']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/scopedRoleMemberOf']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/scopedRoleMemberOf',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}`
   *
   * The scoped-role administrative unit memberships for this user. Read-only. Nullable.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'scopedRoleMembership-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
      paramDefs: {
        path: ['user-id', 'scopedRoleMembership-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'scopedRoleMembership-id'],
      },
      params,
    };
  },
};

export const sendMail = {
  /**
   * `POST /users/{user-id}/sendMail`
   *
   * Send the message specified in the request body using either JSON or MIME format. When using JSON format, you can include an attachment and use a mention to call out another user in the new message. When using MIME format: This method saves the message in the Sent Items folder. Alternatively, create a draft message to send later. To learn more about the steps involved in the backend before a mail is delivered to recipients, see here.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/sendMail']['body'],
    params?: IEndpoints['POST /users/{user-id}/sendMail']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/sendMail']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/sendMail',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /users/{user-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/serviceProvisioningErrors']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
};

export const sponsors = {
  /**
   * `GET /users/{user-id}/sponsors`
   *
   * Get a user&#x27;s sponsors. Sponsors are users and groups that are responsible for this guest&#x27;s privileges in the tenant and for keeping the guest&#x27;s information and access up to date.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/sponsors']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/sponsors']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/sponsors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/sponsors/{directoryObject-id}`
   *
   * The users and groups responsible for this guest user&#x27;s privileges in the tenant and keep the guest user&#x27;s information and access updated. (HTTP Methods: GET, POST, DELETE.). Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/sponsors/{directoryObject-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/sponsors/{directoryObject-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/sponsors/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const transitiveMemberOf = {
  /**
   * `GET /users/{user-id}/transitiveMemberOf`
   *
   * Get groups, directory roles, and administrative units that the user is a member of through either direct or transitive membership.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/transitiveMemberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/transitiveMemberOf']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/transitiveMemberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}`
   *
   * The groups, including nested groups and directory roles that a user is a member of. Nullable.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/transitiveMemberOf/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/transitiveMemberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const transitiveReports = {
  /**
   * `GET /users/{user-id}/transitiveReports`
   *
   * Retrieve a count of transitive reports for a user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/transitiveReports']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/transitiveReports']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/transitiveReports',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/transitiveReports/{directoryObject-id}`
   *
   * The transitive reports for a user. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/transitiveReports/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/transitiveReports/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/transitiveReports/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const translateExchangeIds = {
  /**
   * `POST /users/{user-id}/translateExchangeIds`
   *
   * Translate identifiers of Outlook-related resources between formats.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/translateExchangeIds']['body'],
    params?: IEndpoints['POST /users/{user-id}/translateExchangeIds']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/translateExchangeIds']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/translateExchangeIds',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const unblockManagedApps = {
  /**
   * `POST /users/{user-id}/unblockManagedApps`
   *
   * Unblocks the managed app user from app check-in.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/unblockManagedApps']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/unblockManagedApps']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/unblockManagedApps',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const usageRights = {
  /**
   * `GET /users/{user-id}/usageRights`
   *
   * Retrieve a list of usageRight objects for a given user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/usageRights']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/usageRights']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/usageRights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/usageRights`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/usageRights']['body'],
    params?: IEndpoints['POST /users/{user-id}/usageRights']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/usageRights']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/usageRights',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/usageRights/{usageRight-id}`
   *
   * Represents the usage rights a user has been granted.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/usageRights/{usageRight-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/usageRights/{usageRight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'usageRight-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/usageRights/{usageRight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/usageRights/{usageRight-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /users/{user-id}/usageRights/{usageRight-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/usageRights/{usageRight-id}',
      paramDefs: {
        path: ['user-id', 'usageRight-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/usageRights/{usageRight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/usageRights/{usageRight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/usageRights/{usageRight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'usageRight-id'],
      },
      params,
    };
  },
};

export const validatePassword = {
  /**
   * `POST /users/validatePassword`
   *
   * Check a user&#x27;s password against the organization&#x27;s password validation policy and report whether the password is valid. Use this action to provide real-time feedback on password strength while the user types their password.
   */
  create: function create(
    body: IEndpoints['POST /users/validatePassword']['body']
  ): EndpointRequest<IEndpoints['POST /users/validatePassword']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/validatePassword',
      body,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /users/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
  create: function create(
    body: IEndpoints['POST /users/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /users/validateProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/validateProperties',
      body,
    };
  },
};

export const windowsInformationProtectionDeviceRegistrations = {
  /**
   * `GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations`
   *
   * Zero or more WIP device registrations that belong to the user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/windowsInformationProtectionDeviceRegistrations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}`
   *
   * Zero or more WIP device registrations that belong to the user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/windowsInformationProtectionDeviceRegistrations/{windowsInformationProtectionDeviceRegistration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'windowsInformationProtectionDeviceRegistration-id'],
      },
      params,
    };
  },
};

export const wipeAndBlockManagedApps = {
  /**
   * `POST /users/{user-id}/wipeAndBlockManagedApps`
   *
   * Blocks the managed app user from app check-in.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/wipeAndBlockManagedApps']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/wipeAndBlockManagedApps']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/wipeAndBlockManagedApps',
      paramDefs: {
        path: ['user-id'],
      },
      params,
    };
  },
};

export const wipeManagedAppRegistrationByDeviceTag = {
  /**
   * `POST /users/{user-id}/wipeManagedAppRegistrationByDeviceTag`
   *
   * Issues a wipe operation on an app registration with specified device tag.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationByDeviceTag']['body'],
    params?: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationByDeviceTag']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationByDeviceTag']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/wipeManagedAppRegistrationByDeviceTag',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const wipeManagedAppRegistrationsByAzureAdDeviceId = {
  /**
   * `POST /users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId`
   *
   * Issues a wipe operation on an app registration with specified aad device Id.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId']['body'],
    params?: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/wipeManagedAppRegistrationsByAzureAdDeviceId',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const wipeManagedAppRegistrationsByDeviceTag = {
  /**
   * `POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag`
   *
   * Issues a wipe operation on an app registration with specified device tag.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag']['body'],
    params?: IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/wipeManagedAppRegistrationsByDeviceTag']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/wipeManagedAppRegistrationsByDeviceTag',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
