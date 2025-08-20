export * as appliedPolicies from './appliedPolicies';
export * as intendedPolicies from './intendedPolicies';
export * as managedAppLogCollectionRequests from './managedAppLogCollectionRequests';
export * as operations from './operations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppRegistrations': Operation<
    '/deviceAppManagement/managedAppRegistrations',
    'get'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppRegistrations': Operation<
    '/deviceAppManagement/managedAppRegistrations',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedAppRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations`
 *
 * The managed app registrations.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedAppRegistrations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations',
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
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}`
 *
 * The managed app registrations.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAppRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}',
    paramDefs: [{ name: 'managedAppRegistration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppRegistrations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedAppRegistrations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/managedAppRegistrations',
    paramDefs: [],
    params,
    body,
  };
}
