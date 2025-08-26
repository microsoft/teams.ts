import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
    'delete'
  >;
  'GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history',
    'get'
  >;
  'GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
    'get'
  >;
  'PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
    'patch'
  >;
  'POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history',
    'post'
  >;
}

/**
 * `DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'riskyServicePrincipal-id', in: 'path' },
      { name: 'riskyServicePrincipalHistoryItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history`
 *
 * Get the risk history of a riskyServicePrincipal object.
 */
export function get(
  params?: IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskyServicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}`
 *
 * Represents the risk history of Microsoft Entra service principals.
 */
export function get$1(
  params?: IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskyServicePrincipal-id', in: 'path' },
      { name: 'riskyServicePrincipalHistoryItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['body'],
  params?: IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history/{riskyServicePrincipalHistoryItem-id}',
    paramDefs: [
      { name: 'riskyServicePrincipal-id', in: 'path' },
      { name: 'riskyServicePrincipalHistoryItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history`
 *
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history']['body'],
  params?: IEndpoints['POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}/history',
    paramDefs: [{ name: 'riskyServicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
