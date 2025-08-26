export * as apps from './apps';
export * as assign from './assign';
export * as assignments from './assignments';
export * as deploymentSummary from './deploymentSummary';
export * as targetApps from './targetApps';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections': Operation<
    '/deviceAppManagement/windowsManagedAppProtections',
    'get'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    'patch'
  >;
  'POST /deviceAppManagement/windowsManagedAppProtections': Operation<
    '/deviceAppManagement/windowsManagedAppProtections',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsManagedAppProtections`
 *
 * Windows managed app policies.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsManagedAppProtections',
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
 * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}`
 *
 * Windows managed app policies.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}',
    paramDefs: [{ name: 'windowsManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsManagedAppProtections`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsManagedAppProtections',
    paramDefs: [],
    params,
    body,
  };
}
