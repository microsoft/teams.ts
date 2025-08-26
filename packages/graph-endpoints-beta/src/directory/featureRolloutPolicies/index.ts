export * as appliesTo from './appliesTo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'delete'
  >;
  'GET /directory/featureRolloutPolicies': Operation<'/directory/featureRolloutPolicies', 'get'>;
  'GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'get'
  >;
  'PATCH /directory/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'patch'
  >;
  'POST /directory/featureRolloutPolicies': Operation<'/directory/featureRolloutPolicies', 'post'>;
}

/**
 * `DELETE /directory/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'featureRolloutPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/featureRolloutPolicies`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /directory/featureRolloutPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /directory/featureRolloutPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/featureRolloutPolicies',
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
 * `GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'featureRolloutPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['body'],
  params?: IEndpoints['PATCH /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: [{ name: 'featureRolloutPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/featureRolloutPolicies`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /directory/featureRolloutPolicies']['body'],
  params?: IEndpoints['POST /directory/featureRolloutPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /directory/featureRolloutPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/featureRolloutPolicies',
    paramDefs: [],
    params,
    body,
  };
}
