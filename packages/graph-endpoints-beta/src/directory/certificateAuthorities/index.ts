export * as certificateBasedApplicationConfigurations from './certificateBasedApplicationConfigurations';
export * as mutualTlsOauthConfigurations from './mutualTlsOauthConfigurations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/certificateAuthorities': Operation<
    '/directory/certificateAuthorities',
    'delete'
  >;
  'GET /directory/certificateAuthorities': Operation<'/directory/certificateAuthorities', 'get'>;
  'PATCH /directory/certificateAuthorities': Operation<
    '/directory/certificateAuthorities',
    'patch'
  >;
}

/**
 * `DELETE /directory/certificateAuthorities`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/certificateAuthorities']['parameters']
): EndpointRequest<IEndpoints['DELETE /directory/certificateAuthorities']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/certificateAuthorities',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /directory/certificateAuthorities`
 *
 * Container for certificate authorities-related configurations for applications in the tenant.
 */
export function list(
  params?: IEndpoints['GET /directory/certificateAuthorities']['parameters']
): EndpointRequest<IEndpoints['GET /directory/certificateAuthorities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/certificateAuthorities',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/certificateAuthorities`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/certificateAuthorities']['body'],
  params?: IEndpoints['PATCH /directory/certificateAuthorities']['parameters']
): EndpointRequest<IEndpoints['PATCH /directory/certificateAuthorities']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/certificateAuthorities',
    paramDefs: [],
    params,
    body,
  };
}
