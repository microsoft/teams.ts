import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions': Operation<
    '/groups/{group-id}/team/schedule/shiftsRoleDefinitions',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}': Operation<
    '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/shiftsRoleDefinitions': Operation<
    '/groups/{group-id}/team/schedule/shiftsRoleDefinitions',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'shiftsRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions`
 *
 * The definitions of the roles in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/shiftsRoleDefinitions',
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
 * `GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
 *
 * The definitions of the roles in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'shiftsRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/shiftsRoleDefinitions/{shiftsRoleDefinition-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'shiftsRoleDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/shiftsRoleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/shiftsRoleDefinitions']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/shiftsRoleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/shiftsRoleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/schedule/shiftsRoleDefinitions',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
