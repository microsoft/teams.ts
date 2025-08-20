export * as includedGroups from './includedGroups';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /mobilityManagementPolicies/{mobilityManagementPolicy-id}': Operation<
    '/mobilityManagementPolicies/{mobilityManagementPolicy-id}',
    'delete'
  >;
  'GET /mobilityManagementPolicies': Operation<'/mobilityManagementPolicies', 'get'>;
  'GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}': Operation<
    '/mobilityManagementPolicies/{mobilityManagementPolicy-id}',
    'get'
  >;
  'PATCH /mobilityManagementPolicies/{mobilityManagementPolicy-id}': Operation<
    '/mobilityManagementPolicies/{mobilityManagementPolicy-id}',
    'patch'
  >;
  'POST /mobilityManagementPolicies': Operation<'/mobilityManagementPolicies', 'post'>;
}

/**
 * `DELETE /mobilityManagementPolicies/{mobilityManagementPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /mobilityManagementPolicies/{mobilityManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /mobilityManagementPolicies/{mobilityManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/mobilityManagementPolicies/{mobilityManagementPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobilityManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /mobilityManagementPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /mobilityManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /mobilityManagementPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/mobilityManagementPolicies',
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
 * `GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/mobilityManagementPolicies/{mobilityManagementPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobilityManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /mobilityManagementPolicies/{mobilityManagementPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /mobilityManagementPolicies/{mobilityManagementPolicy-id}']['body'],
  params?: IEndpoints['PATCH /mobilityManagementPolicies/{mobilityManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /mobilityManagementPolicies/{mobilityManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/mobilityManagementPolicies/{mobilityManagementPolicy-id}',
    paramDefs: [{ name: 'mobilityManagementPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /mobilityManagementPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /mobilityManagementPolicies']['body'],
  params?: IEndpoints['POST /mobilityManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /mobilityManagementPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/mobilityManagementPolicies',
    paramDefs: [],
    params,
    body,
  };
}
