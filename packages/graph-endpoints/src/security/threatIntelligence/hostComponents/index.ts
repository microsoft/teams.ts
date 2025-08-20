export * as host from './host';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostComponents/{hostComponent-id}': Operation<
    '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostComponents': Operation<
    '/security/threatIntelligence/hostComponents',
    'get'
  >;
  'GET /security/threatIntelligence/hostComponents/{hostComponent-id}': Operation<
    '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostComponents/{hostComponent-id}': Operation<
    '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostComponents': Operation<
    '/security/threatIntelligence/hostComponents',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostComponents/{hostComponent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostComponents/{hostComponent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostComponents/{hostComponent-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hostComponent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostComponents`
 *
 * Read the properties and relationships of a hostComponent object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostComponents']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostComponents']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostComponents',
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
 * `GET /security/threatIntelligence/hostComponents/{hostComponent-id}`
 *
 * Read the properties and relationships of a hostComponent object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostComponents/{hostComponent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostComponents/{hostComponent-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostComponent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostComponents/{hostComponent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostComponents/{hostComponent-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostComponents/{hostComponent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostComponents/{hostComponent-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    paramDefs: [{ name: 'hostComponent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostComponents`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostComponents']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/hostComponents']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hostComponents']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/hostComponents',
    paramDefs: [],
    params,
    body,
  };
}
