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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
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
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/connectedOrganizations',
    body,
  };
}

export const externalSponsors = {
  /**
   * `GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/externalSponsors`
   *
   * Retrieve a list of a connectedOrganization&#x27;s external sponsors.  The external sponsors are a set of users who can approve requests on behalf of other users from that connected organization.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/externalSponsors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/externalSponsors']['response']
  > {
    return {
      ver: 'beta',
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
   * Retrieve a list of a connectedOrganization&#x27;s internal sponsors.  The internal sponsors are a set of users who can approve requests on behalf of other users from that connected organization.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/internalSponsors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}/internalSponsors']['response']
  > {
    return {
      ver: 'beta',
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
