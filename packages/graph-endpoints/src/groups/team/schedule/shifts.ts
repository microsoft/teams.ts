import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/shifts/{shift-id}': Operation<
    '/groups/{group-id}/team/schedule/shifts/{shift-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/shifts': Operation<
    '/groups/{group-id}/team/schedule/shifts',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/shifts/{shift-id}': Operation<
    '/groups/{group-id}/team/schedule/shifts/{shift-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}': Operation<
    '/groups/{group-id}/team/schedule/shifts/{shift-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/shifts': Operation<
    '/groups/{group-id}/team/schedule/shifts',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/shifts/{shift-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/shifts/{shift-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/shifts/{shift-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/shifts/{shift-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'shift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/shifts`
 *
 * The shifts in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/shifts']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/shifts']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/shifts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/shifts/{shift-id}`
 *
 * The shifts in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/shifts/{shift-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/shifts/{shift-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/shifts/{shift-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'shift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/shifts/{shift-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'shift-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/shifts`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/shifts']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/shifts']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/shifts']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/schedule/shifts',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
