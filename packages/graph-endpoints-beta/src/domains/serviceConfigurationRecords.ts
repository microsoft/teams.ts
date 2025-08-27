import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
    'delete'
  >;
  'GET /domains/{domain-id}/serviceConfigurationRecords': Operation<
    '/domains/{domain-id}/serviceConfigurationRecords',
    'get'
  >;
  'GET /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
    'get'
  >;
  'PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}': Operation<
    '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
    'patch'
  >;
  'POST /domains/{domain-id}/serviceConfigurationRecords': Operation<
    '/domains/{domain-id}/serviceConfigurationRecords',
    'post'
  >;
}

/**
 * `DELETE /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'domain-id', in: 'path' },
      { name: 'domainDnsRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /domains/{domain-id}/serviceConfigurationRecords`
 *
 * Retrieves a list of domainDnsRecord objects needed to enable services for the domain. Use the returned list to add records to the zone file of the domain. This can be done through the domain registrar or DNS server configuration.
 */
export function list(
  params?: IEndpoints['GET /domains/{domain-id}/serviceConfigurationRecords']['parameters']
): EndpointRequest<IEndpoints['GET /domains/{domain-id}/serviceConfigurationRecords']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/serviceConfigurationRecords',
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
 * `GET /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}`
 *
 * DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services. Read-only, Nullable. Does not support $expand.
 */
export function get(
  params?: IEndpoints['GET /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
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
 * `PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['body'],
  params?: IEndpoints['PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/domains/{domain-id}/serviceConfigurationRecords/{domainDnsRecord-id}',
    paramDefs: [
      { name: 'domain-id', in: 'path' },
      { name: 'domainDnsRecord-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /domains/{domain-id}/serviceConfigurationRecords`
 *
 */
export function create(
  body: IEndpoints['POST /domains/{domain-id}/serviceConfigurationRecords']['body'],
  params?: IEndpoints['POST /domains/{domain-id}/serviceConfigurationRecords']['parameters']
): EndpointRequest<
  IEndpoints['POST /domains/{domain-id}/serviceConfigurationRecords']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/domains/{domain-id}/serviceConfigurationRecords',
    paramDefs: [{ name: 'domain-id', in: 'path' }],
    params,
    body,
  };
}
