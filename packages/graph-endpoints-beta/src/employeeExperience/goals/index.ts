export * as exportJobs from './exportJobs';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/goals': Operation<'/employeeExperience/goals', 'delete'>;
  'GET /employeeExperience/goals': Operation<'/employeeExperience/goals', 'get'>;
  'PATCH /employeeExperience/goals': Operation<'/employeeExperience/goals', 'patch'>;
}

/**
 * `DELETE /employeeExperience/goals`
 *
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/goals']['parameters']
): EndpointRequest<IEndpoints['DELETE /employeeExperience/goals']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/employeeExperience/goals',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /employeeExperience/goals`
 *
 * Represents a collection of goals in a Viva Goals organization.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/goals']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience/goals']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/goals',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /employeeExperience/goals`
 *
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/goals']['body'],
  params?: IEndpoints['PATCH /employeeExperience/goals']['parameters']
): EndpointRequest<IEndpoints['PATCH /employeeExperience/goals']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/goals',
    paramDefs: [],
    params,
    body,
  };
}
