import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
    'delete'
  >;
  'GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes',
    'get'
  >;
  'GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
    'get'
  >;
  'PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
    'patch'
  >;
  'POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes',
    'post'
  >;
}

/**
 * `DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}`
 *
 * Deletes a permissionGrantConditionSet from the includes collection of a permissionGrantPolicy.
 */
export function del(
  params?: IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'permissionGrantPolicy-id', in: 'path' },
      { name: 'permissionGrantConditionSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes`
 *
 * Retrieve the condition sets which are *included* in a permissionGrantPolicy.
 */
export function list(
  params?: IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes']['response']
> {
  return {
    method: 'get',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes',
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
 * `GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}`
 *
 * Condition sets that are included in this permission grant policy. Automatically expanded on GET.
 */
export function get(
  params?: IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
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
 * `PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['body'],
  params?: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}',
    paramDefs: [
      { name: 'permissionGrantPolicy-id', in: 'path' },
      { name: 'permissionGrantConditionSet-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes`
 *
 * Add conditions under which a permission grant event is *included* in a permission grant policy. You do this by adding a permissionGrantConditionSet to the includes collection of a  permissionGrantPolicy.
 */
export function create(
  body: IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes']['body'],
  params?: IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes']['response']
> {
  return {
    method: 'post',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes',
    paramDefs: [{ name: 'permissionGrantPolicy-id', in: 'path' }],
    params,
    body,
  };
}
