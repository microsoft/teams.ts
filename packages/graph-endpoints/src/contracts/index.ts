import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /contracts/{contract-id}': Operation<'/contracts/{contract-id}', 'delete'>;
  'GET /contracts': Operation<'/contracts', 'get'>;
  'GET /contracts/{contract-id}': Operation<'/contracts/{contract-id}', 'get'>;
  'PATCH /contracts/{contract-id}': Operation<'/contracts/{contract-id}', 'patch'>;
  'POST /contracts': Operation<'/contracts', 'post'>;
  'POST /contracts/{contract-id}/checkMemberGroups': Operation<
    '/contracts/{contract-id}/checkMemberGroups',
    'post'
  >;
  'POST /contracts/{contract-id}/checkMemberObjects': Operation<
    '/contracts/{contract-id}/checkMemberObjects',
    'post'
  >;
  'POST /contracts/getAvailableExtensionProperties': Operation<
    '/contracts/getAvailableExtensionProperties',
    'post'
  >;
  'POST /contracts/getByIds': Operation<'/contracts/getByIds', 'post'>;
  'POST /contracts/{contract-id}/getMemberGroups': Operation<
    '/contracts/{contract-id}/getMemberGroups',
    'post'
  >;
  'POST /contracts/{contract-id}/getMemberObjects': Operation<
    '/contracts/{contract-id}/getMemberObjects',
    'post'
  >;
  'POST /contracts/{contract-id}/restore': Operation<'/contracts/{contract-id}/restore', 'post'>;
  'POST /contracts/validateProperties': Operation<'/contracts/validateProperties', 'post'>;
}

/**
 * `DELETE /contracts/{contract-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /contracts/{contract-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /contracts/{contract-id}']['response']> {
  return {
    method: 'delete',
    path: '/contracts/{contract-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['contract-id'],
    },
    params,
  };
}

/**
 * `GET /contracts`
 *
 * Retrieve a list of contract objects associated to a partner tenant.
 */
export function list(
  params?: IEndpoints['GET /contracts']['parameters']
): EndpointRequest<IEndpoints['GET /contracts']['response']> {
  return {
    method: 'get',
    path: '/contracts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /contracts/{contract-id}`
 *
 * Retrieve the properties and relationships of contract object.
 */
export function get(
  params?: IEndpoints['GET /contracts/{contract-id}']['parameters']
): EndpointRequest<IEndpoints['GET /contracts/{contract-id}']['response']> {
  return {
    method: 'get',
    path: '/contracts/{contract-id}',
    paramDefs: {
      path: ['contract-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /contracts/{contract-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /contracts/{contract-id}']['body'],
  params?: IEndpoints['PATCH /contracts/{contract-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /contracts/{contract-id}']['response']> {
  return {
    method: 'patch',
    path: '/contracts/{contract-id}',
    paramDefs: {
      path: ['contract-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /contracts`
 *
 */
export function create(
  body: IEndpoints['POST /contracts']['body']
): EndpointRequest<IEndpoints['POST /contracts']['response']> {
  return {
    method: 'post',
    path: '/contracts',
    body,
  };
}

export const checkMemberGroups = {
  /**
  * `POST /contracts/{contract-id}/checkMemberGroups`
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
    body: IEndpoints['POST /contracts/{contract-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /contracts/{contract-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /contracts/{contract-id}/checkMemberGroups']['response']> {
    return {
      method: 'post',
      path: '/contracts/{contract-id}/checkMemberGroups',
      paramDefs: {
        path: ['contract-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /contracts/{contract-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /contracts/{contract-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /contracts/{contract-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /contracts/{contract-id}/checkMemberObjects']['response']> {
    return {
      method: 'post',
      path: '/contracts/{contract-id}/checkMemberObjects',
      paramDefs: {
        path: ['contract-id'],
      },
      params,
      body,
    };
  },
};

export const getAvailableExtensionProperties = {
  /**
   * `POST /contracts/getAvailableExtensionProperties`
   *
   * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
   */
  create: function create(
    body: IEndpoints['POST /contracts/getAvailableExtensionProperties']['body']
  ): EndpointRequest<IEndpoints['POST /contracts/getAvailableExtensionProperties']['response']> {
    return {
      method: 'post',
      path: '/contracts/getAvailableExtensionProperties',
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /contracts/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /contracts/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /contracts/getByIds']['response']> {
    return {
      method: 'post',
      path: '/contracts/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /contracts/{contract-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /contracts/{contract-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /contracts/{contract-id}/getMemberGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /contracts/{contract-id}/getMemberGroups']['response']> {
    return {
      method: 'post',
      path: '/contracts/{contract-id}/getMemberGroups',
      paramDefs: {
        path: ['contract-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
  * `POST /contracts/{contract-id}/getMemberObjects`
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
    body: IEndpoints['POST /contracts/{contract-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /contracts/{contract-id}/getMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /contracts/{contract-id}/getMemberObjects']['response']> {
    return {
      method: 'post',
      path: '/contracts/{contract-id}/getMemberObjects',
      paramDefs: {
        path: ['contract-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
  * `POST /contracts/{contract-id}/restore`
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
    params?: IEndpoints['POST /contracts/{contract-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /contracts/{contract-id}/restore']['response']> {
    return {
      method: 'post',
      path: '/contracts/{contract-id}/restore',
      paramDefs: {
        path: ['contract-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /contracts/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies. Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. To validate the properties of an existing group, use the group: validateProperties function. The following policy validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate that the mail nickname is unique This API only returns the first validation failure that is encountered. If the properties fail multiple validations, only the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy. To learn more about configuring naming policies, see Configure naming policy.
  */
  create: function create(
    body: IEndpoints['POST /contracts/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /contracts/validateProperties']['response']> {
    return {
      method: 'post',
      path: '/contracts/validateProperties',
      body,
    };
  },
};
