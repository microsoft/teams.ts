import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /scopedRoleMemberships/{scopedRoleMembership-id}': Operation<
    '/scopedRoleMemberships/{scopedRoleMembership-id}',
    'delete'
  >;
  'GET /scopedRoleMemberships': Operation<'/scopedRoleMemberships', 'get'>;
  'GET /scopedRoleMemberships/{scopedRoleMembership-id}': Operation<
    '/scopedRoleMemberships/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /scopedRoleMemberships/{scopedRoleMembership-id}': Operation<
    '/scopedRoleMemberships/{scopedRoleMembership-id}',
    'patch'
  >;
  'POST /scopedRoleMemberships': Operation<'/scopedRoleMemberships', 'post'>;
}

/**
 * `DELETE /scopedRoleMemberships/{scopedRoleMembership-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /scopedRoleMemberships/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /scopedRoleMemberships/{scopedRoleMembership-id}']['response']
> {
  return {
    method: 'delete',
    path: '/scopedRoleMemberships/{scopedRoleMembership-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /scopedRoleMemberships`
 *
 */
export function list(
  params?: IEndpoints['GET /scopedRoleMemberships']['parameters']
): EndpointRequest<IEndpoints['GET /scopedRoleMemberships']['response']> {
  return {
    method: 'get',
    path: '/scopedRoleMemberships',
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
 * `GET /scopedRoleMemberships/{scopedRoleMembership-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /scopedRoleMemberships/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<IEndpoints['GET /scopedRoleMemberships/{scopedRoleMembership-id}']['response']> {
  return {
    method: 'get',
    path: '/scopedRoleMemberships/{scopedRoleMembership-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /scopedRoleMemberships/{scopedRoleMembership-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /scopedRoleMemberships/{scopedRoleMembership-id}']['body'],
  params?: IEndpoints['PATCH /scopedRoleMemberships/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /scopedRoleMemberships/{scopedRoleMembership-id}']['response']
> {
  return {
    method: 'patch',
    path: '/scopedRoleMemberships/{scopedRoleMembership-id}',
    paramDefs: [{ name: 'scopedRoleMembership-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /scopedRoleMemberships`
 *
 */
export function create(
  body: IEndpoints['POST /scopedRoleMemberships']['body'],
  params?: IEndpoints['POST /scopedRoleMemberships']['parameters']
): EndpointRequest<IEndpoints['POST /scopedRoleMemberships']['response']> {
  return {
    method: 'post',
    path: '/scopedRoleMemberships',
    paramDefs: [],
    params,
    body,
  };
}
