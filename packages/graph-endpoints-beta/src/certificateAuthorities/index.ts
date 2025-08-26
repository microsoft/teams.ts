export * as certificateBasedApplicationConfigurations from './certificateBasedApplicationConfigurations';
export * as mutualTlsOauthConfigurations from './mutualTlsOauthConfigurations';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /certificateAuthorities': Operation<'/certificateAuthorities', 'get'>;
  'PATCH /certificateAuthorities': Operation<'/certificateAuthorities', 'patch'>;
}

/**
 * `GET /certificateAuthorities`
 *
 */
export function list(
  params?: IEndpoints['GET /certificateAuthorities']['parameters']
): EndpointRequest<IEndpoints['GET /certificateAuthorities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/certificateAuthorities',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /certificateAuthorities`
 *
 */
export function update(
  body: IEndpoints['PATCH /certificateAuthorities']['body'],
  params?: IEndpoints['PATCH /certificateAuthorities']['parameters']
): EndpointRequest<IEndpoints['PATCH /certificateAuthorities']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/certificateAuthorities',
    paramDefs: [],
    params,
    body,
  };
}
