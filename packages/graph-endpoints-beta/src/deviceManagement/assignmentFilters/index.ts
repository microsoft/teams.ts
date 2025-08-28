export * as enable from './enable';
export * as validateFilter from './validateFilter';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}': Operation<
    '/deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}',
    'delete'
  >;
  'GET /deviceManagement/assignmentFilters': Operation<
    '/deviceManagement/assignmentFilters',
    'get'
  >;
  'GET /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}': Operation<
    '/deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}',
    'get'
  >;
  'PATCH /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}': Operation<
    '/deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}',
    'patch'
  >;
  'POST /deviceManagement/assignmentFilters': Operation<
    '/deviceManagement/assignmentFilters',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceAndAppManagementAssignmentFilter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/assignmentFilters`
 *
 * The list of assignment filters
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/assignmentFilters']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/assignmentFilters']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/assignmentFilters',
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
 * `GET /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}`
 *
 * The list of assignment filters
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceAndAppManagementAssignmentFilter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/assignmentFilters/{deviceAndAppManagementAssignmentFilter-id}',
    paramDefs: [{ name: 'deviceAndAppManagementAssignmentFilter-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/assignmentFilters`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/assignmentFilters']['body'],
  params?: IEndpoints['POST /deviceManagement/assignmentFilters']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/assignmentFilters']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/assignmentFilters',
    paramDefs: [],
    params,
    body,
  };
}
