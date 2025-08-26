export * as confirmCompromised from './confirmCompromised';
export * as confirmSafe from './confirmSafe';
export * as dismiss from './dismiss';
export * as history from './history';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityProtection/riskyUsers/{riskyUser-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}',
    'delete'
  >;
  'GET /identityProtection/riskyUsers': Operation<'/identityProtection/riskyUsers', 'get'>;
  'GET /identityProtection/riskyUsers/{riskyUser-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}',
    'get'
  >;
  'PATCH /identityProtection/riskyUsers/{riskyUser-id}': Operation<
    '/identityProtection/riskyUsers/{riskyUser-id}',
    'patch'
  >;
  'POST /identityProtection/riskyUsers': Operation<'/identityProtection/riskyUsers', 'post'>;
}

/**
 * `DELETE /identityProtection/riskyUsers/{riskyUser-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityProtection/riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityProtection/riskyUsers/{riskyUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityProtection/riskyUsers/{riskyUser-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'riskyUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identityProtection/riskyUsers`
 *
 * Retrieve the properties and relationships of a riskyUser object.
 */
export function list(
  params?: IEndpoints['GET /identityProtection/riskyUsers']['parameters']
): EndpointRequest<IEndpoints['GET /identityProtection/riskyUsers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/riskyUsers',
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
 * `GET /identityProtection/riskyUsers/{riskyUser-id}`
 *
 * Users that are flagged as at-risk by Microsoft Entra ID Protection.
 */
export function get(
  params?: IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['GET /identityProtection/riskyUsers/{riskyUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/riskyUsers/{riskyUser-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskyUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identityProtection/riskyUsers/{riskyUser-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}']['body'],
  params?: IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /identityProtection/riskyUsers/{riskyUser-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityProtection/riskyUsers/{riskyUser-id}',
    paramDefs: [{ name: 'riskyUser-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identityProtection/riskyUsers`
 *
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyUsers']['body'],
  params?: IEndpoints['POST /identityProtection/riskyUsers']['parameters']
): EndpointRequest<IEndpoints['POST /identityProtection/riskyUsers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityProtection/riskyUsers',
    paramDefs: [],
    params,
    body,
  };
}
