import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/presence/setPresence': Operation<
    '/users/{user-id}/presence/setPresence',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/presence/setPresence`
 *
 * Set the availability and activity status in a presence session of an application for a user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/presence/setPresence']['body'],
  params?: IEndpoints['POST /users/{user-id}/presence/setPresence']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/presence/setPresence']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/presence/setPresence',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
