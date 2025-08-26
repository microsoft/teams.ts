import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/presence/setPresence': Operation<'/me/presence/setPresence', 'post'>;
}

/**
 * `POST /me/presence/setPresence`
 *
 * Set the availability and activity status in a presence session of an application for a user.
 */
export function create(
  body: IEndpoints['POST /me/presence/setPresence']['body'],
  params?: IEndpoints['POST /me/presence/setPresence']['parameters']
): EndpointRequest<IEndpoints['POST /me/presence/setPresence']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/presence/setPresence',
    paramDefs: [],
    params,
    body,
  };
}
