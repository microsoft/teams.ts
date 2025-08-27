import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
    'delete'
  >;
  'GET /solutions/approval/approvalItems/{approvalItem-id}/responses': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/responses',
    'get'
  >;
  'GET /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
    'get'
  >;
  'PATCH /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
    'patch'
  >;
  'POST /solutions/approval/approvalItems/{approvalItem-id}/responses': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/responses',
    'post'
  >;
}

/**
 * `DELETE /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approvalItem-id', in: 'path' },
      { name: 'approvalItemResponse-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/approval/approvalItems/{approvalItem-id}/responses`
 *
 * Get a list of approvalItemResponse objects.
 */
export function list(
  params?: IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/responses']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/responses']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/responses',
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
 * `GET /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}`
 *
 * Read the properties and relationships of an approvalItemResponse object.
 */
export function get(
  params?: IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approvalItem-id', in: 'path' },
      { name: 'approvalItemResponse-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['body'],
  params?: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
    paramDefs: [
      { name: 'approvalItem-id', in: 'path' },
      { name: 'approvalItemResponse-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/approval/approvalItems/{approvalItem-id}/responses`
 *
 * Create a new approvalItemResponse object.
 */
export function create(
  body: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/responses']['body'],
  params?: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/responses']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/responses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/approval/approvalItems/{approvalItem-id}/responses',
    paramDefs: [{ name: 'approvalItem-id', in: 'path' }],
    params,
    body,
  };
}
