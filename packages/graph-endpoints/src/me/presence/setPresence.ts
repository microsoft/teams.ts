import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/presence/setPresence': Operation<'/me/presence/setPresence', 'post'>;
}

/**
 * `POST /me/presence/setPresence`
 *
 * Set the state of a user&#x27;s presence session as an application.
 */
export function create(
  body: IEndpoints['POST /me/presence/setPresence']['body'],
  params?: IEndpoints['POST /me/presence/setPresence']['parameters']
): EndpointRequest<IEndpoints['POST /me/presence/setPresence']['response']> {
  return {
    method: 'post',
    path: '/me/presence/setPresence',
    paramDefs: [],
    params,
    body,
  };
}
