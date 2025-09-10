import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directoryRoles/{directoryRole-id}': Operation<
    '/directoryRoles/{directoryRole-id}',
    'delete'
  >;
  'GET /directoryRoles': Operation<'/directoryRoles', 'get'>;
  'GET /directoryRoles/{directoryRole-id}': Operation<'/directoryRoles/{directoryRole-id}', 'get'>;
  'PATCH /directoryRoles/{directoryRole-id}': Operation<
    '/directoryRoles/{directoryRole-id}',
    'patch'
  >;
  'POST /directoryRoles': Operation<'/directoryRoles', 'post'>;
  'POST /directoryRoles/{directoryRole-id}/checkMemberGroups': Operation<
    '/directoryRoles/{directoryRole-id}/checkMemberGroups',
    'post'
  >;
  'POST /directoryRoles/{directoryRole-id}/checkMemberObjects': Operation<
    '/directoryRoles/{directoryRole-id}/checkMemberObjects',
    'post'
  >;
  'POST /directoryRoles/getAvailableExtensionProperties': Operation<
    '/directoryRoles/getAvailableExtensionProperties',
    'post'
  >;
  'POST /directoryRoles/getByIds': Operation<'/directoryRoles/getByIds', 'post'>;
  'POST /directoryRoles/{directoryRole-id}/getMemberGroups': Operation<
    '/directoryRoles/{directoryRole-id}/getMemberGroups',
    'post'
  >;
  'POST /directoryRoles/{directoryRole-id}/getMemberObjects': Operation<
    '/directoryRoles/{directoryRole-id}/getMemberObjects',
    'post'
  >;
  'GET /directoryRoles/{directoryRole-id}/members': Operation<
    '/directoryRoles/{directoryRole-id}/members',
    'get'
  >;
  'POST /directoryRoles/{directoryRole-id}/restore': Operation<
    '/directoryRoles/{directoryRole-id}/restore',
    'post'
  >;
  'GET /directoryRoles/{directoryRole-id}/scopedMembers': Operation<
    '/directoryRoles/{directoryRole-id}/scopedMembers',
    'get'
  >;
  'POST /directoryRoles/{directoryRole-id}/scopedMembers': Operation<
    '/directoryRoles/{directoryRole-id}/scopedMembers',
    'post'
  >;
  'GET /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}': Operation<
    '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}': Operation<
    '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
    'patch'
  >;
  'DELETE /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}': Operation<
    '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
    'delete'
  >;
  'POST /directoryRoles/validateProperties': Operation<
    '/directoryRoles/validateProperties',
    'post'
  >;
}

/**
 * `DELETE /directoryRoles/{directoryRole-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directoryRoles/{directoryRole-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /directoryRoles/{directoryRole-id}']['response']> {
  return {
    method: 'delete',
    path: '/directoryRoles/{directoryRole-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['directoryRole-id'],
    },
    params,
  };
}

/**
 * `GET /directoryRoles`
 *
 * List the directory roles that are activated in the tenant. This operation only returns roles that have been activated. A role becomes activated when an admin activates the role using the Activate directoryRole API. Not all built-in roles are initially activated.  When assigning a role using the Microsoft Entra admin center, the role activation step is implicitly done on the admin&#x27;s behalf. To get the full list of roles that are available in Microsoft Entra ID, use List directoryRoleTemplates.
 */
