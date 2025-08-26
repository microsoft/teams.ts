import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations',
    'get'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations`
 *
 * Zero or more long running operations triggered on the app registration.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations',
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
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}`
 *
 * Zero or more long running operations triggered on the app registration.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations/{managedAppOperation-id}',
    paramDefs: [
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/operations',
    paramDefs: [{ name: 'managedAppRegistration-id', in: 'path' }],
    params,
    body,
  };
}
