import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}': Operation<
    '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/driveInclusionRules': Operation<
    '/solutions/backupRestore/driveInclusionRules',
    'get'
  >;
  'GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}': Operation<
    '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}': Operation<
    '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/driveInclusionRules': Operation<
    '/solutions/backupRestore/driveInclusionRules',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'driveProtectionRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/driveInclusionRules`
 *
 * The list of drive inclusion rules applied to the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/driveInclusionRules']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/driveInclusionRules']['response']> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/driveInclusionRules',
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
 * `GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}`
 *
 * The list of drive inclusion rules applied to the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'driveProtectionRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
    paramDefs: [{ name: 'driveProtectionRule-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/driveInclusionRules`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/driveInclusionRules']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/driveInclusionRules']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/driveInclusionRules']['response']> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/driveInclusionRules',
    paramDefs: [],
    params,
    body,
  };
}
