import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/team': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/team',
    'get'
  >;
}

/**
 * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/team`
 *
 * Information about the Microsoft Teams team that was created for the request.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/team']['parameters']
): EndpointRequest<
  IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/team']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/team',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
    ],
    params,
  };
}
