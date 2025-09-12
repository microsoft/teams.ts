import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/subscriptions': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    'patch'
  >;
  'POST /sites/{site-id}/lists/{list-id}/subscriptions': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions',
    'post'
  >;
  'POST /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'list-id', 'subscription-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/subscriptions`
 *
 * The set of subscriptions on the list.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/subscriptions',
    paramDefs: {
      path: ['site-id', 'list-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
 *
 * The set of subscriptions on the list.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'subscription-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    paramDefs: {
      path: ['site-id', 'list-id', 'subscription-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/subscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/subscriptions',
    paramDefs: {
      path: ['site-id', 'list-id'],
    },
    params,
    body,
  };
}

export const reauthorize = {
  /**
   * `POST /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize`
   *
   * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
   */
  create: function create(
    params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize',
      paramDefs: {
        path: ['site-id', 'list-id', 'subscription-id'],
      },
      params,
    };
  },
};
