export * as activities from './activities';
export * as agreementAcceptances from './agreementAcceptances';
export * as analytics from './analytics';
export * as appConsentRequestsForApproval from './appConsentRequestsForApproval';
export * as appRoleAssignedResources from './appRoleAssignedResources';
export * as appRoleAssignments from './appRoleAssignments';
export * as approvals from './approvals';
export * as assignLicense from './assignLicense';
export * as authentication from './authentication';
export * as calendar from './calendar';
export * as calendarGroups from './calendarGroups';
export * as calendarView from './calendarView';
export * as calendars from './calendars';
export * as changePassword from './changePassword';
export * as chats from './chats';
export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as cloudClipboard from './cloudClipboard';
export * as cloudPCs from './cloudPCs';
export * as communications from './communications';
export * as contactFolders from './contactFolders';
export * as contacts from './contacts';
export * as convertExternalToInternalMemberUser from './convertExternalToInternalMemberUser';
export * as createdObjects from './createdObjects';
export * as dataSecurityAndGovernance from './dataSecurityAndGovernance';
export * as deletePasswordSingleSignOnCredentials from './deletePasswordSingleSignOnCredentials';
export * as deviceEnrollmentConfigurations from './deviceEnrollmentConfigurations';
export * as deviceManagementTroubleshootingEvents from './deviceManagementTroubleshootingEvents';
export * as devices from './devices';
export * as directReports from './directReports';
export * as drive from './drive';
export * as drives from './drives';
export * as employeeExperience from './employeeExperience';
export * as events from './events';
export * as exportPersonalData from './exportPersonalData';
export * as extensions from './extensions';
export * as findMeetingTimes from './findMeetingTimes';
export * as followedSites from './followedSites';
export * as getMailTips from './getMailTips';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as getPasswordSingleSignOnCredentials from './getPasswordSingleSignOnCredentials';
export * as inferenceClassification from './inferenceClassification';
export * as informationProtection from './informationProtection';
export * as insights from './insights';
export * as invalidateAllRefreshTokens from './invalidateAllRefreshTokens';
export * as invitedBy from './invitedBy';
export * as joinedGroups from './joinedGroups';
export * as joinedTeams from './joinedTeams';
export * as licenseDetails from './licenseDetails';
export * as mailFolders from './mailFolders';
export * as mailboxSettings from './mailboxSettings';
export * as managedAppLogCollectionRequests from './managedAppLogCollectionRequests';
export * as managedAppRegistrations from './managedAppRegistrations';
export * as managedDevices from './managedDevices';
export * as manager from './manager';
export * as memberOf from './memberOf';
export * as messages from './messages';
export * as mobileAppIntentAndStates from './mobileAppIntentAndStates';
export * as mobileAppTroubleshootingEvents from './mobileAppTroubleshootingEvents';
export * as notifications from './notifications';
export * as oauth2PermissionGrants from './oauth2PermissionGrants';
export * as onenote from './onenote';
export * as onlineMeetings from './onlineMeetings';
export * as outlook from './outlook';
export * as ownedDevices from './ownedDevices';
export * as ownedObjects from './ownedObjects';
export * as pendingAccessReviewInstances from './pendingAccessReviewInstances';
export * as people from './people';
export * as permissionGrants from './permissionGrants';
export * as photo from './photo';
export * as photos from './photos';
export * as planner from './planner';
export * as presence from './presence';
export * as profile from './profile';
export * as registeredDevices from './registeredDevices';
export * as removeAllDevicesFromManagement from './removeAllDevicesFromManagement';
export * as reprocessLicenseAssignment from './reprocessLicenseAssignment';
export * as restore from './restore';
export * as retryServiceProvisioning from './retryServiceProvisioning';
export * as revokeSignInSessions from './revokeSignInSessions';
export * as scopedRoleMemberOf from './scopedRoleMemberOf';
export * as security from './security';
export * as sendMail from './sendMail';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';
export * as settings from './settings';
export * as solutions from './solutions';
export * as sponsors from './sponsors';
export * as teamwork from './teamwork';
export * as todo from './todo';
export * as transitiveMemberOf from './transitiveMemberOf';
export * as transitiveReports from './transitiveReports';
export * as translateExchangeIds from './translateExchangeIds';
export * as unblockManagedApps from './unblockManagedApps';
export * as usageRights from './usageRights';
export * as virtualEvents from './virtualEvents';
export * as windowsInformationProtectionDeviceRegistrations from './windowsInformationProtectionDeviceRegistrations';
export * as wipeAndBlockManagedApps from './wipeAndBlockManagedApps';
export * as wipeManagedAppRegistrationByDeviceTag from './wipeManagedAppRegistrationByDeviceTag';
export * as wipeManagedAppRegistrationsByAzureAdDeviceId from './wipeManagedAppRegistrationsByAzureAdDeviceId';
export * as wipeManagedAppRegistrationsByDeviceTag from './wipeManagedAppRegistrationsByDeviceTag';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me': Operation<'/me', 'get'>;
  'PATCH /me': Operation<'/me', 'patch'>;
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
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me`
 *
 * Update the properties of a user object.
 */
export function update(
  body: IEndpoints['PATCH /me']['body'],
  params?: IEndpoints['PATCH /me']['parameters']
): EndpointRequest<IEndpoints['PATCH /me']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me',
    paramDefs: [],
    params,
    body,
  };
}
