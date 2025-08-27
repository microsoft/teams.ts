import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/dayNotes': Operation<'/teams/{team-id}/schedule/dayNotes', 'get'>;
  'GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/dayNotes': Operation<
    '/teams/{team-id}/schedule/dayNotes',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'dayNote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/dayNotes`
 *
 * The day notes in the schedule.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/dayNotes']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/dayNotes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/dayNotes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}`
 *
 * The day notes in the schedule.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'dayNote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}`
 *
 * Update the properties of a day note.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/schedule/dayNotes/{dayNote-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'dayNote-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/dayNotes`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/dayNotes']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/dayNotes']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/dayNotes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/schedule/dayNotes',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
