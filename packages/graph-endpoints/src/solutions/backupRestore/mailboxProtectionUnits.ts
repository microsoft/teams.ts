import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/mailboxProtectionUnits': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits',
    'get'
  >;
  'GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/mailboxProtectionUnits': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailboxProtectionUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/mailboxProtectionUnits`
 *
 * The list of mailbox protection units in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnits']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnits']['response']> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/mailboxProtectionUnits',
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
 * `GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}`
 *
 * The list of mailbox protection units in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailboxProtectionUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    paramDefs: [{ name: 'mailboxProtectionUnit-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/mailboxProtectionUnits`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/mailboxProtectionUnits']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/mailboxProtectionUnits']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/mailboxProtectionUnits']['response']> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/mailboxProtectionUnits',
    paramDefs: [],
    params,
    body,
  };
}
