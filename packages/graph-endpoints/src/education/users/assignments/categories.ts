import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories',
    'get'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories',
    'post'
  >;
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories`
 *
 * When set, enables users to easily find assignments of a given type. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories`
 *
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories']['response']
> {
  return {
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
