import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
    'delete'
  >;
  'GET /security/labels/categories/{categoryTemplate-id}/subcategories': Operation<
    '/security/labels/categories/{categoryTemplate-id}/subcategories',
    'get'
  >;
  'GET /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
    'patch'
  >;
  'POST /security/labels/categories/{categoryTemplate-id}/subcategories': Operation<
    '/security/labels/categories/{categoryTemplate-id}/subcategories',
    'post'
  >;
}

/**
 * `DELETE /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'categoryTemplate-id', in: 'path' },
      { name: 'subcategoryTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/labels/categories/{categoryTemplate-id}/subcategories`
 *
 * Get a list of subcategories subcategoryTemplate associated with a category template.
 */
export function list(
  params?: IEndpoints['GET /security/labels/categories/{categoryTemplate-id}/subcategories']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/categories/{categoryTemplate-id}/subcategories']['response']
> {
  return {
    method: 'get',
    path: '/security/labels/categories/{categoryTemplate-id}/subcategories',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'categoryTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}`
 *
 * Read the properties and relationships of a subcategoryTemplate object.
 */
export function get(
  params?: IEndpoints['GET /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'categoryTemplate-id', in: 'path' },
      { name: 'subcategoryTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['body'],
  params?: IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
    paramDefs: [
      { name: 'categoryTemplate-id', in: 'path' },
      { name: 'subcategoryTemplate-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/labels/categories/{categoryTemplate-id}/subcategories`
 *
 * Create a new subcategoryTemplate object.
 */
export function create(
  body: IEndpoints['POST /security/labels/categories/{categoryTemplate-id}/subcategories']['body'],
  params?: IEndpoints['POST /security/labels/categories/{categoryTemplate-id}/subcategories']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/labels/categories/{categoryTemplate-id}/subcategories']['response']
> {
  return {
    method: 'post',
    path: '/security/labels/categories/{categoryTemplate-id}/subcategories',
    paramDefs: [{ name: 'categoryTemplate-id', in: 'path' }],
    params,
    body,
  };
}
