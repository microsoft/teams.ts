import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
    'delete'
  >;
  'GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes',
    'get'
  >;
  'GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
    'get'
  >;
  'PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
    'patch'
  >;
  'POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes',
    'post'
  >;
}

/**
 * `DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}`
 *
 * Deletes a permissionGrantConditionSet from the excludes collection of a permissionGrantPolicy.
 */
export function del(
  params?: IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'permissionGrantPolicy-id', in: 'path' },
      { name: 'permissionGrantConditionSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes`
 *
 * Retrieve the condition sets which are *excluded* in a permissionGrantPolicy.
 */
export function list(
  params?: IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes']['response']
> {
  return {
    method: 'get',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'permissionGrantPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}`
 *
 * Condition sets that are excluded in this permission grant policy. Automatically expanded on GET.
 */
export function get(
  params?: IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'permissionGrantPolicy-id', in: 'path' },
      { name: 'permissionGrantConditionSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['body'],
  params?: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}',
    paramDefs: [
      { name: 'permissionGrantPolicy-id', in: 'path' },
      { name: 'permissionGrantConditionSet-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes`
 *
 * Add conditions under which a permission grant event is *excluded* in a permission grant policy. You do this by adding a permissionGrantConditionSet to the excludes collection of a  permissionGrantPolicy.
 */
export function create(
  body: IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes']['body'],
  params?: IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes']['response']
> {
  return {
    method: 'post',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes',
    paramDefs: [{ name: 'permissionGrantPolicy-id', in: 'path' }],
    params,
    body,
  };
}
