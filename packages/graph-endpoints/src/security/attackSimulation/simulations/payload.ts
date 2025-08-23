import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/attackSimulation/simulations/{simulation-id}/payload': Operation<
    '/security/attackSimulation/simulations/{simulation-id}/payload',
    'get'
  >;
}

/**
 * `GET /security/attackSimulation/simulations/{simulation-id}/payload`
 *
 * The payload associated with a simulation during its creation.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/payload']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/payload']['response']
> {
  return {
    method: 'get',
    path: '/security/attackSimulation/simulations/{simulation-id}/payload',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'simulation-id', in: 'path' },
    ],
    params,
  };
}
