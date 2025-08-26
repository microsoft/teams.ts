export * as device from './device';
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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'networkAccessTraffic-transactionId', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'networkAccessTraffic-transactionId', in: 'path' },
    ],
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
    paramDefs: [{ name: 'networkAccessTraffic-transactionId', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/logs/traffic`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/logs/traffic']['body'],
  params?: IEndpoints['POST /networkAccess/logs/traffic']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/logs/traffic']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/logs/traffic',
    paramDefs: [],
    params,
    body,
  };
}
