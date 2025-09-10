import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/deletedItems/{directoryObject-id}': Operation<
    '/directory/deletedItems/{directoryObject-id}',
    'delete'
  >;
  'GET /directory/deletedItems': Operation<'/directory/deletedItems', 'get'>;
  'GET /directory/deletedItems/{directoryObject-id}': Operation<
    '/directory/deletedItems/{directoryObject-id}',
    'get'
  >;
  'POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups': Operation<
    '/directory/deletedItems/{directoryObject-id}/checkMemberGroups',
    'post'
  >;
  'POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects': Operation<
    '/directory/deletedItems/{directoryObject-id}/checkMemberObjects',
    'post'
  >;
  'POST /directory/deletedItems/getByIds': Operation<'/directory/deletedItems/getByIds', 'post'>;
  'POST /directory/deletedItems/{directoryObject-id}/getMemberGroups': Operation<
    '/directory/deletedItems/{directoryObject-id}/getMemberGroups',
    'post'
  >;
  'POST /directory/deletedItems/{directoryObject-id}/getMemberObjects': Operation<
    '/directory/deletedItems/{directoryObject-id}/getMemberObjects',
    'post'
  >;
  'POST /directory/deletedItems/{directoryObject-id}/restore': Operation<
    '/directory/deletedItems/{directoryObject-id}/restore',
    'post'
  >;
  'POST /directory/deletedItems/validateProperties': Operation<
    '/directory/deletedItems/validateProperties',
    'post'
  >;
}

/**
 * `DELETE /directory/deletedItems/{directoryObject-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/deletedItems/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /directory/deletedItems/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/deletedItems/{directoryObject-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['directoryObject-id'],
    },
    params,
  };
}

/**
 * `GET /directory/deletedItems`
 *
 * Recently deleted items. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /directory/deletedItems']['parameters']
): EndpointRequest<IEndpoints['GET /directory/deletedItems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/deletedItems',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/deletedItems/{directoryObject-id}`
 *
 * Recently deleted items. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /directory/deletedItems/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /directory/deletedItems/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/deletedItems/{directoryObject-id}',
    paramDefs: {
      path: ['directoryObject-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups`
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
    body: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/deletedItems/{directoryObject-id}/checkMemberGroups',
      paramDefs: {
        path: ['directoryObject-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/deletedItems/{directoryObject-id}/checkMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/deletedItems/{directoryObject-id}/checkMemberObjects',
      paramDefs: {
        path: ['directoryObject-id'],
      },
      params,
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /directory/deletedItems/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /directory/deletedItems/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /directory/deletedItems/getByIds']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/deletedItems/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /directory/deletedItems/{directoryObject-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/deletedItems/{directoryObject-id}/getMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/deletedItems/{directoryObject-id}/getMemberGroups',
      paramDefs: {
        path: ['directoryObject-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
   * `POST /directory/deletedItems/{directoryObject-id}/getMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/deletedItems/{directoryObject-id}/getMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/deletedItems/{directoryObject-id}/getMemberObjects',
      paramDefs: {
        path: ['directoryObject-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
  * `POST /directory/deletedItems/{directoryObject-id}/restore`
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
    params?: IEndpoints['POST /directory/deletedItems/{directoryObject-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/deletedItems/{directoryObject-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/deletedItems/{directoryObject-id}/restore',
      paramDefs: {
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /directory/deletedItems/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
  create: function create(
    body: IEndpoints['POST /directory/deletedItems/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /directory/deletedItems/validateProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/deletedItems/validateProperties',
      body,
    };
  },
};
