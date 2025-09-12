export * as assignmentApprovals from './assignmentApprovals';
export * as assignmentScheduleInstances from './assignmentScheduleInstances';
export * as assignmentScheduleRequests from './assignmentScheduleRequests';
export * as assignmentSchedules from './assignmentSchedules';
export * as eligibilityScheduleInstances from './eligibilityScheduleInstances';
export * as eligibilityScheduleRequests from './eligibilityScheduleRequests';
export * as eligibilitySchedules from './eligibilitySchedules';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/privilegedAccess/group': Operation<
    '/identityGovernance/privilegedAccess/group',
    'delete'
  >;
  'GET /identityGovernance/privilegedAccess/group': Operation<
    '/identityGovernance/privilegedAccess/group',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess/group': Operation<
    '/identityGovernance/privilegedAccess/group',
    'patch'
  >;
}

/**
 * `DELETE /identityGovernance/privilegedAccess/group`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/privilegedAccess/group']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/privilegedAccess/group']['response']> {
  return {
    method: 'delete',
    path: '/identityGovernance/privilegedAccess/group',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group`
 *
 * A group that&#x27;s governed through Privileged Identity Management (PIM).
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/privilegedAccess/group']['response']> {
  return {
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/privilegedAccess/group`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/privilegedAccess/group']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/privilegedAccess/group']['response']> {
  return {
    method: 'patch',
    path: '/identityGovernance/privilegedAccess/group',
    body,
  };
}
