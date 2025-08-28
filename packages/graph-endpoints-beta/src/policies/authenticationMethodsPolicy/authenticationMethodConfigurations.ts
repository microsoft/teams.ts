import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'delete'
  >;
  'GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations': Operation<
    '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations',
    'get'
  >;
  'GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'get'
  >;
  'PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'patch'
  >;
  'POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations': Operation<
    '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations',
    'post'
  >;
}

/**
 * `DELETE /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
 *
 * Delete an externalAuthenticationMethodConfiguration object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationMethodConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations`
 *
 * Read the properties and relationships of an externalAuthenticationMethodConfiguration object.
 */
export function list(
  params?: IEndpoints['GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations',
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
 * `GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
 *
 * Read the properties and relationships of an externalAuthenticationMethodConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationMethodConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
 *
 * Update the properties of an externalAuthenticationMethodConfiguration object.
 */
export function update(
  body: IEndpoints['PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    paramDefs: [{ name: 'authenticationMethodConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations']['body'],
  params?: IEndpoints['POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/authenticationMethodsPolicy/authenticationMethodConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
