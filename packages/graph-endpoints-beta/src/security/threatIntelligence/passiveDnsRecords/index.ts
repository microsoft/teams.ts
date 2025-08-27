export * as artifact from './artifact';
export * as parentHost from './parentHost';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}': Operation<
    '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/passiveDnsRecords': Operation<
    '/security/threatIntelligence/passiveDnsRecords',
    'get'
  >;
  'GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}': Operation<
    '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}': Operation<
    '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/passiveDnsRecords': Operation<
    '/security/threatIntelligence/passiveDnsRecords',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'passiveDnsRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/passiveDnsRecords`
 *
 * Read the properties and relationships of a passiveDnsRecord object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/passiveDnsRecords']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/passiveDnsRecords']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/passiveDnsRecords',
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
 * `GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}`
 *
 * Read the properties and relationships of a passiveDnsRecord object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'passiveDnsRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/passiveDnsRecords/{passiveDnsRecord-id}',
    paramDefs: [{ name: 'passiveDnsRecord-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/passiveDnsRecords`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/passiveDnsRecords']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/passiveDnsRecords']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/passiveDnsRecords']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/passiveDnsRecords',
    paramDefs: [],
    params,
    body,
  };
}
