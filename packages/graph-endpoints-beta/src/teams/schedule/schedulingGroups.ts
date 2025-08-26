import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/schedulingGroups': Operation<
    '/teams/{team-id}/schedule/schedulingGroups',
    'get'
  >;
  'GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/schedulingGroups': Operation<
    '/teams/{team-id}/schedule/schedulingGroups',
    'post'
  >;
}

/**
  * `DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
  *
  * Mark a schedulingGroup as inactive by setting its isActive property.
This method does not remove the schedulingGroup from the schedule. Existing shift instances assigned to the scheduling group remain part of the group.
  */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'schedulingGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/schedulingGroups`
 *
 * Get the list of schedulingGroups in this schedule.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/schedulingGroups']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/schedulingGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/schedulingGroups',
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
 * `GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
 *
 * Retrieve the properties and relationships of a schedulingGroup by ID.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'schedulingGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}`
 *
 * Replace an existing schedulingGroup. If the specified schedulingGroup doesn&#x27;t exist, this method returns 404 Not found.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/schedule/schedulingGroups/{schedulingGroup-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'schedulingGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/schedulingGroups`
 *
 * Create a new schedulingGroup.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/schedulingGroups']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/schedulingGroups']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/schedulingGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/schedule/schedulingGroups',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
