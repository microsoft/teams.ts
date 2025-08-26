import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}': Operation<
    '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    'delete'
  >;
  'GET /certificateBasedAuthConfiguration': Operation<'/certificateBasedAuthConfiguration', 'get'>;
  'GET /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}': Operation<
    '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    'get'
  >;
  'PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}': Operation<
    '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    'patch'
  >;
  'POST /certificateBasedAuthConfiguration': Operation<
    '/certificateBasedAuthConfiguration',
    'post'
  >;
}

/**
 * `DELETE /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'certificateBasedAuthConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /certificateBasedAuthConfiguration`
 *
 */
export function get(
  params?: IEndpoints['GET /certificateBasedAuthConfiguration']['parameters']
): EndpointRequest<IEndpoints['GET /certificateBasedAuthConfiguration']['response']> {
  return {
    method: 'get',
    path: '/certificateBasedAuthConfiguration',
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
 * `GET /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'certificateBasedAuthConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    paramDefs: [{ name: 'certificateBasedAuthConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /certificateBasedAuthConfiguration`
 *
 */
export function create(
  body: IEndpoints['POST /certificateBasedAuthConfiguration']['body'],
  params?: IEndpoints['POST /certificateBasedAuthConfiguration']['parameters']
): EndpointRequest<IEndpoints['POST /certificateBasedAuthConfiguration']['response']> {
  return {
    method: 'post',
    path: '/certificateBasedAuthConfiguration',
    paramDefs: [],
    params,
    body,
  };
}
