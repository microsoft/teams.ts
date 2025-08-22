export * as childHost from './childHost';
export * as parentHost from './parentHost';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hostPairs/{hostPair-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostPairs': Operation<
    '/security/threatIntelligence/hostPairs',
    'get'
  >;
  'GET /security/threatIntelligence/hostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hostPairs/{hostPair-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hostPairs/{hostPair-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostPairs': Operation<
    '/security/threatIntelligence/hostPairs',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostPairs/{hostPair-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostPairs/{hostPair-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostPairs/{hostPair-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hostPairs/{hostPair-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hostPair-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostPairs`
 *
 * Read the properties and relationships of a hostPair object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostPairs']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostPairs']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostPairs',
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
 * `GET /security/threatIntelligence/hostPairs/{hostPair-id}`
 *
 * Read the properties and relationships of a hostPair object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostPairs/{hostPair-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostPair-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostPairs/{hostPair-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostPairs/{hostPair-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostPairs/{hostPair-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostPairs/{hostPair-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hostPairs/{hostPair-id}',
    paramDefs: [{ name: 'hostPair-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostPairs`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostPairs']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/hostPairs']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hostPairs']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/hostPairs',
    paramDefs: [],
    params,
    body,
  };
}
