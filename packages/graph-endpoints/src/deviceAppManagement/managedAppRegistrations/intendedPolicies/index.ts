export * as targetApps from './targetApps';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies',
    'get'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies`
 *
 * Zero or more policies admin intended for the app as of now.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies',
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
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}`
 *
 * Zero or more policies admin intended for the app as of now.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
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
 * `PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    paramDefs: [
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppPolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies',
    paramDefs: [{ name: 'managedAppRegistration-id', in: 'path' }],
    params,
    body,
  };
}
