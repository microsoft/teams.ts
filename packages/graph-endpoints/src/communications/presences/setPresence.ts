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
 * Set the state of a user&#x27;s presence session as an application.
 */
export function create(
  body: IEndpoints['POST /communications/presences/{presence-id}/setPresence']['body'],
  params?: IEndpoints['POST /communications/presences/{presence-id}/setPresence']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/presences/{presence-id}/setPresence']['response']
> {
  return {
    method: 'post',
    path: '/communications/presences/{presence-id}/setPresence',
    paramDefs: [{ name: 'presence-id', in: 'path' }],
    params,
    body,
  };
}
