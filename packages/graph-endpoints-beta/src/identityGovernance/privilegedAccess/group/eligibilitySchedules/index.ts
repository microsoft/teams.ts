export * as group from './group';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}',
    'delete'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilitySchedules': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilitySchedules',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}',
    'patch'
  >;
  'POST /identityGovernance/privilegedAccess/group/eligibilitySchedules': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilitySchedules',
    'post'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}/principal': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}/principal',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccessGroupEligibilitySchedule-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/eligibilitySchedules`
 *
 * Get a list of the privilegedAccessGroupEligibilitySchedule objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilitySchedules']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilitySchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/eligibilitySchedules',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}`
 *
 * Read the properties and relationships of a privilegedAccessGroupEligibilitySchedule object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}',
    paramDefs: {
      path: ['privilegedAccessGroupEligibilitySchedule-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}',
    paramDefs: {
      path: ['privilegedAccessGroupEligibilitySchedule-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/privilegedAccess/group/eligibilitySchedules`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/privilegedAccess/group/eligibilitySchedules']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/privilegedAccess/group/eligibilitySchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/privilegedAccess/group/eligibilitySchedules',
    body,
  };
}

export const principal = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}/principal`
   *
   * References the principal that&#x27;s in the scope of this membership or ownership eligibility request to the group that&#x27;s governed by PIM. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/eligibilitySchedules/{privilegedAccessGroupEligibilitySchedule-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupEligibilitySchedule-id'],
      },
      params,
    };
  },
};
