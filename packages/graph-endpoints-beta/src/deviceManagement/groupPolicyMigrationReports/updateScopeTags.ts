import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags': Operation<
    '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags',
    'post'
  >;
}

/**
 * `POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport-id}/updateScopeTags',
    paramDefs: [{ name: 'groupPolicyMigrationReport-id', in: 'path' }],
    params,
    body,
  };
}
