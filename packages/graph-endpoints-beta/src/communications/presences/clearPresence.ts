import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/presences/{presence-id}/clearPresence': Operation<
    '/communications/presences/{presence-id}/clearPresence',
    'post'
  >;
}

/**
 * `POST /communications/presences/{presence-id}/clearPresence`
 *
 * Clear a presence session of an application for a user. If it is the user&#x27;s only presence session, a successful clearPresence changes the user&#x27;s presence to Offline/Offline. Read more about presence sessions and their time-out and expiration.
 */
export function create(
  body: IEndpoints['POST /communications/presences/{presence-id}/clearPresence']['body'],
  params?: IEndpoints['POST /communications/presences/{presence-id}/clearPresence']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/presences/{presence-id}/clearPresence']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/presences/{presence-id}/clearPresence',
    paramDefs: [{ name: 'presence-id', in: 'path' }],
    params,
    body,
  };
}
