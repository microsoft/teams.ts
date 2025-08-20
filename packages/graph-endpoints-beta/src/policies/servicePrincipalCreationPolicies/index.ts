export * as excludes from './excludes';
export * as includes from './includes';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    'delete'
  >;
  'GET /policies/servicePrincipalCreationPolicies': Operation<
    '/policies/servicePrincipalCreationPolicies',
    'get'
  >;
  'GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    'get'
  >;
  'PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    'patch'
  >;
  'POST /policies/servicePrincipalCreationPolicies': Operation<
    '/policies/servicePrincipalCreationPolicies',
    'post'
  >;
}

/**
 * `DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipalCreationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/servicePrincipalCreationPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /policies/servicePrincipalCreationPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/servicePrincipalCreationPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/servicePrincipalCreationPolicies',
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
 * `GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipalCreationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}',
    paramDefs: [{ name: 'servicePrincipalCreationPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/servicePrincipalCreationPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /policies/servicePrincipalCreationPolicies']['body'],
  params?: IEndpoints['POST /policies/servicePrincipalCreationPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/servicePrincipalCreationPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/servicePrincipalCreationPolicies',
    paramDefs: [],
    params,
    body,
  };
}
