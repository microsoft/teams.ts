export * as interactionHistory from './interactionHistory';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/users/{aiUser-id}': Operation<'/copilot/users/{aiUser-id}', 'delete'>;
  'GET /copilot/users': Operation<'/copilot/users', 'get'>;
  'GET /copilot/users/{aiUser-id}': Operation<'/copilot/users/{aiUser-id}', 'get'>;
  'PATCH /copilot/users/{aiUser-id}': Operation<'/copilot/users/{aiUser-id}', 'patch'>;
  'POST /copilot/users': Operation<'/copilot/users', 'post'>;
}

/**
 * `DELETE /copilot/users/{aiUser-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/users/{aiUser-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/users/{aiUser-id}']['response']> {
  return {
    method: 'delete',
    path: '/copilot/users/{aiUser-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'aiUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /copilot/users`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/users']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/users']['response']> {
  return {
    method: 'get',
    path: '/copilot/users',
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
 * `GET /copilot/users/{aiUser-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/users/{aiUser-id}']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/users/{aiUser-id}']['response']> {
  return {
    method: 'get',
    path: '/copilot/users/{aiUser-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'aiUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/users/{aiUser-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/users/{aiUser-id}']['body'],
  params?: IEndpoints['PATCH /copilot/users/{aiUser-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /copilot/users/{aiUser-id}']['response']> {
  return {
    method: 'patch',
    path: '/copilot/users/{aiUser-id}',
    paramDefs: [{ name: 'aiUser-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /copilot/users`
 *
 */
export function create(
  body: IEndpoints['POST /copilot/users']['body'],
  params?: IEndpoints['POST /copilot/users']['parameters']
): EndpointRequest<IEndpoints['POST /copilot/users']['response']> {
  return {
    method: 'post',
    path: '/copilot/users',
    paramDefs: [],
    params,
    body,
  };
}
