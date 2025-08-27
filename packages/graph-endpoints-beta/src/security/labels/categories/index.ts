export * as subcategories from './subcategories';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/categories/{categoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}',
    'delete'
  >;
  'GET /security/labels/categories': Operation<'/security/labels/categories', 'get'>;
  'GET /security/labels/categories/{categoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/categories/{categoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}',
    'patch'
  >;
  'POST /security/labels/categories': Operation<'/security/labels/categories', 'post'>;
}

/**
 * `DELETE /security/labels/categories/{categoryTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/categories/{categoryTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/categories/{categoryTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/labels/categories/{categoryTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'categoryTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/labels/categories`
 *
 * Get a list of the categoryTemplate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/labels/categories']['parameters']
): EndpointRequest<IEndpoints['GET /security/labels/categories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/categories',
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
 * `GET /security/labels/categories/{categoryTemplate-id}`
 *
 * Read the properties and relationships of a categoryTemplate object.
 */
export function get(
  params?: IEndpoints['GET /security/labels/categories/{categoryTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/categories/{categoryTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/categories/{categoryTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'categoryTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/labels/categories/{categoryTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}']['body'],
  params?: IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/labels/categories/{categoryTemplate-id}',
    paramDefs: [{ name: 'categoryTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/labels/categories`
 *
 * Create a new categoryTemplate object.
 */
export function create(
  body: IEndpoints['POST /security/labels/categories']['body'],
  params?: IEndpoints['POST /security/labels/categories']['parameters']
): EndpointRequest<IEndpoints['POST /security/labels/categories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/labels/categories',
    paramDefs: [],
    params,
    body,
  };
}
