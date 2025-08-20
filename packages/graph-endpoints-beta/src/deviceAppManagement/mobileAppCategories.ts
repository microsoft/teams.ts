import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}': Operation<
    '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppCategories': Operation<
    '/deviceAppManagement/mobileAppCategories',
    'get'
  >;
  'GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}': Operation<
    '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}': Operation<
    '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileAppCategories': Operation<
    '/deviceAppManagement/mobileAppCategories',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileAppCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppCategories`
 *
 * The mobile app categories.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppCategories']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileAppCategories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileAppCategories',
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
 * `GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}`
 *
 * The mobile app categories.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileAppCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
    paramDefs: [{ name: 'mobileAppCategory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileAppCategories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileAppCategories']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileAppCategories']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileAppCategories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mobileAppCategories',
    paramDefs: [],
    params,
    body,
  };
}
