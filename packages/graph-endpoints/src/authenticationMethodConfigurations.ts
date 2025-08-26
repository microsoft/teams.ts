import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'delete'
  >;
  'GET /authenticationMethodConfigurations': Operation<
    '/authenticationMethodConfigurations',
    'get'
  >;
  'GET /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'get'
  >;
  'PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}': Operation<
    '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    'patch'
  >;
  'POST /authenticationMethodConfigurations': Operation<
    '/authenticationMethodConfigurations',
    'post'
  >;
}

/**
 * `DELETE /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationMethodConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /authenticationMethodConfigurations`
 *
 */
export function list(
  params?: IEndpoints['GET /authenticationMethodConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /authenticationMethodConfigurations']['response']> {
  return {
    method: 'get',
    path: '/authenticationMethodConfigurations',
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
 * `GET /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationMethodConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}',
    paramDefs: [{ name: 'authenticationMethodConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /authenticationMethodConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /authenticationMethodConfigurations']['body'],
  params?: IEndpoints['POST /authenticationMethodConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /authenticationMethodConfigurations']['response']> {
  return {
    method: 'post',
    path: '/authenticationMethodConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
