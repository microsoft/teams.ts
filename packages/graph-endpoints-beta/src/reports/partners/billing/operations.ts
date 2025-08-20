import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing/operations/{operation-id}': Operation<
    '/reports/partners/billing/operations/{operation-id}',
    'delete'
  >;
  'GET /reports/partners/billing/operations': Operation<
    '/reports/partners/billing/operations',
    'get'
  >;
  'GET /reports/partners/billing/operations/{operation-id}': Operation<
    '/reports/partners/billing/operations/{operation-id}',
    'get'
  >;
  'PATCH /reports/partners/billing/operations/{operation-id}': Operation<
    '/reports/partners/billing/operations/{operation-id}',
    'patch'
  >;
  'POST /reports/partners/billing/operations': Operation<
    '/reports/partners/billing/operations',
    'post'
  >;
}

/**
 * `DELETE /reports/partners/billing/operations/{operation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing/operations/{operation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/partners/billing/operations/{operation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/partners/billing/operations/{operation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'operation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/partners/billing/operations`
 *
 * Read the properties and relationships of an operation object.
 */
export function list(
  params?: IEndpoints['GET /reports/partners/billing/operations']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/partners/billing/operations',
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
 * `GET /reports/partners/billing/operations/{operation-id}`
 *
 * Read the properties and relationships of an operation object.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing/operations/{operation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/partners/billing/operations/{operation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/partners/billing/operations/{operation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'operation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/partners/billing/operations/{operation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing/operations/{operation-id}']['body'],
  params?: IEndpoints['PATCH /reports/partners/billing/operations/{operation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/partners/billing/operations/{operation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/partners/billing/operations/{operation-id}',
    paramDefs: [{ name: 'operation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/partners/billing/operations`
 *
 */
export function create(
  body: IEndpoints['POST /reports/partners/billing/operations']['body'],
  params?: IEndpoints['POST /reports/partners/billing/operations']['parameters']
): EndpointRequest<IEndpoints['POST /reports/partners/billing/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/partners/billing/operations',
    paramDefs: [],
    params,
    body,
  };
}
