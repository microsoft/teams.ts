import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/followedSites': Operation<'/me/followedSites', 'get'>;
  'GET /me/followedSites/{site-id}': Operation<'/me/followedSites/{site-id}', 'get'>;
  'POST /me/followedSites/add': Operation<'/me/followedSites/add', 'post'>;
  'POST /me/followedSites/remove': Operation<'/me/followedSites/remove', 'post'>;
}

/**
 * `GET /me/followedSites`
 *
 * List the sites that have been followed by the signed in user.
 */
export function list(
  params?: IEndpoints['GET /me/followedSites']['parameters']
): EndpointRequest<IEndpoints['GET /me/followedSites']['response']> {
  return {
    method: 'get',
    path: '/me/followedSites',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/followedSites/{site-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/followedSites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/followedSites/{site-id}']['response']> {
  return {
    method: 'get',
    path: '/me/followedSites/{site-id}',
    paramDefs: {
      path: ['site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const add = {
  /**
   * `POST /me/followedSites/add`
   *
   * Follow a user&#x27;s site or multiple sites.
   */
  create: function create(
    body: IEndpoints['POST /me/followedSites/add']['body']
  ): EndpointRequest<IEndpoints['POST /me/followedSites/add']['response']> {
    return {
      method: 'post',
      path: '/me/followedSites/add',
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /me/followedSites/remove`
   *
   * Unfollow a user&#x27;s site or multiple sites.
   */
  create: function create(
    body: IEndpoints['POST /me/followedSites/remove']['body']
  ): EndpointRequest<IEndpoints['POST /me/followedSites/remove']['response']> {
    return {
      method: 'post',
      path: '/me/followedSites/remove',
      body,
    };
  },
};
