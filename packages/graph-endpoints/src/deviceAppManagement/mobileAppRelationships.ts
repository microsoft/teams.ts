import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppRelationships': Operation<
    '/deviceAppManagement/mobileAppRelationships',
    'get'
  >;
  'GET /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileAppRelationships': Operation<
    '/deviceAppManagement/mobileAppRelationships',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileAppRelationship-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppRelationships`
 *
 * The mobile app relationship represents the dependency or supersedence relationship between two Intune mobile LOB applications.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppRelationships']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileAppRelationships']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mobileAppRelationships',
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
 * `GET /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}`
 *
 * The mobile app relationship represents the dependency or supersedence relationship between two Intune mobile LOB applications.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileAppRelationship-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
    paramDefs: [{ name: 'mobileAppRelationship-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileAppRelationships`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileAppRelationships']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileAppRelationships']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileAppRelationships']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/mobileAppRelationships',
    paramDefs: [],
    params,
    body,
  };
}
