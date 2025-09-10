export * as branding from './branding';
export * as settings from './settings';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}': Operation<'/organization/{organization-id}', 'delete'>;
  'GET /organization': Operation<'/organization', 'get'>;
  'GET /organization/{organization-id}': Operation<'/organization/{organization-id}', 'get'>;
  'PATCH /organization/{organization-id}': Operation<'/organization/{organization-id}', 'patch'>;
  'POST /organization': Operation<'/organization', 'post'>;
  'GET /organization/{organization-id}/certificateBasedAuthConfiguration': Operation<
    '/organization/{organization-id}/certificateBasedAuthConfiguration',
    'get'
  >;
  'POST /organization/{organization-id}/certificateBasedAuthConfiguration': Operation<
    '/organization/{organization-id}/certificateBasedAuthConfiguration',
    'post'
  >;
  'GET /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}': Operation<
    '/organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    'get'
  >;
  'DELETE /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}': Operation<
    '/organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    'delete'
  >;
  'POST /organization/{organization-id}/checkMemberGroups': Operation<
    '/organization/{organization-id}/checkMemberGroups',
    'post'
  >;
  'POST /organization/{organization-id}/checkMemberObjects': Operation<
    '/organization/{organization-id}/checkMemberObjects',
    'post'
  >;
  'GET /organization/{organization-id}/extensions': Operation<
    '/organization/{organization-id}/extensions',
    'get'
  >;
  'POST /organization/{organization-id}/extensions': Operation<
    '/organization/{organization-id}/extensions',
    'post'
  >;
  'GET /organization/{organization-id}/extensions/{extension-id}': Operation<
    '/organization/{organization-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /organization/{organization-id}/extensions/{extension-id}': Operation<
    '/organization/{organization-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /organization/{organization-id}/extensions/{extension-id}': Operation<
    '/organization/{organization-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /organization/getByIds': Operation<'/organization/getByIds', 'post'>;
  'POST /organization/{organization-id}/getMemberGroups': Operation<
    '/organization/{organization-id}/getMemberGroups',
    'post'
  >;
  'POST /organization/{organization-id}/getMemberObjects': Operation<
    '/organization/{organization-id}/getMemberObjects',
    'post'
  >;
  'POST /organization/getUserOwnedObjects': Operation<'/organization/getUserOwnedObjects', 'post'>;
  'GET /organization/{organization-id}/partnerInformation': Operation<
    '/organization/{organization-id}/partnerInformation',
    'get'
  >;
  'PATCH /organization/{organization-id}/partnerInformation': Operation<
    '/organization/{organization-id}/partnerInformation',
    'patch'
  >;
  'DELETE /organization/{organization-id}/partnerInformation': Operation<
    '/organization/{organization-id}/partnerInformation',
    'delete'
  >;
  'POST /organization/{organization-id}/restore': Operation<
    '/organization/{organization-id}/restore',
    'post'
  >;
  'POST /organization/{organization-id}/setMobileDeviceManagementAuthority': Operation<
    '/organization/{organization-id}/setMobileDeviceManagementAuthority',
    'post'
  >;
  'POST /organization/validateProperties': Operation<'/organization/validateProperties', 'post'>;
}

/**
 * `DELETE /organization/{organization-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /organization/{organization-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['organization-id'],
    },
    params,
  };
}

/**
 * `GET /organization`
 *
 * Retrieve a list of organization objects. There&#x27;s only one organization object in the collection.
 */
export function get(
  params?: IEndpoints['GET /organization']['parameters']
): EndpointRequest<IEndpoints['GET /organization']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /organization/{organization-id}`
 *
 * Get the properties and relationships of the currently authenticated organization. Since the organization resource supports extensions, you can also use the GET operation to get custom properties and extension data in an organization instance.
 */
export function get$1(
  params?: IEndpoints['GET /organization/{organization-id}']['parameters']
): EndpointRequest<IEndpoints['GET /organization/{organization-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}',
    paramDefs: {
      path: ['organization-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}`
 *
 * Update the properties of the currently authenticated organization. In this case, organization is defined as a collection of exactly one record, and so its ID must be specified in the request.  The ID is also known as the tenantId of the organization.
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /organization/{organization-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}',
    paramDefs: {
      path: ['organization-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /organization`
 *
 */
export function create(
  body: IEndpoints['POST /organization']['body']
): EndpointRequest<IEndpoints['POST /organization']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/organization',
    body,
  };
}

