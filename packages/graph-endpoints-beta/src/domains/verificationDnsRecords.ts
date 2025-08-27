import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
    'delete'
  >;
  'GET /domains/{domain-id}/verificationDnsRecords': Operation<
    '/domains/{domain-id}/verificationDnsRecords',
    'get'
  >;
  'GET /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
    'get'
  >;
  'PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
    'patch'
  >;
  'POST /domains/{domain-id}/verificationDnsRecords': Operation<
    '/domains/{domain-id}/verificationDnsRecords',
    'post'
  >;
}

/**
 * `DELETE /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'domain-id', in: 'path' },
      { name: 'domainDnsRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /domains/{domain-id}/verificationDnsRecords`
 *
 * Retrieve a list of domainDnsRecord objects. You cannot use an associated domain with your Microsoft Entra tenant until ownership is verified. To verify the ownership of the domain, retrieve the domain verification records and add the details to the zone file of the domain. This can be done through the domain registrar or DNS server configuration. Root domains require verification. For example, contoso.com requires verification. If a root domain is verified, subdomains of the root domain are automatically verified. For example, subdomain.contoso.com is automatically be verified if contoso.com has been verified.
 */
export function list(
  params?: IEndpoints['GET /domains/{domain-id}/verificationDnsRecords']['parameters']
): EndpointRequest<IEndpoints['GET /domains/{domain-id}/verificationDnsRecords']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/verificationDnsRecords',
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
 * `GET /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}`
 *
 * DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Microsoft Entra ID. Read-only, Nullable. Does not support $expand.
 */
export function get(
  params?: IEndpoints['GET /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'domain-id', in: 'path' },
      { name: 'domainDnsRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['body'],
  params?: IEndpoints['PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/domains/{domain-id}/verificationDnsRecords/{domainDnsRecord-id}',
    paramDefs: [
      { name: 'domain-id', in: 'path' },
      { name: 'domainDnsRecord-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /domains/{domain-id}/verificationDnsRecords`
 *
 */
export function create(
  body: IEndpoints['POST /domains/{domain-id}/verificationDnsRecords']['body'],
  params?: IEndpoints['POST /domains/{domain-id}/verificationDnsRecords']['parameters']
): EndpointRequest<IEndpoints['POST /domains/{domain-id}/verificationDnsRecords']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/domains/{domain-id}/verificationDnsRecords',
    paramDefs: [{ name: 'domain-id', in: 'path' }],
    params,
    body,
  };
}
