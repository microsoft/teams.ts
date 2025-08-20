import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/presences/{presence-id}/clearUserPreferredPresence': Operation<
    '/communications/presences/{presence-id}/clearUserPreferredPresence',
    'post'
  >;
}

/**
 * `POST /communications/presences/{presence-id}/clearUserPreferredPresence`
 *
 * Clear the preferred availability and activity status for a user.
 */
export function create(
  body: IEndpoints['POST /communications/presences/{presence-id}/clearUserPreferredPresence']['body'],
  params?: IEndpoints['POST /communications/presences/{presence-id}/clearUserPreferredPresence']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/presences/{presence-id}/clearUserPreferredPresence']['response']
> {
  return {
    method: 'post',
    path: '/communications/presences/{presence-id}/clearUserPreferredPresence',
    paramDefs: [{ name: 'presence-id', in: 'path' }],
    params,
    body,
  };
}
