import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/manager': Operation<'/users/{user-id}/manager', 'get'>;
}

/**
 * `GET /users/{user-id}/manager`
 *
 * Returns the user or organizational contact assigned as the user&#x27;s manager. Optionally, you can expand the manager&#x27;s chain up to the root node.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/manager']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/manager']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/manager',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
