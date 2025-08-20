import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/alerts/{alert-id}/policy': Operation<
    '/networkAccess/alerts/{alert-id}/policy',
    'get'
  >;
}

/**
 * `GET /networkAccess/alerts/{alert-id}/policy`
 *
 * The filtering policy associated with the alert. This relationship allows you to retrieve or manage the filtering policy that triggered or is related to the alert instance.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/alerts/{alert-id}/policy']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/alerts/{alert-id}/policy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/alerts/{alert-id}/policy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'alert-id', in: 'path' },
    ],
    params,
  };
}
