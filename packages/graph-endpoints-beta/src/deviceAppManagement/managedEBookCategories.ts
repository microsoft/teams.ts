import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}': Operation<
    '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedEBookCategories': Operation<
    '/deviceAppManagement/managedEBookCategories',
    'get'
  >;
  'GET /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}': Operation<
    '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}': Operation<
    '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedEBookCategories': Operation<
    '/deviceAppManagement/managedEBookCategories',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedEBookCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedEBookCategories`
 *
 * The mobile eBook categories.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedEBookCategories']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedEBookCategories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedEBookCategories',
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
 * `GET /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}`
 *
 * The mobile eBook categories.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedEBookCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
    paramDefs: [{ name: 'managedEBookCategory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedEBookCategories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedEBookCategories']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedEBookCategories']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedEBookCategories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/managedEBookCategories',
    paramDefs: [],
    params,
    body,
  };
}
