import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /applications/{application-id}/connectorGroup': Operation<
    '/applications/{application-id}/connectorGroup',
    'get'
  >;
}

/**
 * `GET /applications/{application-id}/connectorGroup`
 *
 * The connectorGroup the application is using with Microsoft Entra application proxy. Nullable.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/connectorGroup']['parameters']
): EndpointRequest<IEndpoints['GET /applications/{application-id}/connectorGroup']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/connectorGroup',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}
