export * as appScope from './appScope';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleEligibilitySchedules': Operation<
    '/roleManagement/directory/roleEligibilitySchedules',
    'get'
  >;
  'GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleEligibilitySchedules': Operation<
    '/roleManagement/directory/roleEligibilitySchedules',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleEligibilitySchedule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleEligibilitySchedules`
 *
 * Get a list of the unifiedRoleEligibilitySchedule objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleEligibilitySchedules',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 * Read the properties and relationships of an unifiedRoleEligibilitySchedule object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleEligibilitySchedule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: [{ name: 'unifiedRoleEligibilitySchedule-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleEligibilitySchedules`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleEligibilitySchedules']['body'],
  params?: IEndpoints['POST /roleManagement/directory/roleEligibilitySchedules']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleEligibilitySchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/roleEligibilitySchedules',
    paramDefs: [],
    params,
    body,
  };
}
