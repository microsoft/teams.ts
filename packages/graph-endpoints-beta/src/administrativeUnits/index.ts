import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /administrativeUnits/{administrativeUnit-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}',
    'delete'
  >;
  'GET /administrativeUnits': Operation<'/administrativeUnits', 'get'>;
  'GET /administrativeUnits/{administrativeUnit-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}',
    'get'
  >;
  'PATCH /administrativeUnits/{administrativeUnit-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}',
    'patch'
  >;
  'POST /administrativeUnits': Operation<'/administrativeUnits', 'post'>;
  'POST /administrativeUnits/{administrativeUnit-id}/checkMemberGroups': Operation<
    '/administrativeUnits/{administrativeUnit-id}/checkMemberGroups',
    'post'
  >;
  'POST /administrativeUnits/{administrativeUnit-id}/checkMemberObjects': Operation<
    '/administrativeUnits/{administrativeUnit-id}/checkMemberObjects',
    'post'
  >;
  'GET /administrativeUnits/{administrativeUnit-id}/deletedMembers': Operation<
    '/administrativeUnits/{administrativeUnit-id}/deletedMembers',
    'get'
  >;
  'GET /administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}',
    'get'
  >;
  'GET /administrativeUnits/{administrativeUnit-id}/extensions': Operation<
    '/administrativeUnits/{administrativeUnit-id}/extensions',
    'get'
  >;
  'POST /administrativeUnits/{administrativeUnit-id}/extensions': Operation<
    '/administrativeUnits/{administrativeUnit-id}/extensions',
    'post'
  >;
  'GET /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /administrativeUnits/getByIds': Operation<'/administrativeUnits/getByIds', 'post'>;
  'POST /administrativeUnits/{administrativeUnit-id}/getMemberGroups': Operation<
    '/administrativeUnits/{administrativeUnit-id}/getMemberGroups',
    'post'
  >;
  'POST /administrativeUnits/{administrativeUnit-id}/getMemberObjects': Operation<
    '/administrativeUnits/{administrativeUnit-id}/getMemberObjects',
    'post'
  >;
  'POST /administrativeUnits/getUserOwnedObjects': Operation<
    '/administrativeUnits/getUserOwnedObjects',
    'post'
  >;
  'GET /administrativeUnits/{administrativeUnit-id}/members': Operation<
    '/administrativeUnits/{administrativeUnit-id}/members',
    'get'
  >;
  'POST /administrativeUnits/{administrativeUnit-id}/members': Operation<
    '/administrativeUnits/{administrativeUnit-id}/members',
    'post'
  >;
  'POST /administrativeUnits/{administrativeUnit-id}/restore': Operation<
    '/administrativeUnits/{administrativeUnit-id}/restore',
    'post'
  >;
  'GET /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers': Operation<
    '/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
    'get'
  >;
  'POST /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers': Operation<
    '/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
    'post'
  >;
  'GET /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    'patch'
  >;
  'DELETE /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    'delete'
  >;
  'POST /administrativeUnits/validateProperties': Operation<
    '/administrativeUnits/validateProperties',
    'post'
  >;
}

/**
 * `DELETE /administrativeUnits/{administrativeUnit-id}`
 *
 * Delete an administrativeUnit.
 */
export function del(
  params?: IEndpoints['DELETE /administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /administrativeUnits/{administrativeUnit-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/administrativeUnits/{administrativeUnit-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['administrativeUnit-id'],
    },
    params,
  };
}

/**
 * `GET /administrativeUnits`
 *
 * Retrieve a list of administrativeUnit objects.
 */
