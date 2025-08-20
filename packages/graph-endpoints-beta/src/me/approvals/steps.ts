import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/approvals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/me/approvals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
  'GET /me/approvals/{approval-id}/steps': Operation<'/me/approvals/{approval-id}/steps', 'get'>;
  'GET /me/approvals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/me/approvals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/me/approvals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'POST /me/approvals/{approval-id}/steps': Operation<'/me/approvals/{approval-id}/steps', 'post'>;
}

/**
 * `DELETE /me/approvals/{approval-id}/steps/{approvalStep-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/approvals/{approval-id}/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/approvals/{approval-id}/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/approvals/{approval-id}/steps/{approvalStep-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approval-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/approvals/{approval-id}/steps`
 *
 * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
 */
export function list(
  params?: IEndpoints['GET /me/approvals/{approval-id}/steps']['parameters']
): EndpointRequest<IEndpoints['GET /me/approvals/{approval-id}/steps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/approvals/{approval-id}/steps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/approvals/{approval-id}/steps/{approvalStep-id}`
 *
 * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
 */
export function get(
  params?: IEndpoints['GET /me/approvals/{approval-id}/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/approvals/{approval-id}/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/approvals/{approval-id}/steps/{approvalStep-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approval-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}']['body'],
  params?: IEndpoints['PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/approvals/{approval-id}/steps/{approvalStep-id}',
    paramDefs: [
      { name: 'approval-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/approvals/{approval-id}/steps`
 *
 */
export function create(
  body: IEndpoints['POST /me/approvals/{approval-id}/steps']['body'],
  params?: IEndpoints['POST /me/approvals/{approval-id}/steps']['parameters']
): EndpointRequest<IEndpoints['POST /me/approvals/{approval-id}/steps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/approvals/{approval-id}/steps',
    paramDefs: [{ name: 'approval-id', in: 'path' }],
    params,
    body,
  };
}
