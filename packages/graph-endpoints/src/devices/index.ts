import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /devices/{device-id}': Operation<'/devices/{device-id}', 'delete'>;
  'GET /devices': Operation<'/devices', 'get'>;
  'GET /devices/{device-id}': Operation<'/devices/{device-id}', 'get'>;
  'PATCH /devices/{device-id}': Operation<'/devices/{device-id}', 'patch'>;
  'POST /devices': Operation<'/devices', 'post'>;
  'POST /devices/{device-id}/checkMemberGroups': Operation<
    '/devices/{device-id}/checkMemberGroups',
    'post'
  >;
  'POST /devices/{device-id}/checkMemberObjects': Operation<
    '/devices/{device-id}/checkMemberObjects',
    'post'
  >;
  'GET /devices/{device-id}/extensions': Operation<'/devices/{device-id}/extensions', 'get'>;
  'POST /devices/{device-id}/extensions': Operation<'/devices/{device-id}/extensions', 'post'>;
  'GET /devices/{device-id}/extensions/{extension-id}': Operation<
    '/devices/{device-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /devices/{device-id}/extensions/{extension-id}': Operation<
    '/devices/{device-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /devices/{device-id}/extensions/{extension-id}': Operation<
    '/devices/{device-id}/extensions/{extension-id}',
    'delete'
  >;
  'POST /devices/getAvailableExtensionProperties': Operation<
    '/devices/getAvailableExtensionProperties',
    'post'
  >;
  'POST /devices/getByIds': Operation<'/devices/getByIds', 'post'>;
  'POST /devices/{device-id}/getMemberGroups': Operation<
    '/devices/{device-id}/getMemberGroups',
    'post'
  >;
  'POST /devices/{device-id}/getMemberObjects': Operation<
    '/devices/{device-id}/getMemberObjects',
    'post'
  >;
  'GET /devices/{device-id}/memberOf': Operation<'/devices/{device-id}/memberOf', 'get'>;
  'GET /devices/{device-id}/memberOf/{directoryObject-id}': Operation<
    '/devices/{device-id}/memberOf/{directoryObject-id}',
    'get'
  >;
  'GET /devices/{device-id}/registeredOwners': Operation<
    '/devices/{device-id}/registeredOwners',
    'get'
  >;
  'GET /devices/{device-id}/registeredUsers': Operation<
    '/devices/{device-id}/registeredUsers',
    'get'
  >;
  'POST /devices/{device-id}/restore': Operation<'/devices/{device-id}/restore', 'post'>;
  'GET /devices/{device-id}/transitiveMemberOf': Operation<
    '/devices/{device-id}/transitiveMemberOf',
    'get'
  >;
  'GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/devices/{device-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
  'POST /devices/validateProperties': Operation<'/devices/validateProperties', 'post'>;
}

/**
 * `DELETE /devices/{device-id}`
 *
 * Delete a registered device.
 */
export function del(
  params?: IEndpoints['DELETE /devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /devices/{device-id}']['response']> {
  return {
    method: 'delete',
    path: '/devices/{device-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['device-id'],
    },
    params,
  };
}

/**
 * `GET /devices`
 *
 * Retrieve a list of device objects registered in the organization.
 */
