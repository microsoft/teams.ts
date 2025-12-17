export * as calendar from './calendar';
export * as conversations from './conversations';
export * as events from './events';
export * as groupLifecyclePolicies from './groupLifecyclePolicies';
export * as onenote from './onenote';
export * as planner from './planner';
export * as sites from './sites';
export * as team from './team';
export * as threads from './threads';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}': Operation<'/groups/{group-id}', 'delete'>;
  'GET /groups': Operation<'/groups', 'get'>;
  'GET /groups/{group-id}': Operation<'/groups/{group-id}', 'get'>;
  'PATCH /groups/{group-id}': Operation<'/groups/{group-id}', 'patch'>;
  'POST /groups': Operation<'/groups', 'post'>;
  'GET /groups/{group-id}/acceptedSenders': Operation<'/groups/{group-id}/acceptedSenders', 'get'>;
  'POST /groups/{group-id}/addFavorite': Operation<'/groups/{group-id}/addFavorite', 'post'>;
  'GET /groups/{group-id}/appRoleAssignments': Operation<
    '/groups/{group-id}/appRoleAssignments',
    'get'
  >;
  'POST /groups/{group-id}/appRoleAssignments': Operation<
    '/groups/{group-id}/appRoleAssignments',
    'post'
  >;
  'GET /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}': Operation<
    '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
    'delete'
  >;
  'POST /groups/{group-id}/assignLicense': Operation<'/groups/{group-id}/assignLicense', 'post'>;
  'GET /groups/{group-id}/calendarView': Operation<'/groups/{group-id}/calendarView', 'get'>;
  'POST /groups/{group-id}/checkGrantedPermissionsForApp': Operation<
    '/groups/{group-id}/checkGrantedPermissionsForApp',
    'post'
  >;
  'POST /groups/{group-id}/checkMemberGroups': Operation<
    '/groups/{group-id}/checkMemberGroups',
    'post'
  >;
  'POST /groups/{group-id}/checkMemberObjects': Operation<
    '/groups/{group-id}/checkMemberObjects',
    'post'
  >;
  'GET /groups/{group-id}/createdOnBehalfOf': Operation<
    '/groups/{group-id}/createdOnBehalfOf',
    'get'
  >;
  'GET /groups/{group-id}/drive': Operation<'/groups/{group-id}/drive', 'get'>;
  'GET /groups/{group-id}/drives': Operation<'/groups/{group-id}/drives', 'get'>;
  'GET /groups/{group-id}/drives/{drive-id}': Operation<
    '/groups/{group-id}/drives/{drive-id}',
    'get'
  >;
  'GET /groups/{group-id}/extensions': Operation<'/groups/{group-id}/extensions', 'get'>;
  'POST /groups/{group-id}/extensions': Operation<'/groups/{group-id}/extensions', 'post'>;
  'GET /groups/{group-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /groups/getAvailableExtensionProperties': Operation<
    '/groups/getAvailableExtensionProperties',
    'post'
  >;
  'POST /groups/getByIds': Operation<'/groups/getByIds', 'post'>;
  'POST /groups/{group-id}/getMemberGroups': Operation<
    '/groups/{group-id}/getMemberGroups',
    'post'
  >;
  'POST /groups/{group-id}/getMemberObjects': Operation<
    '/groups/{group-id}/getMemberObjects',
    'post'
  >;
  'GET /groups/{group-id}/memberOf': Operation<'/groups/{group-id}/memberOf', 'get'>;
  'GET /groups/{group-id}/memberOf/{directoryObject-id}': Operation<
    '/groups/{group-id}/memberOf/{directoryObject-id}',
    'get'
  >;
  'GET /groups/{group-id}/members': Operation<'/groups/{group-id}/members', 'get'>;
  'GET /groups/{group-id}/membersWithLicenseErrors': Operation<
    '/groups/{group-id}/membersWithLicenseErrors',
    'get'
  >;
  'GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}': Operation<
    '/groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}',
    'get'
  >;
  'GET /groups/{group-id}/onPremisesSyncBehavior': Operation<
    '/groups/{group-id}/onPremisesSyncBehavior',
    'get'
  >;
  'PATCH /groups/{group-id}/onPremisesSyncBehavior': Operation<
    '/groups/{group-id}/onPremisesSyncBehavior',
    'patch'
  >;
  'DELETE /groups/{group-id}/onPremisesSyncBehavior': Operation<
    '/groups/{group-id}/onPremisesSyncBehavior',
    'delete'
  >;
  'GET /groups/{group-id}/owners': Operation<'/groups/{group-id}/owners', 'get'>;
  'GET /groups/{group-id}/permissionGrants': Operation<
    '/groups/{group-id}/permissionGrants',
    'get'
  >;
  'POST /groups/{group-id}/permissionGrants': Operation<
    '/groups/{group-id}/permissionGrants',
    'post'
  >;
  'GET /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /groups/{group-id}/photo': Operation<'/groups/{group-id}/photo', 'get'>;
  'PATCH /groups/{group-id}/photo': Operation<'/groups/{group-id}/photo', 'patch'>;
  'DELETE /groups/{group-id}/photo': Operation<'/groups/{group-id}/photo', 'delete'>;
  'GET /groups/{group-id}/photos': Operation<'/groups/{group-id}/photos', 'get'>;
  'GET /groups/{group-id}/photos/{profilePhoto-id}': Operation<
    '/groups/{group-id}/photos/{profilePhoto-id}',
    'get'
  >;
  'GET /groups/{group-id}/rejectedSenders': Operation<'/groups/{group-id}/rejectedSenders', 'get'>;
  'POST /groups/{group-id}/removeFavorite': Operation<'/groups/{group-id}/removeFavorite', 'post'>;
  'POST /groups/{group-id}/renew': Operation<'/groups/{group-id}/renew', 'post'>;
  'POST /groups/{group-id}/resetUnseenCount': Operation<
    '/groups/{group-id}/resetUnseenCount',
    'post'
  >;
  'POST /groups/{group-id}/restore': Operation<'/groups/{group-id}/restore', 'post'>;
  'POST /groups/{group-id}/retryServiceProvisioning': Operation<
    '/groups/{group-id}/retryServiceProvisioning',
    'post'
  >;
  'GET /groups/{group-id}/serviceProvisioningErrors': Operation<
    '/groups/{group-id}/serviceProvisioningErrors',
    'get'
  >;
  'GET /groups/{group-id}/settings': Operation<'/groups/{group-id}/settings', 'get'>;
  'POST /groups/{group-id}/settings': Operation<'/groups/{group-id}/settings', 'post'>;
  'GET /groups/{group-id}/settings/{groupSetting-id}': Operation<
    '/groups/{group-id}/settings/{groupSetting-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/settings/{groupSetting-id}': Operation<
    '/groups/{group-id}/settings/{groupSetting-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/settings/{groupSetting-id}': Operation<
    '/groups/{group-id}/settings/{groupSetting-id}',
    'delete'
  >;
  'POST /groups/{group-id}/subscribeByMail': Operation<
    '/groups/{group-id}/subscribeByMail',
    'post'
  >;
  'GET /groups/{group-id}/transitiveMemberOf': Operation<
    '/groups/{group-id}/transitiveMemberOf',
    'get'
  >;
  'GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/groups/{group-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
  'GET /groups/{group-id}/transitiveMembers': Operation<
    '/groups/{group-id}/transitiveMembers',
    'get'
  >;
  'GET /groups/{group-id}/transitiveMembers/{directoryObject-id}': Operation<
    '/groups/{group-id}/transitiveMembers/{directoryObject-id}',
    'get'
  >;
  'POST /groups/{group-id}/unsubscribeByMail': Operation<
    '/groups/{group-id}/unsubscribeByMail',
    'post'
  >;
  'POST /groups/{group-id}/validateProperties': Operation<
    '/groups/{group-id}/validateProperties',
    'post'
  >;
  'POST /groups/validateProperties': Operation<'/groups/validateProperties', 'post'>;
}

