import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/teams/{team-id}/schedule/openShifts/{openShift-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/openShifts': Operation<
    '/teams/{team-id}/schedule/openShifts',
    'get'
  >;
  'GET /teams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/teams/{team-id}/schedule/openShifts/{openShift-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}': Operation<
    '/teams/{team-id}/schedule/openShifts/{openShift-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/openShifts': Operation<
    '/teams/{team-id}/schedule/openShifts',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}`
 *
 * Delete an openShift object.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/openShifts`
 *
 * List openShift objects in a team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/openShifts']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/openShifts']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/openShifts',
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
 * `GET /teams/{team-id}/schedule/openShifts/{openShift-id}`
 *
 * Retrieve the properties and relationships of an openshift object.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}`
 *
 * Update the properties of an openShift object.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/openShifts/{openShift-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/schedule/openShifts/{openShift-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'openShift-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/openShifts`
 *
 * Create an instance of an openShift object.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/openShifts']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/openShifts']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/openShifts']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/schedule/openShifts',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
