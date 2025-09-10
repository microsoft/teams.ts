import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}': Operation<
    '/employeeExperience/goals/exportJobs/{goalsExportJob-id}',
    'delete'
  >;
  'GET /employeeExperience/goals/exportJobs': Operation<
    '/employeeExperience/goals/exportJobs',
    'get'
  >;
  'GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}': Operation<
    '/employeeExperience/goals/exportJobs/{goalsExportJob-id}',
    'get'
  >;
  'PATCH /employeeExperience/goals/exportJobs/{goalsExportJob-id}': Operation<
    '/employeeExperience/goals/exportJobs/{goalsExportJob-id}',
    'patch'
  >;
  'POST /employeeExperience/goals/exportJobs': Operation<
    '/employeeExperience/goals/exportJobs',
    'post'
  >;
  'GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content': Operation<
    '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
    'get'
  >;
  'PUT /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content': Operation<
    '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
    'put'
  >;
  'DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content': Operation<
    '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/employeeExperience/goals/exportJobs/{goalsExportJob-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['goalsExportJob-id'],
    },
    params,
  };
}

/**
 * `GET /employeeExperience/goals/exportJobs`
 *
 * Get a list of goalsExportJob objects and their properties in a Viva Goals organization.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/goals/exportJobs']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience/goals/exportJobs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/goals/exportJobs',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}`
 *
 * Represents a collection of goals export jobs for Viva Goals.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/goals/exportJobs/{goalsExportJob-id}',
    paramDefs: {
      path: ['goalsExportJob-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /employeeExperience/goals/exportJobs/{goalsExportJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/goals/exportJobs/{goalsExportJob-id}']['body'],
  params?: IEndpoints['PATCH /employeeExperience/goals/exportJobs/{goalsExportJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /employeeExperience/goals/exportJobs/{goalsExportJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/goals/exportJobs/{goalsExportJob-id}',
    paramDefs: {
      path: ['goalsExportJob-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /employeeExperience/goals/exportJobs`
 *
 * Create a new goalsExportJob object in a Viva Goals organization.
 */
export function create(
  body: IEndpoints['POST /employeeExperience/goals/exportJobs']['body']
): EndpointRequest<IEndpoints['POST /employeeExperience/goals/exportJobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/employeeExperience/goals/exportJobs',
    body,
  };
}

export const content = {
  /**
   * `GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content`
   *
   * The content of the goalsExportJob.
   */
  get: function get(
    params?: IEndpoints['GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
      paramDefs: {
        path: ['goalsExportJob-id'],
      },
      params,
    };
  },
  /**
   * `PUT /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content`
   *
   * The content of the goalsExportJob.
   */
  set: function set(
    body: IEndpoints['PUT /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['body'],
    params?: IEndpoints['PUT /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
      paramDefs: {
        path: ['goalsExportJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content`
   *
   * The content of the goalsExportJob.
   */
  del: function del(
    params?: IEndpoints['DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['goalsExportJob-id'],
      },
      params,
    };
  },
};
