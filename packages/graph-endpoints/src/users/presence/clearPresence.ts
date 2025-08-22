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
 * Clear the application&#x27;s presence session for a user. If it is the user&#x27;s only presence session, the user&#x27;s presence will change to Offline/Offline. For details about presences sessions, see presence: setPresence.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/presence/clearPresence']['body'],
  params?: IEndpoints['POST /users/{user-id}/presence/clearPresence']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/presence/clearPresence']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/presence/clearPresence',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
