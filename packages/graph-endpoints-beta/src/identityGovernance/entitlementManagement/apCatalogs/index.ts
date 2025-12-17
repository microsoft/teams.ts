export * as accessPackageResourceRoles from './apResourceRoles';
export * as accessPackageResourceScopes from './apResourceScopes';
export * as accessPackageResources from './apResources';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageCatalogs': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}`
 *
 * Delete an accessPackageCatalog.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageCatalog-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs`
 *
 * Retrieve a list of accessPackageCatalog objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}`
 *
 * Retrieve the properties and relationships of an accessPackageCatalog object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}',
    paramDefs: {
      path: ['accessPackageCatalog-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}`
 *
 * Update an existing accessPackageCatalog object to change one or more of its properties, such as the display name or description.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}',
    paramDefs: {
      path: ['accessPackageCatalog-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageCatalogs`
 *
 * Create a new accessPackageCatalog object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs',
    body,
  };
}

export const accessPackageCustomWorkflowExtensions = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions`
   *
   * Get a list of the accessPackageAssignmentRequestWorkflowExtension and accessPackageAssignmentWorkflowExtension objects and their properties. The resulting list includes all the customAccessPackageWorkflowExtension objects for the catalog that the caller has access to read. Each object includes an @odata.type property that indicates whether the object is an  accessPackageAssignmentRequestWorkflowExtension or an accessPackageAssignmentWorkflowExtension.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageCatalog-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions',
      paramDefs: {
        path: ['accessPackageCatalog-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}`
   *
   * Read the properties and relationships of an accessPackageAssignmentRequestWorkflowExtension object.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageCatalog-id', 'customCalloutExtension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}`
   *
   * Update the properties of an accessPackageAssignmentRequestWorkflowExtension object.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}',
      paramDefs: {
        path: ['accessPackageCatalog-id', 'customCalloutExtension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageCustomWorkflowExtensions/{customCalloutExtension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessPackageCatalog-id', 'customCalloutExtension-id'],
      },
      params,
    };
  },
};

export const accessPackages = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages`
   *
   * The access packages in this catalog. Read-only. Nullable. Supports $expand.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageCatalog-id'],
      },
      params,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}`
   *
   * The access packages in this catalog. Read-only. Nullable. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageCatalog-id', 'accessPackage-id'],
      },
      params,
    };
  },
};

export const customAccessPackageWorkflowExtensions = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions`
   *
   * Get a list of the customAccessPackageWorkflowExtension objects and their properties. The resulting list includes all the customAccessPackageWorkflowExtension objects for the catalog that the caller has access to read.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageCatalog-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions`
   *
   * Create a new customAccessPackageWorkflowExtension object and add it to an existing accessPackageCatalog object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions',
      paramDefs: {
        path: ['accessPackageCatalog-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}`
   *
   * Read the properties and relationships of a customAccessPackageWorkflowExtension object for an accessPackageCatalog object.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageCatalog-id', 'customAccessPackageWorkflowExtension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}`
   *
   * Update the properties of an existing customAccessPackageWorkflowExtension object.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}',
      paramDefs: {
        path: ['accessPackageCatalog-id', 'customAccessPackageWorkflowExtension-id'],
      },
      params,
      body,
    };
  },
  /**
  * `DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}`
  *
  * Delete an accessPackageAssignmentRequestWorkflowExtension object. The custom workflow extension must first be removed from any associated policies before it can be deleted. Follow these steps to remove the custom workflow extension from any associated policies:
1. First retrieve the accessPackageCatalogId by calling the Get accessPackageAssignmentPolicies operation and appending ?$expand&#x3D;accessPackage($expand&#x3D;accessPackageCatalog) to the query. For example, https://graph.microsoft.com/beta/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies?$expand&#x3D;accessPackage($expand&#x3D;accessPackageCatalog).
2. Use the access package catalog ID and retrieve the ID of the accessPackageCustomWorkflowExtension object that you want to delete by running the List accessPackageCustomWorkflowExtensions operation.
3. Call the Update accessPackageAssignmentPolicy operation to remove the custom workflow extension object from the policy. For an example, see Example 3: Remove the customExtensionStageSettings from a policy.
  * @deprecated
  */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessPackageCatalog-id', 'customAccessPackageWorkflowExtension-id'],
      },
      params,
    };
  },
};
