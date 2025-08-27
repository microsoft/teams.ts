import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}': Operation<
    '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
    'delete'
  >;
  'GET /domains/{domain-id}/federationConfiguration': Operation<
    '/domains/{domain-id}/federationConfiguration',
    'get'
  >;
  'GET /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}': Operation<
    '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
    'get'
  >;
  'PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}': Operation<
    '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
    'patch'
  >;
  'POST /domains/{domain-id}/federationConfiguration': Operation<
    '/domains/{domain-id}/federationConfiguration',
    'post'
  >;
}

/**
 * `DELETE /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}`
 *
 * Deletes an internalDomainFederation object.
 */
export function del(
  params?: IEndpoints['DELETE /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'domain-id', in: 'path' },
      { name: 'internalDomainFederation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /domains/{domain-id}/federationConfiguration`
 *
 * Read the properties of the internalDomainFederation objects for the domain. This API returns only one object in the collection.
 */
export function get(
  params?: IEndpoints['GET /domains/{domain-id}/federationConfiguration']['parameters']
): EndpointRequest<IEndpoints['GET /domains/{domain-id}/federationConfiguration']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/federationConfiguration',
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
 * `GET /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}`
 *
 * Read the properties and relationships of an internalDomainFederation object.
 */
export function get$1(
  params?: IEndpoints['GET /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'domain-id', in: 'path' },
      { name: 'internalDomainFederation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}`
 *
 * Update the properties of an internalDomainFederation object.
 */
export function update(
  body: IEndpoints['PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['body'],
  params?: IEndpoints['PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/domains/{domain-id}/federationConfiguration/{internalDomainFederation-id}',
    paramDefs: [
      { name: 'domain-id', in: 'path' },
      { name: 'internalDomainFederation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /domains/{domain-id}/federationConfiguration`
 *
 * Create a new internalDomainFederation object.
 */
export function create(
  body: IEndpoints['POST /domains/{domain-id}/federationConfiguration']['body'],
  params?: IEndpoints['POST /domains/{domain-id}/federationConfiguration']['parameters']
): EndpointRequest<IEndpoints['POST /domains/{domain-id}/federationConfiguration']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/domains/{domain-id}/federationConfiguration',
    paramDefs: [{ name: 'domain-id', in: 'path' }],
    params,
    body,
  };
}
