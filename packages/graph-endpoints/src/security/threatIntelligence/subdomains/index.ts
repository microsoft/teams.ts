export * as host from './host';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/subdomains/{subdomain-id}': Operation<
    '/security/threatIntelligence/subdomains/{subdomain-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/subdomains': Operation<
    '/security/threatIntelligence/subdomains',
    'get'
  >;
  'GET /security/threatIntelligence/subdomains/{subdomain-id}': Operation<
    '/security/threatIntelligence/subdomains/{subdomain-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/subdomains/{subdomain-id}': Operation<
    '/security/threatIntelligence/subdomains/{subdomain-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/subdomains': Operation<
    '/security/threatIntelligence/subdomains',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/subdomains/{subdomain-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/subdomains/{subdomain-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/subdomains/{subdomain-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/subdomains/{subdomain-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'subdomain-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/subdomains`
 *
 * Read the properties and relationships of a subdomain object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/subdomains']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/subdomains']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/subdomains',
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
 * `GET /security/threatIntelligence/subdomains/{subdomain-id}`
 *
 * Read the properties and relationships of a subdomain object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/subdomains/{subdomain-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/subdomains/{subdomain-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/subdomains/{subdomain-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subdomain-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/subdomains/{subdomain-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/subdomains/{subdomain-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/subdomains/{subdomain-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/subdomains/{subdomain-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/subdomains/{subdomain-id}',
    paramDefs: [{ name: 'subdomain-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/subdomains`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/subdomains']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/subdomains']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/subdomains']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/subdomains',
    paramDefs: [],
    params,
    body,
  };
}
