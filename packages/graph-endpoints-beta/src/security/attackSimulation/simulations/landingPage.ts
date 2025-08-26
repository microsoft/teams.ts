import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/attackSimulation/simulations/{simulation-id}/landingPage': Operation<
    '/security/attackSimulation/simulations/{simulation-id}/landingPage',
    'get'
  >;
}

/**
 * `GET /security/attackSimulation/simulations/{simulation-id}/landingPage`
 *
 * The landing page associated with a simulation during its creation.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/landingPage']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/simulations/{simulation-id}/landingPage']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/simulations/{simulation-id}/landingPage',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'simulation-id', in: 'path' },
    ],
    params,
  };
}
