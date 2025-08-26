import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /policies/deviceRegistrationPolicy': Operation<'/policies/deviceRegistrationPolicy', 'get'>;
}

/**
 * `GET /policies/deviceRegistrationPolicy`
 *
 */
export function get(
  params?: IEndpoints['GET /policies/deviceRegistrationPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/deviceRegistrationPolicy']['response']> {
  return {
    method: 'get',
    path: '/policies/deviceRegistrationPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
