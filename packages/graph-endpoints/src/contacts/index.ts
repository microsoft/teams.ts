import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /contacts/{orgContact-id}': Operation<'/contacts/{orgContact-id}', 'delete'>;
  'GET /contacts': Operation<'/contacts', 'get'>;
  'GET /contacts/{orgContact-id}': Operation<'/contacts/{orgContact-id}', 'get'>;
  'PATCH /contacts/{orgContact-id}': Operation<'/contacts/{orgContact-id}', 'patch'>;
  'POST /contacts/{orgContact-id}/checkMemberGroups': Operation<
    '/contacts/{orgContact-id}/checkMemberGroups',
    'post'
  >;
  'POST /contacts/{orgContact-id}/checkMemberObjects': Operation<
    '/contacts/{orgContact-id}/checkMemberObjects',
    'post'
  >;
  'GET /contacts/{orgContact-id}/directReports': Operation<
    '/contacts/{orgContact-id}/directReports',
    'get'
  >;
  'GET /contacts/{orgContact-id}/directReports/{directoryObject-id}': Operation<
    '/contacts/{orgContact-id}/directReports/{directoryObject-id}',
    'get'
  >;
  'POST /contacts/getAvailableExtensionProperties': Operation<
    '/contacts/getAvailableExtensionProperties',
    'post'
  >;
  'POST /contacts/getByIds': Operation<'/contacts/getByIds', 'post'>;
  'POST /contacts/{orgContact-id}/getMemberGroups': Operation<
    '/contacts/{orgContact-id}/getMemberGroups',
    'post'
  >;
  'POST /contacts/{orgContact-id}/getMemberObjects': Operation<
    '/contacts/{orgContact-id}/getMemberObjects',
    'post'
  >;
  'GET /contacts/{orgContact-id}/manager': Operation<'/contacts/{orgContact-id}/manager', 'get'>;
  'GET /contacts/{orgContact-id}/memberOf': Operation<'/contacts/{orgContact-id}/memberOf', 'get'>;
  'GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}': Operation<
    '/contacts/{orgContact-id}/memberOf/{directoryObject-id}',
    'get'
  >;
  'GET /contacts/{orgContact-id}/onPremisesSyncBehavior': Operation<
    '/contacts/{orgContact-id}/onPremisesSyncBehavior',
    'get'
  >;
  'PATCH /contacts/{orgContact-id}/onPremisesSyncBehavior': Operation<
    '/contacts/{orgContact-id}/onPremisesSyncBehavior',
    'patch'
  >;
  'DELETE /contacts/{orgContact-id}/onPremisesSyncBehavior': Operation<
    '/contacts/{orgContact-id}/onPremisesSyncBehavior',
    'delete'
  >;
  'POST /contacts/{orgContact-id}/restore': Operation<'/contacts/{orgContact-id}/restore', 'post'>;
  'POST /contacts/{orgContact-id}/retryServiceProvisioning': Operation<
    '/contacts/{orgContact-id}/retryServiceProvisioning',
    'post'
  >;
  'GET /contacts/{orgContact-id}/serviceProvisioningErrors': Operation<
    '/contacts/{orgContact-id}/serviceProvisioningErrors',
    'get'
  >;
  'GET /contacts/{orgContact-id}/transitiveMemberOf': Operation<
    '/contacts/{orgContact-id}/transitiveMemberOf',
    'get'
  >;
  'GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
  'POST /contacts/validateProperties': Operation<'/contacts/validateProperties', 'post'>;
}

/**
 * `DELETE /contacts/{orgContact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /contacts/{orgContact-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /contacts/{orgContact-id}']['response']> {
  return {
    method: 'delete',
    path: '/contacts/{orgContact-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['orgContact-id'],
    },
    params,
  };
}

/**
 * `GET /contacts`
 *
 * Get the list of organizational contacts for this organization.
 */
