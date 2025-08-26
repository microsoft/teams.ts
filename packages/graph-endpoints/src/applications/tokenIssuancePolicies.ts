import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /applications/{application-id}/tokenIssuancePolicies': Operation<
    '/applications/{application-id}/tokenIssuancePolicies',
    'get'
  >;
}

/**
 * `GET /applications/{application-id}/tokenIssuancePolicies`
 *
 * List the tokenIssuancePolicy objects that are assigned to an application.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/tokenIssuancePolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/tokenIssuancePolicies']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/tokenIssuancePolicies',
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
