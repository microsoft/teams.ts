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
 * Deletes a mobileAppCategory.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['response']
> {
  return {
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
 * List properties and relationships of the mobileAppCategory objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppCategories']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileAppCategories']['response']> {
  return {
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
 * Read properties and relationships of the mobileAppCategory object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['response']
> {
  return {
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
 * Update the properties of a mobileAppCategory object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['response']
> {
  return {
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
 * Create a new mobileAppCategory object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileAppCategories']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileAppCategories']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileAppCategories']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/mobileAppCategories',
    paramDefs: [],
    params,
    body,
  };
}
