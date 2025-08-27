import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions',
    'get'
  >;
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions`
 *
 * Navigation link to the terms and conditions that are assigned.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsAcceptanceStatus-id', in: 'path' },
    ],
    params,
  };
}
