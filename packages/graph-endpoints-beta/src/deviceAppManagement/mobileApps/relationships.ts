import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships',
    'get'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileApp-id', in: 'path' },
      { name: 'mobileAppRelationship-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships`
 *
 * The set of direct relationships for this app.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships',
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
 * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}`
 *
 * The set of direct relationships for this app.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileApp-id', in: 'path' },
      { name: 'mobileAppRelationship-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
    paramDefs: [
      { name: 'mobileApp-id', in: 'path' },
      { name: 'mobileAppRelationship-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships',
    paramDefs: [{ name: 'mobileApp-id', in: 'path' }],
    params,
    body,
  };
}
