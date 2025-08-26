import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /applications/{application-id}/appManagementPolicies': Operation<
    '/applications/{application-id}/appManagementPolicies',
    'get'
  >;
}

/**
 * `GET /applications/{application-id}/appManagementPolicies`
 *
 * The appManagementPolicy applied to this application.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/appManagementPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/appManagementPolicies']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/appManagementPolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}
