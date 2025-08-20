import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/groupPolicyMigrationReports/createMigrationReport': Operation<
    '/deviceManagement/groupPolicyMigrationReports/createMigrationReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/groupPolicyMigrationReports/createMigrationReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/createMigrationReport']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/createMigrationReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyMigrationReports/createMigrationReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyMigrationReports/createMigrationReport',
    paramDefs: [],
    params,
    body,
  };
}