export const certificateBasedAuthConfiguration = {
  /**
   * `GET /organization/{organization-id}/certificateBasedAuthConfiguration`
   *
   * Get a list of certificateBasedAuthConfiguration objects.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/certificateBasedAuthConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/certificateBasedAuthConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/certificateBasedAuthConfiguration',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `POST /organization/{organization-id}/certificateBasedAuthConfiguration`
   *
   * Create a new certificateBasedAuthConfiguration object.
   */
  create: function create(
    body: IEndpoints['POST /organization/{organization-id}/certificateBasedAuthConfiguration']['body'],
    params?: IEndpoints['POST /organization/{organization-id}/certificateBasedAuthConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /organization/{organization-id}/certificateBasedAuthConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/{organization-id}/certificateBasedAuthConfiguration',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}`
   *
   * Get the properties of a certificateBasedAuthConfiguration object.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['organization-id', 'certificateBasedAuthConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}`
   *
   * Delete a certificateBasedAuthConfiguration object.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id', 'certificateBasedAuthConfiguration-id'],
      },
      params,
    };
  },
};

export const checkMemberGroups = {
  /**
  * `POST /organization/{organization-id}/checkMemberGroups`
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
    body: IEndpoints['POST /organization/{organization-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /organization/{organization-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /organization/{organization-id}/checkMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/{organization-id}/checkMemberGroups',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /organization/{organization-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /organization/{organization-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /organization/{organization-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /organization/{organization-id}/checkMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/{organization-id}/checkMemberObjects',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
};

export const extensions = {
  /**
   * `GET /organization/{organization-id}/extensions`
   *
   * The collection of open extensions defined for the organization resource. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /organization/{organization-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /organization/{organization-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `POST /organization/{organization-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /organization/{organization-id}/extensions']['body'],
    params?: IEndpoints['POST /organization/{organization-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /organization/{organization-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/{organization-id}/extensions',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /organization/{organization-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the organization resource. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['organization-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /organization/{organization-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /organization/{organization-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /organization/{organization-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /organization/{organization-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/organization/{organization-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['organization-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id', 'extension-id'],
      },
      params,
    };
  },
};

export const getByIds = {
  /**
   * `POST /organization/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /organization/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /organization/getByIds']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /organization/{organization-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /organization/{organization-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /organization/{organization-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /organization/{organization-id}/getMemberGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/{organization-id}/getMemberGroups',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
   * `POST /organization/{organization-id}/getMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /organization/{organization-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /organization/{organization-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /organization/{organization-id}/getMemberObjects']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/{organization-id}/getMemberObjects',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
};

export const getUserOwnedObjects = {
  /**
   * `POST /organization/getUserOwnedObjects`
   *
   * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
   */
  create: function create(
    body: IEndpoints['POST /organization/getUserOwnedObjects']['body']
  ): EndpointRequest<IEndpoints['POST /organization/getUserOwnedObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/getUserOwnedObjects',
      body,
    };
  },
};

export const partnerInformation = {
  /**
   * `GET /organization/{organization-id}/partnerInformation`
   *
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/partnerInformation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/partnerInformation']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/partnerInformation',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /organization/{organization-id}/partnerInformation`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /organization/{organization-id}/partnerInformation']['body'],
    params?: IEndpoints['PATCH /organization/{organization-id}/partnerInformation']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /organization/{organization-id}/partnerInformation']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/organization/{organization-id}/partnerInformation',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/partnerInformation`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/partnerInformation']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/partnerInformation']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/partnerInformation',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
  * `POST /organization/{organization-id}/restore`
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
    params?: IEndpoints['POST /organization/{organization-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /organization/{organization-id}/restore']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/{organization-id}/restore',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const setMobileDeviceManagementAuthority = {
  /**
   * `POST /organization/{organization-id}/setMobileDeviceManagementAuthority`
   *
   * Set mobile device management authority
   */
  create: function create(
    params?: IEndpoints['POST /organization/{organization-id}/setMobileDeviceManagementAuthority']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /organization/{organization-id}/setMobileDeviceManagementAuthority']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/{organization-id}/setMobileDeviceManagementAuthority',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /organization/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
  create: function create(
    body: IEndpoints['POST /organization/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /organization/validateProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/organization/validateProperties',
      body,
    };
  },
};
