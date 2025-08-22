export * as childHostPairs from './childHostPairs';
export * as components from './components';
export * as cookies from './cookies';
export * as hostPairs from './hostPairs';
export * as parentHostPairs from './parentHostPairs';
export * as passiveDns from './passiveDns';
export * as passiveDnsReverse from './passiveDnsReverse';
export * as ports from './ports';
export * as reputation from './reputation';
export * as sslCertificates from './sslCertificates';
export * as subdomains from './subdomains';
export * as trackers from './trackers';
export * as whois from './whois';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hosts/{host-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hosts': Operation<'/security/threatIntelligence/hosts', 'get'>;
  'GET /security/threatIntelligence/hosts/{host-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hosts/{host-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hosts': Operation<
    '/security/threatIntelligence/hosts',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hosts/{host-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hosts/{host-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/threatIntelligence/hosts/{host-id}']['response']> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hosts/{host-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'host-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hosts`
 *
 * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hosts']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts',
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
 * `GET /security/threatIntelligence/hosts/{host-id}`
 *
 * Read the properties and relationships of a host object. The host resource is the abstract base type that returns an implementation. A host can be of one of the following types:
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hosts/{host-id}']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hosts/{host-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}']['response']> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hosts/{host-id}',
    paramDefs: [{ name: 'host-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hosts`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hosts']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/hosts']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hosts']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/hosts',
    paramDefs: [],
    params,
    body,
  };
}
