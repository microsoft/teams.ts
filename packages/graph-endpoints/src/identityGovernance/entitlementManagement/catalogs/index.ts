export * as resourceRoles from './resourceRoles';
export * as resourceScopes from './resourceScopes';
export * as resources from './resources';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs': Operation<
    '/identityGovernance/entitlementManagement/catalogs',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/catalogs': Operation<
    '/identityGovernance/entitlementManagement/catalogs',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}': Operation<
    '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}`
 *
 * Delete an accessPackageCatalog.
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageCatalog-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/catalogs`
 *
 * Retrieve a list of accessPackageCatalog objects.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/catalogs']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/catalogs',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}`
 *
 * Retrieve the properties and relationships of an accessPackageCatalog object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}',
    paramDefs: {
      path: ['accessPackageCatalog-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}`
 *
 * Update an existing accessPackageCatalog object to change one or more of its properties, such as the display name or description.
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}',
    paramDefs: {
      path: ['accessPackageCatalog-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/catalogs`
 *
 * Create a new accessPackageCatalog object.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/catalogs']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/catalogs',
    body,
  };
}

export const accessPackages = {
  /**
   * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages`
   *
   * The access packages in this catalog. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageCatalog-id'],
      },
      params,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}`
   *
   * The access packages in this catalog. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/accessPackages/{accessPackage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageCatalog-id', 'accessPackage-id'],
      },
      params,
    };
  },
};

export const customWorkflowExtensions = {
  /**
   * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions`
   *
   * Get a list of the accessPackageAssignmentRequestWorkflowExtension and accessPackageAssignmentWorkflowExtension objects and their properties. The resulting list includes all the customAccessPackageWorkflowExtension objects for the catalog that the caller has access to read. Each object includes an @odata.type property that indicates whether the object is an  accessPackageAssignmentRequestWorkflowExtension or an accessPackageAssignmentWorkflowExtension.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageCatalog-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions`
   *
   * Create a new accessPackageAssignmentRequestWorkflowExtension or accessPackageAssignmentWorkflowExtension object and add it to an existing accessPackageCatalog object. You must explicitly provide an @odata.type property that indicates whether the object is an  accessPackageAssignmentRequestWorkflowExtension or an accessPackageAssignmentWorkflowExtension.
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions',
      paramDefs: {
        path: ['accessPackageCatalog-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}`
   *
   * Read the properties and relationships of an accessPackageAssignmentRequestWorkflowExtension object.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageCatalog-id', 'customCalloutExtension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}`
   *
   * Update the properties of an accessPackageAssignmentRequestWorkflowExtension object.
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}',
      paramDefs: {
        path: ['accessPackageCatalog-id', 'customCalloutExtension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}`
   *
   * Delete an accessPackageAssignmentRequestWorkflowExtension object. The custom workflow extension must first be removed from any associated policies before it can be deleted. Follow these steps to remove the custom workflow extension from any associated policies:
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog-id}/customWorkflowExtensions/{customCalloutExtension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessPackageCatalog-id', 'customCalloutExtension-id'],
      },
      params,
    };
  },
};
