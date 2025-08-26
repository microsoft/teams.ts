import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/team': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/team',
    'get'
  >;
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/team`
 *
 * Information about the Microsoft Teams team that was created for the request.
 */
export function get(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/team']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/team']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/team',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
    ],
    params,
  };
}
