export * as group from './group';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}',
    'delete'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}',
    'patch'
  >;
  'POST /identityGovernance/privilegedAccess/group/assignmentScheduleInstances': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances',
    'post'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/activatedUsing': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/activatedUsing',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/principal': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/principal',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccessGroupAssignmentScheduleInstance-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances`
 *
 * Get a list of the privilegedAccessGroupAssignmentScheduleInstance objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}`
 *
 * Read the properties and relationships of a privilegedAccessGroupAssignmentScheduleInstance object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}',
    paramDefs: {
      path: ['privilegedAccessGroupAssignmentScheduleInstance-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}',
    paramDefs: {
      path: ['privilegedAccessGroupAssignmentScheduleInstance-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/privilegedAccess/group/assignmentScheduleInstances`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentScheduleInstances']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentScheduleInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances',
    body,
  };
}

export const activatedUsing = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/activatedUsing`
   *
   * When the request activates a membership or ownership in PIM for Groups, this object represents the eligibility request for the group. Otherwise, it&#x27;s null.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/activatedUsing']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/activatedUsing']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/activatedUsing',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupAssignmentScheduleInstance-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/principal`
   *
   * References the principal that&#x27;s in the scope of the membership or ownership assignment request through the group that&#x27;s governed by PIM. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentScheduleInstances/{privilegedAccessGroupAssignmentScheduleInstance-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupAssignmentScheduleInstance-id'],
      },
      params,
    };
  },
};
