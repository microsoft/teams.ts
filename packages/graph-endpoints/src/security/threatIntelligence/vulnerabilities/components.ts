import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components',
    'get'
  >;
  'GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'vulnerability-id', in: 'path' },
      { name: 'vulnerabilityComponent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components`
 *
 * Get a list of vulnerabilityComponent objects related to a known vulnerability.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'vulnerability-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}`
 *
 * Read the properties and relationships of a vulnerabilityComponent object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'vulnerability-id', in: 'path' },
      { name: 'vulnerabilityComponent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components/{vulnerabilityComponent-id}',
    paramDefs: [
      { name: 'vulnerability-id', in: 'path' },
      { name: 'vulnerabilityComponent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/threatIntelligence/vulnerabilities/{vulnerability-id}/components']['response']
> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/components',
    paramDefs: [{ name: 'vulnerability-id', in: 'path' }],
    params,
    body,
  };
}
