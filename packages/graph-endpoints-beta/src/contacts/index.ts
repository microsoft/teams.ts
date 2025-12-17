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
  'POST /contacts/getByIds': Operation<'/contacts/getByIds', 'post'>;
  'POST /contacts/{orgContact-id}/getMemberGroups': Operation<
    '/contacts/{orgContact-id}/getMemberGroups',
    'post'
  >;
  'POST /contacts/{orgContact-id}/getMemberObjects': Operation<
    '/contacts/{orgContact-id}/getMemberObjects',
    'post'
  >;
  'POST /contacts/getUserOwnedObjects': Operation<'/contacts/getUserOwnedObjects', 'post'>;
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
  'GET /contacts/{orgContact-id}/transitiveReports': Operation<
    '/contacts/{orgContact-id}/transitiveReports',
    'get'
  >;
  'GET /contacts/{orgContact-id}/transitiveReports/{directoryObject-id}': Operation<
    '/contacts/{orgContact-id}/transitiveReports/{directoryObject-id}',
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
    ver: 'beta',
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
    ver: 'beta',
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
 * Get the properties and relationships of an organizational contact object.
 */
export function get(
  params?: IEndpoints['GET /contacts/{orgContact-id}']['parameters']
): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}']['response']> {
  return {
    ver: 'beta',
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
    ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
   * Get the contact&#x27;s direct reports.
   */
  list: function list(
    params?: IEndpoints['GET /contacts/{orgContact-id}/directReports']['parameters']
  ): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/directReports']['response']> {
    return {
      ver: 'beta',
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
   * The contact&#x27;s direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /contacts/{orgContact-id}/directReports/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /contacts/{orgContact-id}/directReports/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
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

export const getByIds = {
  /**
   * `POST /contacts/getByIds`
   *
   * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
   */
  create: function create(
    body: IEndpoints['POST /contacts/getByIds']['body']
  ): EndpointRequest<IEndpoints['POST /contacts/getByIds']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
   */
  create: function create(
    body: IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['body'],
    params?: IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['parameters']
  ): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['response']> {
    return {
      ver: 'beta',
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

export const getUserOwnedObjects = {
  /**
   * `POST /contacts/getUserOwnedObjects`
   *
   * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn&#x27;t support pagination.
   */
  create: function create(
    body: IEndpoints['POST /contacts/getUserOwnedObjects']['body']
  ): EndpointRequest<IEndpoints['POST /contacts/getUserOwnedObjects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/contacts/getUserOwnedObjects',
      body,
    };
  },
};

export const manager = {
  /**
   * `GET /contacts/{orgContact-id}/manager`
   *
   * Get the contact&#x27;s manager
   */
  get: function get(
    params?: IEndpoints['GET /contacts/{orgContact-id}/manager']['parameters']
  ): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/manager']['response']> {
    return {
      ver: 'beta',
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
   * Retrieve the list of groups and adminstrative units the contact is a member of.
   */
  get: function get(
    params?: IEndpoints['GET /contacts/{orgContact-id}/memberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/memberOf']['response']> {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
   * Indicates the state of synchronization for an orgContact between the cloud and on-premises Active Directory. Supports $filter only with advanced query capabilities, for example, $filter&#x3D;onPremisesSyncBehavior/isCloudManaged eq true&amp;$count&#x3D;true.
   */
  get: function get(
    params?: IEndpoints['GET /contacts/{orgContact-id}/onPremisesSyncBehavior']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /contacts/{orgContact-id}/onPremisesSyncBehavior']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
    params?: IEndpoints['POST /contacts/{orgContact-id}/restore']['parameters']
  ): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/restore']['response']> {
    return {
      ver: 'beta',
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
   * Retry the orgContact service provisioning.
   */
  create: function create(
    params?: IEndpoints['POST /contacts/{orgContact-id}/retryServiceProvisioning']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /contacts/{orgContact-id}/retryServiceProvisioning']['response']
  > {
    return {
      ver: 'beta',
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
   * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from an orgContact object .  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /contacts/{orgContact-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /contacts/{orgContact-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
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
      ver: 'beta',
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
   */
  get$1: function get$1(
    params?: IEndpoints['GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
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

export const transitiveReports = {
  /**
   * `GET /contacts/{orgContact-id}/transitiveReports`
   *
   * Retrieve a count of transitive reports for an organizational contact.
   */
  list: function list(
    params?: IEndpoints['GET /contacts/{orgContact-id}/transitiveReports']['parameters']
  ): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/transitiveReports']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/contacts/{orgContact-id}/transitiveReports',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['orgContact-id'],
      },
      params,
    };
  },
  /**
   * `GET /contacts/{orgContact-id}/transitiveReports/{directoryObject-id}`
   *
   * The transitive reports for a contact. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /contacts/{orgContact-id}/transitiveReports/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /contacts/{orgContact-id}/transitiveReports/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/contacts/{orgContact-id}/transitiveReports/{directoryObject-id}',
      paramDefs: {
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
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
  create: function create(
    body: IEndpoints['POST /contacts/validateProperties']['body']
  ): EndpointRequest<IEndpoints['POST /contacts/validateProperties']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/contacts/validateProperties',
      body,
    };
  },
};
