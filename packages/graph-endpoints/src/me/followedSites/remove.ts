import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/followedSites/remove': Operation<'/me/followedSites/remove', 'post'>;
}

/**
 * `POST /me/followedSites/remove`
 *
 * Unfollow a user&#x27;s site or multiple sites.
 */
export function create(
  body: IEndpoints['POST /me/followedSites/remove']['body'],
  params?: IEndpoints['POST /me/followedSites/remove']['parameters']
): EndpointRequest<IEndpoints['POST /me/followedSites/remove']['response']> {
  return {
    method: 'post',
    path: '/me/followedSites/remove',
    paramDefs: [],
    params,
    body,
  };
}
