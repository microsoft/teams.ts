import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/emailMethods': Operation<'/me/authentication/emailMethods', 'get'>;
  'GET /me/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'get'
  >;
  'PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'patch'
  >;
  'POST /me/authentication/emailMethods': Operation<'/me/authentication/emailMethods', 'post'>;
}

/**
 * `DELETE /me/authentication/emailMethods/{emailAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'emailAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/emailMethods`
 *
 * Retrieve a list of a user&#x27;s email authentication method objects and their properties. This call only returns a single object referenced by ID 3ddfcfc8-9383-446f-83cc-3ab9be4be18f as only one email method can be set on users.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/emailMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/emailMethods']['response']> {
  return {
    method: 'get',
    path: '/me/authentication/emailMethods',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/emailMethods/{emailAuthenticationMethod-id}`
 *
 * Retrieve a user&#x27;s single email authentication method object.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'emailAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
    paramDefs: [{ name: 'emailAuthenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/authentication/emailMethods`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/emailMethods']['body'],
  params?: IEndpoints['POST /me/authentication/emailMethods']['parameters']
): EndpointRequest<IEndpoints['POST /me/authentication/emailMethods']['response']> {
  return {
    method: 'post',
    path: '/me/authentication/emailMethods',
    paramDefs: [],
    params,
    body,
  };
}
