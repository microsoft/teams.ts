import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directoryObjects/{directoryObject-id}': Operation<
    '/directoryObjects/{directoryObject-id}',
    'delete'
  >;
  'GET /directoryObjects': Operation<'/directoryObjects', 'get'>;
  'GET /directoryObjects/{directoryObject-id}': Operation<
    '/directoryObjects/{directoryObject-id}',
    'get'
  >;
  'PATCH /directoryObjects/{directoryObject-id}': Operation<
    '/directoryObjects/{directoryObject-id}',
    'patch'
  >;
  'POST /directoryObjects': Operation<'/directoryObjects', 'post'>;
  'POST /directoryObjects/{directoryObject-id}/checkMemberGroups': Operation<
    '/directoryObjects/{directoryObject-id}/checkMemberGroups',
    'post'
  >;
  'POST /directoryObjects/{directoryObject-id}/checkMemberObjects': Operation<
    '/directoryObjects/{directoryObject-id}/checkMemberObjects',
    'post'
  >;
  'POST /directoryObjects/getByIds': Operation<'/directoryObjects/getByIds', 'post'>;
  'POST /directoryObjects/{directoryObject-id}/getMemberGroups': Operation<
    '/directoryObjects/{directoryObject-id}/getMemberGroups',
    'post'
  >;
  'POST /directoryObjects/{directoryObject-id}/getMemberObjects': Operation<
    '/directoryObjects/{directoryObject-id}/getMemberObjects',
    'post'
  >;
  'POST /directoryObjects/getUserOwnedObjects': Operation<
    '/directoryObjects/getUserOwnedObjects',
    'post'
  >;
  'POST /directoryObjects/{directoryObject-id}/restore': Operation<
    '/directoryObjects/{directoryObject-id}/restore',
    'post'
  >;
  'POST /directoryObjects/validateProperties': Operation<
    '/directoryObjects/validateProperties',
    'post'
  >;
}

/**
 * `DELETE /directoryObjects/{directoryObject-id}`
 *
 * Delete a directory object, for example, a group, user, application, or service principal.
 */
export function del(
  params?: IEndpoints['DELETE /directoryObjects/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /directoryObjects/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directoryObjects/{directoryObject-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['directoryObject-id'],
    },
    params,
  };
}

/**
 * `GET /directoryObjects`
 *
 */
export function list(
  params?: IEndpoints['GET /directoryObjects']['parameters']
): EndpointRequest<IEndpoints['GET /directoryObjects']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directoryObjects',
    paramDefs: {
      header: ['ConsistencyLevel'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directoryObjects/{directoryObject-id}`
 *
 * Retrieve the properties and relationships of a directoryObject object.
 */
export function get(
  params?: IEndpoints['GET /directoryObjects/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /directoryObjects/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directoryObjects/{directoryObject-id}',
    paramDefs: {
      path: ['directoryObject-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directoryObjects/{directoryObject-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directoryObjects/{directoryObject-id}']['body'],
  params?: IEndpoints['PATCH /directoryObjects/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /directoryObjects/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directoryObjects/{directoryObject-id}',
    paramDefs: {
      path: ['directoryObject-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directoryObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directoryObjects']['body']
): EndpointRequest<IEndpoints['POST /directoryObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryObjects',
    body,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /directoryObjects/{directoryObject-id}/checkMemberGroups`
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
    body: IEndpoints['POST /directoryObjects/{directoryObject-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /directoryObjects/{directoryObject-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryObjects/{directoryObject-id}/checkMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryObjects/{directoryObject-id}/checkMemberGroups',
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
   * `POST /directoryObjects/{directoryObject-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /directoryObjects/{directoryObject-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /directoryObjects/{directoryObject-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryObjects/{directoryObject-id}/checkMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryObjects/{directoryObject-id}/checkMemberObjects',
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
   * `POST /directoryObjects/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /directoryObjects/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /directoryObjects/getByIds']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryObjects/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /directoryObjects/{directoryObject-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryObjects/{directoryObject-id}/getMemberGroups',
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
   * `POST /directoryObjects/{directoryObject-id}/getMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryObjects/{directoryObject-id}/getMemberObjects',
      paramDefs: {
        path: ['directoryObject-id'],
      },
      params,
      body,
    };
  },
};

export const getUserOwnedObjects = {
  /**
   * `POST /directoryObjects/getUserOwnedObjects`
   *
   * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
   */
  create: function create(
    body: IEndpoints['POST /directoryObjects/getUserOwnedObjects']['body']
  ): EndpointRequest<IEndpoints['POST /directoryObjects/getUserOwnedObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryObjects/getUserOwnedObjects',
      body,
    };
  },
};

export const restore = {
  /**
  * `POST /directoryObjects/{directoryObject-id}/restore`
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
    params?: IEndpoints['POST /directoryObjects/{directoryObject-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directoryObjects/{directoryObject-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryObjects/{directoryObject-id}/restore',
      paramDefs: {
        path: ['directoryObject-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /directoryObjects/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
  create: function create(
    body: IEndpoints['POST /directoryObjects/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /directoryObjects/validateProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directoryObjects/validateProperties',
      body,
    };
  },
};
