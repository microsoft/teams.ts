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
 * Set the state of a user&#x27;s presence session as an application.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/presence/setPresence']['body'],
  params?: IEndpoints['POST /users/{user-id}/presence/setPresence']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/presence/setPresence']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/presence/setPresence',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
