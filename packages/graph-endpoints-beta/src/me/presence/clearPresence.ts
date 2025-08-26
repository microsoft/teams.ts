import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/presence/clearPresence': Operation<'/me/presence/clearPresence', 'post'>;
}

/**
 * `POST /me/presence/clearPresence`
 *
 * Clear a presence session of an application for a user. If it is the user&#x27;s only presence session, a successful clearPresence changes the user&#x27;s presence to Offline/Offline. Read more about presence sessions and their time-out and expiration.
 */
export function create(
  body: IEndpoints['POST /me/presence/clearPresence']['body'],
  params?: IEndpoints['POST /me/presence/clearPresence']['parameters']
): EndpointRequest<IEndpoints['POST /me/presence/clearPresence']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/presence/clearPresence',
    paramDefs: [],
    params,
    body,
  };
}
