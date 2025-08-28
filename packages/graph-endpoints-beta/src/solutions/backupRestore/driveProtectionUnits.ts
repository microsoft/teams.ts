import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/driveProtectionUnits': Operation<
    '/solutions/backupRestore/driveProtectionUnits',
    'get'
  >;
  'GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/driveProtectionUnits': Operation<
    '/solutions/backupRestore/driveProtectionUnits',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'driveProtectionUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/driveProtectionUnits`
 *
 * The list of drive protection units in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/driveProtectionUnits']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/driveProtectionUnits']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/driveProtectionUnits',
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
 * `GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}`
 *
 * The list of drive protection units in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'driveProtectionUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
    paramDefs: [{ name: 'driveProtectionUnit-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/driveProtectionUnits`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/driveProtectionUnits']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/driveProtectionUnits']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/driveProtectionUnits']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/driveProtectionUnits',
    paramDefs: [],
    params,
    body,
  };
}
