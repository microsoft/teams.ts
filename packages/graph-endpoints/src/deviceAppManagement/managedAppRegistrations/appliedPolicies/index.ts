export * as targetApps from './targetApps';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies',
    'get'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies`
 *
 * Zero or more policys already applied on the registered app when it last synchronized with managment service.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAppRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}`
 *
 * Zero or more policys already applied on the registered app when it last synchronized with managment service.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    paramDefs: [
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppPolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies',
    paramDefs: [{ name: 'managedAppRegistration-id', in: 'path' }],
    params,
    body,
  };
}
