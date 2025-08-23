import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/presences/{presence-id}/setUserPreferredPresence': Operation<
    '/communications/presences/{presence-id}/setUserPreferredPresence',
    'post'
  >;
}

/**
 * `POST /communications/presences/{presence-id}/setUserPreferredPresence`
 *
 * Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user&#x27;s presence shows as the preferred status. Preferred presence takes effect only when at least one presence session exists for the user. Otherwise, the user&#x27;s presence shows as Offline. A presence session is created as a result of a successful setPresence operation, or if the user is signed in on a Microsoft Teams client. For more details, see presence sessions and time-out and expiration.
 */
export function create(
  body: IEndpoints['POST /communications/presences/{presence-id}/setUserPreferredPresence']['body'],
  params?: IEndpoints['POST /communications/presences/{presence-id}/setUserPreferredPresence']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/presences/{presence-id}/setUserPreferredPresence']['response']
> {
  return {
    method: 'post',
    path: '/communications/presences/{presence-id}/setUserPreferredPresence',
    paramDefs: [{ name: 'presence-id', in: 'path' }],
    params,
    body,
  };
}
