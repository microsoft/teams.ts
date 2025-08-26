import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/invitedBy': Operation<'/users/{user-id}/invitedBy', 'get'>;
}

/**
 * `GET /users/{user-id}/invitedBy`
 *
 * Get the user or servicePrincipal that invited the specified user into the tenant.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/invitedBy']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/invitedBy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/invitedBy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
