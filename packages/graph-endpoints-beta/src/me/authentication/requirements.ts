import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/authentication/requirements': Operation<'/me/authentication/requirements', 'get'>;
  'PATCH /me/authentication/requirements': Operation<'/me/authentication/requirements', 'patch'>;
}

/**
 * `GET /me/authentication/requirements`
 *
 * The settings and preferences for per-user Microsoft Entra multifactor authentication.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/requirements']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/requirements']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/requirements',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/authentication/requirements`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/requirements']['body'],
  params?: IEndpoints['PATCH /me/authentication/requirements']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/authentication/requirements']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/requirements',
    paramDefs: [],
    params,
    body,
  };
}
