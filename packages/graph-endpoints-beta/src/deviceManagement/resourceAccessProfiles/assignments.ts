import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementResourceAccessProfileBase-id', in: 'path' },
      { name: 'deviceManagementResourceAccessProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments`
 *
 * The list of assignments for the device configuration profile.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementResourceAccessProfileBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}`
 *
 * The list of assignments for the device configuration profile.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementResourceAccessProfileBase-id', in: 'path' },
      { name: 'deviceManagementResourceAccessProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
    paramDefs: [
      { name: 'deviceManagementResourceAccessProfileBase-id', in: 'path' },
      { name: 'deviceManagementResourceAccessProfileAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments',
    paramDefs: [{ name: 'deviceManagementResourceAccessProfileBase-id', in: 'path' }],
    params,
    body,
  };
}
