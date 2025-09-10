import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}': Operation<
    '/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/connectedOrganizations': Operation<
    '/identityGovernance/entitlementManagement/connectedOrganizations',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}': Operation<
    '/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}': Operation<
    '/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/connectedOrganizations': Operation<
    '/identityGovernance/entitlementManagement/connectedOrganizations',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/externalSponsors': Operation<
    '/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/externalSponsors',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/internalSponsors': Operation<
    '/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/internalSponsors',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}`
 *
 * Delete a connectedOrganization object.
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['connectedOrganization-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/connectedOrganizations`
 *
 * Retrieve a list of connectedOrganization objects.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/connectedOrganizations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}`
 *
 * Retrieve the properties and relationships of a connectedOrganization object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}',
    paramDefs: {
      path: ['connectedOrganization-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}`
 *
 * Update a connectedOrganization object to change one or more of its properties.
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}',
    paramDefs: {
      path: ['connectedOrganization-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/connectedOrganizations`
 *
 * Create a new connectedOrganization object.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/connectedOrganizations']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/connectedOrganizations']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/connectedOrganizations',
    body,
  };
}

export const externalSponsors = {
  /**
   * `GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/externalSponsors`
   *
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/externalSponsors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/externalSponsors']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/externalSponsors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['connectedOrganization-id'],
      },
      params,
    };
  },
};

export const internalSponsors = {
  /**
   * `GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/internalSponsors`
   *
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/internalSponsors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/internalSponsors']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/internalSponsors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['connectedOrganization-id'],
      },
      params,
    };
  },
};
