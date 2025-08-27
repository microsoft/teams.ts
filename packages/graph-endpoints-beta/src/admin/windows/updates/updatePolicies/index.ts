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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'updatePolicy-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'updatePolicy-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'updatePolicy-id', in: 'path' }],
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
  body: IEndpoints['POST /admin/windows/updates/updatePolicies']['body'],
  params?: IEndpoints['POST /admin/windows/updates/updatePolicies']['parameters']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/updatePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/updatePolicies',
    paramDefs: [],
    params,
    body,
  };
}
