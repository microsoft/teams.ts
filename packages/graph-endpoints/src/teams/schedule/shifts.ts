import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/teams/{team-id}/schedule/shifts/{shift-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/shifts': Operation<'/teams/{team-id}/schedule/shifts', 'get'>;
  'GET /teams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/teams/{team-id}/schedule/shifts/{shift-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/shifts/{shift-id}': Operation<
    '/teams/{team-id}/schedule/shifts/{shift-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/shifts': Operation<'/teams/{team-id}/schedule/shifts', 'post'>;
}

/**
 * `DELETE /teams/{team-id}/schedule/shifts/{shift-id}`
 *
 * Delete a shift from the schedule.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/shifts/{shift-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/schedule/shifts/{shift-id}']['response']> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/schedule/shifts/{shift-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'shift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/shifts`
 *
 * Get the list of shift instances in a schedule.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/shifts']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/shifts']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/shifts',
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
 * `GET /teams/{team-id}/schedule/shifts/{shift-id}`
 *
 * Retrieve the properties and relationships of a shift object by ID.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/shifts/{shift-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/shifts/{shift-id}']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/shifts/{shift-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'shift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/shifts/{shift-id}`
 *
 * Replace an existing shift. If the specified shift doesn&#x27;t exist, this method returns 404 Not found. The duration of a shift can&#x27;t be less than one minute or longer than 24 hours.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/shifts/{shift-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/shifts/{shift-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/schedule/shifts/{shift-id}']['response']> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/schedule/shifts/{shift-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'shift-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/shifts`
 *
 * Create a new shift instance in a schedule. The duration of a shift cannot be less than 1 minute or longer than 24 hours.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/shifts']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/shifts']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/shifts']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/schedule/shifts',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
