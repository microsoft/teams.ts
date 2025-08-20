import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/approval/operations/{approvalOperation-id}': Operation<
    '/solutions/approval/operations/{approvalOperation-id}',
    'delete'
  >;
  'GET /solutions/approval/operations': Operation<'/solutions/approval/operations', 'get'>;
  'GET /solutions/approval/operations/{approvalOperation-id}': Operation<
    '/solutions/approval/operations/{approvalOperation-id}',
    'get'
  >;
  'PATCH /solutions/approval/operations/{approvalOperation-id}': Operation<
    '/solutions/approval/operations/{approvalOperation-id}',
    'patch'
  >;
  'POST /solutions/approval/operations': Operation<'/solutions/approval/operations', 'post'>;
}

/**
 * `DELETE /solutions/approval/operations/{approvalOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/approval/operations/{approvalOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/approval/operations/{approvalOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/approval/operations/{approvalOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approvalOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/approval/operations`
 *
 * Read the properties and relationships of an approvalOperation object.
 */
export function list(
  params?: IEndpoints['GET /solutions/approval/operations']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/approval/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval/operations',
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
 * `GET /solutions/approval/operations/{approvalOperation-id}`
 *
 * Read the properties and relationships of an approvalOperation object.
 */
export function get(
  params?: IEndpoints['GET /solutions/approval/operations/{approvalOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/approval/operations/{approvalOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval/operations/{approvalOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approvalOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/approval/operations/{approvalOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/approval/operations/{approvalOperation-id}']['body'],
  params?: IEndpoints['PATCH /solutions/approval/operations/{approvalOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/approval/operations/{approvalOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/approval/operations/{approvalOperation-id}',
    paramDefs: [{ name: 'approvalOperation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/approval/operations`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/approval/operations']['body'],
  params?: IEndpoints['POST /solutions/approval/operations']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/approval/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/approval/operations',
    paramDefs: [],
    params,
    body,
  };
}
