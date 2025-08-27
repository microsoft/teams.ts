export * as members from './members';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/roles/{engagementRole-id}': Operation<
    '/employeeExperience/roles/{engagementRole-id}',
    'delete'
  >;
  'GET /employeeExperience/roles': Operation<'/employeeExperience/roles', 'get'>;
  'GET /employeeExperience/roles/{engagementRole-id}': Operation<
    '/employeeExperience/roles/{engagementRole-id}',
    'get'
  >;
  'PATCH /employeeExperience/roles/{engagementRole-id}': Operation<
    '/employeeExperience/roles/{engagementRole-id}',
    'patch'
  >;
  'POST /employeeExperience/roles': Operation<'/employeeExperience/roles', 'post'>;
}

/**
 * `DELETE /employeeExperience/roles/{engagementRole-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/roles/{engagementRole-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /employeeExperience/roles/{engagementRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/employeeExperience/roles/{engagementRole-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'engagementRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/roles`
 *
 * Get a list of all the roles that can be assigned in Viva Engage.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/roles']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience/roles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/roles',
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
 * `GET /employeeExperience/roles/{engagementRole-id}`
 *
 * A collection of roles in Viva Engage.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/roles/{engagementRole-id}']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience/roles/{engagementRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/roles/{engagementRole-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'engagementRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /employeeExperience/roles/{engagementRole-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}']['body'],
  params?: IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /employeeExperience/roles/{engagementRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/roles/{engagementRole-id}',
    paramDefs: [{ name: 'engagementRole-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /employeeExperience/roles`
 *
 */
export function create(
  body: IEndpoints['POST /employeeExperience/roles']['body'],
  params?: IEndpoints['POST /employeeExperience/roles']['parameters']
): EndpointRequest<IEndpoints['POST /employeeExperience/roles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/employeeExperience/roles',
    paramDefs: [],
    params,
    body,
  };
}
