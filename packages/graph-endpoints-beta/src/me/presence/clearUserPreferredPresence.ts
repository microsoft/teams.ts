import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/presence/clearUserPreferredPresence': Operation<
    '/me/presence/clearUserPreferredPresence',
    'post'
  >;
}

/**
 * `POST /me/presence/clearUserPreferredPresence`
 *
 * Clear the preferred availability and activity status for a user.
 */
export function create(
  body: IEndpoints['POST /me/presence/clearUserPreferredPresence']['body'],
  params?: IEndpoints['POST /me/presence/clearUserPreferredPresence']['parameters']
): EndpointRequest<IEndpoints['POST /me/presence/clearUserPreferredPresence']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/presence/clearUserPreferredPresence',
    paramDefs: [],
    params,
    body,
  };
}
