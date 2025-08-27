export * as cancel from './cancel';
export * as requests from './requests';
export * as responses from './responses';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/approval/approvalItems/{approvalItem-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}',
    'delete'
  >;
  'GET /solutions/approval/approvalItems': Operation<'/solutions/approval/approvalItems', 'get'>;
  'GET /solutions/approval/approvalItems/{approvalItem-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}',
    'get'
  >;
  'PATCH /solutions/approval/approvalItems/{approvalItem-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}',
    'patch'
  >;
  'POST /solutions/approval/approvalItems': Operation<'/solutions/approval/approvalItems', 'post'>;
}

/**
 * `DELETE /solutions/approval/approvalItems/{approvalItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/approval/approvalItems/{approvalItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approvalItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/approval/approvalItems`
 *
 * Get a list of the approvalItem objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /solutions/approval/approvalItems']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/approval/approvalItems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval/approvalItems',
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
 * `GET /solutions/approval/approvalItems/{approvalItem-id}`
 *
 * Read the properties and relationships of an approvalItem object.
 */
export function get(
  params?: IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval/approvalItems/{approvalItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approvalItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/approval/approvalItems/{approvalItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}']['body'],
  params?: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/approval/approvalItems/{approvalItem-id}',
    paramDefs: [{ name: 'approvalItem-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/approval/approvalItems`
 *
 * Create a new approvalItem object.
 */
export function create(
  body: IEndpoints['POST /solutions/approval/approvalItems']['body'],
  params?: IEndpoints['POST /solutions/approval/approvalItems']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/approval/approvalItems']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/approval/approvalItems',
    paramDefs: [],
    params,
    body,
  };
}
