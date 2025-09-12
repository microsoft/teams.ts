import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/subscriptions/{subscription-id}': Operation<
    '/drives/{drive-id}/list/subscriptions/{subscription-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/subscriptions': Operation<
    '/drives/{drive-id}/list/subscriptions',
    'get'
  >;
  'GET /drives/{drive-id}/list/subscriptions/{subscription-id}': Operation<
    '/drives/{drive-id}/list/subscriptions/{subscription-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/subscriptions/{subscription-id}': Operation<
    '/drives/{drive-id}/list/subscriptions/{subscription-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/subscriptions': Operation<
    '/drives/{drive-id}/list/subscriptions',
    'post'
  >;
  'POST /drives/{drive-id}/list/subscriptions/{subscription-id}/reauthorize': Operation<
    '/drives/{drive-id}/list/subscriptions/{subscription-id}/reauthorize',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/subscriptions/{subscription-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/subscriptions/{subscription-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'subscription-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/subscriptions`
 *
 * The set of subscriptions on the list.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/subscriptions']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/subscriptions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/subscriptions',
    paramDefs: {
      path: ['drive-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/subscriptions/{subscription-id}`
 *
 * The set of subscriptions on the list.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/subscriptions/{subscription-id}',
    paramDefs: {
      path: ['drive-id', 'subscription-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/subscriptions/{subscription-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/subscriptions/{subscription-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/subscriptions/{subscription-id}',
    paramDefs: {
      path: ['drive-id', 'subscription-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/subscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/subscriptions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/subscriptions']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/subscriptions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/subscriptions',
    paramDefs: {
      path: ['drive-id'],
    },
    params,
    body,
  };
}

export const reauthorize = {
  /**
   * `POST /drives/{drive-id}/list/subscriptions/{subscription-id}/reauthorize`
   *
   * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/list/subscriptions/{subscription-id}/reauthorize']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/list/subscriptions/{subscription-id}/reauthorize']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/list/subscriptions/{subscription-id}/reauthorize',
      paramDefs: {
        path: ['drive-id', 'subscription-id'],
      },
      params,
    };
  },
};
