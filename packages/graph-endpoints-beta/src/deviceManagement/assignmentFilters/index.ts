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
  'POST /deviceManagement/assignmentFilters/enable': Operation<
    '/deviceManagement/assignmentFilters/enable',
    'post'
  >;
  'POST /deviceManagement/assignmentFilters/validateFilter': Operation<
    '/deviceManagement/assignmentFilters/validateFilter',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceAndAppManagementAssignmentFilter-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['deviceAndAppManagementAssignmentFilter-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['deviceAndAppManagementAssignmentFilter-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/assignmentFilters`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/assignmentFilters']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/assignmentFilters']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/assignmentFilters',
    body,
  };
}

export const enable = {
  /**
   * `POST /deviceManagement/assignmentFilters/enable`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/assignmentFilters/enable']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/assignmentFilters/enable']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/assignmentFilters/enable',
      body,
    };
  },
};

export const validateFilter = {
  /**
   * `POST /deviceManagement/assignmentFilters/validateFilter`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/assignmentFilters/validateFilter']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/assignmentFilters/validateFilter']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/assignmentFilters/validateFilter',
      body,
    };
  },
};
