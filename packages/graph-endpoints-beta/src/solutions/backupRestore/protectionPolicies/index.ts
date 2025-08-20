export * as activate from './activate';
export * as deactivate from './deactivate';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}': Operation<
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/protectionPolicies': Operation<
    '/solutions/backupRestore/protectionPolicies',
    'get'
  >;
  'GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}': Operation<
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}': Operation<
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/protectionPolicies': Operation<
    '/solutions/backupRestore/protectionPolicies',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}`
 *
 * Delete a protection policy. Read the properties and relationships of a protectionPolicyBase object.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'protectionPolicyBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/protectionPolicies`
 *
 * List of protection policies in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/protectionPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/protectionPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/protectionPolicies',
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
 * `GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}`
 *
 * List of protection policies in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'protectionPolicyBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    paramDefs: [{ name: 'protectionPolicyBase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/protectionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/protectionPolicies']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/protectionPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/protectionPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/protectionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
