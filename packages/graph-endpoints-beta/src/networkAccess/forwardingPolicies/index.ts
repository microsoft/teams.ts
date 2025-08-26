export * as policyRules from './policyRules';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    'delete'
  >;
  'GET /networkAccess/forwardingPolicies': Operation<'/networkAccess/forwardingPolicies', 'get'>;
  'GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    'get'
  >;
  'PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    'patch'
  >;
  'POST /networkAccess/forwardingPolicies': Operation<'/networkAccess/forwardingPolicies', 'post'>;
}

/**
 * `DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'forwardingPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/forwardingPolicies`
 *
 * Retrieve a list of forwarding policies associated with a specific traffic forwarding profile.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/forwardingPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/forwardingPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingPolicies',
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
 * `GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}`
 *
 * Retrieve information about a specific forwarding policy.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'forwardingPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    paramDefs: [{ name: 'forwardingPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/forwardingPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/forwardingPolicies']['body'],
  params?: IEndpoints['POST /networkAccess/forwardingPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/forwardingPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/forwardingPolicies',
    paramDefs: [],
    params,
    body,
  };
}
