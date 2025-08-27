import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/timesOff': Operation<'/teams/{team-id}/schedule/timesOff', 'get'>;
  'GET /teams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}': Operation<
    '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/timesOff': Operation<
    '/teams/{team-id}/schedule/timesOff',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}`
 *
 * Delete a timeOff instance from a schedule.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/timesOff`
 *
 * Get the list of timeOff instances in a schedule.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/timesOff']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/timesOff']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/timesOff',
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
 * `GET /teams/{team-id}/schedule/timesOff/{timeOff-id}`
 *
 * Retrieve the properties and relationships of a timeOff object by ID.
 */
export function get$1(
  params?: IEndpoints['GET /teams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/timesOff/{timeOff-id}']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}`
 *
 * Replace an existing timeOff object. If the specified timeOff object doesn&#x27;t exist, this method returns 404 Not found.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/timesOff/{timeOff-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/schedule/timesOff/{timeOff-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeOff-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/timesOff`
 *
 * Create a new timeOff instance in a schedule.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/timesOff']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/timesOff']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/timesOff']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/schedule/timesOff',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
