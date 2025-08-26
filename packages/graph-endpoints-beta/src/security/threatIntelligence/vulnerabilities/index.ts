export * as articles from './articles';
export * as components from './components';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/vulnerabilities': Operation<
    '/security/threatIntelligence/vulnerabilities',
    'get'
  >;
  'GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/vulnerabilities': Operation<
    '/security/threatIntelligence/vulnerabilities',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'vulnerability-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/vulnerabilities`
 *
 * Read the properties and relationships of a vulnerability object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/vulnerabilities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/vulnerabilities',
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
 * `GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}`
 *
 * Read the properties and relationships of a vulnerability object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'vulnerability-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}',
    paramDefs: [{ name: 'vulnerability-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/vulnerabilities`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/vulnerabilities']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/vulnerabilities']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/vulnerabilities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/vulnerabilities',
    paramDefs: [],
    params,
    body,
  };
}
