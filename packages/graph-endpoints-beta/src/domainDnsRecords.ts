import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /domainDnsRecords/{domainDnsRecord-id}': Operation<
    '/domainDnsRecords/{domainDnsRecord-id}',
    'delete'
  >;
  'GET /domainDnsRecords': Operation<'/domainDnsRecords', 'get'>;
  'GET /domainDnsRecords/{domainDnsRecord-id}': Operation<
    '/domainDnsRecords/{domainDnsRecord-id}',
    'get'
  >;
  'PATCH /domainDnsRecords/{domainDnsRecord-id}': Operation<
    '/domainDnsRecords/{domainDnsRecord-id}',
    'patch'
  >;
  'POST /domainDnsRecords': Operation<'/domainDnsRecords', 'post'>;
}

/**
 * `DELETE /domainDnsRecords/{domainDnsRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /domainDnsRecords/{domainDnsRecord-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /domainDnsRecords/{domainDnsRecord-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/domainDnsRecords/{domainDnsRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'domainDnsRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /domainDnsRecords`
 *
 */
export function list(
  params?: IEndpoints['GET /domainDnsRecords']['parameters']
): EndpointRequest<IEndpoints['GET /domainDnsRecords']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domainDnsRecords',
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
 * `GET /domainDnsRecords/{domainDnsRecord-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /domainDnsRecords/{domainDnsRecord-id}']['parameters']
): EndpointRequest<IEndpoints['GET /domainDnsRecords/{domainDnsRecord-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/domainDnsRecords/{domainDnsRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'domainDnsRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /domainDnsRecords/{domainDnsRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /domainDnsRecords/{domainDnsRecord-id}']['body'],
  params?: IEndpoints['PATCH /domainDnsRecords/{domainDnsRecord-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /domainDnsRecords/{domainDnsRecord-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/domainDnsRecords/{domainDnsRecord-id}',
    paramDefs: [{ name: 'domainDnsRecord-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /domainDnsRecords`
 *
 */
export function create(
  body: IEndpoints['POST /domainDnsRecords']['body'],
  params?: IEndpoints['POST /domainDnsRecords']['parameters']
): EndpointRequest<IEndpoints['POST /domainDnsRecords']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/domainDnsRecords',
    paramDefs: [],
    params,
    body,
  };
}
