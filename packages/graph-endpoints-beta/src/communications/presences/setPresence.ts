import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/presences/{presence-id}/setPresence': Operation<
    '/communications/presences/{presence-id}/setPresence',
    'post'
  >;
}

/**
 * `POST /communications/presences/{presence-id}/setPresence`
 *
 * Set the availability and activity status in a presence session of an application for a user.
 */
export function create(
  body: IEndpoints['POST /communications/presences/{presence-id}/setPresence']['body'],
  params?: IEndpoints['POST /communications/presences/{presence-id}/setPresence']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/presences/{presence-id}/setPresence']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/presences/{presence-id}/setPresence',
    paramDefs: [{ name: 'presence-id', in: 'path' }],
    params,
    body,
  };
}