/**
 * `DELETE /groups/{group-id}`
 *
 * Delete a group. When deleted, Microsoft 365 groups are moved to a temporary container and can be restored within 30 days. After that time, they&#x27;re permanently deleted. This isn&#x27;t applicable to Security groups and Distribution groups which are permanently deleted immediately. To learn more, see deletedItems.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id'],
    },
    params,
  };
}

/**
 * `GET /groups`
 *
 * List all the groups available in an organization, excluding dynamic distribution groups. To retrieve dynamic distribution groups, use the Exchange admin center. This operation returns by default only a subset of the properties for each group. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation for the group and specify the properties in a $select OData query option. The hasMembersWithLicenseErrors and isArchived properties are an exception and are not returned in the $select query.
 */
export function list(
  params?: IEndpoints['GET /groups']['parameters']
): EndpointRequest<IEndpoints['GET /groups']['response']> {
  return {
    method: 'get',
    path: '/groups',
    paramDefs: {
      header: ['ConsistencyLevel'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}`
 *
 * Get the properties and relationships of a group object. This operation returns by default only a subset of all the available properties, as noted in the Properties section. To get properties that aren&#x27;t_ returned by default, specify them in a $select OData query option. The hasMembersWithLicenseErrors and isArchived properties are an exception and aren&#x27;t returned in the $select query.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}',
    paramDefs: {
      path: ['group-id'],
      query: ['$select', '$expand'],
    },
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
    method: 'patch',
    path: '/groups/{group-id}',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups`
 *
 * Create a new group as specified in the request body. You can create the following types of groups: This operation returns by default only a subset of the properties for each group. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation and specify the properties in a $select OData query option.
 */
export function create(
  body: IEndpoints['POST /groups']['body']
): EndpointRequest<IEndpoints['POST /groups']['response']> {
  return {
    method: 'post',
    path: '/groups',
    body,
  };
}

export const acceptedSenders = {
  /**
  * `GET /groups/{group-id}/acceptedSenders`
  *
  * Users in the accepted senders list can post to conversations of the group (identified in the GET request URL).
Make sure you do not specify the same user or group in the accepted senders and rejected senders lists, otherwise you will get an error.
  */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/acceptedSenders']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/acceptedSenders']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/acceptedSenders',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
};

export const addFavorite = {
  /**
   * `POST /groups/{group-id}/addFavorite`
   *
   * Add the group to the list of the current user&#x27;s favorite groups.  The group shows up in Outlook and Teams favorites. Supported for Microsoft 365 groups only.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/addFavorite']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/addFavorite']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/addFavorite',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};

export const appRoleAssignments = {
  /**
   * `GET /groups/{group-id}/appRoleAssignments`
   *
   * Retrieve the list of appRoleAssignment that have been granted to a group.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/appRoleAssignments']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/appRoleAssignments']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/appRoleAssignments',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/appRoleAssignments`
   *
   * Use this API to assign an app role to a security group. All direct members of the group will be considered assigned. Security groups with dynamic memberships are supported. To grant an app role assignment to a group, you need three identifiers: Additional licenses might be required to use a group to manage access to applications.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/appRoleAssignments']['body'],
    params?: IEndpoints['POST /groups/{group-id}/appRoleAssignments']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/appRoleAssignments']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/appRoleAssignments',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}`
   *
   * Represents the app roles granted to a group for an application. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['group-id', 'appRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        path: ['group-id', 'appRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}`
   *
   * Deletes an appRoleAssignment that a group has been granted.
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/appRoleAssignments/{appRoleAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'appRoleAssignment-id'],
      },
      params,
    };
  },
};

export const assignLicense = {
  /**
   * `POST /groups/{group-id}/assignLicense`
   *
   * Add or remove licenses on a group. Licenses assigned to the group will be assigned to all users in the group. Group-based licensing is an alternative to direct user licensing. To learn more about group-based licensing, see What is group-based licensing in Microsoft Entra ID. To get the subscriptions available in the directory, perform a GET subscribedSkus request.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/assignLicense']['body'],
    params?: IEndpoints['POST /groups/{group-id}/assignLicense']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/assignLicense']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/assignLicense',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const calendarView = {
  /**
  * `GET /groups/{group-id}/calendarView`
  *
  * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range,
from the default calendar of a group.
  */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/calendarView']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/calendarView']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/calendarView',
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
        path: ['group-id'],
      },
      params,
    };
  },
};

