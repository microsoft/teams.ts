import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}': Operation<
    '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/dayNotes': Operation<
    '/groups/{group-id}/team/schedule/dayNotes',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}': Operation<
    '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}': Operation<
    '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/dayNotes': Operation<
    '/groups/{group-id}/team/schedule/dayNotes',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'dayNote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/dayNotes`
 *
 * The day notes in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/dayNotes']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/dayNotes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/dayNotes',
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
 * `GET /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}`
 *
 * The day notes in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'dayNote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/dayNotes/{dayNote-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/dayNotes/{dayNote-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'dayNote-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/dayNotes`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/dayNotes']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/dayNotes']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/dayNotes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/schedule/dayNotes',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
