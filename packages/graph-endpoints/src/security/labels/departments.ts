import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/departments/{departmentTemplate-id}': Operation<
    '/security/labels/departments/{departmentTemplate-id}',
    'delete'
  >;
  'GET /security/labels/departments': Operation<'/security/labels/departments', 'get'>;
  'GET /security/labels/departments/{departmentTemplate-id}': Operation<
    '/security/labels/departments/{departmentTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/departments/{departmentTemplate-id}': Operation<
    '/security/labels/departments/{departmentTemplate-id}',
    'patch'
  >;
  'POST /security/labels/departments': Operation<'/security/labels/departments', 'post'>;
}

/**
 * `DELETE /security/labels/departments/{departmentTemplate-id}`
 *
 * Delete a departmentTemplate object.
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/departments/{departmentTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/departments/{departmentTemplate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/labels/departments/{departmentTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'departmentTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/labels/departments`
 *
 * Get a list of the departmentTemplate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/labels/departments']['parameters']
): EndpointRequest<IEndpoints['GET /security/labels/departments']['response']> {
  return {
    method: 'get',
    path: '/security/labels/departments',
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
 * `GET /security/labels/departments/{departmentTemplate-id}`
 *
 * Read the properties and relationships of a departmentTemplate object.
 */
export function get(
  params?: IEndpoints['GET /security/labels/departments/{departmentTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/departments/{departmentTemplate-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/labels/departments/{departmentTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'departmentTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/labels/departments/{departmentTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels/departments/{departmentTemplate-id}']['body'],
  params?: IEndpoints['PATCH /security/labels/departments/{departmentTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/departments/{departmentTemplate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/labels/departments/{departmentTemplate-id}',
    paramDefs: [{ name: 'departmentTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/labels/departments`
 *
 * Create a new departmentTemplate object.
 */
export function create(
  body: IEndpoints['POST /security/labels/departments']['body'],
  params?: IEndpoints['POST /security/labels/departments']['parameters']
): EndpointRequest<IEndpoints['POST /security/labels/departments']['response']> {
  return {
    method: 'post',
    path: '/security/labels/departments',
    paramDefs: [],
    params,
    body,
  };
}
