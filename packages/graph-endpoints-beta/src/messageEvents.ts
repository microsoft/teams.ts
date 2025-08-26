import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /messageEvents/{messageEvent-id}': Operation<
    '/messageEvents/{messageEvent-id}',
    'delete'
  >;
  'GET /messageEvents': Operation<'/messageEvents', 'get'>;
  'GET /messageEvents/{messageEvent-id}': Operation<'/messageEvents/{messageEvent-id}', 'get'>;
  'PATCH /messageEvents/{messageEvent-id}': Operation<'/messageEvents/{messageEvent-id}', 'patch'>;
  'POST /messageEvents': Operation<'/messageEvents', 'post'>;
}

/**
 * `DELETE /messageEvents/{messageEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /messageEvents/{messageEvent-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /messageEvents/{messageEvent-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/messageEvents/{messageEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'messageEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /messageEvents`
 *
 */
export function list(
  params?: IEndpoints['GET /messageEvents']['parameters']
): EndpointRequest<IEndpoints['GET /messageEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageEvents',
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
 * `GET /messageEvents/{messageEvent-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /messageEvents/{messageEvent-id}']['parameters']
): EndpointRequest<IEndpoints['GET /messageEvents/{messageEvent-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageEvents/{messageEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'messageEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /messageEvents/{messageEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /messageEvents/{messageEvent-id}']['body'],
  params?: IEndpoints['PATCH /messageEvents/{messageEvent-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /messageEvents/{messageEvent-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/messageEvents/{messageEvent-id}',
    paramDefs: [{ name: 'messageEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /messageEvents`
 *
 */
export function create(
  body: IEndpoints['POST /messageEvents']['body'],
  params?: IEndpoints['POST /messageEvents']['parameters']
): EndpointRequest<IEndpoints['POST /messageEvents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/messageEvents',
    paramDefs: [],
    params,
    body,
  };
}
