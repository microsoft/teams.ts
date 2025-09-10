import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/followedSites': Operation<'/users/{user-id}/followedSites', 'get'>;
  'GET /users/{user-id}/followedSites/{site-id}': Operation<
    '/users/{user-id}/followedSites/{site-id}',
    'get'
  >;
  'POST /users/{user-id}/followedSites/add': Operation<
    '/users/{user-id}/followedSites/add',
    'post'
  >;
  'POST /users/{user-id}/followedSites/remove': Operation<
    '/users/{user-id}/followedSites/remove',
    'post'
  >;
}

/**
 * `GET /users/{user-id}/followedSites`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/followedSites']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/followedSites']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/followedSites',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/followedSites/{site-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/followedSites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/followedSites/{site-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/followedSites/{site-id}',
    paramDefs: {
      path: ['user-id', 'site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const add = {
  /**
   * `POST /users/{user-id}/followedSites/add`
   *
   * Follow a user&#x27;s site or multiple sites.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/followedSites/add']['body'],
    params?: IEndpoints['POST /users/{user-id}/followedSites/add']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/followedSites/add']['response']> {
    return {
      method: 'post',
      path: '/users/{user-id}/followedSites/add',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /users/{user-id}/followedSites/remove`
   *
   * Unfollow a user&#x27;s site or multiple sites.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/followedSites/remove']['body'],
    params?: IEndpoints['POST /users/{user-id}/followedSites/remove']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/followedSites/remove']['response']> {
    return {
      method: 'post',
      path: '/users/{user-id}/followedSites/remove',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
