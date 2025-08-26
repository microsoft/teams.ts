import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /privilegedApproval/{privilegedApproval-id}/request': Operation<
    '/privilegedApproval/{privilegedApproval-id}/request',
    'get'
  >;
}

/**
 * `GET /privilegedApproval/{privilegedApproval-id}/request`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/request']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedApproval/{privilegedApproval-id}/request']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval/{privilegedApproval-id}/request',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedApproval-id', in: 'path' },
    ],
    params,
  };
}
