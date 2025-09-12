export * as group from './group';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}',
    'delete'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}',
    'patch'
  >;
  'POST /identityGovernance/privilegedAccess/group/assignmentScheduleRequests': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests',
    'post'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/activatedUsing': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/activatedUsing',
    'get'
  >;
  'POST /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/cancel': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/cancel',
    'post'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/principal': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/principal',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/targetSchedule': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/targetSchedule',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccessGroupAssignmentScheduleRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests`
 *
 * Get a list of the privilegedAccessGroupAssignmentScheduleRequest objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}`
 *
 * Read the properties and relationships of a privilegedAccessGroupAssignmentScheduleRequest object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}',
    paramDefs: {
      path: ['privilegedAccessGroupAssignmentScheduleRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}',
    paramDefs: {
      path: ['privilegedAccessGroupAssignmentScheduleRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/privilegedAccess/group/assignmentScheduleRequests`
 *
 * Create a new privilegedAccessGroupAssignmentScheduleRequest object.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentScheduleRequests']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentScheduleRequests']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests',
    body,
  };
}

export const activatedUsing = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/activatedUsing`
   *
   * When the request activates a membership or ownership assignment in PIM for Groups, this object represents the eligibility policy for the group. Otherwise, it is null. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/activatedUsing']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/activatedUsing']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/activatedUsing',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};

export const cancel = {
  /**
   * `POST /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/cancel`
   *
   * Cancel an access assignment request to a group whose membership and ownership are governed by PIM.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/cancel']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/cancel',
      paramDefs: {
        path: ['privilegedAccessGroupAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/principal`
   *
   * References the principal that&#x27;s in the scope of this membership or ownership assignment request through the group that&#x27;s governed by PIM. Supports $expand and $select nested in $expand for id only.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/principal']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};

export const targetSchedule = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/targetSchedule`
   *
   * Schedule created by this request. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/targetSchedule']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/targetSchedule']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentScheduleRequests/{privilegedAccessGroupAssignmentScheduleRequest-id}/targetSchedule',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};
