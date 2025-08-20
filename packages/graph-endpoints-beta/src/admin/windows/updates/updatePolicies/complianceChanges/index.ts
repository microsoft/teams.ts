export * as updatePolicy from './updatePolicy';

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
}

/**
 * `DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}`
 *
 * Delete a contentApproval object.
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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'updatePolicy-id', in: 'path' },
      { name: 'complianceChange-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'updatePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}`
 *
 * Read the properties and relationships of a contentApproval object.
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'updatePolicy-id', in: 'path' },
      { name: 'complianceChange-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}`
 *
 * Update the properties of a contentApproval object.
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
    paramDefs: [
      { name: 'updatePolicy-id', in: 'path' },
      { name: 'complianceChange-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'updatePolicy-id', in: 'path' }],
    params,
    body,
  };
}
