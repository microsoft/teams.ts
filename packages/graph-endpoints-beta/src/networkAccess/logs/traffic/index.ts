export * as user from './user';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}',
    'delete'
  >;
  'GET /networkAccess/logs/traffic': Operation<'/networkAccess/logs/traffic', 'get'>;
  'GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}',
    'get'
  >;
  'PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}',
    'patch'
  >;
  'POST /networkAccess/logs/traffic': Operation<'/networkAccess/logs/traffic', 'post'>;
  'GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device',
    'get'
  >;
}

/**
 * `DELETE /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}',
    paramDefs: {
      header: ['If-Match'],
      path: ['networkAccessTraffic-transactionId'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/logs/traffic`
 *
 * Get a list of log events for traffic routed through the Global Secure Access services.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/logs/traffic']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/logs/traffic']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/traffic',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}`
 *
 * A network access traffic log entry that contains comprehensive information about network traffic events.
 */
export function get$1(
  params?: IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}',
    paramDefs: {
      path: ['networkAccessTraffic-transactionId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}']['body'],
  params?: IEndpoints['PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}',
    paramDefs: {
      path: ['networkAccessTraffic-transactionId'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/logs/traffic`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/logs/traffic']['body']
): EndpointRequest<IEndpoints['POST /networkAccess/logs/traffic']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/logs/traffic',
    body,
  };
}

export const device = {
  /**
   * `GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device`
   *
   * Represents the device associated with the network traffic, providing details about the hardware or virtual machine involved in the transaction.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/device',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['networkAccessTraffic-transactionId'],
      },
      params,
    };
  },
};
