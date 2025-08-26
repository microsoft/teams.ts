import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions',
    'get'
  >;
  'GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyMigrationReport-id', in: 'path' },
      { name: 'unsupportedGroupPolicyExtension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions`
 *
 * A list of unsupported group policy extensions inside the Group Policy Object.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions',
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
 * `GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}`
 *
 * A list of unsupported group policy extensions inside the Group Policy Object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyMigrationReport-id', in: 'path' },
      { name: 'unsupportedGroupPolicyExtension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions/{unsupportedGroupPolicyExtension-id}',
    paramDefs: [
      { name: 'groupPolicyMigrationReport-id', in: 'path' },
      { name: 'unsupportedGroupPolicyExtension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/unsupportedGroupPolicyExtensions',
    paramDefs: [{ name: 'groupPolicyMigrationReport-id', in: 'path' }],
    params,
    body,
  };
}
