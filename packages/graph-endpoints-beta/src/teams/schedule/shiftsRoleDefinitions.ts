import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/shiftsRoleDefinitions': Operation<
    '/teams/{team-id}/schedule/shiftsRoleDefinitions',
    'get'
  >;
  'GET /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/shiftsRoleDefinitions': Operation<
    '/teams/{team-id}/schedule/shiftsRoleDefinitions',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'shiftsRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/shiftsRoleDefinitions`
 *
 * The definitions of the roles in the schedule.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/shiftsRoleDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/shiftsRoleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/shiftsRoleDefinitions',
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
 * `GET /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
 *
 * The definitions of the roles in the schedule.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'shiftsRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'shiftsRoleDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/shiftsRoleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/shiftsRoleDefinitions']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/shiftsRoleDefinitions']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/shiftsRoleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/schedule/shiftsRoleDefinitions',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