export const checkGrantedPermissionsForApp = {
  /**
   * `POST /groups/{group-id}/checkGrantedPermissionsForApp`
   *
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/checkGrantedPermissionsForApp']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/checkGrantedPermissionsForApp']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/checkGrantedPermissionsForApp',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};

export const checkMemberGroups = {
  /**
  * `POST /groups/{group-id}/checkMemberGroups`
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
    body: IEndpoints['POST /groups/{group-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /groups/{group-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/checkMemberGroups']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/checkMemberGroups',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /groups/{group-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /groups/{group-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/checkMemberObjects']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/checkMemberObjects',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const createdOnBehalfOf = {
  /**
   * `GET /groups/{group-id}/createdOnBehalfOf`
   *
   * The user (or application) that created the group. NOTE: This property isn&#x27;t set if the user is an administrator. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/createdOnBehalfOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/createdOnBehalfOf']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/createdOnBehalfOf',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
};

export const drive = {
  /**
   * `GET /groups/{group-id}/drive`
   *
   * The group&#x27;s default drive. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/drive']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/drive']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/drive',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
};

export const drives = {
  /**
   * `GET /groups/{group-id}/drives`
   *
   * The group&#x27;s drives. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/drives']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/drives']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/drives',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/drives/{drive-id}`
   *
   * The group&#x27;s drives. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/drives/{drive-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/drives/{drive-id}']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/drives/{drive-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'drive-id'],
      },
      params,
    };
  },
};

export const extensions = {
  /**
   * `GET /groups/{group-id}/extensions`
   *
   * The collection of open extensions defined for the group. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/extensions']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/extensions']['body'],
    params?: IEndpoints['POST /groups/{group-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/extensions']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/extensions',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the group. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/extensions/{extension-id}']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/extensions/{extension-id}']['response']> {
    return {
      method: 'patch',
      path: '/groups/{group-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['group-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'extension-id'],
      },
      params,
    };
  },
};

export const getAvailableExtensionProperties = {
  /**
   * `POST /groups/getAvailableExtensionProperties`
   *
   * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
   */
  create: function create(
    body: IEndpoints['POST /groups/getAvailableExtensionProperties']['body']
  ): EndpointRequest<IEndpoints['POST /groups/getAvailableExtensionProperties']['response']> {
    return {
      method: 'post',
      path: '/groups/getAvailableExtensionProperties',
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /groups/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /groups/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /groups/getByIds']['response']> {
    return {
      method: 'post',
      path: '/groups/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /groups/{group-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /groups/{group-id}/getMemberGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/getMemberGroups']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/getMemberGroups',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
  * `POST /groups/{group-id}/getMemberObjects`
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
    body: IEndpoints['POST /groups/{group-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /groups/{group-id}/getMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/getMemberObjects']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/getMemberObjects',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const memberOf = {
  /**
   * `GET /groups/{group-id}/memberOf`
   *
   * Get groups that the group is a direct member of. This operation is not transitive. Unlike getting a user&#x27;s Microsoft 365 groups, this returns all types of groups, not just Microsoft 365 groups.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/memberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/memberOf']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/memberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/memberOf/{directoryObject-id}`
   *
   * Groups that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /groups/{group-id}/memberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/memberOf/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/memberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['group-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const members = {
  /**
   * `GET /groups/{group-id}/members`
   *
   * Get a list of the group&#x27;s direct members. A group can have users, organizational contacts, devices, service principals and other groups as members. This operation is not transitive.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/members']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/members']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/members',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
};

export const membersWithLicenseErrors = {
  /**
   * `GET /groups/{group-id}/membersWithLicenseErrors`
   *
   * A list of group members with license errors from this group-based license assignment. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/membersWithLicenseErrors']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/membersWithLicenseErrors']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/membersWithLicenseErrors',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}`
   *
   * A list of group members with license errors from this group-based license assignment. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['group-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const onPremisesSyncBehavior = {
  /**
   * `GET /groups/{group-id}/onPremisesSyncBehavior`
   *
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/onPremisesSyncBehavior']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/onPremisesSyncBehavior',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/onPremisesSyncBehavior`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/onPremisesSyncBehavior']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/onPremisesSyncBehavior']['response']> {
    return {
      method: 'patch',
      path: '/groups/{group-id}/onPremisesSyncBehavior',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/onPremisesSyncBehavior`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/onPremisesSyncBehavior']['response']> {
    return {
      method: 'delete',
      path: '/groups/{group-id}/onPremisesSyncBehavior',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id'],
      },
      params,
    };
  },
};

export const owners = {
  /**
   * `GET /groups/{group-id}/owners`
   *
   * Retrieve a list of the group&#x27;s owners. The owners are a set of users or service principals who are allowed to modify the group object. Owners are currently not available in Microsoft Graph for groups that were created in Exchange, distribution groups, or groups that are synchronized from an on-premises environment.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/owners']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/owners']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/owners',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
};

export const permissionGrants = {
  /**
   * `GET /groups/{group-id}/permissionGrants`
   *
   * List all resource-specific permission grants on the group. This list specifies the Microsoft Entra apps that have access to the group, along with the corresponding resource-specific access that each app has.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/permissionGrants']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/permissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/permissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/permissionGrants']['body'],
    params?: IEndpoints['POST /groups/{group-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/permissionGrants']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/permissionGrants',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        path: ['group-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
};

export const photo = {
  /**
   * `GET /groups/{group-id}/photo`
   *
   * The group&#x27;s profile photo
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/photo']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/photo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/photo`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/photo']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/photo']['response']> {
    return {
      method: 'patch',
      path: '/groups/{group-id}/photo',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/photo`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/photo']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/photo']['response']> {
    return {
      method: 'delete',
      path: '/groups/{group-id}/photo',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id'],
      },
      params,
    };
  },
};

export const photos = {
  /**
   * `GET /groups/{group-id}/photos`
   *
   * Retrieve a list of profilePhoto objects.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/photos']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/photos']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/photos',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/photos/{profilePhoto-id}`
   *
   * The profile photos owned by the group. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/photos/{profilePhoto-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/photos/{profilePhoto-id}']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/photos/{profilePhoto-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'profilePhoto-id'],
      },
      params,
    };
  },
};

export const rejectedSenders = {
  /**
   * `GET /groups/{group-id}/rejectedSenders`
   *
   * Users in the rejected senders list can&#x27;t post to conversations of the group (identified in the GET request URL). Make sure you don&#x27;t specify the same user or group in the rejected senders and accepted senders lists, otherwise you get an error.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/rejectedSenders']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/rejectedSenders']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/rejectedSenders',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
};

export const removeFavorite = {
  /**
   * `POST /groups/{group-id}/removeFavorite`
   *
   * Remove the group from the list of the current user&#x27;s favorite groups. Supported for Microsoft 365 groups only.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/removeFavorite']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/removeFavorite']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/removeFavorite',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};

export const renew = {
  /**
   * `POST /groups/{group-id}/renew`
   *
   * Renew a group&#x27;s expiration. When a group is renewed, the group expiration is extended by the number of days defined in the policy.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/renew']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/renew']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/renew',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};

export const resetUnseenCount = {
  /**
   * `POST /groups/{group-id}/resetUnseenCount`
   *
   * Reset the unseenCount of all the posts that the current user hasn&#x27;t seen since their last visit. Supported for Microsoft 365 groups only.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/resetUnseenCount']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/resetUnseenCount']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/resetUnseenCount',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
  * `POST /groups/{group-id}/restore`
  *
  * Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items.  Restore a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- group
- servicePrincipal
  */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/restore']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/restore',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};

export const retryServiceProvisioning = {
  /**
   * `POST /groups/{group-id}/retryServiceProvisioning`
   *
   * Retry the group service provisioning.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/retryServiceProvisioning']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/retryServiceProvisioning']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/retryServiceProvisioning',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /groups/{group-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a group object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/serviceProvisioningErrors']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /groups/{group-id}/settings`
   *
   * Retrieve a list of tenant-level or group-specific group settings objects.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/settings']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/settings']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/settings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/settings`
   *
   * Create a new group setting based on the templates available in groupSettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/settings']['body'],
    params?: IEndpoints['POST /groups/{group-id}/settings']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/settings']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/settings',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/settings/{groupSetting-id}`
   *
   * Retrieve the properties of a specific group setting object. The setting can be a tenant-level or group-specific setting.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/settings/{groupSetting-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/settings/{groupSetting-id}']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/settings/{groupSetting-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'groupSetting-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/settings/{groupSetting-id}`
   *
   * Update the properties of a groupSetting object for tenant-wide group settings or a specific group setting.
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/settings/{groupSetting-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/settings/{groupSetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/settings/{groupSetting-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/settings/{groupSetting-id}',
      paramDefs: {
        path: ['group-id', 'groupSetting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/settings/{groupSetting-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/settings/{groupSetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/settings/{groupSetting-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/settings/{groupSetting-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'groupSetting-id'],
      },
      params,
    };
  },
};

export const subscribeByMail = {
  /**
   * `POST /groups/{group-id}/subscribeByMail`
   *
   * Calling this method will enable the current user to receive email notifications for this group, about new posts, events, and files in that group. Supported for Microsoft 365 groups only.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/subscribeByMail']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/subscribeByMail']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/subscribeByMail',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};

export const transitiveMemberOf = {
  /**
   * `GET /groups/{group-id}/transitiveMemberOf`
   *
   * Get groups that the group is a member of. This operation is transitive and will also include all groups that this group is a nested member of. Unlike getting a user&#x27;s Microsoft 365 groups, this returns all types of groups, not just Microsoft 365 groups.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/transitiveMemberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/transitiveMemberOf']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/transitiveMemberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}`
   *
   * The groups that a group is a member of, either directly or through nested membership. Nullable.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/transitiveMemberOf/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/transitiveMemberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['group-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const transitiveMembers = {
  /**
   * `GET /groups/{group-id}/transitiveMembers`
   *
   * Get a list of the group&#x27;s members. A group can have different object types as members. For more information about supported member types for different groups, see Group membership. This operation is transitive and returns a flat list of all nested members. An attempt to filter by an OData cast that represents an unsupported member type returns a 400 Bad Request error with the Request_UnsupportedQuery code.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/transitiveMembers']['parameters']
  ): EndpointRequest<IEndpoints['GET /groups/{group-id}/transitiveMembers']['response']> {
    return {
      method: 'get',
      path: '/groups/{group-id}/transitiveMembers',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/transitiveMembers/{directoryObject-id}`
   *
   * The direct and transitive members of a group. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/transitiveMembers/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/transitiveMembers/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/transitiveMembers/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['group-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const unsubscribeByMail = {
  /**
   * `POST /groups/{group-id}/unsubscribeByMail`
   *
   * Calling this method prevents the current user from receiving email notifications for this group about new posts, events, and files in that group. Supported for Microsoft 365 groups only.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/unsubscribeByMail']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/unsubscribeByMail']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/unsubscribeByMail',
      paramDefs: {
        path: ['group-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
   * `POST /groups/{group-id}/validateProperties`
   *
   * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies. Clients can use this API to determine whether a display name or mail nickname is valid before trying to update a Microsoft 365 group. To validate the properties before creating a group, use the directoryobject:validateProperties function. The following policy validations are performed for the display name and mail nickname properties: This API only returns the first validation failure that is encountered. If the properties fail multiple validations, only the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy. To learn more about configuring naming policies, see Configure naming policy.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/validateProperties']['body'],
    params?: IEndpoints['POST /groups/{group-id}/validateProperties']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/validateProperties']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/validateProperties',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
  /**
  * `POST /groups/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies. Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. To validate the properties of an existing group, use the group: validateProperties function. The following policy validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate that the mail nickname is unique This API only returns the first validation failure that is encountered. If the properties fail multiple validations, only the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy. To learn more about configuring naming policies, see Configure naming policy.
  */
  create$1: function create$1(
    body: IEndpoints['POST /groups/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /groups/validateProperties']['response']> {
    return {
      method: 'post',
      path: '/groups/validateProperties',
      body,
    };
  },
};
