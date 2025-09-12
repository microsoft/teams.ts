import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directoryRoleTemplates/{directoryRoleTemplate-id}': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    'delete'
  >;
  'GET /directoryRoleTemplates': Operation<'/directoryRoleTemplates', 'get'>;
  'GET /directoryRoleTemplates/{directoryRoleTemplate-id}': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    'get'
  >;
  'PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    'patch'
  >;
  'POST /directoryRoleTemplates': Operation<'/directoryRoleTemplates', 'post'>;
  'POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberGroups': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberGroups',
    'post'
  >;
  'POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects',
    'post'
  >;
  'POST /directoryRoleTemplates/getByIds': Operation<'/directoryRoleTemplates/getByIds', 'post'>;
  'POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberGroups': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberGroups',
    'post'
  >;
  'POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects',
    'post'
  >;
  'POST /directoryRoleTemplates/getUserOwnedObjects': Operation<
    '/directoryRoleTemplates/getUserOwnedObjects',
    'post'
  >;
  'POST /directoryRoleTemplates/{directoryRoleTemplate-id}/restore': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}/restore',
    'post'
  >;
  'POST /directoryRoleTemplates/validateProperties': Operation<
    '/directoryRoleTemplates/validateProperties',
    'post'
  >;
}

/**
 * `DELETE /directoryRoleTemplates/{directoryRoleTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directoryRoleTemplates/{directoryRoleTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directoryRoleTemplates/{directoryRoleTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['directoryRoleTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /directoryRoleTemplates`
 *
 * Retrieve a list of directoryroletemplate objects.
 */
export function list(
  params?: IEndpoints['GET /directoryRoleTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /directoryRoleTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directoryRoleTemplates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directoryRoleTemplates/{directoryRoleTemplate-id}`
 *
 * Retrieve the properties and relationships of a directoryroletemplate object.
 */
export function get(
  params?: IEndpoints['GET /directoryRoleTemplates/{directoryRoleTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directoryRoleTemplates/{directoryRoleTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    paramDefs: {
      path: ['directoryRoleTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}']['body'],
  params?: IEndpoints['PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    paramDefs: {
      path: ['directoryRoleTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directoryRoleTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /directoryRoleTemplates']['body']
): EndpointRequest<IEndpoints['POST /directoryRoleTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryRoleTemplates',
    body,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberGroups`
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
    body: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberGroups',
      paramDefs: {
        path: ['directoryRoleTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects',
      paramDefs: {
        path: ['directoryRoleTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /directoryRoleTemplates/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /directoryRoleTemplates/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /directoryRoleTemplates/getByIds']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryRoleTemplates/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberGroups',
      paramDefs: {
        path: ['directoryRoleTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
   * `POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects',
      paramDefs: {
        path: ['directoryRoleTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const getUserOwnedObjects = {
  /**
   * `POST /directoryRoleTemplates/getUserOwnedObjects`
   *
   * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
   */
  create: function create(
    body: IEndpoints['POST /directoryRoleTemplates/getUserOwnedObjects']['body']
  ): EndpointRequest<IEndpoints['POST /directoryRoleTemplates/getUserOwnedObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryRoleTemplates/getUserOwnedObjects',
      body,
    };
  },
};

export const restore = {
  /**
  * `POST /directoryRoleTemplates/{directoryRoleTemplate-id}/restore`
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
    params?: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryRoleTemplates/{directoryRoleTemplate-id}/restore',
      paramDefs: {
        path: ['directoryRoleTemplate-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /directoryRoleTemplates/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
  create: function create(
    body: IEndpoints['POST /directoryRoleTemplates/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /directoryRoleTemplates/validateProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryRoleTemplates/validateProperties',
      body,
    };
  },
};
