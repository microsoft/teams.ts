export * as addGroup from './addGroup';
export * as removeGroup from './removeGroup';
export * as renewGroup from './renewGroup';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'delete'
  >;
  'GET /groups/{group-id}/groupLifecyclePolicies': Operation<
    '/groups/{group-id}/groupLifecyclePolicies',
    'get'
  >;
  'GET /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'patch'
  >;
  'POST /groups/{group-id}/groupLifecyclePolicies': Operation<
    '/groups/{group-id}/groupLifecyclePolicies',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'groupLifecyclePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/groupLifecyclePolicies`
 *
 * Retrieves a list of groupLifecyclePolicy objects to which a group belongs.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/groupLifecyclePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/groupLifecyclePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/groupLifecyclePolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 * The collection of lifecycle policies for this group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'groupLifecyclePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'groupLifecyclePolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/groupLifecyclePolicies`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies']['body'],
  params?: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/groupLifecyclePolicies',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
