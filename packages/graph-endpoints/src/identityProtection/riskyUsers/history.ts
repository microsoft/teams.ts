import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'delete'
  >;
  'GET /identityProtection/riskyUsers/{riskyUser-id}/history': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}/history',
    'get'
  >;
  'GET /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'get'
  >;
  'PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'patch'
  >;
  'POST /identityProtection/riskyUsers/{riskyUser-id}/history': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}/history',
    'post'
  >;
}

/**
 * `DELETE /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'riskyUser-id', in: 'path' },
      { name: 'riskyUserHistoryItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identityProtection/riskyUsers/{riskyUser-id}/history`
 *
 * Get the riskyUserHistoryItems from the history navigation property.
 */
export function get(
  params?: IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}/history']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}/history']['response']
> {
  return {
    method: 'get',
    path: '/identityProtection/riskyUsers/{riskyUser-id}/history',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskyUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
 *
 * The activity related to user risk level change
 */
export function get$1(
  params?: IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskyUser-id', in: 'path' },
      { name: 'riskyUserHistoryItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['body'],
  params?: IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    paramDefs: [
      { name: 'riskyUser-id', in: 'path' },
      { name: 'riskyUserHistoryItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /identityProtection/riskyUsers/{riskyUser-id}/history`
 *
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyUsers/{riskyUser-id}/history']['body'],
  params?: IEndpoints['POST /identityProtection/riskyUsers/{riskyUser-id}/history']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityProtection/riskyUsers/{riskyUser-id}/history']['response']
> {
  return {
    method: 'post',
    path: '/identityProtection/riskyUsers/{riskyUser-id}/history',
    paramDefs: [{ name: 'riskyUser-id', in: 'path' }],
    params,
    body,
  };
}
