export * as apps from './apps';
export * as deploymentSummary from './deploymentSummary';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    'delete'
  >;
  'GET /deviceAppManagement/defaultManagedAppProtections': Operation<
    '/deviceAppManagement/defaultManagedAppProtections',
    'get'
  >;
  'GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    'patch'
  >;
  'POST /deviceAppManagement/defaultManagedAppProtections': Operation<
    '/deviceAppManagement/defaultManagedAppProtections',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'defaultManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/defaultManagedAppProtections`
 *
 * Default managed app policies.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/defaultManagedAppProtections',
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
 * `GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}`
 *
 * Default managed app policies.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'defaultManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}',
    paramDefs: [{ name: 'defaultManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/defaultManagedAppProtections`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections']['body'],
  params?: IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/defaultManagedAppProtections',
    paramDefs: [],
    params,
    body,
  };
}
