export * as authenticationMethodConfigurations from './authenticationMethodConfigurations';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /authenticationMethodsPolicy': Operation<'/authenticationMethodsPolicy', 'get'>;
  'PATCH /authenticationMethodsPolicy': Operation<'/authenticationMethodsPolicy', 'patch'>;
}

/**
 * `GET /authenticationMethodsPolicy`
 *
 */
export function get(
  params?: IEndpoints['GET /authenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /authenticationMethodsPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/authenticationMethodsPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /authenticationMethodsPolicy`
 *
 */
export function update(
  body: IEndpoints['PATCH /authenticationMethodsPolicy']['body'],
  params?: IEndpoints['PATCH /authenticationMethodsPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /authenticationMethodsPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/authenticationMethodsPolicy',
    paramDefs: [],
    params,
    body,
  };
}
