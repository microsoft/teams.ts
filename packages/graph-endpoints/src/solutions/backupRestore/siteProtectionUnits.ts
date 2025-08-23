import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/siteProtectionUnits': Operation<
    '/solutions/backupRestore/siteProtectionUnits',
    'get'
  >;
  'GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/siteProtectionUnits': Operation<
    '/solutions/backupRestore/siteProtectionUnits',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'siteProtectionUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/siteProtectionUnits`
 *
 * The list of site protection units in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/siteProtectionUnits']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/siteProtectionUnits']['response']> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/siteProtectionUnits',
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
 * `GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}`
 *
 * The list of site protection units in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'siteProtectionUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
    paramDefs: [{ name: 'siteProtectionUnit-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/siteProtectionUnits`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/siteProtectionUnits']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/siteProtectionUnits']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/siteProtectionUnits']['response']> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/siteProtectionUnits',
    paramDefs: [],
    params,
    body,
  };
}
