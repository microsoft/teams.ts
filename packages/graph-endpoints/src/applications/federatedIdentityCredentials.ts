import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'delete'
  >;
  'GET /applications/{application-id}/federatedIdentityCredentials': Operation<
    '/applications/{application-id}/federatedIdentityCredentials',
    'get'
  >;
  'GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'get'
  >;
  'PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'patch'
  >;
  'POST /applications/{application-id}/federatedIdentityCredentials': Operation<
    '/applications/{application-id}/federatedIdentityCredentials',
    'post'
  >;
}

/**
 * `DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
 *
 * Delete a federatedIdentityCredential object from an application.
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
> {
  return {
    method: 'delete',
    path: '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'application-id', in: 'path' },
      { name: 'federatedIdentityCredential-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/federatedIdentityCredentials`
 *
 * Get a list of the federatedIdentityCredential objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/federatedIdentityCredentials']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/federatedIdentityCredentials']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/federatedIdentityCredentials',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
 *
 * Read the properties and relationships of a federatedIdentityCredential object.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
      { name: 'federatedIdentityCredential-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
 *
 * Create a new federatedIdentityCredential object for an application if it doesn&#x27;t exist, or update the properties of an existing federatedIdentityCredential object. By configuring a trust relationship between your Microsoft Entra application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
> {
  return {
    method: 'patch',
    path: '/applications/{application-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'federatedIdentityCredential-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /applications/{application-id}/federatedIdentityCredentials`
 *
 * Create a new federatedIdentityCredential object for an application. By configuring a trust relationship between your Microsoft Entra application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/federatedIdentityCredentials']['body'],
  params?: IEndpoints['POST /applications/{application-id}/federatedIdentityCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/federatedIdentityCredentials']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/federatedIdentityCredentials',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}
