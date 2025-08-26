import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/endpoints': Operation<
    '/servicePrincipals/{servicePrincipal-id}/endpoints',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/endpoints': Operation<
    '/servicePrincipals/{servicePrincipal-id}/endpoints',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['response']
> {
  return {
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'endpoint-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/endpoints`
 *
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/endpoints',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'endpoint-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}']['response']
> {
  return {
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'endpoint-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/endpoints`
 *
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/endpoints']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/endpoints']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/endpoints']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/endpoints',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
