import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'list-id', 'subscription-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions`
 *
 * The set of subscriptions on the list.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
 *
 * The set of subscriptions on the list.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id', 'subscription-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id', 'subscription-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id'],
    },
    params,
    body,
  };
}

export const reauthorize = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize`
   *
   * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize',
      paramDefs: {
        path: ['group-id', 'site-id', 'list-id', 'subscription-id'],
      },
      params,
    };
  },
};
