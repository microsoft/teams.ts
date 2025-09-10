export * as synchronization from './synchronization';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}': Operation<'/applications/{application-id}', 'delete'>;
  'GET /applications': Operation<'/applications', 'get'>;
  'GET /applications/{application-id}': Operation<'/applications/{application-id}', 'get'>;
  'PATCH /applications/{application-id}': Operation<'/applications/{application-id}', 'patch'>;
  'POST /applications': Operation<'/applications', 'post'>;
  'POST /applications/{application-id}/addKey': Operation<
    '/applications/{application-id}/addKey',
    'post'
  >;
  'POST /applications/{application-id}/addPassword': Operation<
    '/applications/{application-id}/addPassword',
    'post'
  >;
  'GET /applications/{application-id}/appManagementPolicies': Operation<
    '/applications/{application-id}/appManagementPolicies',
    'get'
  >;
  'POST /applications/{application-id}/checkMemberGroups': Operation<
    '/applications/{application-id}/checkMemberGroups',
    'post'
  >;
  'POST /applications/{application-id}/checkMemberObjects': Operation<
    '/applications/{application-id}/checkMemberObjects',
    'post'
  >;
  'GET /applications/{application-id}/createdOnBehalfOf': Operation<
    '/applications/{application-id}/createdOnBehalfOf',
    'get'
  >;
  'GET /applications/{application-id}/extensionProperties': Operation<
    '/applications/{application-id}/extensionProperties',
    'get'
  >;
  'POST /applications/{application-id}/extensionProperties': Operation<
    '/applications/{application-id}/extensionProperties',
    'post'
  >;
  'GET /applications/{application-id}/extensionProperties/{extensionProperty-id}': Operation<
    '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
    'get'
  >;
  'PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}': Operation<
    '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
    'patch'
  >;
  'DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}': Operation<
    '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
    'delete'
  >;
  'GET /applications/{application-id}/federatedIdentityCredentials': Operation<
    '/applications/{application-id}/federatedIdentityCredentials',
    'get'
  >;
  'POST /applications/{application-id}/federatedIdentityCredentials': Operation<
    '/applications/{application-id}/federatedIdentityCredentials',
    'post'
  >;
  'GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'get'
  >;
  'PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'patch'
  >;
  'DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'delete'
  >;
  'POST /applications/getAvailableExtensionProperties': Operation<
    '/applications/getAvailableExtensionProperties',
    'post'
  >;
  'POST /applications/getByIds': Operation<'/applications/getByIds', 'post'>;
  'POST /applications/{application-id}/getMemberGroups': Operation<
    '/applications/{application-id}/getMemberGroups',
    'post'
  >;
  'POST /applications/{application-id}/getMemberObjects': Operation<
    '/applications/{application-id}/getMemberObjects',
    'post'
  >;
  'GET /applications/{application-id}/homeRealmDiscoveryPolicies': Operation<
    '/applications/{application-id}/homeRealmDiscoveryPolicies',
    'get'
  >;
  'GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}': Operation<
    '/applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    'get'
  >;
  'GET /applications/{application-id}/logo': Operation<
    '/applications/{application-id}/logo',
    'get'
  >;
  'PUT /applications/{application-id}/logo': Operation<
    '/applications/{application-id}/logo',
    'put'
  >;
  'DELETE /applications/{application-id}/logo': Operation<
    '/applications/{application-id}/logo',
    'delete'
  >;
  'GET /applications/{application-id}/owners': Operation<
    '/applications/{application-id}/owners',
    'get'
  >;
  'POST /applications/{application-id}/removeKey': Operation<
    '/applications/{application-id}/removeKey',
    'post'
  >;
  'POST /applications/{application-id}/removePassword': Operation<
    '/applications/{application-id}/removePassword',
    'post'
  >;
  'POST /applications/{application-id}/restore': Operation<
    '/applications/{application-id}/restore',
    'post'
  >;
  'POST /applications/{application-id}/setVerifiedPublisher': Operation<
    '/applications/{application-id}/setVerifiedPublisher',
    'post'
  >;
  'GET /applications/{application-id}/tokenIssuancePolicies': Operation<
    '/applications/{application-id}/tokenIssuancePolicies',
    'get'
  >;
  'GET /applications/{application-id}/tokenLifetimePolicies': Operation<
    '/applications/{application-id}/tokenLifetimePolicies',
    'get'
  >;
  'POST /applications/{application-id}/unsetVerifiedPublisher': Operation<
    '/applications/{application-id}/unsetVerifiedPublisher',
    'post'
  >;
  'POST /applications/validateProperties': Operation<'/applications/validateProperties', 'post'>;
}

