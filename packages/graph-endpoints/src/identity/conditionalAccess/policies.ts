import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/policies': Operation<
    '/identity/conditionalAccess/policies',
    'get'
  >;
  'GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/policies': Operation<
    '/identity/conditionalAccess/policies',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}`
 *
 * Delete a conditionalAccessPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'conditionalAccessPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/policies`
 *
 * Retrieve a list of conditionalAccessPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/policies']['parameters']
): EndpointRequest<IEndpoints['GET /identity/conditionalAccess/policies']['response']> {
  return {
    method: 'get',
    path: '/identity/conditionalAccess/policies',
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
 * `GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}`
 *
 * Retrieve the properties and relationships of a conditionalAccessPolicy object.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'conditionalAccessPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}`
 *
 * Update the properties of a conditionalAccessPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    paramDefs: [{ name: 'conditionalAccessPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/policies`
 *
 * Create a new conditionalAccessPolicy.
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/policies']['body'],
  params?: IEndpoints['POST /identity/conditionalAccess/policies']['parameters']
): EndpointRequest<IEndpoints['POST /identity/conditionalAccess/policies']['response']> {
  return {
    method: 'post',
    path: '/identity/conditionalAccess/policies',
    paramDefs: [],
    params,
    body,
  };
}
