import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/followedSites/remove': Operation<
    '/users/{user-id}/followedSites/remove',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/followedSites/remove`
 *
 * Unfollow a user&#x27;s site or multiple sites.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/followedSites/remove']['body'],
  params?: IEndpoints['POST /users/{user-id}/followedSites/remove']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/followedSites/remove']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/followedSites/remove',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
