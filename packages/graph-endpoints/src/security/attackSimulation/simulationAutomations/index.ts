export * as runs from './runs';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    'delete'
  >;
  'GET /security/attackSimulation/simulationAutomations': Operation<
    '/security/attackSimulation/simulationAutomations',
    'get'
  >;
  'GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    'patch'
  >;
  'POST /security/attackSimulation/simulationAutomations': Operation<
    '/security/attackSimulation/simulationAutomations',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'simulationAutomation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/simulationAutomations`
 *
 * Get a list of attack simulation automations for a tenant.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/simulationAutomations']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/simulationAutomations']['response']> {
  return {
    method: 'get',
    path: '/security/attackSimulation/simulationAutomations',
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
 * `GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}`
 *
 * Get an attack simulation automation for a tenant.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'simulationAutomation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}',
    paramDefs: [{ name: 'simulationAutomation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/simulationAutomations`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/simulationAutomations']['body'],
  params?: IEndpoints['POST /security/attackSimulation/simulationAutomations']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/attackSimulation/simulationAutomations']['response']
> {
  return {
    method: 'post',
    path: '/security/attackSimulation/simulationAutomations',
    paramDefs: [],
    params,
    body,
  };
}
