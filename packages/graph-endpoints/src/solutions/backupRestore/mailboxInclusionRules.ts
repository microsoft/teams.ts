import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/mailboxInclusionRules': Operation<
    '/solutions/backupRestore/mailboxInclusionRules',
    'get'
  >;
  'GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/mailboxInclusionRules': Operation<
    '/solutions/backupRestore/mailboxInclusionRules',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailboxProtectionRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/mailboxInclusionRules`
 *
 * The list of mailbox inclusion rules applied to the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/mailboxInclusionRules']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/mailboxInclusionRules']['response']> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/mailboxInclusionRules',
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
 * `GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}`
 *
 * The list of mailbox inclusion rules applied to the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailboxProtectionRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    paramDefs: [{ name: 'mailboxProtectionRule-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/mailboxInclusionRules`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/mailboxInclusionRules']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/mailboxInclusionRules']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/mailboxInclusionRules']['response']> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/mailboxInclusionRules',
    paramDefs: [],
    params,
    body,
  };
}
