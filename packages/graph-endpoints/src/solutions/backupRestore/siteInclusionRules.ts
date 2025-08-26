import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}': Operation<
    '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/siteInclusionRules': Operation<
    '/solutions/backupRestore/siteInclusionRules',
    'get'
  >;
  'GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}': Operation<
    '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}': Operation<
    '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/siteInclusionRules': Operation<
    '/solutions/backupRestore/siteInclusionRules',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'siteProtectionRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/siteInclusionRules`
 *
 * The list of site inclusion rules applied to the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/siteInclusionRules']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/siteInclusionRules']['response']> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/siteInclusionRules',
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
 * `GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}`
 *
 * The list of site inclusion rules applied to the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'siteProtectionRule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
    paramDefs: [{ name: 'siteProtectionRule-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/siteInclusionRules`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/siteInclusionRules']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/siteInclusionRules']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/siteInclusionRules']['response']> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/siteInclusionRules',
    paramDefs: [],
    params,
    body,
  };
}
