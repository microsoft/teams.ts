import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/attackSimulation/simulations/{simulation-id}/loginPage': Operation<
    '/security/attackSimulation/simulations/{simulation-id}/loginPage',
    'get'
  >;
}

/**
 * `GET /security/attackSimulation/simulations/{simulation-id}/loginPage`
 *
 * The login page associated with a simulation during its creation.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/loginPage']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/loginPage']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/simulations/{simulation-id}/loginPage',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'simulation-id', in: 'path' },
    ],
    params,
  };
}
