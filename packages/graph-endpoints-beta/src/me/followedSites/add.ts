import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/followedSites/add': Operation<'/me/followedSites/add', 'post'>;
}

/**
 * `POST /me/followedSites/add`
 *
 * Follow a user&#x27;s site or multiple sites.
 */
export function create(
  body: IEndpoints['POST /me/followedSites/add']['body'],
  params?: IEndpoints['POST /me/followedSites/add']['parameters']
): EndpointRequest<IEndpoints['POST /me/followedSites/add']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/followedSites/add',
    paramDefs: [],
    params,
    body,
  };
}
