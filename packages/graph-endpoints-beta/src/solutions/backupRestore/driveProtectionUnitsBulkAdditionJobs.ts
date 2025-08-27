import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs',
    'get'
  >;
  'GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'driveProtectionUnitsBulkAdditionJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs',
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
 * `GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'driveProtectionUnitsBulkAdditionJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [{ name: 'driveProtectionUnitsBulkAdditionJob-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs',
    paramDefs: [],
    params,
    body,
  };
}
