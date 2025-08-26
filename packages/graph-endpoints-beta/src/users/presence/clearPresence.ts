import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/presence/clearPresence': Operation<
    '/users/{user-id}/presence/clearPresence',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/presence/clearPresence`
 *
 * Clear a presence session of an application for a user. If it is the user&#x27;s only presence session, a successful clearPresence changes the user&#x27;s presence to Offline/Offline. Read more about presence sessions and their time-out and expiration.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/presence/clearPresence']['body'],
  params?: IEndpoints['POST /users/{user-id}/presence/clearPresence']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/presence/clearPresence']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/presence/clearPresence',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
