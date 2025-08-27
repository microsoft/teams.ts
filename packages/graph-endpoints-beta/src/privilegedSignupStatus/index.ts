export * as completeSetup from './completeSetup';
export * as signUp from './signUp';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedSignupStatus/{privilegedSignupStatus-id}': Operation<
    '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    'delete'
  >;
  'GET /privilegedSignupStatus': Operation<'/privilegedSignupStatus', 'get'>;
  'GET /privilegedSignupStatus/{privilegedSignupStatus-id}': Operation<
    '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    'get'
  >;
  'PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}': Operation<
    '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    'patch'
  >;
  'POST /privilegedSignupStatus': Operation<'/privilegedSignupStatus', 'post'>;
}

/**
 * `DELETE /privilegedSignupStatus/{privilegedSignupStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedSignupStatus/{privilegedSignupStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedSignupStatus/{privilegedSignupStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedSignupStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedSignupStatus`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedSignupStatus']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedSignupStatus']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedSignupStatus',
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
 * `GET /privilegedSignupStatus/{privilegedSignupStatus-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedSignupStatus/{privilegedSignupStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedSignupStatus/{privilegedSignupStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedSignupStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}']['body'],
  params?: IEndpoints['PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    paramDefs: [{ name: 'privilegedSignupStatus-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /privilegedSignupStatus`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedSignupStatus']['body'],
  params?: IEndpoints['POST /privilegedSignupStatus']['parameters']
): EndpointRequest<IEndpoints['POST /privilegedSignupStatus']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedSignupStatus',
    paramDefs: [],
    params,
    body,
  };
}
