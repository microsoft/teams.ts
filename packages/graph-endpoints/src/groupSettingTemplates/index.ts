import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groupSettingTemplates/{groupSettingTemplate-id}': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}',
    'delete'
  >;
  'GET /groupSettingTemplates': Operation<'/groupSettingTemplates', 'get'>;
  'GET /groupSettingTemplates/{groupSettingTemplate-id}': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}',
    'get'
  >;
  'PATCH /groupSettingTemplates/{groupSettingTemplate-id}': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}',
    'patch'
  >;
  'POST /groupSettingTemplates': Operation<'/groupSettingTemplates', 'post'>;
  'POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberGroups': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}/checkMemberGroups',
    'post'
  >;
  'POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects',
    'post'
  >;
  'POST /groupSettingTemplates/getAvailableExtensionProperties': Operation<
    '/groupSettingTemplates/getAvailableExtensionProperties',
    'post'
  >;
  'POST /groupSettingTemplates/getByIds': Operation<'/groupSettingTemplates/getByIds', 'post'>;
  'POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberGroups': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}/getMemberGroups',
    'post'
  >;
  'POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects',
    'post'
  >;
  'POST /groupSettingTemplates/{groupSettingTemplate-id}/restore': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}/restore',
    'post'
  >;
  'POST /groupSettingTemplates/validateProperties': Operation<
    '/groupSettingTemplates/validateProperties',
    'post'
  >;
}

/**
 * `DELETE /groupSettingTemplates/{groupSettingTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groupSettingTemplates/{groupSettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groupSettingTemplates/{groupSettingTemplate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groupSettingTemplates/{groupSettingTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupSettingTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /groupSettingTemplates`
 *
 * Group setting templates represents a set of templates from which group settings may be created and used within a tenant. This operation retrieves the list of available groupSettingTemplates objects.
 */
export function list(
  params?: IEndpoints['GET /groupSettingTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /groupSettingTemplates']['response']> {
  return {
    method: 'get',
    path: '/groupSettingTemplates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groupSettingTemplates/{groupSettingTemplate-id}`
 *
 * A group setting template represents a template of settings from which settings may be created within a tenant. This operation allows retrieval of the properties of the groupSettingTemplate object, including the available settings and their defaults.
 */
export function get(
  params?: IEndpoints['GET /groupSettingTemplates/{groupSettingTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groupSettingTemplates/{groupSettingTemplate-id}']['response']> {
  return {
    method: 'get',
    path: '/groupSettingTemplates/{groupSettingTemplate-id}',
    paramDefs: {
      path: ['groupSettingTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groupSettingTemplates/{groupSettingTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groupSettingTemplates/{groupSettingTemplate-id}']['body'],
  params?: IEndpoints['PATCH /groupSettingTemplates/{groupSettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groupSettingTemplates/{groupSettingTemplate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groupSettingTemplates/{groupSettingTemplate-id}',
    paramDefs: {
      path: ['groupSettingTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groupSettingTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /groupSettingTemplates']['body']
): EndpointRequest<IEndpoints['POST /groupSettingTemplates']['response']> {
  return {
    method: 'post',
    path: '/groupSettingTemplates',
    body,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberGroups`
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
    body: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberGroups']['response']
  > {
    return {
      method: 'post',
      path: '/groupSettingTemplates/{groupSettingTemplate-id}/checkMemberGroups',
      paramDefs: {
        path: ['groupSettingTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects']['response']
  > {
    return {
      method: 'post',
      path: '/groupSettingTemplates/{groupSettingTemplate-id}/checkMemberObjects',
      paramDefs: {
        path: ['groupSettingTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const getAvailableExtensionProperties = {
  /**
   * `POST /groupSettingTemplates/getAvailableExtensionProperties`
   *
   * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
   */
  create: function create(
    body: IEndpoints['POST /groupSettingTemplates/getAvailableExtensionProperties']['body']
  ): EndpointRequest<
    IEndpoints['POST /groupSettingTemplates/getAvailableExtensionProperties']['response']
  > {
    return {
      method: 'post',
      path: '/groupSettingTemplates/getAvailableExtensionProperties',
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /groupSettingTemplates/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /groupSettingTemplates/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /groupSettingTemplates/getByIds']['response']> {
    return {
      method: 'post',
      path: '/groupSettingTemplates/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberGroups']['response']
  > {
    return {
      method: 'post',
      path: '/groupSettingTemplates/{groupSettingTemplate-id}/getMemberGroups',
      paramDefs: {
        path: ['groupSettingTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
  * `POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects`
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
    body: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects']['response']
  > {
    return {
      method: 'post',
      path: '/groupSettingTemplates/{groupSettingTemplate-id}/getMemberObjects',
      paramDefs: {
        path: ['groupSettingTemplate-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
  * `POST /groupSettingTemplates/{groupSettingTemplate-id}/restore`
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
    params?: IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groupSettingTemplates/{groupSettingTemplate-id}/restore']['response']
  > {
    return {
      method: 'post',
      path: '/groupSettingTemplates/{groupSettingTemplate-id}/restore',
      paramDefs: {
        path: ['groupSettingTemplate-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /groupSettingTemplates/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies. Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. To validate the properties of an existing group, use the group: validateProperties function. The following policy validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate that the mail nickname is unique This API only returns the first validation failure that is encountered. If the properties fail multiple validations, only the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy. To learn more about configuring naming policies, see Configure naming policy.
  */
  create: function create(
    body: IEndpoints['POST /groupSettingTemplates/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /groupSettingTemplates/validateProperties']['response']> {
    return {
      method: 'post',
      path: '/groupSettingTemplates/validateProperties',
      body,
    };
  },
};
