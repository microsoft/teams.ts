import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/schedulingGroups': Operation<
    '/groups/{group-id}/team/schedule/schedulingGroups',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}': Operation<
    '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/schedulingGroups': Operation<
    '/groups/{group-id}/team/schedule/schedulingGroups',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'schedulingGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/schedulingGroups`
 *
 * The logical grouping of users in the schedule (usually by role).
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/schedulingGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/schedulingGroups']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/schedulingGroups',
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
 * `GET /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}`
 *
 * The logical grouping of users in the schedule (usually by role).
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'schedulingGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'schedulingGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/schedulingGroups`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/schedulingGroups']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/schedulingGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/schedulingGroups']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/schedule/schedulingGroups',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
