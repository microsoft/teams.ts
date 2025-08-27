export * as steps from './steps';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/approvals/{approval-id}': Operation<'/me/approvals/{approval-id}', 'delete'>;
  'GET /me/approvals': Operation<'/me/approvals', 'get'>;
  'GET /me/approvals/{approval-id}': Operation<'/me/approvals/{approval-id}', 'get'>;
  'PATCH /me/approvals/{approval-id}': Operation<'/me/approvals/{approval-id}', 'patch'>;
  'POST /me/approvals': Operation<'/me/approvals', 'post'>;
}

/**
 * `DELETE /me/approvals/{approval-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/approvals/{approval-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/approvals`
 *
 */
export function list(
  params?: IEndpoints['GET /me/approvals']['parameters']
): EndpointRequest<IEndpoints['GET /me/approvals']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/approvals',
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
 * `GET /me/approvals/{approval-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/approvals/{approval-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/approvals/{approval-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/approvals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /me/approvals/{approval-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/approvals/{approval-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/approvals/{approval-id}',
    paramDefs: [{ name: 'approval-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/approvals`
 *
 */
export function create(
  body: IEndpoints['POST /me/approvals']['body'],
  params?: IEndpoints['POST /me/approvals']['parameters']
): EndpointRequest<IEndpoints['POST /me/approvals']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/approvals',
    paramDefs: [],
    params,
    body,
  };
}
