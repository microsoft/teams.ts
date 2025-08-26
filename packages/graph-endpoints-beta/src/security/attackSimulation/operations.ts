import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/operations/{attackSimulationOperation-id}': Operation<
    '/security/attackSimulation/operations/{attackSimulationOperation-id}',
    'delete'
  >;
  'GET /security/attackSimulation/operations': Operation<
    '/security/attackSimulation/operations',
    'get'
  >;
  'GET /security/attackSimulation/operations/{attackSimulationOperation-id}': Operation<
    '/security/attackSimulation/operations/{attackSimulationOperation-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}': Operation<
    '/security/attackSimulation/operations/{attackSimulationOperation-id}',
    'patch'
  >;
  'POST /security/attackSimulation/operations': Operation<
    '/security/attackSimulation/operations',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/operations/{attackSimulationOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/operations/{attackSimulationOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/operations/{attackSimulationOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/operations/{attackSimulationOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'attackSimulationOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/operations`
 *
 * Get an attack simulation operation to track a long-running operation request for a tenant.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/operations']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/operations',
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
 * `GET /security/attackSimulation/operations/{attackSimulationOperation-id}`
 *
 * Get an attack simulation operation to track a long-running operation request for a tenant.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/operations/{attackSimulationOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/operations/{attackSimulationOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/operations/{attackSimulationOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'attackSimulationOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/operations/{attackSimulationOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/operations/{attackSimulationOperation-id}',
    paramDefs: [{ name: 'attackSimulationOperation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/operations`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/operations']['body'],
  params?: IEndpoints['POST /security/attackSimulation/operations']['parameters']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/operations',
    paramDefs: [],
    params,
    body,
  };
}
