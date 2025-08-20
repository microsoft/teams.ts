import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /policies/deviceRegistrationPolicy': Operation<'/policies/deviceRegistrationPolicy', 'get'>;
}

/**
 * `GET /policies/deviceRegistrationPolicy`
 *
 * Read the properties and relationships of a deviceRegistrationPolicy object. Represents deviceRegistrationPolicy quota restrictions, additional authentication, and authorization policies to register device identities to your organization.
 */
export function get(
  params?: IEndpoints['GET /policies/deviceRegistrationPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/deviceRegistrationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/deviceRegistrationPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
