import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/openShifts/{openShift-id}': Operation<
    '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/openShifts': Operation<
    '/groups/{group-id}/team/schedule/openShifts',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/openShifts/{openShift-id}': Operation<
    '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}': Operation<
    '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/openShifts': Operation<
    '/groups/{group-id}/team/schedule/openShifts',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/openShifts/{openShift-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/openShifts`
 *
 * The set of open shifts in a scheduling group in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/openShifts']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/openShifts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/openShifts',
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
 * `GET /groups/{group-id}/team/schedule/openShifts/{openShift-id}`
 *
 * The set of open shifts in a scheduling group in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/openShifts`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/openShifts']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/openShifts']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/openShifts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/schedule/openShifts',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
