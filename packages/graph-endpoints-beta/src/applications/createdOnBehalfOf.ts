import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /applications/{application-id}/createdOnBehalfOf': Operation<
    '/applications/{application-id}/createdOnBehalfOf',
    'get'
  >;
}

/**
 * `GET /applications/{application-id}/createdOnBehalfOf`
 *
 * Supports $filter (/$count eq 0, /$count ne 0). Read-only.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/createdOnBehalfOf']['parameters']
): EndpointRequest<IEndpoints['GET /applications/{application-id}/createdOnBehalfOf']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/createdOnBehalfOf',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}
