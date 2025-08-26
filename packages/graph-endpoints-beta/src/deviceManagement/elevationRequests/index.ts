export * as approve from './approve';
export * as deny from './deny';
export * as getAllElevationRequests from './getAllElevationRequests';
export * as revoke from './revoke';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    'delete'
  >;
  'GET /deviceManagement/elevationRequests': Operation<
    '/deviceManagement/elevationRequests',
    'get'
  >;
  'GET /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    'get'
  >;
  'PATCH /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    'patch'
  >;
  'POST /deviceManagement/elevationRequests': Operation<
    '/deviceManagement/elevationRequests',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegeManagementElevationRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/elevationRequests`
 *
 * List of elevation requests
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/elevationRequests']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/elevationRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/elevationRequests',
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
 * `GET /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}`
 *
 * List of elevation requests
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegeManagementElevationRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    paramDefs: [{ name: 'privilegeManagementElevationRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/elevationRequests`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/elevationRequests']['body'],
  params?: IEndpoints['POST /deviceManagement/elevationRequests']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/elevationRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/elevationRequests',
    paramDefs: [],
    params,
    body,
  };
}
