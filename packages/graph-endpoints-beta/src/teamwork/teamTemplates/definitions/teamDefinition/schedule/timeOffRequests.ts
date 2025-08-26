import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}',
    'delete'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests',
    'get'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}',
    'get'
  >;
  'PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}',
    'patch'
  >;
  'POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests',
    'post'
  >;
}

/**
 * `DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests`
 *
 * The time off requests in the schedule.
 */
export function list(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 * The time off requests in the schedule.
 */
export function get(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests']['body'],
  params?: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests',
    paramDefs: [
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}
