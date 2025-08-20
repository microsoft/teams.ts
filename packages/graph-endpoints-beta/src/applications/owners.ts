import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /applications/{application-id}/owners': Operation<
    '/applications/{application-id}/owners',
    'get'
  >;
}

/**
 * `GET /applications/{application-id}/owners`
 *
 * Retrieve a list of owners for an application that are directoryObject types.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/owners']['parameters']
): EndpointRequest<IEndpoints['GET /applications/{application-id}/owners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/owners',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
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
