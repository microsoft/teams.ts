import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/presence/clearPresence': Operation<'/me/presence/clearPresence', 'post'>;
}

/**
 * `POST /me/presence/clearPresence`
 *
 * Clear the application&#x27;s presence session for a user. If it is the user&#x27;s only presence session, the user&#x27;s presence will change to Offline/Offline. For details about presences sessions, see presence: setPresence.
 */
export function create(
  body: IEndpoints['POST /me/presence/clearPresence']['body'],
  params?: IEndpoints['POST /me/presence/clearPresence']['parameters']
): EndpointRequest<IEndpoints['POST /me/presence/clearPresence']['response']> {
  return {
    method: 'post',
    path: '/me/presence/clearPresence',
    paramDefs: [],
    params,
    body,
  };
}
