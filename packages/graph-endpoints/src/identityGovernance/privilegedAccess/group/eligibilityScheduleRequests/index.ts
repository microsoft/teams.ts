export * as group from './group';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}',
    'delete'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}',
    'patch'
  >;
  'POST /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests',
    'post'
  >;
  'POST /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/cancel': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/cancel',
    'post'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/principal': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/principal',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/targetSchedule': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/targetSchedule',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccessGroupEligibilityScheduleRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests`
 *
 * Get a list of the privilegedAccessGroupEligibilityScheduleRequest objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}`
 *
 * Read the properties and relationships of a privilegedAccessGroupEligibilityScheduleRequest object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}',
    paramDefs: {
      path: ['privilegedAccessGroupEligibilityScheduleRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}',
    paramDefs: {
      path: ['privilegedAccessGroupEligibilityScheduleRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests`
 *
 * Create a new privilegedAccessGroupEligibilityScheduleRequest object.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests',
    body,
  };
}

export const cancel = {
  /**
   * `POST /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/cancel`
   *
   * Cancel an eligibility assignment request to a group whose membership and ownership are governed by PIM.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/cancel']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/cancel',
      paramDefs: {
        path: ['privilegedAccessGroupEligibilityScheduleRequest-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/principal`
   *
   * References the principal that&#x27;s in the scope of the membership or ownership eligibility request through the group that&#x27;s governed by PIM. Supports $expand and $select nested in $expand for id only.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/principal']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupEligibilityScheduleRequest-id'],
      },
      params,
    };
  },
};

export const targetSchedule = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/targetSchedule`
   *
   * Schedule created by this request.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/targetSchedule']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/targetSchedule']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleRequests/{privilegedAccessGroupEligibilityScheduleRequest-id}/targetSchedule',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupEligibilityScheduleRequest-id'],
      },
      params,
    };
  },
};
