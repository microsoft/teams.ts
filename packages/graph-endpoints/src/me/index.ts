export * as activities from './activities';
export * as agreementAcceptances from './agreementAcceptances';
export * as appRoleAssignments from './appRoleAssignments';
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
export * as contactFolders from './contactFolders';
export * as contacts from './contacts';
export * as createdObjects from './createdObjects';
export * as dataSecurityAndGovernance from './dataSecurityAndGovernance';
export * as deviceManagementTroubleshootingEvents from './deviceManagementTroubleshootingEvents';
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
export * as inferenceClassification from './inferenceClassification';
export * as insights from './insights';
export * as joinedTeams from './joinedTeams';
export * as licenseDetails from './licenseDetails';
export * as mailFolders from './mailFolders';
export * as mailboxSettings from './mailboxSettings';
export * as managedAppRegistrations from './managedAppRegistrations';
export * as managedDevices from './managedDevices';
export * as manager from './manager';
export * as memberOf from './memberOf';
export * as messages from './messages';
export * as oauth2PermissionGrants from './oauth2PermissionGrants';
export * as onenote from './onenote';
export * as onlineMeetings from './onlineMeetings';
export * as outlook from './outlook';
export * as ownedDevices from './ownedDevices';
export * as ownedObjects from './ownedObjects';
export * as people from './people';
export * as permissionGrants from './permissionGrants';
export * as photo from './photo';
export * as photos from './photos';
export * as planner from './planner';
export * as presence from './presence';
export * as registeredDevices from './registeredDevices';
export * as removeAllDevicesFromManagement from './removeAllDevicesFromManagement';
export * as reprocessLicenseAssignment from './reprocessLicenseAssignment';
export * as restore from './restore';
export * as retryServiceProvisioning from './retryServiceProvisioning';
export * as revokeSignInSessions from './revokeSignInSessions';
export * as scopedRoleMemberOf from './scopedRoleMemberOf';
export * as sendMail from './sendMail';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';
export * as settings from './settings';
export * as solutions from './solutions';
export * as sponsors from './sponsors';
export * as teamwork from './teamwork';
export * as todo from './todo';
export * as transitiveMemberOf from './transitiveMemberOf';
export * as translateExchangeIds from './translateExchangeIds';
export * as wipeManagedAppRegistrationsByDeviceTag from './wipeManagedAppRegistrationsByDeviceTag';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me': Operation<'/me', 'get'>;
  'PATCH /me': Operation<'/me', 'patch'>;
}

/**
 * `GET /me`
 *
 * Returns the user or organizational contact assigned as the user&#x27;s manager. Optionally, you can expand the manager&#x27;s chain up to the root node.
 */
export function get(
  params?: IEndpoints['GET /me']['parameters']
): EndpointRequest<IEndpoints['GET /me']['response']> {
  return {
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
    method: 'patch',
    path: '/me',
    paramDefs: [],
    params,
    body,
  };
}