export function list(
  params?: IEndpoints['GET /contacts']['parameters']
): EndpointRequest<IEndpoints['GET /contacts']['response']> {
  return {
    method: 'get',
    path: '/contacts',
    paramDefs: {
      header: ['ConsistencyLevel'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /contacts/{orgContact-id}`
 *
 * Get the properties and relationships of an organizational contact.
 */
export function get(
  params?: IEndpoints['GET /contacts/{orgContact-id}']['parameters']
): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}']['response']> {
  return {
    method: 'get',
    path: '/contacts/{orgContact-id}',
    paramDefs: {
      path: ['orgContact-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /contacts/{orgContact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /contacts/{orgContact-id}']['body'],
  params?: IEndpoints['PATCH /contacts/{orgContact-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /contacts/{orgContact-id}']['response']> {
  return {
    method: 'patch',
    path: '/contacts/{orgContact-id}',
    paramDefs: {
      path: ['orgContact-id'],
    },
    params,
    body,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /contacts/{orgContact-id}/checkMemberGroups`
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
    body: IEndpoints['POST /contacts/{orgContact-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /contacts/{orgContact-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/checkMemberGroups']['response']> {
    return {
      method: 'post',
      path: '/contacts/{orgContact-id}/checkMemberGroups',
      paramDefs: {
        path: ['orgContact-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /contacts/{orgContact-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /contacts/{orgContact-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /contacts/{orgContact-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/checkMemberObjects']['response']> {
    return {
      method: 'post',
      path: '/contacts/{orgContact-id}/checkMemberObjects',
      paramDefs: {
        path: ['orgContact-id'],
      },
      params,
      body,
    };
  },
};

export const directReports = {
  /**
   * `GET /contacts/{orgContact-id}/directReports`
   *
   * Get the direct reports for this organizational contact.
   */
  list: function list(
    params?: IEndpoints['GET /contacts/{orgContact-id}/directReports']['parameters']
  ): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/directReports']['response']> {
    return {
      method: 'get',
      path: '/contacts/{orgContact-id}/directReports',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['orgContact-id'],
      },
      params,
    };
  },
  /**
   * `GET /contacts/{orgContact-id}/directReports/{directoryObject-id}`
   *
   * The contact&#x27;s direct reports. (The users and contacts that have their manager property set to this contact.)  Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /contacts/{orgContact-id}/directReports/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /contacts/{orgContact-id}/directReports/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/contacts/{orgContact-id}/directReports/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['orgContact-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const getAvailableExtensionProperties = {
  /**
   * `POST /contacts/getAvailableExtensionProperties`
   *
   * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
   */
  create: function create(
    body: IEndpoints['POST /contacts/getAvailableExtensionProperties']['body']
  ): EndpointRequest<IEndpoints['POST /contacts/getAvailableExtensionProperties']['response']> {
    return {
      method: 'post',
      path: '/contacts/getAvailableExtensionProperties',
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /contacts/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /contacts/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /contacts/getByIds']['response']> {
    return {
      method: 'post',
      path: '/contacts/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /contacts/{orgContact-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /contacts/{orgContact-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /contacts/{orgContact-id}/getMemberGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/getMemberGroups']['response']> {
    return {
      method: 'post',
      path: '/contacts/{orgContact-id}/getMemberGroups',
      paramDefs: {
        path: ['orgContact-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
  * `POST /contacts/{orgContact-id}/getMemberObjects`
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
    body: IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['response']> {
    return {
      method: 'post',
      path: '/contacts/{orgContact-id}/getMemberObjects',
      paramDefs: {
        path: ['orgContact-id'],
      },
      params,
      body,
    };
  },
};

export const manager = {
  /**
   * `GET /contacts/{orgContact-id}/manager`
   *
   * Get this organizational contact&#x27;s manager.
   */
  get: function get(
    params?: IEndpoints['GET /contacts/{orgContact-id}/manager']['parameters']
  ): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/manager']['response']> {
    return {
      method: 'get',
      path: '/contacts/{orgContact-id}/manager',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['orgContact-id'],
      },
      params,
    };
  },
};

export const memberOf = {
  /**
   * `GET /contacts/{orgContact-id}/memberOf`
   *
   * List the groups that this organizational contact is a member of.
   */
  get: function get(
    params?: IEndpoints['GET /contacts/{orgContact-id}/memberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/memberOf']['response']> {
    return {
      method: 'get',
      path: '/contacts/{orgContact-id}/memberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['orgContact-id'],
      },
      params,
    };
  },
  /**
   * `GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}`
   *
   * Groups that this contact is a member of. Read-only. Nullable. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/contacts/{orgContact-id}/memberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['orgContact-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const onPremisesSyncBehavior = {
  /**
   * `GET /contacts/{orgContact-id}/onPremisesSyncBehavior`
   *
   */
  get: function get(
    params?: IEndpoints['GET /contacts/{orgContact-id}/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /contacts/{orgContact-id}/onPremisesSyncBehavior']['response']
  > {
    return {
      method: 'get',
      path: '/contacts/{orgContact-id}/onPremisesSyncBehavior',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['orgContact-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /contacts/{orgContact-id}/onPremisesSyncBehavior`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /contacts/{orgContact-id}/onPremisesSyncBehavior']['body'],
    params?: IEndpoints['PATCH /contacts/{orgContact-id}/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /contacts/{orgContact-id}/onPremisesSyncBehavior']['response']
  > {
    return {
      method: 'patch',
      path: '/contacts/{orgContact-id}/onPremisesSyncBehavior',
      paramDefs: {
        path: ['orgContact-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /contacts/{orgContact-id}/onPremisesSyncBehavior`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /contacts/{orgContact-id}/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /contacts/{orgContact-id}/onPremisesSyncBehavior']['response']
  > {
    return {
      method: 'delete',
      path: '/contacts/{orgContact-id}/onPremisesSyncBehavior',
      paramDefs: {
        header: ['If-Match'],
        path: ['orgContact-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
  * `POST /contacts/{orgContact-id}/restore`
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
    params?: IEndpoints['POST /contacts/{orgContact-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/restore']['response']> {
    return {
      method: 'post',
      path: '/contacts/{orgContact-id}/restore',
      paramDefs: {
        path: ['orgContact-id'],
      },
      params,
    };
  },
};

export const retryServiceProvisioning = {
  /**
   * `POST /contacts/{orgContact-id}/retryServiceProvisioning`
   *
   */
  create: function create(
    params?: IEndpoints['POST /contacts/{orgContact-id}/retryServiceProvisioning']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /contacts/{orgContact-id}/retryServiceProvisioning']['response']
  > {
    return {
      method: 'post',
      path: '/contacts/{orgContact-id}/retryServiceProvisioning',
      paramDefs: {
        path: ['orgContact-id'],
      },
      params,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /contacts/{orgContact-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from an organizational contact object .  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /contacts/{orgContact-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /contacts/{orgContact-id}/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/contacts/{orgContact-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['orgContact-id'],
      },
      params,
    };
  },
};

export const transitiveMemberOf = {
  /**
   * `GET /contacts/{orgContact-id}/transitiveMemberOf`
   *
   * Get groups that this organizational contact is a member of. The API request is transitive, and returns all groups the organizational contact is a nested member of.
   */
  get: function get(
    params?: IEndpoints['GET /contacts/{orgContact-id}/transitiveMemberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/transitiveMemberOf']['response']> {
    return {
      method: 'get',
      path: '/contacts/{orgContact-id}/transitiveMemberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['orgContact-id'],
      },
      params,
    };
  },
  /**
   * `GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}`
   *
   * Groups that this contact is a member of, including groups that the contact is nested under. Read-only. Nullable.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['orgContact-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /contacts/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies. Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. To validate the properties of an existing group, use the group: validateProperties function. The following policy validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate that the mail nickname is unique This API only returns the first validation failure that is encountered. If the properties fail multiple validations, only the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy. To learn more about configuring naming policies, see Configure naming policy.
  */
  create: function create(
    body: IEndpoints['POST /contacts/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /contacts/validateProperties']['response']> {
    return {
      method: 'post',
      path: '/contacts/validateProperties',
      body,
    };
  },
};
