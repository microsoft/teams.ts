import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/presence/setStatusMessage': Operation<
    '/users/{user-id}/presence/setStatusMessage',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/presence/setStatusMessage`
 *
 * Set a presence status message for a user. An optional expiration date and time can be supplied.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/presence/setStatusMessage']['body'],
  params?: IEndpoints['POST /users/{user-id}/presence/setStatusMessage']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/presence/setStatusMessage']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/presence/setStatusMessage',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
