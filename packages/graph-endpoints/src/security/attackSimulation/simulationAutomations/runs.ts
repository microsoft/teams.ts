import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
    'delete'
  >;
  'GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs',
    'get'
  >;
  'GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
    'patch'
  >;
  'POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs': Operation<
    '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'simulationAutomation-id', in: 'path' },
      { name: 'simulationAutomationRun-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs`
 *
 * Get a list of the attack simulation automation runs for a tenant.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs']['response']
> {
  return {
    method: 'get',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'simulationAutomation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}`
 *
 * A collection of simulation automation runs.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'simulationAutomation-id', in: 'path' },
      { name: 'simulationAutomationRun-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs/{simulationAutomationRun-id}',
    paramDefs: [
      { name: 'simulationAutomation-id', in: 'path' },
      { name: 'simulationAutomationRun-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs']['body'],
  params?: IEndpoints['POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs']['response']
> {
  return {
    method: 'post',
    path: '/security/attackSimulation/simulationAutomations/{simulationAutomation-id}/runs',
    paramDefs: [{ name: 'simulationAutomation-id', in: 'path' }],
    params,
    body,
  };
}
