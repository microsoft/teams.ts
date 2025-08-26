export * as endUserNotifications from './endUserNotifications';
export * as landingPages from './landingPages';
export * as loginPages from './loginPages';
export * as operations from './operations';
export * as payloads from './payloads';
export * as simulationAutomations from './simulationAutomations';
export * as simulations from './simulations';
export * as trainings from './trainings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation': Operation<'/security/attackSimulation', 'delete'>;
  'GET /security/attackSimulation': Operation<'/security/attackSimulation', 'get'>;
  'PATCH /security/attackSimulation': Operation<'/security/attackSimulation', 'patch'>;
}

/**
 * `DELETE /security/attackSimulation`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/attackSimulation']['response']> {
  return {
    method: 'delete',
    path: '/security/attackSimulation',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/attackSimulation`
 *
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation']['response']> {
  return {
    method: 'get',
    path: '/security/attackSimulation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/attackSimulation']['response']> {
  return {
    method: 'patch',
    path: '/security/attackSimulation',
    paramDefs: [],
    params,
    body,
  };
}
