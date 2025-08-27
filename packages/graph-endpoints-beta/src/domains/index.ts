export * as domainNameReferences from './domainNameReferences';
export * as federationConfiguration from './federationConfiguration';
export * as forceDelete from './forceDelete';
export * as promote from './promote';
export * as promoteToInitial from './promoteToInitial';
export * as rootDomain from './rootDomain';
export * as serviceConfigurationRecords from './serviceConfigurationRecords';
export * as sharedEmailDomainInvitations from './sharedEmailDomainInvitations';
export * as verificationDnsRecords from './verificationDnsRecords';
export * as verify from './verify';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /domains/{domain-id}': Operation<'/domains/{domain-id}', 'delete'>;
  'GET /domains': Operation<'/domains', 'get'>;
  'GET /domains/{domain-id}': Operation<'/domains/{domain-id}', 'get'>;
  'PATCH /domains/{domain-id}': Operation<'/domains/{domain-id}', 'patch'>;
  'POST /domains': Operation<'/domains', 'post'>;
}

/**
 * `DELETE /domains/{domain-id}`
 *
 * Delete a domain from a tenant.
 */
export function del(
  params?: IEndpoints['DELETE /domains/{domain-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /domains/{domain-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/domains/{domain-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'domain-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /domains`
 *
 * Retrieve a list of domain objects.
 */
export function list(
  params?: IEndpoints['GET /domains']['parameters']
): EndpointRequest<IEndpoints['GET /domains']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains',
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
 * `GET /domains/{domain-id}`
 *
 * Retrieve the properties and relationships of domain object.
 */
export function get(
  params?: IEndpoints['GET /domains/{domain-id}']['parameters']
): EndpointRequest<IEndpoints['GET /domains/{domain-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'domain-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /domains/{domain-id}`
 *
 * Update the properties of domain object. Only verified domains can be updated.
 */
export function update(
  body: IEndpoints['PATCH /domains/{domain-id}']['body'],
  params?: IEndpoints['PATCH /domains/{domain-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /domains/{domain-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/domains/{domain-id}',
    paramDefs: [{ name: 'domain-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /domains`
 *
 * Adds a domain to the tenant. Important: You cannot use an associated domain with your Microsoft Entra tenant until ownership is verified. See List verificationDnsRecords for details. Root domains require verification. For example, contoso.com requires verification. If a root domain is verified, subdomains of the root domain are automatically verified. For example, subdomain.contoso.com is automatically be verified if contoso.com has been verified.
 */
export function create(
  body: IEndpoints['POST /domains']['body'],
  params?: IEndpoints['POST /domains']['parameters']
): EndpointRequest<IEndpoints['POST /domains']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/domains',
    paramDefs: [],
    params,
    body,
  };
}
