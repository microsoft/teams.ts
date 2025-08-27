import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}': Operation<
    '/domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}',
    'delete'
  >;
  'GET /domains/{domain-id}/sharedEmailDomainInvitations': Operation<
    '/domains/{domain-id}/sharedEmailDomainInvitations',
    'get'
  >;
  'GET /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}': Operation<
    '/domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}',
    'get'
  >;
  'PATCH /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}': Operation<
    '/domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}',
    'patch'
  >;
  'POST /domains/{domain-id}/sharedEmailDomainInvitations': Operation<
    '/domains/{domain-id}/sharedEmailDomainInvitations',
    'post'
  >;
}

/**
 * `DELETE /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'domain-id', in: 'path' },
      { name: 'sharedEmailDomainInvitation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /domains/{domain-id}/sharedEmailDomainInvitations`
 *
 */
export function list(
  params?: IEndpoints['GET /domains/{domain-id}/sharedEmailDomainInvitations']['parameters']
): EndpointRequest<
  IEndpoints['GET /domains/{domain-id}/sharedEmailDomainInvitations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/sharedEmailDomainInvitations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'domain-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'domain-id', in: 'path' },
      { name: 'sharedEmailDomainInvitation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}']['body'],
  params?: IEndpoints['PATCH /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/domains/{domain-id}/sharedEmailDomainInvitations/{sharedEmailDomainInvitation-id}',
    paramDefs: [
      { name: 'domain-id', in: 'path' },
      { name: 'sharedEmailDomainInvitation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /domains/{domain-id}/sharedEmailDomainInvitations`
 *
 */
export function create(
  body: IEndpoints['POST /domains/{domain-id}/sharedEmailDomainInvitations']['body'],
  params?: IEndpoints['POST /domains/{domain-id}/sharedEmailDomainInvitations']['parameters']
): EndpointRequest<
  IEndpoints['POST /domains/{domain-id}/sharedEmailDomainInvitations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/domains/{domain-id}/sharedEmailDomainInvitations',
    paramDefs: [{ name: 'domain-id', in: 'path' }],
    params,
    body,
  };
}
