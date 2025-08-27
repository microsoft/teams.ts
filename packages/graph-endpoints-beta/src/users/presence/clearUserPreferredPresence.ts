import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/presence/clearUserPreferredPresence': Operation<
    '/users/{user-id}/presence/clearUserPreferredPresence',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/presence/clearUserPreferredPresence`
 *
 * Clear the preferred availability and activity status for a user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/presence/clearUserPreferredPresence']['body'],
  params?: IEndpoints['POST /users/{user-id}/presence/clearUserPreferredPresence']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/presence/clearUserPreferredPresence']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/presence/clearUserPreferredPresence',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
