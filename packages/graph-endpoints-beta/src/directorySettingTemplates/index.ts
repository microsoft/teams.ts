import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directorySettingTemplates/{directorySettingTemplate-id}': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}',
    'delete'
  >;
  'GET /directorySettingTemplates': Operation<'/directorySettingTemplates', 'get'>;
  'GET /directorySettingTemplates/{directorySettingTemplate-id}': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}',
    'get'
  >;
  'PATCH /directorySettingTemplates/{directorySettingTemplate-id}': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}',
    'patch'
  >;
  'POST /directorySettingTemplates': Operation<'/directorySettingTemplates', 'post'>;
  'POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberGroups': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}/checkMemberGroups',
    'post'
  >;
  'POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects',
    'post'
  >;
  'POST /directorySettingTemplates/getByIds': Operation<
    '/directorySettingTemplates/getByIds',
    'post'
  >;
  'POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberGroups': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}/getMemberGroups',
    'post'
  >;
  'POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects',
    'post'
  >;
  'POST /directorySettingTemplates/getUserOwnedObjects': Operation<
    '/directorySettingTemplates/getUserOwnedObjects',
    'post'
  >;
  'POST /directorySettingTemplates/{directorySettingTemplate-id}/restore': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}/restore',
    'post'
  >;
  'POST /directorySettingTemplates/validateProperties': Operation<
    '/directorySettingTemplates/validateProperties',
    'post'
  >;
}

/**
 * `DELETE /directorySettingTemplates/{directorySettingTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directorySettingTemplates/{directorySettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directorySettingTemplates/{directorySettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directorySettingTemplates/{directorySettingTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['directorySettingTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /directorySettingTemplates`
 *
 * Directory setting templates represents a set of templates of directory settings, from which directory settings may be created and used within a tenant.  This operation retrieves the list of available directorySettingTemplates objects.
 */
export function list(
  params?: IEndpoints['GET /directorySettingTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /directorySettingTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directorySettingTemplates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directorySettingTemplates/{directorySettingTemplate-id}`
 *
 * A directory setting template represents a template of settings from which settings may be created within a tenant. This operation allows retrieval of the properties of the directorySettingTemplate object, including the available settings and their defaults.
 */
export function get(
  params?: IEndpoints['GET /directorySettingTemplates/{directorySettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directorySettingTemplates/{directorySettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directorySettingTemplates/{directorySettingTemplate-id}',
    paramDefs: {
      path: ['directorySettingTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directorySettingTemplates/{directorySettingTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directorySettingTemplates/{directorySettingTemplate-id}']['body'],
  params?: IEndpoints['PATCH /directorySettingTemplates/{directorySettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directorySettingTemplates/{directorySettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directorySettingTemplates/{directorySettingTemplate-id}',
    paramDefs: {
      path: ['directorySettingTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directorySettingTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /directorySettingTemplates']['body']
): EndpointRequest<IEndpoints['POST /directorySettingTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directorySettingTemplates',
    body,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberGroups`
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
    body: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directorySettingTemplates/{directorySettingTemplate-id}/checkMemberGroups',
      paramDefs: {
        path: ['directorySettingTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directorySettingTemplates/{directorySettingTemplate-id}/checkMemberObjects',
      paramDefs: {
        path: ['directorySettingTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /directorySettingTemplates/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /directorySettingTemplates/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /directorySettingTemplates/getByIds']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directorySettingTemplates/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directorySettingTemplates/{directorySettingTemplate-id}/getMemberGroups',
      paramDefs: {
        path: ['directorySettingTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
   * `POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directorySettingTemplates/{directorySettingTemplate-id}/getMemberObjects',
      paramDefs: {
        path: ['directorySettingTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const getUserOwnedObjects = {
  /**
   * `POST /directorySettingTemplates/getUserOwnedObjects`
   *
   * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
   */
  create: function create(
    body: IEndpoints['POST /directorySettingTemplates/getUserOwnedObjects']['body']
  ): EndpointRequest<
    IEndpoints['POST /directorySettingTemplates/getUserOwnedObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directorySettingTemplates/getUserOwnedObjects',
      body,
    };
  },
};

export const restore = {
  /**
  * `POST /directorySettingTemplates/{directorySettingTemplate-id}/restore`
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
    params?: IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directorySettingTemplates/{directorySettingTemplate-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directorySettingTemplates/{directorySettingTemplate-id}/restore',
      paramDefs: {
        path: ['directorySettingTemplate-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /directorySettingTemplates/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
  create: function create(
    body: IEndpoints['POST /directorySettingTemplates/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /directorySettingTemplates/validateProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directorySettingTemplates/validateProperties',
      body,
    };
  },
};
