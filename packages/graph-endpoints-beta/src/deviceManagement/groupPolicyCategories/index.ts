export * as children from './children';
export * as definitionFile from './definitionFile';
export * as definitions from './definitions';
export * as parent from './parent';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyCategories': Operation<
    '/deviceManagement/groupPolicyCategories',
    'get'
  >;
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyCategories': Operation<
    '/deviceManagement/groupPolicyCategories',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyCategories`
 *
 * The available group policy categories for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyCategories']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/groupPolicyCategories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyCategories',
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
 * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}`
 *
 * The available group policy categories for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    paramDefs: [{ name: 'groupPolicyCategory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyCategories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyCategories']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyCategories']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/groupPolicyCategories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyCategories',
    paramDefs: [],
    params,
    body,
  };
}
