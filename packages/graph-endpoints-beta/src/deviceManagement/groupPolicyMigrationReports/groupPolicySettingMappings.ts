import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings',
    'get'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyMigrationReport-id', in: 'path' },
      { name: 'groupPolicySettingMapping-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings`
 *
 * A list of group policy settings to MDM/Intune mappings.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyMigrationReport-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}`
 *
 * A list of group policy settings to MDM/Intune mappings.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyMigrationReport-id', in: 'path' },
      { name: 'groupPolicySettingMapping-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings/{groupPolicySettingMapping-id}',
    paramDefs: [
      { name: 'groupPolicyMigrationReport-id', in: 'path' },
      { name: 'groupPolicySettingMapping-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/groupPolicySettingMappings',
    paramDefs: [{ name: 'groupPolicyMigrationReport-id', in: 'path' }],
    params,
    body,
  };
}