export function list(
  params?: IEndpoints['GET /administrativeUnits']['parameters']
): EndpointRequest<IEndpoints['GET /administrativeUnits']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/administrativeUnits',
    paramDefs: {
      header: ['ConsistencyLevel'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /administrativeUnits/{administrativeUnit-id}`
 *
 * Retrieve the properties and relationships of an administrativeUnit object. The administrativeUnit resource supports extensions, which also allows you to use the GET operation to get custom properties and extension data in an administrativeUnit instance.
 */
export function get(
  params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<IEndpoints['GET /administrativeUnits/{administrativeUnit-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/administrativeUnits/{administrativeUnit-id}',
    paramDefs: {
      path: ['administrativeUnit-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /administrativeUnits/{administrativeUnit-id}`
 *
 * Update the properties of an administrativeUnit object.
 */
export function update(
  body: IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}']['body'],
  params?: IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/administrativeUnits/{administrativeUnit-id}',
    paramDefs: {
      path: ['administrativeUnit-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /administrativeUnits`
 *
 * Create a new administrativeUnit.
 */
export function create(
  body: IEndpoints['POST /administrativeUnits']['body']
): EndpointRequest<IEndpoints['POST /administrativeUnits']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/administrativeUnits',
    body,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /administrativeUnits/{administrativeUnit-id}/checkMemberGroups`
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
    body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/checkMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/{administrativeUnit-id}/checkMemberGroups',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /administrativeUnits/{administrativeUnit-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/checkMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/{administrativeUnit-id}/checkMemberObjects',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
      body,
    };
  },
};

export const deletedMembers = {
  /**
   * `GET /administrativeUnits/{administrativeUnit-id}/deletedMembers`
   *
   */
  list: function list(
    params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/deletedMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/deletedMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/administrativeUnits/{administrativeUnit-id}/deletedMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['administrativeUnit-id'],
      },
      params,
    };
  },
  /**
   * `GET /administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['administrativeUnit-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const extensions = {
  /**
   * `GET /administrativeUnits/{administrativeUnit-id}/extensions`
   *
   * The collection of open extensions defined for this administrative unit. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/administrativeUnits/{administrativeUnit-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['administrativeUnit-id'],
      },
      params,
    };
  },
  /**
   * `POST /administrativeUnits/{administrativeUnit-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/extensions']['body'],
    params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/{administrativeUnit-id}/extensions',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for this administrative unit. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['administrativeUnit-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['administrativeUnit-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['administrativeUnit-id', 'extension-id'],
      },
      params,
    };
  },
};

export const getByIds = {
  /**
   * `POST /administrativeUnits/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /administrativeUnits/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /administrativeUnits/getByIds']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /administrativeUnits/{administrativeUnit-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/getMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/{administrativeUnit-id}/getMemberGroups',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
   * `POST /administrativeUnits/{administrativeUnit-id}/getMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/getMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/{administrativeUnit-id}/getMemberObjects',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
      body,
    };
  },
};

export const getUserOwnedObjects = {
  /**
   * `POST /administrativeUnits/getUserOwnedObjects`
   *
   * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
   */
  create: function create(
    body: IEndpoints['POST /administrativeUnits/getUserOwnedObjects']['body']
  ): EndpointRequest<IEndpoints['POST /administrativeUnits/getUserOwnedObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/getUserOwnedObjects',
      body,
    };
  },
};

export const members = {
  /**
   * `GET /administrativeUnits/{administrativeUnit-id}/members`
   *
   * Users and groups that are members of this administrative unit. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/administrativeUnits/{administrativeUnit-id}/members',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['administrativeUnit-id'],
      },
      params,
    };
  },
  /**
   * `POST /administrativeUnits/{administrativeUnit-id}/members`
   *
   * Use this API to add a member (user, group, or device) to an administrative unit or to create a new group within an administrative unit. All group types can be created within an administrative unit. Note: Currently, it&#x27;s only possible to add one member at a time to an administrative unit.&#x60;
   */
  create: function create(
    body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/members']['body'],
    params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/{administrativeUnit-id}/members',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
  * `POST /administrativeUnits/{administrativeUnit-id}/restore`
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
    params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/{administrativeUnit-id}/restore',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
    };
  },
};

export const scopedRoleMembers = {
  /**
   * `GET /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers`
   *
   * List Microsoft Entra role assignments with administrative unit scope.
   */
  list: function list(
    params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['administrativeUnit-id'],
      },
      params,
    };
  },
  /**
   * `POST /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers`
   *
   * Assign a Microsoft Entra role with administrative unit scope. For a list of roles that can be assigned with administrative unit scope, see Assign Microsoft Entra roles with administrative unit scope.
   */
  create: function create(
    body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['body'],
    params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}`
   *
   * Get a Microsoft Entra role assignment with administrative unit scope.
   */
  get: function get(
    params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['administrativeUnit-id', 'scopedRoleMembership-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['body'],
    params?: IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
      paramDefs: {
        path: ['administrativeUnit-id', 'scopedRoleMembership-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}`
   *
   * Remove a Microsoft Entra role assignment with administrative unit scope.
   */
  del: function del(
    params?: IEndpoints['DELETE /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['administrativeUnit-id', 'scopedRoleMembership-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /administrativeUnits/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
  create: function create(
    body: IEndpoints['POST /administrativeUnits/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /administrativeUnits/validateProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/administrativeUnits/validateProperties',
      body,
    };
  },
};
