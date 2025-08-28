export * as createMigrationReport from './createMigrationReport';
export * as groupPolicySettingMappings from './groupPolicySettingMappings';
export * as unsupportedGroupPolicyExtensions from './unsupportedGroupPolicyExtensions';
export * as updateScopeTags from './updateScopeTags';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports': Operation<
    '/deviceManagement/groupPolicyMigrationReports',
    'get'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyMigrationReports': Operation<
    '/deviceManagement/groupPolicyMigrationReports',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyMigrationReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyMigrationReports`
 *
 * A list of Group Policy migration reports.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/groupPolicyMigrationReports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyMigrationReports',
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
 * `GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}`
 *
 * A list of Group Policy migration reports.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyMigrationReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}',
    paramDefs: [{ name: 'groupPolicyMigrationReport-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyMigrationReports`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/groupPolicyMigrationReports']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyMigrationReports',
    paramDefs: [],
    params,
    body,
  };
}
