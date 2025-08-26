import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
    'delete'
  >;
  'GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes',
    'get'
  >;
  'GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
    'get'
  >;
  'PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
    'patch'
  >;
  'POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes': Operation<
    '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes',
    'post'
  >;
}

/**
 * `DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipalCreationPolicy-id', in: 'path' },
      { name: 'servicePrincipalCreationConditionSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes`
 *
 */
export function list(
  params?: IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipalCreationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipalCreationPolicy-id', in: 'path' },
      { name: 'servicePrincipalCreationConditionSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['body'],
  params?: IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}',
    paramDefs: [
      { name: 'servicePrincipalCreationPolicy-id', in: 'path' },
      { name: 'servicePrincipalCreationConditionSet-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes`
 *
 */
export function create(
  body: IEndpoints['POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes']['body'],
  params?: IEndpoints['POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes',
    paramDefs: [{ name: 'servicePrincipalCreationPolicy-id', in: 'path' }],
    params,
    body,
  };
}
