export * as group from './group';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}',
    'delete'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}',
    'patch'
  >;
  'POST /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances',
    'post'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/principal': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/principal',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccessGroupEligibilityScheduleInstance-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances`
 *
 * Get a list of the privilegedAccessGroupEligibilityScheduleInstance objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}`
 *
 * Read the properties and relationships of a privilegedAccessGroupEligibilityScheduleInstance object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}',
    paramDefs: {
      path: ['privilegedAccessGroupEligibilityScheduleInstance-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}',
    paramDefs: {
      path: ['privilegedAccessGroupEligibilityScheduleInstance-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances',
    body,
  };
}

export const principal = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/principal`
   *
   * References the principal that&#x27;s in the scope of the membership or ownership eligibility request through the group that&#x27;s governed by PIM. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccessGroupEligibilityScheduleInstance-id'],
      },
      params,
    };
  },
};
