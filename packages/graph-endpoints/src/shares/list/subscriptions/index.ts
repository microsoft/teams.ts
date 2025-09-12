import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/subscriptions': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/subscriptions': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions',
    'post'
  >;
  'POST /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id', 'subscription-id'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/subscriptions`
 *
 * The set of subscriptions on the list.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/subscriptions']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/subscriptions']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}`
 *
 * The set of subscriptions on the list.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'subscription-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'subscription-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/subscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions']['response']> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions',
    paramDefs: {
      path: ['sharedDriveItem-id'],
    },
    params,
    body,
  };
}

export const reauthorize = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize`
   *
   * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
   */
  create: function create(
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize']['response']
  > {
    return {
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/reauthorize',
      paramDefs: {
        path: ['sharedDriveItem-id', 'subscription-id'],
      },
      params,
    };
  },
};
