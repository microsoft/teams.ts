export * as communities from './communities';
export * as engagementAsyncOperations from './engagementAsyncOperations';
export * as goals from './goals';
export * as learningCourseActivities from './learningCourseActivities';
export * as learningProviders from './learningProviders';
export * as roles from './roles';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /employeeExperience': Operation<'/employeeExperience', 'get'>;
  'PATCH /employeeExperience': Operation<'/employeeExperience', 'patch'>;
}

/**
 * `GET /employeeExperience`
 *
 */
export function get(
  params?: IEndpoints['GET /employeeExperience']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience',
    paramDefs: [{ name: '$select', in: 'query' }],
    params,
  };
}

/**
 * `PATCH /employeeExperience`
 *
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience']['body'],
  params?: IEndpoints['PATCH /employeeExperience']['parameters']
): EndpointRequest<IEndpoints['PATCH /employeeExperience']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience',
    paramDefs: [],
    params,
    body,
  };
}
