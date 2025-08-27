import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/authentication/signInPreferences': Operation<
    '/users/{user-id}/authentication/signInPreferences',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/signInPreferences': Operation<
    '/users/{user-id}/authentication/signInPreferences',
    'patch'
  >;
}

/**
 * `GET /users/{user-id}/authentication/signInPreferences`
 *
 * Read the properties of a user&#x27;s authentication states. Use this API to retrieve the following information:
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/signInPreferences']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/signInPreferences']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/signInPreferences',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/signInPreferences`
 *
 * Update the properties of a user&#x27;s authentication method states. Use this API to update the following information:
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/signInPreferences']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/signInPreferences']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/signInPreferences']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/signInPreferences',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
