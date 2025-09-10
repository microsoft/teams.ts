import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group/serviceProvisioningErrors': Operation<
    '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group`
 *
 * References the group that is the scope of the membership or ownership eligibility through PIM for Groups. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group',
    paramDefs: {
      path: ['privilegedAccessGroupEligibilityScheduleInstance-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a group object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances/{privilegedAccessGroupEligibilityScheduleInstance-id}/group/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['privilegedAccessGroupEligibilityScheduleInstance-id'],
      },
      params,
    };
  },
};
