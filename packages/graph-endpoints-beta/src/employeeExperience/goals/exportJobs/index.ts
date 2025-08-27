export * as content from './content';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'goalsExportJob-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'goalsExportJob-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'goalsExportJob-id', in: 'path' }],
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
  body: IEndpoints['POST /employeeExperience/goals/exportJobs']['body'],
  params?: IEndpoints['POST /employeeExperience/goals/exportJobs']['parameters']
): EndpointRequest<IEndpoints['POST /employeeExperience/goals/exportJobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/employeeExperience/goals/exportJobs',
    paramDefs: [],
    params,
    body,
  };
}
