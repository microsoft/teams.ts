import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs',
    'get'
  >;
  'GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'siteProtectionUnitsBulkAdditionJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs',
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
 * `GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'siteProtectionUnitsBulkAdditionJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [{ name: 'siteProtectionUnitsBulkAdditionJob-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs',
    paramDefs: [],
    params,
    body,
  };
}