export function list(
  params?: IEndpoints['GET /directoryRoles']['parameters']
): EndpointRequest<IEndpoints['GET /directoryRoles']['response']> {
  return {
    method: 'get',
    path: '/directoryRoles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directoryRoles/{directoryRole-id}`
 *
 * Retrieve the properties of a directoryRole object. The role must be activated in tenant for a successful response. You can use both the object ID and template ID of the directoryRole with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Microsoft Entra admin center. For details, see Role template IDs.
 */
export function get(
  params?: IEndpoints['GET /directoryRoles/{directoryRole-id}']['parameters']
): EndpointRequest<IEndpoints['GET /directoryRoles/{directoryRole-id}']['response']> {
  return {
    method: 'get',
    path: '/directoryRoles/{directoryRole-id}',
    paramDefs: {
      path: ['directoryRole-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directoryRoles/{directoryRole-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directoryRoles/{directoryRole-id}']['body'],
  params?: IEndpoints['PATCH /directoryRoles/{directoryRole-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /directoryRoles/{directoryRole-id}']['response']> {
  return {
    method: 'patch',
    path: '/directoryRoles/{directoryRole-id}',
    paramDefs: {
      path: ['directoryRole-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directoryRoles`
 *
 * Activate a directory role. To read a directory role or update its members, it must first be activated in the tenant. The Company Administrators and the implicit user directory roles (User, Guest User, and Restricted Guest User roles) are activated by default. To access and assign members to other directory roles, you must first activate it with its corresponding directory role template ID.
 */
export function create(
  body: IEndpoints['POST /directoryRoles']['body']
): EndpointRequest<IEndpoints['POST /directoryRoles']['response']> {
  return {
    method: 'post',
    path: '/directoryRoles',
    body,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /directoryRoles/{directoryRole-id}/checkMemberGroups`
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
    body: IEndpoints['POST /directoryRoles/{directoryRole-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoles/{directoryRole-id}/checkMemberGroups']['response']
  > {
    return {
      method: 'post',
      path: '/directoryRoles/{directoryRole-id}/checkMemberGroups',
      paramDefs: {
        path: ['directoryRole-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /directoryRoles/{directoryRole-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /directoryRoles/{directoryRole-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoles/{directoryRole-id}/checkMemberObjects']['response']
  > {
    return {
      method: 'post',
      path: '/directoryRoles/{directoryRole-id}/checkMemberObjects',
      paramDefs: {
        path: ['directoryRole-id'],
      },
      params,
      body,
    };
  },
};

export const getAvailableExtensionProperties = {
  /**
   * `POST /directoryRoles/getAvailableExtensionProperties`
   *
   * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
   */
  create: function create(
    body: IEndpoints['POST /directoryRoles/getAvailableExtensionProperties']['body']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoles/getAvailableExtensionProperties']['response']
  > {
    return {
      method: 'post',
      path: '/directoryRoles/getAvailableExtensionProperties',
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /directoryRoles/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /directoryRoles/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /directoryRoles/getByIds']['response']> {
    return {
      method: 'post',
      path: '/directoryRoles/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /directoryRoles/{directoryRole-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberGroups']['response']
  > {
    return {
      method: 'post',
      path: '/directoryRoles/{directoryRole-id}/getMemberGroups',
      paramDefs: {
        path: ['directoryRole-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
  * `POST /directoryRoles/{directoryRole-id}/getMemberObjects`
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
    body: IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberObjects']['response']
  > {
    return {
      method: 'post',
      path: '/directoryRoles/{directoryRole-id}/getMemberObjects',
      paramDefs: {
        path: ['directoryRole-id'],
      },
      params,
      body,
    };
  },
};

export const members = {
  /**
   * `GET /directoryRoles/{directoryRole-id}/members`
   *
   * Retrieve the list of principals that are assigned to the directory role.  You can use both the object ID and template ID of the directoryRole with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Microsoft Entra admin center. For details, see Role template IDs.
   */
  list: function list(
    params?: IEndpoints['GET /directoryRoles/{directoryRole-id}/members']['parameters']
  ): EndpointRequest<IEndpoints['GET /directoryRoles/{directoryRole-id}/members']['response']> {
    return {
      method: 'get',
      path: '/directoryRoles/{directoryRole-id}/members',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['directoryRole-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
  * `POST /directoryRoles/{directoryRole-id}/restore`
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
    params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /directoryRoles/{directoryRole-id}/restore']['response']> {
    return {
      method: 'post',
      path: '/directoryRoles/{directoryRole-id}/restore',
      paramDefs: {
        path: ['directoryRole-id'],
      },
      params,
    };
  },
};

export const scopedMembers = {
  /**
   * `GET /directoryRoles/{directoryRole-id}/scopedMembers`
   *
   * Retrieve a list of scopedRoleMembership objects for a directory role.
   */
  list: function list(
    params?: IEndpoints['GET /directoryRoles/{directoryRole-id}/scopedMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directoryRoles/{directoryRole-id}/scopedMembers']['response']
  > {
    return {
      method: 'get',
      path: '/directoryRoles/{directoryRole-id}/scopedMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['directoryRole-id'],
      },
      params,
    };
  },
  /**
   * `POST /directoryRoles/{directoryRole-id}/scopedMembers`
   *
   */
  create: function create(
    body: IEndpoints['POST /directoryRoles/{directoryRole-id}/scopedMembers']['body'],
    params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/scopedMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoles/{directoryRole-id}/scopedMembers']['response']
  > {
    return {
      method: 'post',
      path: '/directoryRoles/{directoryRole-id}/scopedMembers',
      paramDefs: {
        path: ['directoryRole-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}`
   *
   * Members of this directory role that are scoped to administrative units. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['response']
  > {
    return {
      method: 'get',
      path: '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['directoryRole-id', 'scopedRoleMembership-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['body'],
    params?: IEndpoints['PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
      paramDefs: {
        path: ['directoryRole-id', 'scopedRoleMembership-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['directoryRole-id', 'scopedRoleMembership-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /directoryRoles/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies. Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. To validate the properties of an existing group, use the group: validateProperties function. The following policy validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate that the mail nickname is unique This API only returns the first validation failure that is encountered. If the properties fail multiple validations, only the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy. To learn more about configuring naming policies, see Configure naming policy.
  */
  create: function create(
    body: IEndpoints['POST /directoryRoles/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /directoryRoles/validateProperties']['response']> {
    return {
      method: 'post',
      path: '/directoryRoles/validateProperties',
      body,
    };
  },
};
