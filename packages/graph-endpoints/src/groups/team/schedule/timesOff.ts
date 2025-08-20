import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/timesOff/{timeOff-id}': Operation<
    '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/timesOff': Operation<
    '/groups/{group-id}/team/schedule/timesOff',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/timesOff/{timeOff-id}': Operation<
    '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}': Operation<
    '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/timesOff': Operation<
    '/groups/{group-id}/team/schedule/timesOff',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/timesOff/{timeOff-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/timesOff`
 *
 * The instances of times off in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/timesOff']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/timesOff']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/timesOff',
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
 * `GET /groups/{group-id}/team/schedule/timesOff/{timeOff-id}`
 *
 * The instances of times off in the schedule.
 */
export function get$1(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/timesOff`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/timesOff']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/timesOff']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/timesOff']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/schedule/timesOff',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
