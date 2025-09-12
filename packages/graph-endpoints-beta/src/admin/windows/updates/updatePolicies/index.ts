export * as audience from './audience';
export * as complianceChanges from './complianceChanges';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}',
    'delete'
  >;
  'GET /admin/windows/updates/updatePolicies': Operation<
    '/admin/windows/updates/updatePolicies',
    'get'
  >;
  'GET /admin/windows/updates/updatePolicies/{updatePolicy-id}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}',
    'patch'
  >;
  'POST /admin/windows/updates/updatePolicies': Operation<
    '/admin/windows/updates/updatePolicies',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}`
 *
 * Delete an updatePolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['updatePolicy-id'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/updatePolicies`
 *
 * Get a list of updatePolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/updatePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/updatePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatePolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/updatePolicies/{updatePolicy-id}`
 *
 * Read the properties and relationships of an updatePolicy object.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}',
    paramDefs: {
      path: ['updatePolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}`
 *
 * Update the properties of an updatePolicy object.
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}',
    paramDefs: {
      path: ['updatePolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/updatePolicies`
 *
 * Create a new updatePolicy object.
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/updatePolicies']['body']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/updatePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/updatePolicies',
    body,
  };
}
