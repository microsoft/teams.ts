import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
    'delete'
  >;
  'GET /users/{user-id}/outlook/masterCategories': Operation<
    '/users/{user-id}/outlook/masterCategories',
    'get'
  >;
  'GET /users/{user-id}/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
    'get'
  >;
  'PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
    'patch'
  >;
  'POST /users/{user-id}/outlook/masterCategories': Operation<
    '/users/{user-id}/outlook/masterCategories',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/outlook/masterCategories/{outlookCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'outlookCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/masterCategories`
 *
 * A list of categories defined for the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/outlook/masterCategories']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/outlook/masterCategories']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/outlook/masterCategories',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/masterCategories/{outlookCategory-id}`
 *
 * A list of categories defined for the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'outlookCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'outlookCategory-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/outlook/masterCategories`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/outlook/masterCategories']['body'],
  params?: IEndpoints['POST /users/{user-id}/outlook/masterCategories']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/outlook/masterCategories']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/outlook/masterCategories',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
