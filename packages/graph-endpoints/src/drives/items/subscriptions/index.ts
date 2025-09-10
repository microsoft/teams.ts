import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/subscriptions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/subscriptions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id', 'subscription-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/subscriptions`
 *
 * The set of subscriptions on the item. Only supported on the root of a drive.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/subscriptions']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/subscriptions']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}`
 *
 * The set of subscriptions on the item. Only supported on the root of a drive.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'subscription-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'subscription-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/subscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
    },
    params,
    body,
  };
}

export const reauthorize = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize`
   *
   * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/reauthorize',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'subscription-id'],
      },
      params,
    };
  },
};
