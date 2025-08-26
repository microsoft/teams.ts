import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions',
    'get'
  >;
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions`
 *
 * Navigation link to the terms and conditions that are assigned.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}
