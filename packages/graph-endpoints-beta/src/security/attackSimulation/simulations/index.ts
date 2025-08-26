export * as landingPage from './landingPage';
export * as loginPage from './loginPage';
export * as payload from './payload';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/simulations/{simulation-id}': Operation<
    '/security/attackSimulation/simulations/{simulation-id}',
    'delete'
  >;
  'GET /security/attackSimulation/simulations': Operation<
    '/security/attackSimulation/simulations',
    'get'
  >;
  'GET /security/attackSimulation/simulations/{simulation-id}': Operation<
    '/security/attackSimulation/simulations/{simulation-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/simulations/{simulation-id}': Operation<
    '/security/attackSimulation/simulations/{simulation-id}',
    'patch'
  >;
  'POST /security/attackSimulation/simulations': Operation<
    '/security/attackSimulation/simulations',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/simulations/{simulation-id}`
 *
 * Delete an attack simulation campaign for a tenant.
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/simulations/{simulation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/simulations/{simulation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/simulations/{simulation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'simulation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/simulations`
 *
 * Get a list of attack simulation campaigns for a tenant.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/simulations']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/simulations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/simulations',
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
 * `GET /security/attackSimulation/simulations/{simulation-id}`
 *
 * Get an attack simulation campaign for a tenant.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/simulations/{simulation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'simulation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/simulations/{simulation-id}`
 *
 * Update an attack simulation campaign for a tenant.
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/simulations/{simulation-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/simulations/{simulation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/simulations/{simulation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/simulations/{simulation-id}',
    paramDefs: [{ name: 'simulation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/simulations`
 *
 * Create an attack simulation campaign for a tenant.
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/simulations']['body'],
  params?: IEndpoints['POST /security/attackSimulation/simulations']['parameters']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/simulations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/simulations',
    paramDefs: [],
    params,
    body,
  };
}
