import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'delete'
  >;
  'GET /authenticationMethodsPolicy/authenticationMethodConfigurations': Operation<
    '/authenticationMethodsPolicy/authenticationMethodConfigurations',
    'get'
  >;
  'GET /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'get'
  >;
  'PATCH /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'patch'
  >;
  'POST /authenticationMethodsPolicy/authenticationMethodConfigurations': Operation<
    '/authenticationMethodsPolicy/authenticationMethodConfigurations',
    'post'
  >;
}

/**
 * `DELETE /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationMethodConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /authenticationMethodsPolicy/authenticationMethodConfigurations`
 *
 * Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
 */
export function list(
  params?: IEndpoints['GET /authenticationMethodsPolicy/authenticationMethodConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /authenticationMethodsPolicy/authenticationMethodConfigurations']['response']
> {
  return {
    method: 'get',
    path: '/authenticationMethodsPolicy/authenticationMethodConfigurations',
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
 * `GET /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
 *
 * Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
 */
export function get(
  params?: IEndpoints['GET /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationMethodConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    paramDefs: [{ name: 'authenticationMethodConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /authenticationMethodsPolicy/authenticationMethodConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /authenticationMethodsPolicy/authenticationMethodConfigurations']['body'],
  params?: IEndpoints['POST /authenticationMethodsPolicy/authenticationMethodConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /authenticationMethodsPolicy/authenticationMethodConfigurations']['response']
> {
  return {
    method: 'post',
    path: '/authenticationMethodsPolicy/authenticationMethodConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
