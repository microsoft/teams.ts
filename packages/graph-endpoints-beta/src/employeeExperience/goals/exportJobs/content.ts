import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content': Operation<
    '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
    'delete'
  >;
  'GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content': Operation<
    '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
    'get'
  >;
  'PUT /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content': Operation<
    '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
    'put'
  >;
}

/**
 * `DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content`
 *
 * The content of the goalsExportJob.
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'goalsExportJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content`
 *
 * The content of the goalsExportJob.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
    paramDefs: [{ name: 'goalsExportJob-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content`
 *
 * The content of the goalsExportJob.
 */
export function set(
  body: IEndpoints['PUT /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['body'],
  params?: IEndpoints['PUT /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /employeeExperience/goals/exportJobs/{goalsExportJob-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/employeeExperience/goals/exportJobs/{goalsExportJob-id}/content',
    paramDefs: [{ name: 'goalsExportJob-id', in: 'path' }],
    params,
    body,
  };
}
