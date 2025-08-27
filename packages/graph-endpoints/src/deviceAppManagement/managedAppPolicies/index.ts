export * as targetApps from './targetApps';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppPolicies': Operation<
    '/deviceAppManagement/managedAppPolicies',
    'get'
  >;
  'GET /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppPolicies': Operation<
    '/deviceAppManagement/managedAppPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedAppPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppPolicies`
 *
 * List properties and relationships of the managedAppProtection objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedAppPolicies']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppPolicies',
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
 * `GET /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}`
 *
 * Read properties and relationships of the targetedManagedAppProtection object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAppPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    paramDefs: [{ name: 'managedAppPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppPolicies']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedAppPolicies']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedAppPolicies',
    paramDefs: [],
    params,
    body,
  };
}
