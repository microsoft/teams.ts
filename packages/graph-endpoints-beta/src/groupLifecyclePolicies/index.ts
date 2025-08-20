export * as addGroup from './addGroup';
export * as removeGroup from './removeGroup';
export * as renewGroup from './renewGroup';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'delete'
  >;
  'GET /groupLifecyclePolicies': Operation<'/groupLifecyclePolicies', 'get'>;
  'GET /groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'get'
  >;
  'PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}': Operation<
    '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    'patch'
  >;
  'POST /groupLifecyclePolicies': Operation<'/groupLifecyclePolicies', 'post'>;
}

/**
 * `DELETE /groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 * Delete a groupLifecyclePolicy.
 */
export function del(
  params?: IEndpoints['DELETE /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupLifecyclePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groupLifecyclePolicies`
 *
 * List all the groupLifecyclePolicies.
 */
export function list(
  params?: IEndpoints['GET /groupLifecyclePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /groupLifecyclePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groupLifecyclePolicies',
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
 * `GET /groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 * Retrieve the properties and relationships of a groupLifecyclePolicies object.
 */
export function get(
  params?: IEndpoints['GET /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupLifecyclePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}`
 *
 * Update the properties of a groupLifecyclePolicygroupLifecyclePolicy resource type object.
 */
export function update(
  body: IEndpoints['PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['body'],
  params?: IEndpoints['PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groupLifecyclePolicies/{groupLifecyclePolicy-id}',
    paramDefs: [{ name: 'groupLifecyclePolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /groupLifecyclePolicies`
 *
 * Creates a new groupLifecyclePolicy. Only one policy exists in the tenant.
 */
export function create(
  body: IEndpoints['POST /groupLifecyclePolicies']['body'],
  params?: IEndpoints['POST /groupLifecyclePolicies']['parameters']
): EndpointRequest<IEndpoints['POST /groupLifecyclePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groupLifecyclePolicies',
    paramDefs: [],
    params,
    body,
  };
}
