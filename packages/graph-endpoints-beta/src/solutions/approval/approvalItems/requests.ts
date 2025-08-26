import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
    'delete'
  >;
  'GET /solutions/approval/approvalItems/{approvalItem-id}/requests': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/requests',
    'get'
  >;
  'GET /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
    'get'
  >;
  'PATCH /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
    'patch'
  >;
  'POST /solutions/approval/approvalItems/{approvalItem-id}/requests': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/requests',
    'post'
  >;
}

/**
 * `DELETE /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approvalItem-id', in: 'path' },
      { name: 'approvalItemRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/approval/approvalItems/{approvalItem-id}/requests`
 *
 * Get a list of approvalItemRequest objects.
 */
export function list(
  params?: IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/requests']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/requests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/requests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approvalItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}`
 *
 * Read the properties and relationships of an approvalItemRequest object.
 */
export function get(
  params?: IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approvalItem-id', in: 'path' },
      { name: 'approvalItemRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['body'],
  params?: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
    paramDefs: [
      { name: 'approvalItem-id', in: 'path' },
      { name: 'approvalItemRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/approval/approvalItems/{approvalItem-id}/requests`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/requests']['body'],
  params?: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/requests']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/requests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/requests',
    paramDefs: [{ name: 'approvalItem-id', in: 'path' }],
    params,
    body,
  };
}
