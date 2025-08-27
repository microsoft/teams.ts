import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedOperationEvents/{privilegedOperationEvent-id}': Operation<
    '/privilegedOperationEvents/{privilegedOperationEvent-id}',
    'delete'
  >;
  'GET /privilegedOperationEvents': Operation<'/privilegedOperationEvents', 'get'>;
  'GET /privilegedOperationEvents/{privilegedOperationEvent-id}': Operation<
    '/privilegedOperationEvents/{privilegedOperationEvent-id}',
    'get'
  >;
  'PATCH /privilegedOperationEvents/{privilegedOperationEvent-id}': Operation<
    '/privilegedOperationEvents/{privilegedOperationEvent-id}',
    'patch'
  >;
  'POST /privilegedOperationEvents': Operation<'/privilegedOperationEvents', 'post'>;
}

/**
 * `DELETE /privilegedOperationEvents/{privilegedOperationEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedOperationEvents/{privilegedOperationEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedOperationEvents/{privilegedOperationEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedOperationEvents/{privilegedOperationEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedOperationEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedOperationEvents`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedOperationEvents']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedOperationEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedOperationEvents',
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
 * `GET /privilegedOperationEvents/{privilegedOperationEvent-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedOperationEvents/{privilegedOperationEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedOperationEvents/{privilegedOperationEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedOperationEvents/{privilegedOperationEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedOperationEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedOperationEvents/{privilegedOperationEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedOperationEvents/{privilegedOperationEvent-id}']['body'],
  params?: IEndpoints['PATCH /privilegedOperationEvents/{privilegedOperationEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedOperationEvents/{privilegedOperationEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedOperationEvents/{privilegedOperationEvent-id}',
    paramDefs: [{ name: 'privilegedOperationEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /privilegedOperationEvents`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedOperationEvents']['body'],
  params?: IEndpoints['POST /privilegedOperationEvents']['parameters']
): EndpointRequest<IEndpoints['POST /privilegedOperationEvents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedOperationEvents',
    paramDefs: [],
    params,
    body,
  };
}
