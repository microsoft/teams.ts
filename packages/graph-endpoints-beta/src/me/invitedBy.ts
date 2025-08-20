import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/invitedBy': Operation<'/me/invitedBy', 'get'>;
}

/**
 * `GET /me/invitedBy`
 *
 * The user or service principal that invited the user.
 */
export function get(
  params?: IEndpoints['GET /me/invitedBy']['parameters']
): EndpointRequest<IEndpoints['GET /me/invitedBy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/invitedBy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