/**
 * `DELETE /applications/{application-id}`
 *
 * Delete an application object. When deleted, apps are moved to a temporary container and can be restored within 30 days. After that time, they are permanently deleted.
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /applications/{application-id}']['response']> {
  return {
    method: 'delete',
    path: '/applications/{application-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['application-id'],
    },
    params,
  };
}

/**
 * `GET /applications`
 *
 * Get the list of applications in this organization.
 */
export function list(
  params?: IEndpoints['GET /applications']['parameters']
): EndpointRequest<IEndpoints['GET /applications']['response']> {
  return {
    method: 'get',
    path: '/applications',
    paramDefs: {
      header: ['ConsistencyLevel'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /applications/{application-id}`
 *
 * Get the properties and relationships of an application object.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}']['parameters']
): EndpointRequest<IEndpoints['GET /applications/{application-id}']['response']> {
  return {
    method: 'get',
    path: '/applications/{application-id}',
    paramDefs: {
      path: ['application-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /applications/{application-id}`
 *
 * Create a new application object if it doesn&#x27;t exist, or update the properties of an existing application object.
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /applications/{application-id}']['response']> {
  return {
    method: 'patch',
    path: '/applications/{application-id}',
    paramDefs: {
      path: ['application-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /applications`
 *
 * Create a new application object.
 */
export function create(
  body: IEndpoints['POST /applications']['body']
): EndpointRequest<IEndpoints['POST /applications']['response']> {
  return {
    method: 'post',
    path: '/applications',
    body,
  };
}

export const addKey = {
  /**
   * `POST /applications/{application-id}/addKey`
   *
   * Add a key credential to an application. This method, along with removeKey can be used by an application to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.  Applications that don&#x27;t have any existing valid certificates (no certificates have been added yet, or all certificates have expired), won&#x27;t be able to use this service action. You can use the Update application operation to perform an update instead.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/addKey']['body'],
    params?: IEndpoints['POST /applications/{application-id}/addKey']['parameters']
  ): EndpointRequest<IEndpoints['POST /applications/{application-id}/addKey']['response']> {
    return {
      method: 'post',
      path: '/applications/{application-id}/addKey',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

export const addPassword = {
  /**
   * `POST /applications/{application-id}/addPassword`
   *
   * Adds a strong password or secret to an application. You can also add passwords while creating the application.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/addPassword']['body'],
    params?: IEndpoints['POST /applications/{application-id}/addPassword']['parameters']
  ): EndpointRequest<IEndpoints['POST /applications/{application-id}/addPassword']['response']> {
    return {
      method: 'post',
      path: '/applications/{application-id}/addPassword',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

export const appManagementPolicies = {
  /**
   * `GET /applications/{application-id}/appManagementPolicies`
   *
   * The appManagementPolicy applied to this application.
   */
  list: function list(
    params?: IEndpoints['GET /applications/{application-id}/appManagementPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/appManagementPolicies']['response']
  > {
    return {
      method: 'get',
      path: '/applications/{application-id}/appManagementPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['application-id'],
      },
      params,
    };
  },
};

export const checkMemberGroups = {
  /**
  * `POST /applications/{application-id}/checkMemberGroups`
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
    body: IEndpoints['POST /applications/{application-id}/checkMemberGroups']['body'],
    params?: IEndpoints['POST /applications/{application-id}/checkMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/checkMemberGroups']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/checkMemberGroups',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

export const checkMemberObjects = {
  /**
   * `POST /applications/{application-id}/checkMemberObjects`
   *
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/checkMemberObjects']['body'],
    params?: IEndpoints['POST /applications/{application-id}/checkMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/checkMemberObjects']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/checkMemberObjects',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

export const createdOnBehalfOf = {
  /**
   * `GET /applications/{application-id}/createdOnBehalfOf`
   *
   * Supports $filter (/$count eq 0, /$count ne 0). Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /applications/{application-id}/createdOnBehalfOf']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/createdOnBehalfOf']['response']
  > {
    return {
      method: 'get',
      path: '/applications/{application-id}/createdOnBehalfOf',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['application-id'],
      },
      params,
    };
  },
};

export const extensionProperties = {
  /**
   * `GET /applications/{application-id}/extensionProperties`
   *
   * Retrieve the list of directory extension definitions, represented by extensionProperty objects on an application.
   */
  list: function list(
    params?: IEndpoints['GET /applications/{application-id}/extensionProperties']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/extensionProperties']['response']
  > {
    return {
      method: 'get',
      path: '/applications/{application-id}/extensionProperties',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['application-id'],
      },
      params,
    };
  },
  /**
   * `POST /applications/{application-id}/extensionProperties`
   *
   * Create a new directory extension definition, represented by an extensionProperty object.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/extensionProperties']['body'],
    params?: IEndpoints['POST /applications/{application-id}/extensionProperties']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/extensionProperties']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/extensionProperties',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /applications/{application-id}/extensionProperties/{extensionProperty-id}`
   *
   * Read a directory extension definition represented by an extensionProperty object.
   */
  get: function get(
    params?: IEndpoints['GET /applications/{application-id}/extensionProperties/{extensionProperty-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/extensionProperties/{extensionProperty-id}']['response']
  > {
    return {
      method: 'get',
      path: '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['application-id', 'extensionProperty-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}']['body'],
    params?: IEndpoints['PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
      paramDefs: {
        path: ['application-id', 'extensionProperty-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}`
   *
   * Delete a directory extension definition represented by an extensionProperty object. You can delete only directory extensions that aren&#x27;t synced from on-premises active directory (AD).
   */
  del: function del(
    params?: IEndpoints['DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['application-id', 'extensionProperty-id'],
      },
      params,
    };
  },
};

export const federatedIdentityCredentials = {
  /**
   * `GET /applications/{application-id}/federatedIdentityCredentials`
   *
   * Get a list of the federatedIdentityCredential objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /applications/{application-id}/federatedIdentityCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/federatedIdentityCredentials']['response']
  > {
    return {
      method: 'get',
      path: '/applications/{application-id}/federatedIdentityCredentials',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['application-id'],
      },
      params,
    };
  },
  /**
   * `POST /applications/{application-id}/federatedIdentityCredentials`
   *
   * Create a new federatedIdentityCredential object for an application. By configuring a trust relationship between your Microsoft Entra application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/federatedIdentityCredentials']['body'],
    params?: IEndpoints['POST /applications/{application-id}/federatedIdentityCredentials']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/federatedIdentityCredentials']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/federatedIdentityCredentials',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
   *
   * Read the properties and relationships of a federatedIdentityCredential object.
   */
  get: function get(
    params?: IEndpoints['GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
  > {
    return {
      method: 'get',
      path: '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['application-id', 'federatedIdentityCredential-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
   *
   * Create a new federatedIdentityCredential object for an application if it doesn&#x27;t exist, or update the properties of an existing federatedIdentityCredential object. By configuring a trust relationship between your Microsoft Entra application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.
   */
  update: function update(
    body: IEndpoints['PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['body'],
    params?: IEndpoints['PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
      paramDefs: {
        path: ['application-id', 'federatedIdentityCredential-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
   *
   * Delete a federatedIdentityCredential object from an application.
   */
  del: function del(
    params?: IEndpoints['DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['application-id', 'federatedIdentityCredential-id'],
      },
      params,
    };
  },
};

export const getAvailableExtensionProperties = {
  /**
   * `POST /applications/getAvailableExtensionProperties`
   *
   * Return all directory extension definitions that are registered in a directory, including through multitenant apps. The following entities support extension properties:
   */
  create: function create(
    body: IEndpoints['POST /applications/getAvailableExtensionProperties']['body']
  ): EndpointRequest<IEndpoints['POST /applications/getAvailableExtensionProperties']['response']> {
    return {
      method: 'post',
      path: '/applications/getAvailableExtensionProperties',
      body,
    };
  },
};

export const getByIds = {
  /**
   * `POST /applications/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Only a subset of user properties are returned by default in v1.0. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /applications/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /applications/getByIds']['response']> {
    return {
      method: 'post',
      path: '/applications/getByIds',
      body,
    };
  },
};

export const getMemberGroups = {
  /**
   * `POST /applications/{application-id}/getMemberGroups`
   *
   * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/getMemberGroups']['body'],
    params?: IEndpoints['POST /applications/{application-id}/getMemberGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/getMemberGroups']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/getMemberGroups',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

export const getMemberObjects = {
  /**
  * `POST /applications/{application-id}/getMemberObjects`
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
    body: IEndpoints['POST /applications/{application-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /applications/{application-id}/getMemberObjects']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/getMemberObjects']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/getMemberObjects',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

export const homeRealmDiscoveryPolicies = {
  /**
   * `GET /applications/{application-id}/homeRealmDiscoveryPolicies`
   *
   */
  list: function list(
    params?: IEndpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies']['response']
  > {
    return {
      method: 'get',
      path: '/applications/{application-id}/homeRealmDiscoveryPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['application-id'],
      },
      params,
    };
  },
  /**
   * `GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['response']
  > {
    return {
      method: 'get',
      path: '/applications/{application-id}/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['application-id', 'homeRealmDiscoveryPolicy-id'],
      },
      params,
    };
  },
};

export const logo = {
  /**
   * `GET /applications/{application-id}/logo`
   *
   * The main logo for the application. Not nullable.
   */
  get: function get(
    params?: IEndpoints['GET /applications/{application-id}/logo']['parameters']
  ): EndpointRequest<IEndpoints['GET /applications/{application-id}/logo']['response']> {
    return {
      method: 'get',
      path: '/applications/{application-id}/logo',
      paramDefs: {
        path: ['application-id'],
      },
      params,
    };
  },
  /**
   * `PUT /applications/{application-id}/logo`
   *
   * The main logo for the application. Not nullable.
   */
  set: function set(
    body: IEndpoints['PUT /applications/{application-id}/logo']['body'],
    params?: IEndpoints['PUT /applications/{application-id}/logo']['parameters']
  ): EndpointRequest<IEndpoints['PUT /applications/{application-id}/logo']['response']> {
    return {
      method: 'put',
      path: '/applications/{application-id}/logo',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /applications/{application-id}/logo`
   *
   * The main logo for the application. Not nullable.
   */
  del: function del(
    params?: IEndpoints['DELETE /applications/{application-id}/logo']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /applications/{application-id}/logo']['response']> {
    return {
      method: 'delete',
      path: '/applications/{application-id}/logo',
      paramDefs: {
        header: ['If-Match'],
        path: ['application-id'],
      },
      params,
    };
  },
};

export const owners = {
  /**
   * `GET /applications/{application-id}/owners`
   *
   * Retrieve a list of owners for an application that are directoryObject types.
   */
  list: function list(
    params?: IEndpoints['GET /applications/{application-id}/owners']['parameters']
  ): EndpointRequest<IEndpoints['GET /applications/{application-id}/owners']['response']> {
    return {
      method: 'get',
      path: '/applications/{application-id}/owners',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['application-id'],
      },
      params,
    };
  },
};

export const removeKey = {
  /**
   * `POST /applications/{application-id}/removeKey`
   *
   * Remove a key credential from an application. This method along with addKey can be used by an application to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/removeKey']['body'],
    params?: IEndpoints['POST /applications/{application-id}/removeKey']['parameters']
  ): EndpointRequest<IEndpoints['POST /applications/{application-id}/removeKey']['response']> {
    return {
      method: 'post',
      path: '/applications/{application-id}/removeKey',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

export const removePassword = {
  /**
   * `POST /applications/{application-id}/removePassword`
   *
   * Remove a password from an application.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/removePassword']['body'],
    params?: IEndpoints['POST /applications/{application-id}/removePassword']['parameters']
  ): EndpointRequest<IEndpoints['POST /applications/{application-id}/removePassword']['response']> {
    return {
      method: 'post',
      path: '/applications/{application-id}/removePassword',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
  * `POST /applications/{application-id}/restore`
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
    params?: IEndpoints['POST /applications/{application-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /applications/{application-id}/restore']['response']> {
    return {
      method: 'post',
      path: '/applications/{application-id}/restore',
      paramDefs: {
        path: ['application-id'],
      },
      params,
    };
  },
};

export const setVerifiedPublisher = {
  /**
   * `POST /applications/{application-id}/setVerifiedPublisher`
   *
   * Set the verifiedPublisher on an application. For more information, including prerequisites to setting a verified publisher, see Publisher verification.
   */
  create: function create(
    body: IEndpoints['POST /applications/{application-id}/setVerifiedPublisher']['body'],
    params?: IEndpoints['POST /applications/{application-id}/setVerifiedPublisher']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/setVerifiedPublisher']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/setVerifiedPublisher',
      paramDefs: {
        path: ['application-id'],
      },
      params,
      body,
    };
  },
};

export const tokenIssuancePolicies = {
  /**
   * `GET /applications/{application-id}/tokenIssuancePolicies`
   *
   * List the tokenIssuancePolicy objects that are assigned to an application.
   */
  list: function list(
    params?: IEndpoints['GET /applications/{application-id}/tokenIssuancePolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/tokenIssuancePolicies']['response']
  > {
    return {
      method: 'get',
      path: '/applications/{application-id}/tokenIssuancePolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['application-id'],
      },
      params,
    };
  },
};

export const tokenLifetimePolicies = {
  /**
   * `GET /applications/{application-id}/tokenLifetimePolicies`
   *
   * List the tokenLifetimePolicy objects that are assigned to an application. Only one object is returned in the collection because only one tokenLifetimePolicy can be assigned to an application.
   */
  list: function list(
    params?: IEndpoints['GET /applications/{application-id}/tokenLifetimePolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /applications/{application-id}/tokenLifetimePolicies']['response']
  > {
    return {
      method: 'get',
      path: '/applications/{application-id}/tokenLifetimePolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['application-id'],
      },
      params,
    };
  },
};

export const unsetVerifiedPublisher = {
  /**
   * `POST /applications/{application-id}/unsetVerifiedPublisher`
   *
   * Unset the verifiedPublisher previously set on an application, removing all verified publisher properties. For more information, see Publisher verification.
   */
  create: function create(
    params?: IEndpoints['POST /applications/{application-id}/unsetVerifiedPublisher']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/unsetVerifiedPublisher']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/unsetVerifiedPublisher',
      paramDefs: {
        path: ['application-id'],
      },
      params,
    };
  },
};

export const validateProperties = {
  /**
  * `POST /applications/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies. Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. To validate the properties of an existing group, use the group: validateProperties function. The following policy validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate that the mail nickname is unique This API only returns the first validation failure that is encountered. If the properties fail multiple validations, only the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy. To learn more about configuring naming policies, see Configure naming policy.
  */
  create: function create(
    body: IEndpoints['POST /applications/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /applications/validateProperties']['response']> {
    return {
      method: 'post',
      path: '/applications/validateProperties',
      body,
    };
  },
};
