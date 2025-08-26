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
export * as getAvailableExtensionProperties from './getAvailableExtensionProperties';
export * as getByIds from './getByIds';
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
export * as validateProperties from './validateProperties';
export * as wipeManagedAppRegistrationsByDeviceTag from './wipeManagedAppRegistrationsByDeviceTag';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}': Operation<'/users/{user-id}', 'delete'>;
  'GET /users': Operation<'/users', 'get'>;
  'GET /users/{user-id}': Operation<'/users/{user-id}', 'get'>;
  'PATCH /users/{user-id}': Operation<'/users/{user-id}', 'patch'>;
  'POST /users': Operation<'/users', 'post'>;
}

/**
 * `DELETE /users/{user-id}`
 *
 * Deletes a user.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users`
 *
 * Retrieve a list of user objects.
 */
export function list(
  params?: IEndpoints['GET /users']['parameters']
): EndpointRequest<IEndpoints['GET /users']['response']> {
  return {
    method: 'get',
    path: '/users',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$top', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}`
 *
 * Read properties and relationships of the user object.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
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
    method: 'patch',
    path: '/users/{user-id}',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /users`
 *
 * Create a new user object.
 */
export function create(
  body: IEndpoints['POST /users']['body'],
  params?: IEndpoints['POST /users']['parameters']
): EndpointRequest<IEndpoints['POST /users']['response']> {
  return {
    method: 'post',
    path: '/users',
    paramDefs: [],
    params,
    body,
  };
}
