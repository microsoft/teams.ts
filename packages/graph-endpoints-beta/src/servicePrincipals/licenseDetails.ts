import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/licenseDetails': Operation<
    '/servicePrincipals/{servicePrincipal-id}/licenseDetails',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/licenseDetails': Operation<
    '/servicePrincipals/{servicePrincipal-id}/licenseDetails',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'licenseDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/licenseDetails`
 *
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/licenseDetails']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/licenseDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/licenseDetails',
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
 * `GET /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'licenseDetails-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/licenseDetails/{licenseDetails-id}',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'licenseDetails-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/licenseDetails`
 *
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/licenseDetails']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/licenseDetails']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/licenseDetails']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/licenseDetails',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
