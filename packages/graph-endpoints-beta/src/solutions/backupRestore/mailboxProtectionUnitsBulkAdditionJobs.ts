import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs',
    'get'
  >;
  'GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mailboxProtectionUnitsBulkAdditionJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs',
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
 * `GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailboxProtectionUnitsBulkAdditionJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [{ name: 'mailboxProtectionUnitsBulkAdditionJob-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs',
    paramDefs: [],
    params,
    body,
  };
}
