import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /permissionGrants': Operation<'/permissionGrants', 'get'>;
  'GET /permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'POST /permissionGrants': Operation<'/permissionGrants', 'post'>;
  'POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberGroups': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberGroups',
    'post'
  >;
  'POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects',
    'post'
  >;
  'POST /permissionGrants/getByIds': Operation<'/permissionGrants/getByIds', 'post'>;
  'POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberGroups': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberGroups',
    'post'
  >;
  'POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects',
    'post'
  >;
  'POST /permissionGrants/getUserOwnedObjects': Operation<
    '/permissionGrants/getUserOwnedObjects',
    'post'
  >;
  'POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}/restore',
    'post'
  >;
  'POST /permissionGrants/validateProperties': Operation<
    '/permissionGrants/validateProperties',
    'post'
  >;
}

/**
 * `DELETE /permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['resourceSpecificPermissionGrant-id'],
    },
    params,
  };
}

/**
 * `GET /permissionGrants`
 *
 */
export function list(
  params?: IEndpoints['GET /permissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /permissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/permissionGrants',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: {
      path: ['resourceSpecificPermissionGrant-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
  params?: IEndpoints['PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: {
      path: ['resourceSpecificPermissionGrant-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /permissionGrants`
 *
 */
export function create(
  body: IEndpoints['POST /permissionGrants']['body']
): EndpointRequest<IEndpoints['POST /permissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/permissionGrants',
    body,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberGroups`
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
    body: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberGroups',
      paramDefs: {
        path: ['resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects',
      paramDefs: {
        path: ['resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /permissionGrants/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /permissionGrants/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /permissionGrants/getByIds']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/permissionGrants/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberGroups',
      paramDefs: {
        path: ['resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
   * `POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects',
      paramDefs: {
        path: ['resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
};

export const getUserOwnedObjects = {
  /**
   * `POST /permissionGrants/getUserOwnedObjects`
   *
   * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
   */
  create: function create(
    body: IEndpoints['POST /permissionGrants/getUserOwnedObjects']['body']
  ): EndpointRequest<IEndpoints['POST /permissionGrants/getUserOwnedObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/permissionGrants/getUserOwnedObjects',
      body,
    };
  },
};

export const restore = {
  /**
  * `POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore`
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
    params?: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/permissionGrants/{resourceSpecificPermissionGrant-id}/restore',
      paramDefs: {
        path: ['resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /permissionGrants/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
  create: function create(
    body: IEndpoints['POST /permissionGrants/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /permissionGrants/validateProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/permissionGrants/validateProperties',
      body,
    };
  },
};
