import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/drive': Operation<'/users/{user-id}/drive', 'get'>;
}

/**
 * `GET /users/{user-id}/drive`
 *
 * The user&#x27;s OneDrive. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/drive']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/drive']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/drive',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