export function list(
  params?: IEndpoints['GET /devices']['parameters']
): EndpointRequest<IEndpoints['GET /devices']['response']> {
  return {
    method: 'get',
    path: '/devices',
    paramDefs: {
      header: ['ConsistencyLevel'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /devices/{device-id}`
 *
 * Get the properties and relationships of a device object.
 */
export function get(
  params?: IEndpoints['GET /devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}']['response']> {
  return {
    method: 'get',
    path: '/devices/{device-id}',
    paramDefs: {
      path: ['device-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /devices/{device-id}`
 *
 * Update the properties of a registered device. Only certain properties of a device can be updated through approved Mobile Device Managment (MDM) apps.
 */
export function update(
  body: IEndpoints['PATCH /devices/{device-id}']['body'],
  params?: IEndpoints['PATCH /devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /devices/{device-id}']['response']> {
  return {
    method: 'patch',
    path: '/devices/{device-id}',
    paramDefs: {
      path: ['device-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /devices`
 *
 * Create and register a new device in the organization.
 */
export function create(
  body: IEndpoints['POST /devices']['body']
): EndpointRequest<IEndpoints['POST /devices']['response']> {
  return {
    method: 'post',
    path: '/devices',
    body,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /devices/{device-id}/checkMemberGroups`
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
    body: IEndpoints['POST /devices/{device-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /devices/{device-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /devices/{device-id}/checkMemberGroups']['response']> {
    return {
      method: 'post',
      path: '/devices/{device-id}/checkMemberGroups',
      paramDefs: {
        path: ['device-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /devices/{device-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /devices/{device-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /devices/{device-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /devices/{device-id}/checkMemberObjects']['response']> {
    return {
      method: 'post',
      path: '/devices/{device-id}/checkMemberObjects',
      paramDefs: {
        path: ['device-id'],
      },
      params,
      body,
    };
  },
};

export const extensions = {
  /**
   * `GET /devices/{device-id}/extensions`
   *
   * The collection of open extensions defined for the device. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /devices/{device-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /devices/{device-id}/extensions']['response']> {
    return {
      method: 'get',
      path: '/devices/{device-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
  /**
   * `POST /devices/{device-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /devices/{device-id}/extensions']['body'],
    params?: IEndpoints['POST /devices/{device-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /devices/{device-id}/extensions']['response']> {
    return {
      method: 'post',
      path: '/devices/{device-id}/extensions',
      paramDefs: {
        path: ['device-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /devices/{device-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the device. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /devices/{device-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /devices/{device-id}/extensions/{extension-id}']['response']> {
    return {
      method: 'get',
      path: '/devices/{device-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['device-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /devices/{device-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /devices/{device-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /devices/{device-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /devices/{device-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/devices/{device-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['device-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /devices/{device-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /devices/{device-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /devices/{device-id}/extensions/{extension-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/devices/{device-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['device-id', 'extension-id'],
      },
      params,
    };
  },
};

export const getAvailableExtensionProperties = {
  /**
   * `POST /devices/getAvailableExtensionProperties`
   *
   * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
   */
  create: function create(
    body: IEndpoints['POST /devices/getAvailableExtensionProperties']['body']
  ): EndpointRequest<IEndpoints['POST /devices/getAvailableExtensionProperties']['response']> {
    return {
      method: 'post',
      path: '/devices/getAvailableExtensionProperties',
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /devices/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /devices/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /devices/getByIds']['response']> {
    return {
      method: 'post',
      path: '/devices/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /devices/{device-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /devices/{device-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /devices/{device-id}/getMemberGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /devices/{device-id}/getMemberGroups']['response']> {
    return {
      method: 'post',
      path: '/devices/{device-id}/getMemberGroups',
      paramDefs: {
        path: ['device-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
  * `POST /devices/{device-id}/getMemberObjects`
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
    body: IEndpoints['POST /devices/{device-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /devices/{device-id}/getMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /devices/{device-id}/getMemberObjects']['response']> {
    return {
      method: 'post',
      path: '/devices/{device-id}/getMemberObjects',
      paramDefs: {
        path: ['device-id'],
      },
      params,
      body,
    };
  },
};

export const memberOf = {
  /**
   * `GET /devices/{device-id}/memberOf`
   *
   * Get groups and administrative units that this device is a direct member of. This operation is not transitive.
   */
  get: function get(
    params?: IEndpoints['GET /devices/{device-id}/memberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /devices/{device-id}/memberOf']['response']> {
    return {
      method: 'get',
      path: '/devices/{device-id}/memberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
  /**
   * `GET /devices/{device-id}/memberOf/{directoryObject-id}`
   *
   * Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /devices/{device-id}/memberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /devices/{device-id}/memberOf/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/devices/{device-id}/memberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['device-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const registeredOwners = {
  /**
   * `GET /devices/{device-id}/registeredOwners`
   *
   * Retrieve a list of users that are registered owners of the device. A registered owner is the user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner.
   */
  list: function list(
    params?: IEndpoints['GET /devices/{device-id}/registeredOwners']['parameters']
  ): EndpointRequest<IEndpoints['GET /devices/{device-id}/registeredOwners']['response']> {
    return {
      method: 'get',
      path: '/devices/{device-id}/registeredOwners',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
};

export const registeredUsers = {
  /**
   * `GET /devices/{device-id}/registeredUsers`
   *
   * Retrieve a list of users that are registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration.
   */
  list: function list(
    params?: IEndpoints['GET /devices/{device-id}/registeredUsers']['parameters']
  ): EndpointRequest<IEndpoints['GET /devices/{device-id}/registeredUsers']['response']> {
    return {
      method: 'get',
      path: '/devices/{device-id}/registeredUsers',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
  * `POST /devices/{device-id}/restore`
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
    params?: IEndpoints['POST /devices/{device-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /devices/{device-id}/restore']['response']> {
    return {
      method: 'post',
      path: '/devices/{device-id}/restore',
      paramDefs: {
        path: ['device-id'],
      },
      params,
    };
  },
};

export const transitiveMemberOf = {
  /**
   * `GET /devices/{device-id}/transitiveMemberOf`
   *
   * Get the groups and administrative units that the device is a member of. This API request is transitive, and will also return all groups and administrative units the device is a nested member of.
   */
  get: function get(
    params?: IEndpoints['GET /devices/{device-id}/transitiveMemberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /devices/{device-id}/transitiveMemberOf']['response']> {
    return {
      method: 'get',
      path: '/devices/{device-id}/transitiveMemberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
  /**
   * `GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}`
   *
   * Groups and administrative units that the device is a member of. This operation is transitive. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /devices/{device-id}/transitiveMemberOf/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/devices/{device-id}/transitiveMemberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['device-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /devices/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies. Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. To validate the properties of an existing group, use the group: validateProperties function. The following policy validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate that the mail nickname is unique This API only returns the first validation failure that is encountered. If the properties fail multiple validations, only the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy. To learn more about configuring naming policies, see Configure naming policy.
  */
  create: function create(
    body: IEndpoints['POST /devices/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /devices/validateProperties']['response']> {
    return {
      method: 'post',
      path: '/devices/validateProperties',
      body,
    };
  },
};
