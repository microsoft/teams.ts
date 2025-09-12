export * as group from './group';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}',
    'delete'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentSchedules': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentSchedules',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}',
    'patch'
  >;
  'POST /identityGovernance/privilegedAccess/group/assignmentSchedules': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentSchedules',
    'post'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/activatedUsing': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/activatedUsing',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/principal': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/principal',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccessGroupAssignmentSchedule-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/assignmentSchedules`
 *
 * Get a list of the privilegedAccessGroupAssignmentSchedule objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentSchedules']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentSchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/assignmentSchedules',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}`
 *
 * Read the properties and relationships of a privilegedAccessGroupAssignmentSchedule object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}',
    paramDefs: {
      path: ['privilegedAccessGroupAssignmentSchedule-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}',
    paramDefs: {
      path: ['privilegedAccessGroupAssignmentSchedule-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/privilegedAccess/group/assignmentSchedules`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentSchedules']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentSchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/privilegedAccess/group/assignmentSchedules',
    body,
  };
}

export const activatedUsing = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/activatedUsing`
   *
   * When the request activates an ownership or membership assignment in PIM for Groups, this object represents the eligibility relationship. Otherwise, it&#x27;s null. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/activatedUsing']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/activatedUsing']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/activatedUsing',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupAssignmentSchedule-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/principal`
   *
   * References the principal that&#x27;s in the scope of this membership or ownership assignment request to the group that&#x27;s governed by PIM. Supports $expand and $select nested in $expand for id only.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentSchedules/{privilegedAccessGroupAssignmentSchedule-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupAssignmentSchedule-id'],
      },
      params,
    };
  },
};
