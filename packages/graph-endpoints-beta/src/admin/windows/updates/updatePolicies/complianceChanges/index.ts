import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}',
    'delete'
  >;
  'GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges',
    'get'
  >;
  'GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}',
    'patch'
  >;
  'POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges',
    'post'
  >;
  'GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy',
    'get'
  >;
}

/**
 * `DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}`
 *
 * Delete a complianceChange object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['updatePolicy-id', 'complianceChange-id'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges`
 *
 * Get a list of the complianceChange objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges',
    paramDefs: {
      path: ['updatePolicy-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}`
 *
 * Read the properties and relationships of a complianceChange object.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}',
    paramDefs: {
      path: ['updatePolicy-id', 'complianceChange-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}`
 *
 * Update the properties of a complianceChange object.
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}',
    paramDefs: {
      path: ['updatePolicy-id', 'complianceChange-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges`
 *
 * Create a new contentApproval object.
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges']['body'],
  params?: IEndpoints['POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges',
    paramDefs: {
      path: ['updatePolicy-id'],
    },
    params,
    body,
  };
}

export const updatePolicy = {
  /**
   * `GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy`
   *
   * The policy this compliance change is a member of.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['updatePolicy-id', 'complianceChange-id'],
      },
      params,
    };
  },
};
