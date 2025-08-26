export * as acceptances from './acceptances';
export * as file from './file';
export * as files from './files';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /agreements/{agreement-id}': Operation<'/agreements/{agreement-id}', 'delete'>;
  'GET /agreements': Operation<'/agreements', 'get'>;
  'GET /agreements/{agreement-id}': Operation<'/agreements/{agreement-id}', 'get'>;
  'PATCH /agreements/{agreement-id}': Operation<'/agreements/{agreement-id}', 'patch'>;
  'POST /agreements': Operation<'/agreements', 'post'>;
}

/**
 * `DELETE /agreements/{agreement-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /agreements/{agreement-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /agreements/{agreement-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/agreements/{agreement-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'agreement-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /agreements`
 *
 */
export function list(
  params?: IEndpoints['GET /agreements']['parameters']
): EndpointRequest<IEndpoints['GET /agreements']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements',
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
 * `GET /agreements/{agreement-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /agreements/{agreement-id}']['parameters']
): EndpointRequest<IEndpoints['GET /agreements/{agreement-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements/{agreement-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: 'agreement-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /agreements/{agreement-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /agreements/{agreement-id}']['body'],
  params?: IEndpoints['PATCH /agreements/{agreement-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /agreements/{agreement-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/agreements/{agreement-id}',
    paramDefs: [{ name: 'agreement-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /agreements`
 *
 */
export function create(
  body: IEndpoints['POST /agreements']['body'],
  params?: IEndpoints['POST /agreements']['parameters']
): EndpointRequest<IEndpoints['POST /agreements']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/agreements',
    paramDefs: [],
    params,
    body,
  };
}
