export * as acceptedSenders from './acceptedSenders';
export * as addFavorite from './addFavorite';
export * as appRoleAssignments from './appRoleAssignments';
export * as assignLicense from './assignLicense';
export * as calendar from './calendar';
export * as calendarView from './calendarView';
export * as checkGrantedPermissionsForApp from './checkGrantedPermissionsForApp';
export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as conversations from './conversations';
export * as createdOnBehalfOf from './createdOnBehalfOf';
export * as deletePasswordSingleSignOnCredentials from './deletePasswordSingleSignOnCredentials';
export * as drive from './drive';
export * as drives from './drives';
export * as endpoints from './endpoints';
export * as evaluateDynamicMembership from './evaluateDynamicMembership';
export * as events from './events';
export * as extensions from './extensions';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as getPasswordSingleSignOnCredentials from './getPasswordSingleSignOnCredentials';
export * as getUserOwnedObjects from './getUserOwnedObjects';
export * as groupLifecyclePolicies from './groupLifecyclePolicies';
export * as memberOf from './memberOf';
export * as members from './members';
export * as membersWithLicenseErrors from './membersWithLicenseErrors';
export * as onPremisesSyncBehavior from './onPremisesSyncBehavior';
export * as onenote from './onenote';
export * as owners from './owners';
export * as permissionGrants from './permissionGrants';
export * as photo from './photo';
export * as photos from './photos';
export * as planner from './planner';
export * as rejectedSenders from './rejectedSenders';
export * as removeFavorite from './removeFavorite';
export * as renew from './renew';
export * as resetUnseenCount from './resetUnseenCount';
export * as restore from './restore';
export * as retryServiceProvisioning from './retryServiceProvisioning';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';
export * as settings from './settings';
export * as sites from './sites';
export * as subscribeByMail from './subscribeByMail';
export * as team from './team';
export * as threads from './threads';
export * as transitiveMemberOf from './transitiveMemberOf';
export * as transitiveMembers from './transitiveMembers';
export * as unsubscribeByMail from './unsubscribeByMail';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}': Operation<'/groups/{group-id}', 'delete'>;
  'GET /groups': Operation<'/groups', 'get'>;
  'GET /groups/{group-id}': Operation<'/groups/{group-id}', 'get'>;
  'PATCH /groups/{group-id}': Operation<'/groups/{group-id}', 'patch'>;
  'POST /groups': Operation<'/groups', 'post'>;
}

/**
 * `DELETE /groups/{group-id}`
 *
 * Delete a group. When deleted, Microsoft 365 groups are moved to a temporary container and can be restored within 30 days. After that time, they are permanently deleted. This isn&#x27;t applicable to Security groups and Distribution groups that are permanently deleted immediately. To learn more, see deletedItems.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups`
 *
 * List all the groups available in an organization, excluding dynamic distribution groups. To retrieve dynamic distribution groups, use the Exchange admin center. This operation returns by default only a subset of the more commonly used properties for each group. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation for the group and specify the properties in a $select OData query option. The hasMembersWithLicenseErrors and isArchived properties are an exception and are not returned in the $select query.
 */
export function list(
  params?: IEndpoints['GET /groups']['parameters']
): EndpointRequest<IEndpoints['GET /groups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
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
 * `GET /groups/{group-id}`
 *
 * Get the properties and relationships of a group object. This operation returns by default only a subset of all the available properties, as noted in the Properties section. To get properties that aren&#x27;t_ returned by default, specify them in a $select OData query option. The hasMembersWithLicenseErrors and isArchived properties are an exception and aren&#x27;t returned in the $select query. Because the group resource supports extensions, you can also use the GET operation to get custom properties and extension data in a group instance.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PATCH /groups/{group-id}`
  *
  * Create a new group object if it doesn&#x27;t exist, or update the properties of an existing group object.
You can create or update the following types of group: By default, this operation returns only a subset of the properties for each group. For a list of properties that are returned by default, see the Properties section of the group resource. To get properties that are not returned by default, do a GET operation and specify the properties in a $select OData query option.
  */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}

/**
  * `POST /groups`
  *
  * Create a new group object if it doesn&#x27;t exist, or update the properties of an existing group object.
You can create or update the following types of group: By default, this operation returns only a subset of the properties for each group. For a list of properties that are returned by default, see the Properties section of the group resource. To get properties that are not returned by default, do a GET operation and specify the properties in a $select OData query option.
  */
export function create(
  body: IEndpoints['POST /groups']['body'],
  params?: IEndpoints['POST /groups']['parameters']
): EndpointRequest<IEndpoints['POST /groups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups',
    paramDefs: [],
    params,
    body,
  };
}
