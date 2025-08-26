export * as confirmCompromised from './confirmCompromised';
export * as dismiss from './dismiss';
export * as history from './history';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    'delete'
  >;
  'GET /identityProtection/riskyServicePrincipals': Operation<
    '/identityProtection/riskyServicePrincipals',
    'get'
  >;
  'GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    'get'
  >;
  'PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}': Operation<
    '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    'patch'
  >;
  'POST /identityProtection/riskyServicePrincipals': Operation<
    '/identityProtection/riskyServicePrincipals',
    'post'
  >;
}

/**
 * `DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'riskyServicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identityProtection/riskyServicePrincipals`
 *
 * Retrieve the properties and relationships of riskyServicePrincipal objects.
 */
export function list(
  params?: IEndpoints['GET /identityProtection/riskyServicePrincipals']['parameters']
): EndpointRequest<IEndpoints['GET /identityProtection/riskyServicePrincipals']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/riskyServicePrincipals',
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
 * `GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}`
 *
 * Read the properties and relationships of a riskyServicePrincipal object.
 */
export function get(
  params?: IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskyServicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['body'],
  params?: IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityProtection/riskyServicePrincipals/{riskyServicePrincipal-id}',
    paramDefs: [{ name: 'riskyServicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identityProtection/riskyServicePrincipals`
 *
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyServicePrincipals']['body'],
  params?: IEndpoints['POST /identityProtection/riskyServicePrincipals']['parameters']
): EndpointRequest<IEndpoints['POST /identityProtection/riskyServicePrincipals']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityProtection/riskyServicePrincipals',
    paramDefs: [],
    params,
    body,
  };
}
