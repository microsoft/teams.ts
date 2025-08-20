export * as host from './host';
export * as mostRecentSslCertificate from './mostRecentSslCertificate';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostPorts/{hostPort-id}': Operation<
    '/security/threatIntelligence/hostPorts/{hostPort-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostPorts': Operation<
    '/security/threatIntelligence/hostPorts',
    'get'
  >;
  'GET /security/threatIntelligence/hostPorts/{hostPort-id}': Operation<
    '/security/threatIntelligence/hostPorts/{hostPort-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostPorts/{hostPort-id}': Operation<
    '/security/threatIntelligence/hostPorts/{hostPort-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostPorts': Operation<
    '/security/threatIntelligence/hostPorts',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostPorts/{hostPort-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostPorts/{hostPort-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostPorts/{hostPort-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/hostPorts/{hostPort-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hostPort-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostPorts`
 *
 * Read the properties and relationships of a hostPort object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostPorts']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostPorts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostPorts',
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
 * `GET /security/threatIntelligence/hostPorts/{hostPort-id}`
 *
 * Read the properties and relationships of a hostPort object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostPorts/{hostPort-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostPort-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostPorts/{hostPort-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostPorts/{hostPort-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostPorts/{hostPort-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostPorts/{hostPort-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/hostPorts/{hostPort-id}',
    paramDefs: [{ name: 'hostPort-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostPorts`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostPorts']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/hostPorts']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hostPorts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/hostPorts',
    paramDefs: [],
    params,
    body,
  };
}
