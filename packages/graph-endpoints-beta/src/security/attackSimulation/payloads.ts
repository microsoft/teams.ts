import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/payloads/{payload-id}': Operation<
    '/security/attackSimulation/payloads/{payload-id}',
    'delete'
  >;
  'GET /security/attackSimulation/payloads': Operation<
    '/security/attackSimulation/payloads',
    'get'
  >;
  'GET /security/attackSimulation/payloads/{payload-id}': Operation<
    '/security/attackSimulation/payloads/{payload-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/payloads/{payload-id}': Operation<
    '/security/attackSimulation/payloads/{payload-id}',
    'patch'
  >;
  'POST /security/attackSimulation/payloads': Operation<
    '/security/attackSimulation/payloads',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/payloads/{payload-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/payloads/{payload-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/payloads/{payload-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/payloads/{payload-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'payload-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/payloads`
 *
 * Get a list of payloads for attack simulation campaigns. This operation expects the mandatory parameter source to filter and query the respective data source.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/payloads']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/payloads']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/payloads',
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
 * `GET /security/attackSimulation/payloads/{payload-id}`
 *
 * Get an attack simulation campaign payload for a tenant.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/payloads/{payload-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/payloads/{payload-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/payloads/{payload-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'payload-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/payloads/{payload-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/payloads/{payload-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/payloads/{payload-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/payloads/{payload-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/payloads/{payload-id}',
    paramDefs: [{ name: 'payload-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/payloads`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/payloads']['body'],
  params?: IEndpoints['POST /security/attackSimulation/payloads']['parameters']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/payloads']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/payloads',
    paramDefs: [],
    params,
    body,
  };
}
