import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /applications/{application-id}/tokenLifetimePolicies': Operation<
    '/applications/{application-id}/tokenLifetimePolicies',
    'get'
  >;
}

/**
 * `GET /applications/{application-id}/tokenLifetimePolicies`
 *
 * List the tokenLifetimePolicy objects that are assigned to an application. Only one object is returned in the collection because only one tokenLifetimePolicy can be assigned to an application.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/tokenLifetimePolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/tokenLifetimePolicies']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/tokenLifetimePolicies',
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
