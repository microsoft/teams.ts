import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments',
    'get'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileApp-id', in: 'path' },
      { name: 'mobileAppAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments`
 *
 * The list of group assignments for this mobile app.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}`
 *
 * The list of group assignments for this mobile app.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileApp-id', in: 'path' },
      { name: 'mobileAppAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
    paramDefs: [
      { name: 'mobileApp-id', in: 'path' },
      { name: 'mobileAppAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments',
    paramDefs: [{ name: 'mobileApp-id', in: 'path' }],
    params,
    body,
  };
}
