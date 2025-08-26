import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}': Operation<
    '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppCatalogPackages': Operation<
    '/deviceAppManagement/mobileAppCatalogPackages',
    'get'
  >;
  'GET /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}': Operation<
    '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}': Operation<
    '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileAppCatalogPackages': Operation<
    '/deviceAppManagement/mobileAppCatalogPackages',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileAppCatalogPackage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppCatalogPackages`
 *
 * MobileAppCatalogPackage entities.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppCatalogPackages']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileAppCatalogPackages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileAppCatalogPackages',
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
 * `GET /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}`
 *
 * MobileAppCatalogPackage entities.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileAppCatalogPackage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
    paramDefs: [{ name: 'mobileAppCatalogPackage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileAppCatalogPackages`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileAppCatalogPackages']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileAppCatalogPackages']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileAppCatalogPackages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mobileAppCatalogPackages',
    paramDefs: [],
    params,
    body,
  };
}
