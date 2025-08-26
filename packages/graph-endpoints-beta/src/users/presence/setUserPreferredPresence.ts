import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/presence/setUserPreferredPresence': Operation<
    '/users/{user-id}/presence/setUserPreferredPresence',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/presence/setUserPreferredPresence`
 *
 * Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user&#x27;s presence is the preferred presence. Preferred presence takes effect only when there is at least one presence session of the user. Otherwise, the user&#x27;s presence stays as Offline. A presence session can be created as a result of a successful setPresence operation, or if the user is signed in on a Teams client.  Read more about presence sessions and their time-out and expiration.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/presence/setUserPreferredPresence']['body'],
  params?: IEndpoints['POST /users/{user-id}/presence/setUserPreferredPresence']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/presence/setUserPreferredPresence']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/presence/setUserPreferredPresence',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
