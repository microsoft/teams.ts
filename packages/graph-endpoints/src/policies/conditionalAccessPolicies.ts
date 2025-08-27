import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    'delete'
  >;
  'GET /policies/conditionalAccessPolicies': Operation<
    '/policies/conditionalAccessPolicies',
    'get'
  >;
  'GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    'get'
  >;
  'PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    'patch'
  >;
  'POST /policies/conditionalAccessPolicies': Operation<
    '/policies/conditionalAccessPolicies',
    'post'
  >;
}

/**
 * `DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'conditionalAccessPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/conditionalAccessPolicies`
 *
 * The custom rules that define an access scenario.
 */
export function list(
  params?: IEndpoints['GET /policies/conditionalAccessPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/conditionalAccessPolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/conditionalAccessPolicies',
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
 * `GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
 *
 * The custom rules that define an access scenario.
 */
export function get(
  params?: IEndpoints['GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'conditionalAccessPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    paramDefs: [{ name: 'conditionalAccessPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/conditionalAccessPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /policies/conditionalAccessPolicies']['body'],
  params?: IEndpoints['POST /policies/conditionalAccessPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/conditionalAccessPolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/conditionalAccessPolicies',
    paramDefs: [],
    params,
    body,
  };
}
