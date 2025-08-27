export * as request from './request';
export * as roleInfo from './roleInfo';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedApproval/{privilegedApproval-id}': Operation<
    '/privilegedApproval/{privilegedApproval-id}',
    'delete'
  >;
  'GET /privilegedApproval': Operation<'/privilegedApproval', 'get'>;
  'GET /privilegedApproval/{privilegedApproval-id}': Operation<
    '/privilegedApproval/{privilegedApproval-id}',
    'get'
  >;
  'PATCH /privilegedApproval/{privilegedApproval-id}': Operation<
    '/privilegedApproval/{privilegedApproval-id}',
    'patch'
  >;
  'POST /privilegedApproval': Operation<'/privilegedApproval', 'post'>;
}

/**
 * `DELETE /privilegedApproval/{privilegedApproval-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /privilegedApproval/{privilegedApproval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedApproval/{privilegedApproval-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedApproval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedApproval`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedApproval']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedApproval']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval',
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
 * `GET /privilegedApproval/{privilegedApproval-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /privilegedApproval/{privilegedApproval-id}']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedApproval/{privilegedApproval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedApproval/{privilegedApproval-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedApproval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedApproval/{privilegedApproval-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}']['body'],
  params?: IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /privilegedApproval/{privilegedApproval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedApproval/{privilegedApproval-id}',
    paramDefs: [{ name: 'privilegedApproval-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /privilegedApproval`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedApproval']['body'],
  params?: IEndpoints['POST /privilegedApproval']['parameters']
): EndpointRequest<IEndpoints['POST /privilegedApproval']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedApproval',
    paramDefs: [],
    params,
    body,
  };
}
