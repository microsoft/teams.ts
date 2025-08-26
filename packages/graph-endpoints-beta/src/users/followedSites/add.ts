import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/followedSites/add': Operation<
    '/users/{user-id}/followedSites/add',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/followedSites/add`
 *
 * Follow a user&#x27;s site or multiple sites.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/followedSites/add']['body'],
  params?: IEndpoints['POST /users/{user-id}/followedSites/add']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/followedSites/add']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/followedSites/add',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
