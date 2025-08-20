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
 * Clear the application&#x27;s presence session for a user. If it is the user&#x27;s only presence session, the user&#x27;s presence will change to Offline/Offline. For details about presences sessions, see presence: setPresence.
 */
export function create(
  body: IEndpoints['POST /communications/presences/{presence-id}/clearPresence']['body'],
  params?: IEndpoints['POST /communications/presences/{presence-id}/clearPresence']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/presences/{presence-id}/clearPresence']['response']
> {
  return {
    method: 'post',
    path: '/communications/presences/{presence-id}/clearPresence',
    paramDefs: [{ name: 'presence-id', in: 'path' }],
    params,
    body,
  };
}
